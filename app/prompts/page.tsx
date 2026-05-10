import type { Metadata } from "next";
import Link from "next/link";
import DeadlineBanner from "@/components/DeadlineBanner";

export const metadata: Metadata = {
  title: "AI Marketing Prompts — 3 Tiers from $19 AUD | MarketingAI",
  description:
    "AI marketing prompt packs for Australian small business owners. Starter $19 · Pro $49 · Premium $99. Social media, email, SEO, ads, brand strategy. Instant download.",
  alternates: { canonical: "https://marketing-ai-psi-nine.vercel.app/prompts" },
  openGraph: {
    title: "AI Marketing Prompts for Australian Small Business — 3 Tiers",
    description: "Starter $19 · Pro $49 (Most Popular) · Premium $99. Copy-paste AI prompts that work. Instant download.",
    url: "https://marketing-ai-psi-nine.vercel.app/prompts",
    siteName: "MarketingAI",
    locale: "en_AU",
    type: "website",
  },
};

const TIERS = [
  {
    name: "Starter",
    price: "$19",
    currency: "AUD",
    description: "Test AI marketing with 20 core prompts.",
    href: "https://marketgenius4.gumroad.com/l/crtwc",
    highlight: false,
    badge: null,
    features: [
      "20 hand-picked AI marketing prompts",
      "8 Social Media prompts",
      "7 Email Marketing prompts",
      "5 Brand & Strategy prompts",
      "Instant PDF download",
      "Works with ChatGPT, Claude, Gemini",
    ],
    cta: "Get Starter — $19 AUD",
  },
  {
    name: "Pro",
    price: "$49",
    currency: "AUD",
    description: "The complete prompt library + system for using it.",
    href: "https://marketgenius4.gumroad.com/l/reflh",
    highlight: true,
    badge: "Most Popular",
    features: [
      "All 50 AI marketing prompts",
      "All 7 categories covered",
      "Quick-Start Guide (emailed after purchase)",
      "Category cheat sheets",
      "Workflow frameworks for full campaigns",
      "Instant PDF download",
      "Works with ChatGPT, Claude, Gemini",
    ],
    cta: "Get Pro — $49 AUD",
  },
  {
    name: "Premium",
    price: "$99",
    currency: "AUD",
    description: "Editable templates + lifetime updates.",
    href: "https://marketgenius4.gumroad.com/l/cucgdw",
    highlight: false,
    badge: null,
    features: [
      "Everything in Pro",
      "Editable Notion + Google Docs templates",
      "Lifetime updates — free forever",
      "Priority email support",
      "Templates delivered within 24hrs",
      "Personalise prompts for your brand once",
    ],
    cta: "Get Premium — $99 AUD",
  },
];

const categories = [
  { icon: "📱", title: "Social Media Content", count: 8, desc: "Weekly calendars, captions, LinkedIn posts, Reel scripts, BTS content." },
  { icon: "✉️", title: "Email Marketing", count: 7, desc: "Welcome sequences, newsletters, promo emails, re-engagement, abandoned cart." },
  { icon: "🌐", title: "Website & Landing Page Copy", count: 7, desc: "Hero copy, About pages, service pages, FAQs, meta descriptions." },
  { icon: "🔍", title: "Google & SEO", count: 7, desc: "Blog outlines, GBP posts, local SEO pages, keyword clusters, repurposing." },
  { icon: "📣", title: "Paid Advertising Copy", count: 6, desc: "Google Ads, Facebook/Instagram ads, retargeting, lead gen, A/B tests." },
  { icon: "🎯", title: "Brand & Strategy", count: 8, desc: "Brand voice guide, customer avatar, competitor analysis, 90-day plan, SWOT." },
  { icon: "🤖", title: "AI Power User", count: 7, desc: "Custom GPT instructions, image prompts, chatbot scripts, content batching." },
];

export default function PromptsPage() {
  return (
    <div className="min-h-screen bg-white">
      <DeadlineBanner />
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-orange-100 text-sm font-semibold uppercase tracking-wider mb-4">
            Instant PDF Download · 3 Tiers Available
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Marketing Prompts for Australian Small Business Owners
          </h1>
          <p className="text-xl text-orange-50 mb-4 max-w-2xl mx-auto">
            Copy. Paste. Grow.
          </p>
          <p className="text-lg text-orange-100 mb-10 max-w-2xl mx-auto">
            Ready-to-use AI prompts for social media, email, SEO, ads, and brand strategy.
            Works with ChatGPT, Claude, Gemini, or any AI tool.
          </p>
          <a
            href={TIERS[1].href}
            className="inline-block bg-white text-orange-600 font-bold text-lg px-10 py-4 rounded-xl hover:bg-orange-50 transition-colors shadow-lg"
          >
            Get Pro Pack — $49 AUD ⭐ Most Popular
          </a>
          <p className="text-orange-100 text-sm mt-3">Or choose your tier below · Secure Gumroad checkout</p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 bg-gray-50" id="pricing">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Choose Your Pack</h2>
          <p className="text-center text-gray-600 mb-12">
            Start with Starter to test the waters, or go straight to Pro for the full system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border-2 p-8 flex flex-col ${
                  tier.highlight
                    ? "border-orange-500 bg-white shadow-xl scale-105"
                    : "border-gray-200 bg-white"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{tier.name}</h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-500 mb-1">{tier.currency} · one-time</span>
                  </div>
                  <p className="text-sm text-gray-600">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-orange-500 font-bold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  className={`block text-center font-bold py-3 px-6 rounded-xl transition-colors ${
                    tier.highlight
                      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            All tiers: instant download · Gumroad secure checkout · No subscription
          </p>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            What&rsquo;s Inside the Pro Pack
          </h2>
          <p className="text-center text-gray-600 mb-12">
            50 prompts across 7 categories. Each prompt includes a fill-in-the-blank template and a practical tip.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-orange-300 transition-colors"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{cat.title}</h3>
                <p className="text-xs text-orange-500 font-semibold mb-2">{cat.count} prompts</p>
                <p className="text-sm text-gray-600">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Who It&rsquo;s For
          </h2>
          <div className="space-y-4">
            {[
              "Small business owners who want to use AI for marketing but don't know where to start",
              "Solo operators who write their own social posts, emails, and website copy",
              "Anyone who has tried AI tools but keeps getting generic outputs",
              "Business owners who spend hours on marketing content and want to cut that time in half",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-orange-500 text-xl mt-0.5">✓</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop staring at a blank screen.
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Start with Starter at $19 to test. Or get the full system with Pro at $49.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={TIERS[1].href}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-10 py-5 rounded-xl transition-colors shadow-xl"
            >
              Get Pro Pack — $49 AUD ⭐
            </a>
            <a
              href={TIERS[0].href}
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold text-lg px-8 py-5 rounded-xl transition-colors"
            >
              Try Starter — $19 AUD
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Instant PDF download · Gumroad secure checkout · No subscription
          </p>
        </div>
      </section>

      {/* Footer links */}
      <div className="py-8 px-4 border-t border-gray-100 text-center">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <Link href="/audit" className="hover:text-orange-500">$49 Marketing Audit</Link>
          <a href="https://calcfuel.com" className="hover:text-orange-500">Free Calculators</a>
          <a href="https://marketingai-health-check.vercel.app/?utm_source=prompts-page&utm_medium=footer&utm_campaign=prompts" className="hover:text-orange-500">Free Health Check</a>
        </div>
      </div>
    </div>
  );
}
