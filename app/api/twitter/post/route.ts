/**
 * POST /api/twitter/post
 * Posts a tweet via Twitter API v2 using OAuth 1.0a user-context auth.
 *
 * Required env vars:
 *   TWITTER_CONSUMER_KEY        — API Key (Consumer Key)
 *   TWITTER_CONSUMER_SECRET     — API Secret (Consumer Secret)
 *   TWITTER_ACCESS_TOKEN        — OAuth 1.0a Access Token (user-context, write access)
 *   TWITTER_ACCESS_TOKEN_SECRET — OAuth 1.0a Access Token Secret
 *
 * Body: { "text": "your tweet content" }
 * Response: { "id": "tweet-id", "text": "tweet content" }
 */
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const TWITTER_API_URL = 'https://api.twitter.com/2/tweets'

function percentEncode(str: string): string {
  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A')
}

function buildOAuthHeader(method: string, url: string, body: string): string {
  const consumerKey = process.env.TWITTER_CONSUMER_KEY!
  const consumerSecret = process.env.TWITTER_CONSUMER_SECRET!
  const accessToken = process.env.TWITTER_ACCESS_TOKEN!
  const accessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET!

  const nonce = crypto.randomBytes(16).toString('hex')
  const timestamp = Math.floor(Date.now() / 1000).toString()

  const oauthParams: Record<string, string> = {
    oauth_consumer_key: consumerKey,
    oauth_nonce: nonce,
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: timestamp,
    oauth_token: accessToken,
    oauth_version: '1.0',
  }

  // Collect all parameters for signature base string
  // For JSON body posts, only OAuth params go in the base string (not body params)
  const allParams: Record<string, string> = { ...oauthParams }

  // Sort parameters lexicographically
  const paramString = Object.keys(allParams)
    .sort()
    .map((k) => `${percentEncode(k)}=${percentEncode(allParams[k])}`)
    .join('&')

  // Build signature base string
  const signatureBase = [
    method.toUpperCase(),
    percentEncode(url),
    percentEncode(paramString),
  ].join('&')

  // Build signing key
  const signingKey = `${percentEncode(consumerSecret)}&${percentEncode(accessTokenSecret)}`

  // Compute HMAC-SHA1 signature
  const signature = crypto
    .createHmac('sha1', signingKey)
    .update(signatureBase)
    .digest('base64')

  // Build Authorization header
  const authParams = { ...oauthParams, oauth_signature: signature }
  const authHeader =
    'OAuth ' +
    Object.keys(authParams)
      .sort()
      .map((k) => `${percentEncode(k)}="${percentEncode(authParams[k])}"`)
      .join(', ')

  return authHeader
}

export async function POST(req: NextRequest) {
  // Validate required env vars
  const requiredEnvVars = [
    'TWITTER_CONSUMER_KEY',
    'TWITTER_CONSUMER_SECRET',
    'TWITTER_ACCESS_TOKEN',
    'TWITTER_ACCESS_TOKEN_SECRET',
  ]
  const missing = requiredEnvVars.filter((v) => !process.env[v])
  if (missing.length > 0) {
    return NextResponse.json(
      { error: 'Missing Twitter credentials', missing },
      { status: 500 }
    )
  }

  let text: string
  try {
    const body = await req.json()
    text = body?.text
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return NextResponse.json({ error: 'text field is required' }, { status: 400 })
  }

  if (text.length > 280) {
    return NextResponse.json(
      { error: `Tweet too long: ${text.length} chars (max 280)` },
      { status: 400 }
    )
  }

  const tweetBody = JSON.stringify({ text: text.trim() })
  const authHeader = buildOAuthHeader('POST', TWITTER_API_URL, tweetBody)

  let twitterRes: Response
  try {
    twitterRes = await fetch(TWITTER_API_URL, {
      method: 'POST',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
      },
      body: tweetBody,
    })
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Network error calling Twitter API', detail: err.message },
      { status: 502 }
    )
  }

  const responseBody = await twitterRes.json()

  if (!twitterRes.ok) {
    return NextResponse.json(
      { error: 'Twitter API error', status: twitterRes.status, detail: responseBody },
      { status: twitterRes.status }
    )
  }

  return NextResponse.json({
    id: responseBody.data?.id,
    text: responseBody.data?.text,
  })
}
