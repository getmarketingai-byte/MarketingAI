/**
 * GET /api/outreach/status
 * Returns current status of both Phantombuster phantoms.
 * Shows connection phantom output (who connected) and DM phantom output.
 */
export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { getConfig } from '@/lib/linkedin-config'
import { getPhantomStatus, getPhantomOutput } from '@/lib/phantombuster'

export async function GET() {
  try {
    const config = getConfig()

    const [connStatus, dmStatus, connOutput, dmOutput] = await Promise.allSettled([
      getPhantomStatus(config.phantombusterApiKey, config.connectionPhantomId),
      getPhantomStatus(config.phantombusterApiKey, config.dmPhantomId),
      getPhantomOutput(config.phantombusterApiKey, config.connectionPhantomId),
      getPhantomOutput(config.phantombusterApiKey, config.dmPhantomId),
    ])

    // Count accepted connections from phantom output
    let acceptedConnections: any[] = []
    if (connOutput.status === 'fulfilled') {
      const output = connOutput.value?.output || []
      acceptedConnections = output.filter(
        (item: any) =>
          item.connectionStatus === 'connected' ||
          item.error === 'already connected'
      )
    }

    return NextResponse.json({
      ok: true,
      connections: {
        phantomStatus: connStatus.status === 'fulfilled' ? connStatus.value : null,
        accepted: acceptedConnections.length,
        recentAccepted: acceptedConnections.slice(-10).map((c: any) => ({
          name: c.name || `${c.firstName || ''} ${c.lastName || ''}`.trim(),
          linkedinUrl: c.linkedinProfile || c.profileUrl,
          connectedAt: c.timestamp,
        })),
        error: connStatus.status === 'rejected' ? (connStatus as any).reason?.message : null,
      },
      dms: {
        phantomStatus: dmStatus.status === 'fulfilled' ? dmStatus.value : null,
        sent: dmOutput.status === 'fulfilled' ? (dmOutput.value?.output || []).length : 0,
        error: dmStatus.status === 'rejected' ? (dmStatus as any).reason?.message : null,
      },
    })
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: err.message.includes('Missing required') ? 503 : 500 }
    )
  }
}
