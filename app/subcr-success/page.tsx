"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const params = useSearchParams();
  const name = params.get("name")?.trim() || "";
  const email = params.get("email")?.trim() || "";

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 max-w-xl w-full text-center">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {name ? `You're in, ${name}!` : "You're in!"}
        </h1>
        <p className="text-gray-500 text-base mb-8 leading-relaxed">
          {email
            ? `A confirmation email is on its way to ${email}. Check your inbox (and spam folder just in case).`
            : "Check your inbox for a confirmation email from us."}
        </p>

        <hr className="border-gray-100 mb-8" />

        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Free tools while you wait
        </p>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            { emoji: "📊", label: "Marketing ROI", href: "https://calcfuel.com/calculators/marketing-roi-calculator" },
            { emoji: "📧", label: "Email Open Rate", href: "https://calcfuel.com/calculators/email-open-rate-calculator" },
            { emoji: "💰", label: "Cost Per Lead", href: "https://calcfuel.com/calculators/cost-per-lead-calculator" },
            { emoji: "🎯", label: "Customer Acquisition Cost", href: "https://calcfuel.com/calculators/customer-acquisition-cost-calculator" },
          ].map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
            >
              <span>{tool.emoji}</span>
              <span>{tool.label}</span>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white text-left">
          <h2 className="text-lg font-bold mb-2">Ready to hand off your marketing?</h2>
          <p className="text-blue-100 text-sm leading-relaxed mb-5">
            MarketingAI assists in setting up your entire marketing system — strategy, tools, and automations — for{" "}
            <strong className="text-white">$149 AUD</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://calendly.com/getmarketingai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 font-bold text-sm px-5 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center"
            >
              Book a Free 30-min Call
            </a>
            <a
              href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-400 text-white font-semibold text-sm px-5 py-3 rounded-lg hover:border-white transition-colors text-center"
            >
              Get Started — $149 AUD
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          <a href="https://marketing-ai-psi-nine.vercel.app/" className="hover:text-gray-600 underline">
            ← Back to MarketingAI
          </a>
        </p>
      </div>
    </main>
  );
}

export default function SubscriptionSuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  );
}
