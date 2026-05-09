/**
 * POST /api/social/batch-launch
 * Posts the 5 launch promotional posts to Mastodon + Bluesky.
 * Requires x-cron-secret header to prevent public triggering.
 *
 * Posts (staggered 3s apart):
 *   2x prompt pack promos ($19)
 *   2x calcfuel tool promos
 *   1x audit promo ($49)
 */
import { NextRequest, NextResponse } from 'next/server'

const LAUNCH_POSTS = [
  // Prompt pack promo 1
  `Tired of staring at a blank screen for your marketing content?\n\n50 AI marketing prompts written specifically for Australian SMBs — $19 AUD.\n\nCovers social media, email campaigns, ads, and more. Just copy, paste, and adapt.\n\n→ https://marketing-ai-psi-nine.vercel.app/prompts\n\n#MarketingAI #SmallBusiness #AustralianBusiness`,

  // Prompt pack promo 2
  `Marketing content eating up your week?\n\n50 done-for-you AI prompts across 7 categories — tailored for Aussie businesses.\n\nOne-time purchase, instant download. $19 AUD.\n\nhttps://marketing-ai-psi-nine.vercel.app/prompts\n\n#ContentMarketing #AITools #AusBiz`,

  // Calcfuel GST calculator promo
  `Free GST calculator for Australian businesses\n\nQuickly add or remove 10% GST from any amount. No signup, no ads.\n\nhttps://calcfuel.com/calculators/gst-calculator\n\n#GST #AustralianBusiness #TaxTime #calcfuel`,

  // Calcfuel general promo
  `calcfuel.com — free marketing calculators for small business owners.\n\nROI, ROAS, CAC, CLV, CPL, CTR and more. All free. All instant. No login required.\n\nhttps://calcfuel.com\n\n#MarketingTools #SmallBusiness #FreeTools`,

  // Audit promo ($49)
  `Is your marketing actually working?\n\nGet a personalised AI-powered marketing audit — $49 AUD.\n\nWe review your positioning, messaging, and channels. Delivered within 48 hours.\n\nhttps://marketing-ai-psi-nine.vercel.app\n\n#MarketingAudit #SmallBusinessMarketing #AusBiz`,
]

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-cron-secret') || req.headers.get('authorization')?.replace('Bearer ', '')
  if (!secret || secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

  const results = []

  for (let i = 0; i < LAUNCH_POSTS.length; i++) {
    try {
      const res = await fetch(`${baseUrl}/api/social/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: LAUNCH_POSTS[i] }),
      })
      const data = await res.json()
      results.push({ index: i + 1, status: res.status, data })
    } catch (err) {
      results.push({ index: i + 1, status: 'fetch-error', error: String(err) })
    }

    // Stagger posts 3s apart to avoid rate limits
    if (i < LAUNCH_POSTS.length - 1) {
      await sleep(3000)
    }
  }

  return NextResponse.json({ posted: results.length, results })
}
