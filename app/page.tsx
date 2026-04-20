export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <span className="font-extrabold text-lg tracking-tight">MarketingAI</span>
        <span className="text-xs font-bold bg-blue-600 text-white px-3 py-1 rounded-full tracking-wide">
          Australia
        </span>
      </nav>

      {/* HERO */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-5">
          Automated marketing for Australian businesses
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
          Stop losing customers to businesses that show up. You don&rsquo;t.
        </h1>
        <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
          Most Australian small businesses have a great product and a forgettable online presence.
          MarketingAI sets up an automated system that finds, attracts, and nurtures your
          customers &mdash; without you managing it day to day.
        </p>
        <a
          href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Get started &mdash; $149 AUD
        </a>
        <p className="text-sm text-gray-400 mt-4">One-time setup fee. No lock-in. No monthly retainer.</p>
      </section>

      {/* PROBLEM */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">The problem</p>
          <h2 className="text-3xl font-extrabold tracking-tight mb-10">
            Why most AU small business marketing doesn&rsquo;t work
          </h2>
          <div className="space-y-5">
            <div className="border-l-4 border-blue-600 bg-white pl-5 pr-4 py-4 rounded-r-lg">
              <h3 className="font-bold mb-1">You&rsquo;re invisible where your customers are looking</h3>
              <p className="text-sm text-gray-500">Your competitors show up on LinkedIn, in Google, and in people&rsquo;s inboxes. You&rsquo;re relying on referrals and word of mouth &mdash; which works until it doesn&rsquo;t.</p>
            </div>
            <div className="border-l-4 border-blue-600 bg-white pl-5 pr-4 py-4 rounded-r-lg">
              <h3 className="font-bold mb-1">Agencies charge $2,000&ndash;$5,000/month and can&rsquo;t explain what you got</h3>
              <p className="text-sm text-gray-500">Monthly retainers with vague deliverables. You pay for &ldquo;strategy&rdquo;, get some social posts, and wonder if any of it is actually bringing in customers.</p>
            </div>
            <div className="border-l-4 border-blue-600 bg-white pl-5 pr-4 py-4 rounded-r-lg">
              <h3 className="font-bold mb-1">You don&rsquo;t have time to market yourself &mdash; you&rsquo;re running the business</h3>
              <p className="text-sm text-gray-500">Marketing keeps getting pushed back. When you finally get around to it, you&rsquo;re starting from scratch every time, with no system underneath it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">How it works</p>
          <h2 className="text-3xl font-extrabold tracking-tight mb-10">
            Three systems. Set up once. Working for you every day.
          </h2>
          <div className="space-y-5">
            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">System 1</p>
              <h3 className="font-bold text-base mb-2">AI Funnel Machine</h3>
              <p className="text-sm text-gray-500">A lead capture and nurture system that turns website visitors and social followers into contacts you can actually talk to. AI-assisted copy, automated follow-up, and clear conversion tracking &mdash; all configured for your specific business and audience.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">System 2</p>
              <h3 className="font-bold text-base mb-2">Outbound Engine</h3>
              <p className="text-sm text-gray-500">Structured, personalised outreach to the right people &mdash; not mass spam. A targeted sequence that identifies your ideal customers, crafts relevant messages, and follows up automatically so you stay top of mind without lifting a finger.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">System 3</p>
              <h3 className="font-bold text-base mb-2">Creative Goldmine</h3>
              <p className="text-sm text-gray-500">A repeatable system for turning what you already know into content that builds authority and drives inbound interest. We set up the framework &mdash; you get a library of content assets that work for you 24/7, without needing to be a writer or content strategist.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="bg-gray-900 text-white py-16 px-6" id="offer">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-4">One-off setup fee</p>
          <div className="text-6xl font-extrabold tracking-tight mb-1">$149 <span className="text-2xl font-semibold">AUD</span></div>
          <p className="text-gray-400 text-sm mb-8">One-time. No ongoing fees. No lock-in.</p>
          <ul className="text-left space-y-3 mb-8">
            <li className="flex gap-3 text-sm"><span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span><span>Full setup of all three systems configured for your business</span></li>
            <li className="flex gap-3 text-sm"><span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span><span>30-minute onboarding session to capture your customers, offer, and goals</span></li>
            <li className="flex gap-3 text-sm"><span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span><span>Custom templates and automation flows &mdash; ready to run</span></li>
            <li className="flex gap-3 text-sm"><span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span><span>Walkthrough of how to operate and iterate each system</span></li>
            <li className="flex gap-3 text-sm"><span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span><span>30 days of follow-up support via email</span></li>
          </ul>
          <a
            href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Buy now &mdash; $149 AUD
          </a>
          <p className="text-xs text-gray-500 mt-4">
            No monthly retainer. No minimum term. Pay once, own the setup.
          </p>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-lg mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase bg-yellow-100 text-yellow-700 border border-yellow-300 px-4 py-1.5 rounded-full mb-6">
            Early access open
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight mb-4">
            Results incoming &mdash; be our first client
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            We launched MarketingAI to prove the model works before charging more.
            The $149 setup fee is deliberately low &mdash; because we want case studies, not just customers.
            If you&rsquo;re in early, you get our full attention.
          </p>
          <a
            href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get started &mdash; $149 AUD
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-200 px-6 py-8 text-center">
        <p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
          <strong>Important:</strong> Outcomes described on this page are illustrative only.
          MarketingAI does not guarantee specific marketing results, revenue outcomes, or timelines.
          Marketing system performance depends on your industry, offer, and audience.
          All work is performed by a sole trader operating under Australian Consumer Law.
        </p>
        <p className="text-xs text-gray-400 mt-2">&copy; 2026 MarketingAI &middot; Australia</p>
      </footer>
    </main>
  );
}
