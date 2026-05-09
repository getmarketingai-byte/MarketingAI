import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download Your 90-Day Tradie Content Calendar | MarketingAI",
  description: "Thank you for your purchase. Download your 90-Day Social Media Content Calendar for Tradies below.",
  robots: { index: false, follow: false },
};

const PDF_URL = "https://marketing-ai-psi-nine.vercel.app/products/tradie-content-calendar-90-day.pdf";

export default function TradieCalendarDownloadPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-10 text-center">
        <div className="text-5xl mb-6">🎉</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Your Content Calendar is Ready
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Click below to download your 90-Day Social Media Content Calendar for Tradies.
        </p>

        <a
          href={PDF_URL}
          download
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-md mb-4"
        >
          Download Your Calendar (PDF) ↓
        </a>

        <p className="text-sm text-gray-400 mb-8">
          PDF file &middot; Opens on any device
        </p>

        <hr className="border-gray-100 mb-8" />

        <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-6 text-left">
          <h2 className="font-bold text-gray-900 mb-2">Want even faster results?</h2>
          <p className="text-sm text-gray-600 mb-4">
            Get a personalised marketing audit for your trade business. We&rsquo;ll review your online presence and give you a clear action plan — done in 48 hours.
          </p>
          <a
            href="https://buy.stripe.com/aFa6oJgvX7O10YrdS2bsc02"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Get the $49 Marketing Audit →
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
