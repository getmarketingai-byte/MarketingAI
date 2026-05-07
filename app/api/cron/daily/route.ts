/**
 * GET /api/cron/daily
 * Runs the daily outreach batch. Triggered by Vercel Cron at 9am AEST (23:00 UTC).
 *
 * Orchestration:
 *   1. Fetch new prospects from Apollo (fills the connection queue)
 *   2. Check Phantombuster for accepted connections
 *   3. Launch connection requests for new prospects
 *   4. Launch DMs for accepted connections that haven't received a DM yet
 *
 * Protected by CRON_SECRET header (Vercel injects Authorization: Bearer <secret>).
 */
import { NextRequest, NextResponse } from 'next/server'
import { getConfig } from '@/lib/linkedin-config'
import { searchProspects, Prospect } from '@/lib/linkedin-apollo'
import {
  launchPhantom,
  getPhantomOutput,
  buildConnectionArgs,
  buildDmArgs,
} from '@/lib/phantombuster'
import { getConnectionMessage, getDmMessage } from '@/lib/outreach-templates'

export async function GET(req: NextRequest) {
  // Verify cron secret
  const authHeader = req.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const log: string[] = []
  const ts = () => new Date().toISOString()

  try {
    const config = getConfig()
    log.push(`[${ts()}] Daily batch starting`)

    // Step 1: Fetch fresh prospects from Apollo (falls back to PROSPECT_LIST_JSON env var)
    log.push(`[${ts()}] Fetching prospects from Apollo...`)
    let prospects: Prospect[] = []
    try {
      prospects = await searchProspects(config.apolloApiKey, 1, config.dailyConnectionLimit)
      log.push(`[${ts()}] Found ${prospects.length} prospects from Apollo`)
    } catch (apolloErr: any) {
      log.push(`[${ts()}] Warning: Apollo search failed — ${apolloErr.message}`)
      // Fallback: read from PROSPECT_LIST_JSON env var (founder-injected JSON array)
      const prospectJson = process.env.PROSPECT_LIST_JSON
      if (prospectJson) {
        try {
          prospects = JSON.parse(prospectJson)
          log.push(`[${ts()}] Loaded ${prospects.length} prospects from PROSPECT_LIST_JSON fallback`)
        } catch {
          log.push(`[${ts()}] Warning: PROSPECT_LIST_JSON is set but failed to parse — skipping prospect load`)
        }
      } else {
        log.push(`[${ts()}] No PROSPECT_LIST_JSON fallback set — proceeding with 0 new prospects (DMs to accepted connections still run)`)
      }
    }

    // Step 2: Get accepted connections from Phantombuster output
    log.push(`[${ts()}] Checking accepted connections...`)
    let acceptedProfiles: Set<string> = new Set()
    let dmSentProfiles: Set<string> = new Set()

    try {
      const connOutput = await getPhantomOutput(
        config.phantombusterApiKey,
        config.connectionPhantomId
      )
      const outputItems: any[] = connOutput.output || []
      outputItems.forEach((item: any) => {
        const url = item.linkedinProfile || item.profileUrl || ''
        if (
          item.connectionStatus === 'connected' ||
          item.error === 'already connected'
        ) {
          acceptedProfiles.add(url.replace(/\/$/, ''))
        }
      })
      log.push(`[${ts()}] ${acceptedProfiles.size} total accepted connections`)
    } catch (e: any) {
      log.push(`[${ts()}] Warning: could not fetch connection output: ${e.message}`)
    }

    try {
      const dmOutput = await getPhantomOutput(
        config.phantombusterApiKey,
        config.dmPhantomId
      )
      const dmItems: any[] = dmOutput.output || []
      dmItems.forEach((item: any) => {
        const url = item.linkedinProfile || item.profileUrl || ''
        dmSentProfiles.add(url.replace(/\/$/, ''))
      })
      log.push(`[${ts()}] ${dmSentProfiles.size} DMs already sent`)
    } catch (e: any) {
      log.push(`[${ts()}] Warning: could not fetch DM output: ${e.message}`)
    }

    // Step 3: Send connection requests to new prospects
    if (prospects.length > 0) {
      const connectionBatch = prospects.map((p) => ({
        linkedinUrl: p.linkedinUrl,
        message: getConnectionMessage({
          firstName: p.firstName,
          company: p.company,
          title: p.title,
          industry: p.industry,
        }),
      }))

      log.push(`[${ts()}] Launching connection requests for ${connectionBatch.length} prospects...`)
      const connArgs = buildConnectionArgs(
        config.linkedinSessionCookie,
        connectionBatch,
        config.dailyConnectionLimit
      )
      const connResult = await launchPhantom(
        config.phantombusterApiKey,
        config.connectionPhantomId,
        connArgs
      )
      log.push(`[${ts()}] Connection phantom launched: ${JSON.stringify(connResult)}`)
    } else {
      log.push(`[${ts()}] No prospects to send connections to`)
    }

    // Step 4: Send DMs to accepted connections that haven't been DM'd yet
    const dmTargets = Array.from(acceptedProfiles)
      .filter((url) => !dmSentProfiles.has(url))
      .slice(0, config.dailyDmLimit)

    if (dmTargets.length > 0) {
      // We don't have full prospect data for these, so use minimal personalisation
      const dmBatch = dmTargets.map((url) => ({
        linkedinUrl: url,
        message: getDmMessage({
          firstName: 'there',
          company: 'your business',
        }),
      }))

      log.push(`[${ts()}] Launching DMs for ${dmBatch.length} accepted connections...`)
      const dmArgs = buildDmArgs(
        config.linkedinSessionCookie,
        dmBatch,
        config.dailyDmLimit
      )
      const dmResult = await launchPhantom(
        config.phantombusterApiKey,
        config.dmPhantomId,
        dmArgs
      )
      log.push(`[${ts()}] DM phantom launched: ${JSON.stringify(dmResult)}`)
    } else {
      log.push(`[${ts()}] No accepted connections waiting for DMs`)
    }

    log.push(`[${ts()}] Daily batch complete`)

    return NextResponse.json({
      ok: true,
      summary: {
        prospectsFound: prospects.length,
        connectionsQueued: Math.min(prospects.length, config.dailyConnectionLimit),
        acceptedConnections: acceptedProfiles.size,
        dmsQueued: dmTargets.length,
        note: prospects.length === 0 ? 'No prospects loaded — set PROSPECT_LIST_JSON env var or upgrade Apollo plan to enable auto-sourcing' : undefined,
      },
      log,
    })
  } catch (err: any) {
    log.push(`[${ts()}] ERROR: ${err.message}`)
    return NextResponse.json(
      { ok: false, error: err.message, log },
      { status: err.message.includes('Missing required') ? 503 : 500 }
    )
  }
}
