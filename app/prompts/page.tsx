import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "50 AI Marketing Prompts — Australian Small Business | MarketingAI",
  description:
    "50 copy-paste AI marketing prompts for Australian small business owners. Social media, email, SEO, ads, and brand strategy. $19 AUD — instant PDF download.",
  alternates: { canonical: "https://marketing-ai-psi-nine.vercel.app/prompts" },
  openGraph: {
    title: "50 AI Marketing Prompts for Australian Small Business",
    description: "Copy, paste, grow. 50 ready-to-use AI prompts across 7 categories. $19 AUD instant download.",
    url: "https://marketing-ai-psi-nine.vercel.app/prompts",
    siteName: "MarketingAI",
    locale: "en_AU",
    type: "website",
  },
};

const GUMROAD_LINK = "https://marketgenius4.gumroad.com/l/crtwc";

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
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-orange-100 text-sm font-semibold uppercase tracking-wider mb-4">
            Instant PDF Download
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            50 AI Marketing Prompts for Australian Small Business Owners
          </h1>
          <p className="text-xl text-orange-50 mb-4 max-w-2xl mx-auto">
            Copy. Paste. Grow.
          </p>
          <p className="text-lg text-orange-100 mb-10 max-w-2xl mx-auto">
            Ready-to-use AI prompts for social media, email, SEO, ads, and brand strategy.
            Works with ChatGPT, Claude, Gemini, or any AI tool.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={GUMROAD_LINK}
              className="inline-block bg-white text-orange-600 font-bold text-lg px-10 py-4 rounded-xl hover:bg-orange-50 transition-colors shadow-lg"
            >
              Buy now — $19 AUD
            </a>
            <p className="text-orange-100 text-sm">Instant download · PDF · No subscription</p>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            What&rsquo;s Inside
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
      <section className="py-16 px-4">
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

      {/* What you get */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Everything You Get
          </h2>
          <div className="space-y-3">
            {[
              "50 ready-to-use marketing prompts across 7 categories",
              "Fill-in-the-bracket placeholders — no marketing experience needed",
              "A practical tip with every single prompt (not just the template)",
              "Australian compliance notes baked into email and ad prompts",
              "Quick-Start Guide — get great results from minute one",
              "Works with ChatGPT, Claude, Gemini, Copilot — any AI tool",
              "PDF format — open on any device, print, or save",
              "Instant download — available immediately after purchase",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-orange-100">
                <span className="text-orange-500 font-bold">✓</span>
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
            50 prompts. 7 categories. Instant download. $19 AUD.
          </p>
          <a
            href={GUMROAD_LINK}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-12 py-5 rounded-xl transition-colors shadow-xl"
          >
            Get the Prompt Pack — $19 AUD →
          </a>
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
