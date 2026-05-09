/**
 * POST /api/social/post
 * Posts content to Mastodon and Bluesky simultaneously.
 *
 * Required env vars:
 *   MASTODON_INSTANCE_URL  — e.g. https://techhub.social
 *   MASTODON_ACCESS_TOKEN  — Bearer token from Mastodon OAuth
 *   BLUESKY_IDENTIFIER     — Bluesky handle e.g. marketingai.bsky.social
 *   BLUESKY_APP_PASSWORD   — Bluesky app password (not account password)
 *
 * Body: { "text": "post content (max 500 chars for Mastodon, 300 for Bluesky)" }
 * Response: { "mastodon": {...}, "bluesky": {...}, "errors": [...] }
 */
import { NextRequest, NextResponse } from 'next/server'

const MASTODON_INSTANCE = process.env.MASTODON_INSTANCE_URL || 'https://techhub.social'
const BLUESKY_PDS = 'https://bsky.social'

// ─── Mastodon ────────────────────────────────────────────────────────────────

async function postToMastodon(text: string) {
  const token = process.env.MASTODON_ACCESS_TOKEN
  if (!token) throw new Error('MASTODON_ACCESS_TOKEN not set')

  const res = await fetch(`${MASTODON_INSTANCE}/api/v1/statuses`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status: text }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Mastodon error ${res.status}: ${err}`)
  }

  const data = await res.json()
  return { id: data.id, url: data.url }
}

// ─── Bluesky (AT Protocol) ───────────────────────────────────────────────────

async function getBlueSkySession(): Promise<{ accessJwt: string; did: string }> {
  const identifier = process.env.BLUESKY_IDENTIFIER
  const password = process.env.BLUESKY_APP_PASSWORD
  if (!identifier || !password) throw new Error('BLUESKY_IDENTIFIER or BLUESKY_APP_PASSWORD not set')

  const res = await fetch(`${BLUESKY_PDS}/xrpc/com.atproto.server.createSession`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier, password }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Bluesky auth error ${res.status}: ${err}`)
  }

  const data = await res.json()
  return { accessJwt: data.accessJwt, did: data.did }
}

async function postToBluesky(text: string) {
  // Truncate to 300 chars (Bluesky grapheme limit)
  const truncated = text.length > 300 ? text.slice(0, 297) + '…' : text

  const session = await getBlueSkySession()

  const record = {
    $type: 'app.bsky.feed.post',
    text: truncated,
    createdAt: new Date().toISOString(),
    langs: ['en'],
  }

  const res = await fetch(`${BLUESKY_PDS}/xrpc/com.atproto.repo.createRecord`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session.accessJwt}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      repo: session.did,
      collection: 'app.bsky.feed.post',
      record,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Bluesky post error ${res.status}: ${err}`)
  }

  const data = await res.json()
  return { uri: data.uri, cid: data.cid }
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  let body: { text?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { text } = body
  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return NextResponse.json({ error: 'text field is required' }, { status: 400 })
  }

  const trimmed = text.trim()
  const results: { mastodon?: object; bluesky?: object; errors: string[] } = { errors: [] }

  // Post to both platforms concurrently, collect errors without short-circuiting
  const [mastodonResult, blueskyResult] = await Promise.allSettled([
    postToMastodon(trimmed),
    postToBluesky(trimmed),
  ])

  if (mastodonResult.status === 'fulfilled') {
    results.mastodon = mastodonResult.value
  } else {
    results.errors.push(`Mastodon: ${mastodonResult.reason?.message || mastodonResult.reason}`)
  }

  if (blueskyResult.status === 'fulfilled') {
    results.bluesky = blueskyResult.value
  } else {
    results.errors.push(`Bluesky: ${blueskyResult.reason?.message || blueskyResult.reason}`)
  }

  const status = results.errors.length === 2 ? 500 : 200
  return NextResponse.json(results, { status })
}
