/**
 * Phantombuster API client for LinkedIn automation.
 * Free trial: 14 days.
 * Docs: https://hub.phantombuster.com
 */

const PB_BASE = 'https://api.phantombuster.com/api/v2'

function pbHeaders(apiKey: string) {
  return {
    'X-Phantombuster-Key-1': apiKey,
    'Content-Type': 'application/json',
  }
}

export interface PhantomLaunchResult {
  containerId: string
  status: string
}

export interface PhantomOutput {
  status: string
  output: any[]
  containerId?: string
}

export async function launchPhantom(
  apiKey: string,
  phantomId: string,
  args: Record<string, unknown>
): Promise<PhantomLaunchResult> {
  const resp = await fetch(`${PB_BASE}/agents/launch`, {
    method: 'POST',
    headers: pbHeaders(apiKey),
    body: JSON.stringify({ id: phantomId, argument: JSON.stringify(args) }),
  })
  if (!resp.ok) {
    const text = await resp.text()
    throw new Error(`Phantombuster launch error ${resp.status}: ${text}`)
  }
  return resp.json()
}

export async function getPhantomOutput(
  apiKey: string,
  phantomId: string
): Promise<PhantomOutput> {
  const url = new URL(`${PB_BASE}/agents/fetch-output`)
  url.searchParams.set('id', phantomId)
  url.searchParams.set('withoutDuplicates', 'true')

  const resp = await fetch(url.toString(), {
    headers: pbHeaders(apiKey),
  })
  if (!resp.ok) {
    const text = await resp.text()
    throw new Error(`Phantombuster output error ${resp.status}: ${text}`)
  }
  return resp.json()
}

export async function getPhantomStatus(
  apiKey: string,
  phantomId: string
): Promise<any> {
  const url = new URL(`${PB_BASE}/agents/fetch`)
  url.searchParams.set('id', phantomId)

  const resp = await fetch(url.toString(), {
    headers: pbHeaders(apiKey),
  })
  if (!resp.ok) {
    const text = await resp.text()
    throw new Error(`Phantombuster status error ${resp.status}: ${text}`)
  }
  return resp.json()
}

/**
 * Build connection request phantom arguments.
 * Expects LinkedIn Connection Request phantom (Phantombuster store).
 */
export function buildConnectionArgs(
  sessionCookie: string,
  prospects: Array<{ linkedinUrl: string; message: string }>,
  dailyLimit: number
): Record<string, unknown> {
  return {
    sessionCookie,
    spreadsheetUrl: prospects.map((p) => ({
      linkedinProfile: p.linkedinUrl,
      message: p.message,
    })),
    numberOfAddsPerLaunch: Math.min(prospects.length, dailyLimit),
    onlySecondCircle: false,
    waitDuration: 30,
    skipProfiles: false,
    DOMInteractionDelay: 3000,
    csvName: 'marketingai_connections',
  }
}

/**
 * Build DM phantom arguments.
 * Expects LinkedIn Message Sender phantom (Phantombuster store).
 */
export function buildDmArgs(
  sessionCookie: string,
  prospects: Array<{ linkedinUrl: string; message: string }>,
  dailyLimit: number
): Record<string, unknown> {
  return {
    sessionCookie,
    spreadsheetUrl: prospects.map((p) => ({
      linkedinProfile: p.linkedinUrl,
      message: p.message,
    })),
    numberOfMessagesPerLaunch: Math.min(prospects.length, dailyLimit),
    waitDuration: 30,
    csvName: 'marketingai_dms',
  }
}
