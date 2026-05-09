'use client';

import EmailCaptureSection from './components/EmailCaptureSection';

function trackEvent(action: string, params: Record<string, any>) {
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', action, params);
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <span className="font-extrabold text-lg tracking-tight">MarketingAI</span>
        <div className="flex items-center gap-4">
          <a href="/products" className="text-sm font-semibold text-gray-600 hover:text-orange-500">Products</a>
          <span className="text-xs font-bold bg-blue-600 text-white px-3 py-1 rounded-full tracking-wide">
            Australia
          </span>
        </div>
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
        <div className="flex flex-wrap gap-3 justify-center">
          <a
             href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
             onClick={() => trackEvent('cta_click_stripe', { page_title: 'Home', price: 149 })}
           >
             Get started &mdash; $149 AUD
           </a>
           <a
             href="#early-access"
             className="inline-block border border-gray-300 hover:border-gray-600 text-gray-700 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
           >
             Download the free checklist
           </a>
        </div>
        <p className="text-sm text-gray-400 mt-4">One-time setup fee. No lock-in. No monthly retainer.</p>
        <div className="mt-6 max-w-md mx-auto space-y-3">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm font-semibold text-gray-700 mb-1">Not sure yet?</p>
            <a href="/audit" className="text-blue-600 hover:text-blue-800 font-bold text-sm" onClick={() => trackEvent('cta_click_audit', { page_title: 'Home', price: 49 })}>Try a $49 marketing audit first &rarr;</a>
            <p className="text-xs text-gray-400 mt-1">Get a personalised report. Apply the $49 toward the full $149 setup.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-100">
            <p className="text-sm font-semibold text-gray-700 mb-1">Not ready for a full audit? Start here.</p>
            <a
              href="https://buy.stripe.com/8x24gBa7z5FT8qT15gbsc07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-900 font-bold text-sm"
              onClick={() => trackEvent('cta_click_quickstart', { page_title: 'Home', price: 9 })}
            >Marketing Quick-Start Guide &mdash; $9 AUD &rarr;</a>
            <p className="text-xs text-gray-400 mt-1">Top 5 channels, 30-day content outline, post templates &amp; positioning framework. Delivered instantly.</p>
          </div>
        </div>
      </section>


      {/* PRODUCTS */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3 text-center">Everything we offer</p>
          <h2 className="text-2xl font-extrabold tracking-tight mb-8 text-center">Start where it makes sense for you</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 bg-white rounded-xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold tracking-widest uppercase text-blue-600">Quick Start</p>
                <span className="text-lg font-extrabold text-gray-900">$9 AUD</span>
              </div>
              <h3 className="font-bold text-base mb-2">Marketing Quick-Start Guide</h3>
              <p className="text-sm text-gray-500 mb-4 flex-1">A personalised 5-step marketing action plan for your business. Instant delivery.</p>
              <a href="/quick-start-guide" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors">Get the guide &mdash; $9 AUD</a>
            </div>
            <div className="border border-gray-200 bg-white rounded-xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold tracking-widest uppercase text-blue-600">Done For You</p>
                <span className="text-lg font-extrabold text-gray-900">$19 AUD</span>
              </div>
              <h3 className="font-bold text-base mb-2">Industry Content Calendar</h3>
              <p className="text-sm text-gray-500 mb-4 flex-1">30 LinkedIn post prompts written for your industry. Post with confidence from day one.</p>
              <a href="/content-calendar" className="block text-center border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors">Browse calendars &mdash; $19 AUD</a>
            </div>
            <div className="border border-gray-200 bg-white rounded-xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold tracking-widest uppercase text-blue-600">Personalised Audit</p>
                <span className="text-lg font-extrabold text-gray-900">$49 AUD</span>
              </div>
              <h3 className="font-bold text-base mb-2">AI Marketing Audit</h3>
              <p className="text-sm text-gray-500 mb-3 flex-1">A 3-page audit of your marketing gaps, 3 actionable fixes, and a 30-day priority roadmap.</p>
              <a href="/audit/sample" className="text-xs text-blue-500 hover:text-blue-700 mb-3 inline-block">See a sample audit &rarr;</a>
              <a href="/audit" className="block text-center border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors">Get your audit &mdash; $49 AUD</a>
            </div>
            <div className="border border-gray-200 bg-white rounded-xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold tracking-widest uppercase text-green-600">Best Value</p>
                <span className="text-lg font-extrabold text-gray-900">$49 AUD</span>
              </div>
              <h3 className="font-bold text-base mb-2">Content Calendar Bundle</h3>
              <p className="text-sm text-gray-500 mb-4 flex-1">All 4 industry content calendars &mdash; 120 LinkedIn prompts across mortgage, real estate, personal training &amp; accounting.</p>
              <a href="/content-calendar/bundle" className="block text-center border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 font-bold px-4 py-2 rounded-lg text-sm transition-colors">Get the bundle &mdash; $49 AUD</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROMPT PACK CTA */}
      <section className="bg-blue-50 border-y border-blue-100 py-10 px-6">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-1">New — instant download</p>
            <h2 className="text-xl font-extrabold tracking-tight mb-1">
              50 AI Marketing Prompts for Australian Small Business
            </h2>
            <p className="text-sm text-gray-600">
              Ready-to-use prompts across 7 categories. Fill-in-the-blank format. Works with any AI tool.
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-2 flex-shrink-0">
            <div className="text-3xl font-extrabold text-gray-900">A$19</div>
            <a
              href="https://marketgenius4.gumroad.com/l/crtwc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg text-base transition-colors whitespace-nowrap"
              onClick={() => trackEvent('cta_click_prompt_pack', { page_title: 'Home', price: 19 })}
            >
              Buy now &mdash; A$19
            </a>
          </div>
        </div>
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
              <h3 className="font-bold text-base mb-2">AI Content Engine</h3>
              <p className="text-sm text-gray-500">A lead capture and nurture system that turns website visitors and social followers into contacts you can actually talk to. AI-assisted copy, automated follow-up, and clear conversion tracking &mdash; all configured for your specific business and audience.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">System 2</p>
              <h3 className="font-bold text-base mb-2">Outbound Lead Sequence</h3>
              <p className="text-sm text-gray-500">Structured, personalised outreach to the right people &mdash; not mass spam. A targeted sequence that identifies your ideal customers, crafts relevant messages, and follows up automatically so you stay top of mind without lifting a finger.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">System 3</p>
              <h3 className="font-bold text-base mb-2">Email Nurture Sequence</h3>
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
          <p className="text-gray-400 text-sm mb-2">One-time. No ongoing fees. No lock-in.</p>
          <p className="text-gray-500 text-xs mb-8">Agencies charge $2,000&ndash;$5,000/month. You pay $149 once.</p>
          <ul className="text-left space-y-3 mb-8">
            <li className="flex gap-3 text-sm"><span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span><span>Full setup of all three systems (AI Content Engine, Outbound Lead Sequence, Email Nurture Sequence)</span></li>
            <li className="flex gap-3 text-sm"><span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span><span>1 x 45-minute discovery call (voice or video)</span></li>
            <li className="flex gap-3 text-sm"><span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span><span>All three systems drafted and delivered within 3-5 business days</span></li>
            <li className="flex gap-3 text-sm"><span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span><span>1 x revision round on any deliverable within 7 days of delivery</span></li>
          </ul>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              onClick={() => trackEvent('cta_click_stripe', { page_title: 'Home', price: 149 })}
            >
              Buy now &mdash; $149 AUD
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            No monthly retainer. No minimum term. Pay once, own the setup.
          </p>
        </div>
      </section>

      {/* CONTENT CALENDARS */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">Quick win &mdash; $19 AUD</p>
          <h2 className="text-2xl font-extrabold tracking-tight mb-4">
            Not ready for the full setup? Start with a done-for-you content calendar.
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-xl mx-auto">
            30 LinkedIn post prompts, written for your industry. Pick your niche and post with confidence from day one.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { label: 'Mortgage Brokers', slug: 'mortgage-brokers' },
              { label: 'Real Estate Agents', slug: 'real-estate-agents' },
              { label: 'Dentists', slug: 'dentists' },
              { label: 'Photographers', slug: 'photographers' },
              { label: 'Accountants', slug: 'accountants' },
              { label: 'Personal Trainers', slug: 'personal-trainers' },
              { label: 'Cafes & Restaurants', slug: 'cafes-restaurants' },
              { label: 'Hair & Beauty', slug: 'hair-beauty' },
            ].map((niche) => (
              <a
                key={niche.slug}
                href={`/content-calendar/${niche.slug}`}
                className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center hover:border-blue-300 hover:bg-blue-50 transition-colors block"
              >
                <p className="font-semibold text-gray-900 text-xs">{niche.label}</p>
                <p className="text-xs text-blue-600 mt-0.5">$19 AUD</p>
              </a>
            ))}
          </div>
          <a
            href="/content-calendar"
            className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-3 rounded-lg transition-colors text-sm"
          >
            Browse all content calendars &rarr;
          </a>
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
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              onClick={() => trackEvent('cta_click_stripe', { page_title: 'Home', price: 149 })}
            >
              Get started &mdash; $149 AUD
            </a>
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <EmailCaptureSection />

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
