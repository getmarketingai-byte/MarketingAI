import Image from 'next/image';
export const metadata = {
  title: "About — MarketingAI",
  description: "What MarketingAI delivers — AI-assisted marketing systems for small businesses.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <a href="/"><Image src="/logo.jpg" alt="MarketingAI" width={40} height={40} className="rounded-md" /></a>
        <a href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00" target="_blank" rel="noopener noreferrer" className="text-xs font-bold bg-blue-600 text-white px-3 py-1 rounded-full tracking-wide">
          Get Started — $149
        </a>
      </nav>

      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-5">About MarketingAI</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
          AI-assisted marketing systems for small businesses
        </h1>
        <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
          We set up the systems so you can focus on building your product — not figuring out marketing.
        </p>
        <a href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
          Get started — $149 AUD
        </a>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">Who we serve</p>
          <h2 className="text-3xl font-extrabold tracking-tight mb-6">
            Small business owners who want to focus on their product, not marketing
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            You have a great product. You know you need marketing, but it keeps getting pushed back.
            Agencies charge too much and you don't have time to do it yourself.
            MarketingAI bridges that gap — we set up the systems, you get the results.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">What we deliver</p>
          <h2 className="text-3xl font-extrabold tracking-tight mb-10">
            Three systems. Set up once. Working for you every day.
          </h2>
          <div className="space-y-5">
            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">System 1</p>
              <h3 className="font-bold text-base mb-2">AI Content Engine</h3>
              <p className="text-sm text-gray-500">A lead capture and nurture system that turns website visitors and social followers into contacts you can actually talk to. AI-assisted copy, automated follow-up, and clear conversion tracking — all configured for your specific business and audience.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">System 2</p>
              <h3 className="font-bold text-base mb-2">Outbound Lead Sequence</h3>
              <p className="text-sm text-gray-500">Structured, personalised outreach to the right people — not mass spam. A targeted sequence that identifies your ideal customers, crafts relevant messages, and follows up automatically so you stay top of mind without lifting a finger.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">System 3</p>
              <h3 className="font-bold text-base mb-2">Email Nurture Sequence</h3>
              <p className="text-sm text-gray-500">A repeatable system for turning what you already know into content that builds authority and drives inbound interest. We set up the framework — you get a library of content assets that work for you 24/7, without needing to be a writer or content strategist.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            One-time $149 AUD setup. No lock-in. No monthly retainer.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
              Get started — $149 AUD
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200 px-6 py-8 text-center">
        <p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
          <strong>Important:</strong> Outcomes described on this page are illustrative only.
          MarketingAI does not guarantee specific marketing results, revenue outcomes, or timelines.
        </p>
        <p className="text-xs text-gray-400 mt-2">&copy; 2026 MarketingAI</p>
      </footer>
    </main>
  );
}
