"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

const INDUSTRIES = [
  { value: "mortgage-finance", label: "Mortgage Broker / Finance Professional" },
  { value: "migration", label: "Migration Agent / Immigration Lawyer" },
  { value: "coaching", label: "Business Coach / Consultant" },
  { value: "allied-health", label: "Allied Health (Physio, Chiro, Psych)" },
  { value: "trades", label: "Trade / Construction Business" },
  { value: "real-estate", label: "Real Estate / Property" },
  { value: "professional-services", label: "Professional Services (Legal, Accounting)" },
  { value: "other", label: "Other" },
];

const TIMELINES = [
  { value: "immediately", label: "Right now — I am ready to get started" },
  { value: "weeks-2-4", label: "In the next 2-4 weeks" },
  { value: "weeks-4-8", label: "In the next 1-2 months" },
  { value: "months-3-plus", label: "3+ months from now" },
];

function SuccessContent() {
  const params = useSearchParams();
  const name = params.get("name")?.trim() || "";
  const email = params.get("email")?.trim() || "";

  const [step, setStep] = useState<"checklist" | "done">("checklist");
  const [industry, setIndustry] = useState("");
  const [timeline, setTimeline] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!industry || !timeline) {
      setFormError("Please select both fields.");
      return;
    }
    setFormError("");
    setSubmitting(true);
    try {
      await fetch("/api/checklist-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, industry, timeline }),
      });
    } catch {
      // Non-blocking
    }
    setSubmitting(false);
    setStep("done");
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 max-w-xl w-full">

        <div className="text-center mb-8">
          <div className="text-4xl mb-3">{step === "checklist" ? "✅" : "🎯"}</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {step === "checklist"
              ? (name ? \`You are in, \${name}!\` : "You are in!")
              : "Thanks — you are all set!"}
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            {step === "checklist"
              ? (email ? \`Confirmation sent to \${email}.\` : "Check your inbox for confirmation.")
              : "We have what we need. Here is how to get started."}
          </p>
        </div>

        {step === "checklist" && (
          <>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6">
              <p className="text-sm font-semibold text-blue-800 mb-1">One quick question</p>
              <p className="text-sm text-blue-700 leading-relaxed">
                Tell us about your business so we can tailor your marketing system.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What type of business do you run?
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 bg-white"
                >
                  <option value="">Select your industry...</option>
                  {INDUSTRIES.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  When are you looking to make a decision?
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 bg-white"
                >
                  <option value="">Select your timeline...</option>
                  {TIMELINES.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {formError && <p className="text-red-500 text-sm">{formError}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 px-6 rounded-xl transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {submitting ? "Saving..." : "Continue →"}
              </button>
            </form>
          </>
        )}

        {step === "done" && (
          <>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white text-left mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-2">Ready when you are</p>
              <h2 className="text-xl font-bold mb-2">Get your marketing system set up</h2>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                MarketingAI assists in configuring your AI content engine, outbound lead sequence, and email nurture
                for <strong className="text-white">$149 AUD</strong> once-off. Delivered in under a week.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 font-bold text-sm px-5 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center"
                >
                  Get Started — $149 AUD
                </a>
                <a
                  href="https://calendly.com/getmarketingai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-400 text-white font-semibold text-sm px-5 py-3 rounded-lg hover:border-white transition-colors text-center"
                >
                  Book a Free 30-min Call
                </a>
              </div>
              <p className="mt-4 text-xs text-blue-200">Results are indicative only. No guaranteed outcomes.</p>
            </div>

            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-gray-700 mb-3">What happens after you pay</h3>
              <ol className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-3"><span className="font-bold text-blue-600 shrink-0">1.</span>We send you a 45-min onboarding call invite.</li>
                <li className="flex gap-3"><span className="font-bold text-blue-600 shrink-0">2.</span>You share your business context (we guide you through it).</li>
                <li className="flex gap-3"><span className="font-bold text-blue-600 shrink-0">3.</span>We configure and deliver your three marketing systems within a week.</li>
              </ol>
            </div>
          </>
        )}

        <p className="mt-6 text-center text-xs text-gray-400">
          <a href="https://marketing-ai-psi-nine.vercel.app/" className="hover:text-gray-600 underline">
            Back to MarketingAI
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
