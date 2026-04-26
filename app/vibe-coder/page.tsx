import type { Metadata } from 'next';
import VibeCoderEmailCapture from './EmailCapture';

export const metadata: Metadata = {
  title: 'You build it. We market it. — MarketingAI for Vibe Coders',
  description:
    'MarketingAI sets up a complete marketing system for indie developers and vibe coders in under a week. $149 AUD one-time. No lock-in. Focus on building — we handle the marketing.',
};

export default function VibeCoder() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <span className="font-extrabold text-lg tracking-tight">MarketingAI</span>
        <span className="text-xs font-bold bg-blue-600 text-white px-3 py-1 rounded-full tracking-wide">
          For builders
        </span>
      </nav>

      {/* HERO */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-5">
          Marketing for vibe coders
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
          You build it.<br />We market it.
        </h1>
        <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
          You ship. You iterate. You vibe-code your way to a product people should love.
          But nobody knows it exists — because marketing is the one thing you never have time for.
          MarketingAI fixes that in under a week, for a one-time fee.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get started &mdash; $149 AUD
          </a>
          <a
            href="#early-access"
            className="inline-block border border-gray-300 hover:border-gray-600 text-gray-700 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Free marketing guide first
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-4">One-time setup fee. No lock-in. No monthly retainer.</p>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">Sound familiar?</p>
          <h2 className="text-3xl font-extrabold tracking-tight mb-10">
            You coded it. Nobody knows it exists.
          </h2>
          <div className="space-y-5">
            <div className="border-l-4 border-blue-600 bg-white pl-5 pr-4 py-4 rounded-r-lg">
              <h3 className="font-bold mb-1">You ship features instead of marketing them</h3>
              <p className="text-sm text-gray-500">
                One more bug fix. One more polish pass. One more feature. Marketing keeps getting
                pushed to &ldquo;next week&rdquo; — and next week never comes.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 bg-white pl-5 pr-4 py-4 rounded-r-lg">
              <h3 className="font-bold mb-1">You launched and heard crickets</h3>
              <p className="text-sm text-gray-500">
                You posted on Twitter, submitted to Product Hunt, maybe hit Reddit once.
                Then silence. Without a repeatable marketing system, you&rsquo;re starting
                from zero every single time.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 bg-white pl-5 pr-4 py-4 rounded-r-lg">
              <h3 className="font-bold mb-1">Marketing isn&rsquo;t your thing — and it shouldn&rsquo;t have to be</h3>
              <p className="text-sm text-gray-500">
                You&rsquo;re a builder. You think in systems, in code, in logic. Content calendars,
                email sequences, outreach templates — that&rsquo;s a whole other skill set.
                You shouldn&rsquo;t need to become a marketer to get users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">What we build for you</p>
          <h2 className="text-3xl font-extrabold tracking-tight mb-10">
            Three systems. Configured once. Working while you code.
          </h2>
          <div className="space-y-5">
            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">System 1</p>
              <h3 className="font-bold text-base mb-2">AI Content Engine</h3>
              <p className="text-sm text-gray-500">
                A 30-day LinkedIn content calendar built around your product, your voice, and your
                target user. 10 posts drafted. 4 content themes. Copy-paste ready — no blank page,
                no guessing what to write about your build.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">System 2</p>
              <h3 className="font-bold text-base mb-2">Outbound Lead Sequence</h3>
              <p className="text-sm text-gray-500">
                A structured, personalised outreach system for finding your first (or next) real users.
                Connection templates, follow-up messages, and a clear profile of exactly who to
                target — so you&rsquo;re not spamming, you&rsquo;re having real conversations.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">System 3</p>
              <h3 className="font-bold text-base mb-2">Email Nurture Sequence</h3>
              <p className="text-sm text-gray-500">
                A 3-email sequence that keeps interested people warm between launches and updates.
                Intro, value, and CTA — formatted and ready to load into any email tool.
                Turns signups into actual customers without constant manual effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="bg-gray-900 text-white py-16 px-6" id="offer">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-4">One-off setup fee</p>
          <div className="text-6xl font-extrabold tracking-tight mb-1">
            $149 <span className="text-2xl font-semibold">AUD</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">One-time. No ongoing fees. No lock-in.</p>
          <p className="text-gray-500 text-xs mb-8">
            Agencies charge $2,000&ndash;$5,000/month. You pay $149 once and own everything.
          </p>
          <ul className="text-left space-y-3 mb-8">
            <li className="flex gap-3 text-sm">
              <span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span>
              <span>Full setup of all three systems (AI Content Engine, Outbound Lead Sequence, Email Nurture Sequence)</span>
            </li>
            <li className="flex gap-3 text-sm">
              <span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span>
              <span>1 &times; 45-minute discovery call — we learn your product, your audience, your voice</span>
            </li>
            <li className="flex gap-3 text-sm">
              <span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span>
              <span>All three systems drafted and delivered within 3&ndash;5 business days</span>
            </li>
            <li className="flex gap-3 text-sm">
              <span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span>
              <span>1 &times; revision round on any deliverable within 7 days of delivery</span>
            </li>
            <li className="flex gap-3 text-sm">
              <span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span>
              <span>You own everything — no tool subscriptions required, no dependency on us</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Buy now &mdash; $149 AUD
            </a>
            <a
              href="https://calendly.com/getmarketingai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Book a free call first
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            No monthly retainer. No minimum term. Pay once, own the setup.
          </p>
        </div>
      </section>

      {/* SOCIAL PROOF / EARLY ACCESS */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-lg mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase bg-yellow-100 text-yellow-700 border border-yellow-300 px-4 py-1.5 rounded-full mb-6">
            Early access open
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight mb-4">
            Be one of our first builder clients
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            We launched MarketingAI to prove the model works before charging more.
            The $149 setup fee is deliberately low &mdash; we want case studies and
            real results from real products. If you&rsquo;re in early, you get our full attention.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Get started &mdash; $149 AUD
            </a>
            <a
              href="https://calendly.com/getmarketingai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-300 hover:border-gray-600 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book a free call first
            </a>
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <VibeCoderEmailCapture />

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-200 px-6 py-8 text-center">
        <p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
          <strong>Important:</strong> Outcomes described on this page are illustrative only.
          MarketingAI does not guarantee specific marketing results, revenue outcomes, or lead counts.
          Marketing system performance depends on your product, market, and how consistently the
          system is used. All work is performed by a sole trader operating under Australian Consumer Law.
        </p>
        <p className="text-xs text-gray-400 mt-2">&copy; 2026 MarketingAI &middot; Australia</p>
      </footer>
    </main>
  );
}
