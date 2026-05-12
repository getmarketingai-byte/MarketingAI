import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Products — AI Marketing Tools for Small Business | MarketingAI",
  description: "All MarketingAI products in one place. AI prompts, playbooks, quick-start guides, and done-with-you marketing audits. From $5 AUD.",
  alternates: { canonical: "https://marketing-ai-psi-nine.vercel.app/products" },
  robots: { index: true, follow: true },
};

const products = [
  {
    emoji: "⚡",
    title: "10 AI Agent Prompts",
    price: "$5 AUD",
    badge: "Best value",
    badgeColor: "bg-green-100 text-green-700",
    description: "10 copy-paste prompts for working with and building AI agents. Task delegation, chain-of-thought workflows, tool usage, and output formatting.",
    features: ["10 ready-to-use prompts", "Covers Claude, ChatGPT, Gemini", "Instant PDF download"],
    href: "https://buy.stripe.com/9B6dRbfrT9W9fTlg0absc0h",
    cta: "Buy for $5",
    highlight: false,
  },
  {
    emoji: "📋",
    title: "Marketing Quick-Start Guide",
    price: "$9 AUD",
    badge: null as string | null,
    badgeColor: "",
    description: "A personalised AI marketing action plan for your small business. 15 pages covering your top channels, content strategy, and 30-day sprint.",
    features: ["15-page personalised plan", "30-day sprint included", "Instant PDF download"],
    href: "https://marketgenius4.gumroad.com/l/cbkzsl",
    cta: "Buy for $9",
    highlight: false,
  },
  {
    emoji: "📚",
    title: "AI Agent Playbook",
    price: "$15 AUD",
    badge: "Popular" as string | null,
    badgeColor: "bg-orange-100 text-orange-700",
    description: "15-page guide for marketers building with AI agents. Archetypes, prompt templates, tool config, model selection, and a 30-day launch plan.",
    features: ["15 pages, print-ready", "5 agent archetypes + templates", "30-day launch roadmap"],
    href: "/playbook/download",
    cta: "Get the Playbook",
    highlight: true,
  },
  {
    emoji: "🚀",
    title: "50 AI Marketing Prompts",
    price: "$19 AUD",
    badge: null as string | null,
    badgeColor: "",
    description: "50 copy-paste AI marketing prompts across 7 categories: social media, email, SEO, ads, website copy, brand strategy, and AI power user.",
    features: ["50 prompts, 7 categories", "Works with any AI tool", "Instant PDF download"],
    href: "https://marketgenius4.gumroad.com/l/crtwc",
    cta: "Get the Prompt Pack",
    highlight: false,
  },
  {
    emoji: "🔍",
    title: "Marketing Audit",
    price: "$49 AUD",
    badge: "Done-with-you" as string | null,
    badgeColor: "bg-blue-100 text-blue-700",
    description: "Full AI-powered marketing audit. We review your channels and deliver 3 custom marketing systems to your inbox within 7 days.",
    features: ["3 custom systems built", "Delivered to your inbox", "7-day turnaround"],
    href: "https://buy.stripe.com/aFa6oJgvX7O10YrdS2bsc02",
    cta: "Book the Audit",
    highlight: false,
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Link href="/"><Image src="/logo.jpg" alt="MarketingAI" width={40} height={40} className="rounded-md" /></Link>
        <Link href="/audit" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
          Book Audit →
        </Link>
      </nav>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-3">All Products</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Marketing Tools for Small Business</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From $5. Instant downloads and done-with-you services for Australian businesses.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Not sure where to start?{" "}
            <Link href="https://marketgenius4.gumroad.com/l/free-ai-prompts" target="_blank" rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline">
              Grab 5 free prompts first →
            </Link>
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.title}
              className={`flex flex-col rounded-2xl border p-6 transition-all hover:shadow-lg ${
                p.highlight ? "border-orange-400 shadow-md bg-orange-50" : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{p.emoji}</span>
                {p.badge && (
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                )}
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">{p.title}</h2>
              <p className="text-2xl font-bold text-orange-500 mb-3">{p.price}</p>
              <p className="text-sm text-gray-600 mb-4 flex-1">{p.description}</p>
              <ul className="space-y-1 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-500">
                    <span className="text-orange-400 mt-0.5">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`block w-full text-center py-3 px-4 rounded-xl font-semibold text-sm transition-colors ${
                  p.highlight ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-gray-900 text-white hover:bg-gray-700"
                }`}
              >
                {p.cta} →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-100 pt-10 text-center">
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            All products delivered digitally. Prices in AUD.{" "}
            <Link href="/support" className="text-orange-500 hover:underline">Contact support</Link> for questions.
            Results are indicative only — marketing outcomes are not guaranteed.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">← Back to MarketingAI</Link>
            <Link href="/audit" className="text-orange-500 font-semibold hover:text-orange-600">Book a $49 Audit</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
