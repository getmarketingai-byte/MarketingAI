/**
 * POST /api/outreach/dms
 * Launches Phantombuster LinkedIn Message Sender phantom.
 *
 * Body: { prospects: Array<{ linkedinUrl, firstName, company, title, industry }> }
 * These should be prospects whose connection request was already accepted.
 */
import { NextRequest, NextResponse } from 'next/server'
import { getConfig } from '@/lib/linkedin-config'
import { launchPhantom, buildDmArgs } from '@/lib/phantombuster'
import { getDmMessage } from '@/lib/outreach-templates'

export async function POST(req: NextRequest) {
  try {
    const config = getConfig()
    const body = await req.json().catch(() => ({}))

    const prospects: Array<{
      linkedinUrl: string
      firstName: string
      company: string
      title?: string
      industry?: string
    }> = body.prospects || []

    if (prospects.length === 0) {
      return NextResponse.json({
        ok: true,
        launched: false,
        reason: 'No prospects provided. Pass accepted connections in body.prospects array.',
      })
    }

    const withMessages = prospects.slice(0, config.dailyDmLimit).map((p) => ({
      linkedinUrl: p.linkedinUrl,
      message: getDmMessage({
        firstName: p.firstName,
        company: p.company,
        title: p.title,
        industry: p.industry,
      }),
    }))

    const args = buildDmArgs(
      config.linkedinSessionCookie,
      withMessages,
      config.dailyDmLimit
    )

    const result = await launchPhantom(
      config.phantombusterApiKey,
      config.dmPhantomId,
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
