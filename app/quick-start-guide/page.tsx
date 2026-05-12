'use client';
import Image from 'next/image';

function trackEvent(action: string, params: Record<string, string | number>) {
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', action, params);
  }
}

export default function QuickStartGuidePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <a href="/"><Image src="/logo.jpg" alt="MarketingAI" width={40} height={40} className="rounded-md" /></a>
        <span className="text-xs font-bold bg-blue-600 text-white px-3 py-1 rounded-full tracking-wide">
          Australia
        </span>
      </nav>

      {/* HERO */}
      <section className="max-w-xl mx-auto px-6 py-16 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-5">
          Marketing Quick-Start Guide &mdash; $9 AUD
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
          Your personalised 5-step marketing action plan
        </h1>
        <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
          Not sure where to start with marketing your business? This guide gives you a clear,
          AI-generated action plan tailored to your situation &mdash; so you know exactly what to do first.
        </p>
        <a
          href="https://buy.stripe.com/8x24gBa7z5FT8qT15gbsc07"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors"
          onClick={() => trackEvent('cta_click_stripe', { page_title: 'Quick-Start Guide', price: 9 })}
        >
          Get the guide &mdash; $9 AUD
        </a>
        <p className="text-sm text-gray-400 mt-3">Instant digital delivery. No subscription.</p>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-gray-50 py-14 px-6 border-t border-gray-100">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">What&rsquo;s included</p>
          <h2 className="text-2xl font-extrabold tracking-tight mb-8">
            Your 5-step marketing checklist
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">1</div>
              <div>
                <h3 className="font-bold mb-1">Define your ideal customer</h3>
                <p className="text-sm text-gray-500">A clear, specific profile of who you&rsquo;re marketing to &mdash; their problem, where they hang out, and what they need to hear to buy from you.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">2</div>
              <div>
                <h3 className="font-bold mb-1">Pick your one primary channel</h3>
                <p className="text-sm text-gray-500">Stop spreading thin across 5 platforms. We identify the single best channel for your business and show you how to show up there consistently.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">3</div>
              <div>
                <h3 className="font-bold mb-1">Write your core offer message</h3>
                <p className="text-sm text-gray-500">A one-sentence description of what you do, who it&rsquo;s for, and the result you deliver. This becomes the foundation of all your marketing.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">4</div>
              <div>
                <h3 className="font-bold mb-1">Set up a simple lead capture</h3>
                <p className="text-sm text-gray-500">A basic email opt-in or contact point so you own your audience. No complicated funnels &mdash; just one way to capture and follow up with interested people.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">5</div>
              <div>
                <h3 className="font-bold mb-1">Your 30-day action plan</h3>
                <p className="text-sm text-gray-500">Week-by-week tasks to get your marketing foundations in place. Specific, achievable, and tailored to your business &mdash; not generic advice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-md mx-auto text-center">
          <div className="text-5xl font-extrabold tracking-tight mb-1">$9 <span className="text-xl font-semibold text-gray-500">AUD</span></div>
          <p className="text-gray-500 text-sm mb-6">One-time. Instant digital delivery.</p>
          <a
            href="https://buy.stripe.com/8x24gBa7z5FT8qT15gbsc07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors"
            onClick={() => trackEvent('cta_click_stripe', { page_title: 'Quick-Start Guide', price: 9 })}
          >
            Get the guide &mdash; $9 AUD
          </a>
          <p className="text-sm text-gray-400 mt-4">
            Want more depth?{' '}
            <a href="/audit" className="text-blue-600 hover:text-blue-800 font-semibold">
              Get a full $49 Marketing Audit &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-200 px-6 py-8 text-center">
        <p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
          <strong>Important:</strong> The guide provides general marketing guidance and a structured action framework.
          Results depend on your business, industry, offer, and execution.
          MarketingAI does not guarantee specific revenue outcomes or timelines.
          All work is performed by a sole trader operating under Australian Consumer Law.
        </p>
        <p className="text-xs text-gray-400 mt-2">&copy; 2026 MarketingAI &middot; Australia</p>
      </footer>
    </main>
  );
}
