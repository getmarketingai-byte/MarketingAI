/**
 * GET /api/prospects
 * Returns a batch of Australian SMB prospects from Apollo.io.
 * Query params: page (default 1), perPage (default 25, max 50)
 */
import { NextRequest, NextResponse } from 'next/server'
import { getConfig } from '@/lib/linkedin-config'
import { searchProspects } from '@/lib/linkedin-apollo'

export async function GET(req: NextRequest) {
  try {
    const config = getConfig()
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1')
    const perPage = Math.min(parseInt(searchParams.get('perPage') || '25'), 50)

    const prospects = await searchProspects(config.apolloApiKey, page, perPage)

    return NextResponse.json({
      ok: true,
      count: prospects.length,
      page,
      prospects,
    })
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: err.message.includes('Missing required') ? 503 : 500 }
    )
  }
}
