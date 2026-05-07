/**
 * POST /api/outreach/connections
 * Launches Phantombuster LinkedIn Connection Request phantom.
 *
 * Body: { prospects: Array<{ linkedinUrl, firstName, company, title, industry }> }
 * If no body provided, fetches a fresh batch from Apollo automatically.
 */
import { NextRequest, NextResponse } from 'next/server'
import { getConfig } from '@/lib/linkedin-config'
import { searchProspects } from '@/lib/linkedin-apollo'
import { launchPhantom, buildConnectionArgs } from '@/lib/phantombuster'
import { getConnectionMessage } from '@/lib/outreach-templates'

export async function POST(req: NextRequest) {
  try {
    const config = getConfig()

    let prospects: Array<{
      linkedinUrl: string
      firstName: string
      company: string
      title?: string
      industry?: string
    }>

    // Use provided prospects or auto-fetch from Apollo
    const body = await req.json().catch(() => ({}))
    if (body.prospects && Array.isArray(body.prospects)) {
      prospects = body.prospects
    } else {
      const apolloProspects = await searchProspects(config.apolloApiKey, 1, config.dailyConnectionLimit)
      prospects = apolloProspects.map((p) => ({
        linkedinUrl: p.linkedinUrl,
        firstName: p.firstName,
        company: p.company,
        title: p.title,
        industry: p.industry,
      }))
    }

    if (prospects.length === 0) {
      return NextResponse.json({ ok: true, launched: false, reason: 'No prospects available' })
    }

    // Personalize messages
    const withMessages = prospects.slice(0, config.dailyConnectionLimit).map((p) => ({
      linkedinUrl: p.linkedinUrl,
      message: getConnectionMessage({
        firstName: p.firstName,
        company: p.company,
        title: p.title,
        industry: p.industry,
      }),
    }))

    const args = buildConnectionArgs(
      config.linkedinSessionCookie,
      withMessages,
      config.dailyConnectionLimit
    )

    const result = await launchPhantom(
      config.phantombusterApiKey,
      config.connectionPhantomId,
      args
    )

    return NextResponse.json({
      ok: true,
      launched: true,
      count: withMessages.length,
      phantomResult: result,
    })
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: err.message.includes('Missing required') ? 503 : 500 }
    )
  }
}
