import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import crypto from "crypto";

export const metadata: Metadata = {
  title: "Download Your 90-Day Tradie Content Calendar | MarketingAI",
  description: "Thank you for your purchase. Download your 90-Day Social Media Content Calendar for Tradies below.",
  robots: { index: false, follow: false },
};

const COOKIE_NAME = "tradie_access";
const CONTENT_URL = "/tradie-calendar/content";

// $19 tradie content calendar Stripe payment link
const PURCHASE_URL = "https://buy.stripe.com/9B63cxgvXb0ddLd6pAbsc01";

function isValidToken(token: string | undefined, secret: string): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [expiresStr, sig] = parts;
  const expires = parseInt(expiresStr, 10);
  if (isNaN(expires) || Date.now() > expires) return false;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(expiresStr)
    .digest("hex")
    .slice(0, 24);
  return sig === expected;
}

export default async function TradieCalendarDownloadPage({
  searchParams,
}: {
  searchParams: Promise<{ access?: string; session_id?: string }>;
}) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const secret = process.env.CRON_SECRET || "";
  const hasAccess = isValidToken(token, secret);

  // If session_id present, redirect through verify route (shouldn't normally reach here
  // because Stripe now redirects to /api/tradie-verify, but handle as fallback)
  if (params.session_id && !hasAccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <p className="text-gray-600">Verifying your purchase&hellip;</p>
        <meta httpEquiv="refresh" content={`0;url=/api/tradie-verify?session_id=${params.session_id}`} />
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-10 text-center">
          <div className="text-5xl mb-6">🔒</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Purchase Required
          </h1>
          <p className="text-gray-600 mb-8">
            The 90-Day Tradie Content Calendar is available after purchase. Get instant access for $19 AUD.
          </p>
          <a
            href={PURCHASE_URL}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-md mb-4"
          >
            Get the Content Calendar &mdash; $19 AUD &rarr;
          </a>
          <p className="text-xs text-gray-400 mt-4">
            90 Instagram captions &middot; 26 Facebook posts &middot; 10 video scripts &middot; Hashtag guide
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-10 text-center">
        <div className="text-5xl mb-6">🎉</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Your Content Calendar is Ready
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Click below to access your complete 90-Day Social Media Content Calendar &mdash; 90 Instagram captions, 26 Facebook posts, 10 video scripts, hashtag guide, and posting schedule.
        </p>

        <Link
          href={CONTENT_URL}
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-md mb-4"
        >
          View Your Content Calendar &rarr;
        </Link>

        <p className="text-sm text-gray-400 mb-8">
          Opens instantly &middot; Works on any device &middot; Bookmark for easy access
        </p>

        <hr className="border-gray-100 mb-8" />

        <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-6 text-left">
          <h2 className="font-bold text-gray-900 mb-2">Want even faster results?</h2>
          <p className="text-sm text-gray-600 mb-4">
            Get a personalised marketing audit for your trade business. We&rsquo;ll review your online presence and give you a clear action plan &mdash; done in 48 hours.
          </p>
          <a
            href="https://buy.stripe.com/aFa6oJgvX7O10YrdS2bsc02"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Get the $49 Marketing Audit &rarr;
          </a>
        </div>

        <div className="flex justify-center gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <a href="https://calcfuel.com" className="hover:text-orange-500">Free Calculators</a>
        </div>
      </div>
    </div>
  );
}
