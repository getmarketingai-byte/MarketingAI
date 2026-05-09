'use client';

import { useState } from 'react';

function trackEvent(action: string, params: Record<string, string | number>) {
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', action, params);
  }
}

export default function AuditPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    marketingChannels: '',
    challenge: '',
    websiteUrl: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      trackEvent('audit_checkout_started', { price: 49 });

      const res = await fetch('/api/create-audit-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        setError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError('Connection error. Please try again.');
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-extrabold text-lg tracking-tight">MarketingAI</a>
        <span className="text-xs font-bold bg-blue-600 text-white px-3 py-1 rounded-full tracking-wide">
          Australia
        </span>
      </nav>

      {/* HERO */}
      <section className="max-w-2xl mx-auto px-6 py-16 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-5">
          AI Marketing Audit &mdash; $49 AUD
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
          Get a personalised marketing audit for your business
        </h1>
        <p className="text-lg text-gray-500 mb-4 max-w-xl mx-auto">
          Tell us about your business. We&rsquo;ll deliver a 3-page audit within 24 hours &mdash;
          your specific gaps, 3 actionable fixes, and a 30-day priority roadmap.
        </p>
        <p className="text-sm text-blue-700 font-semibold bg-blue-50 inline-block px-4 py-2 rounded-full">
          Upgrade later? We&rsquo;ll apply the $49 as credit toward the $149 full setup.
        </p>
        <p className="mt-4">
          <a href="/audit/sample" className="text-sm text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2">
            Not sure what you&rsquo;re getting? See a sample audit first &rarr;
          </a>
        </p>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold tracking-tight mb-8 text-center">What&rsquo;s in your audit</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="text-2xl mb-3">&#128269;</div>
              <h3 className="font-bold mb-2">Marketing gaps analysis</h3>
              <p className="text-sm text-gray-500">Specific gaps in your current marketing &mdash; based on your answers, not generic advice.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="text-2xl mb-3">&#9989;</div>
              <h3 className="font-bold mb-2">3 actionable recommendations</h3>
              <p className="text-sm text-gray-500">Concrete steps you can take this week. No fluff, no agency jargon.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="text-2xl mb-3">&#128197;</div>
              <h3 className="font-bold mb-2">30-day priority roadmap</h3>
              <p className="text-sm text-gray-500">A clear sequence of what to do and when &mdash; built around your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK-START ALTERNATIVE */}
      <section className="max-w-xl mx-auto px-6 py-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
          <p className="text-sm font-semibold text-gray-700 mb-1">Just need a quick start?</p>
          <a
            href="https://buy.stripe.com/8x24gBa7z5FT8qT15gbsc07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-900 font-bold text-sm"
            onClick={() => trackEvent('cta_click_quickstart', { page_title: 'Audit', price: 9 })}
          >Get your personalised marketing action plan for $9 &rarr;</a>
          <p className="text-xs text-gray-500 mt-1">Top 5 channels, 30-day content calendar outline, post templates &amp; positioning framework — delivered instantly.</p>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-extrabold tracking-tight mb-2 text-center">Tell us about your business</h2>
        <p className="text-sm text-gray-500 text-center mb-8">Fill this in, pay $49, and receive your audit within 24 hours.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="businessName">
              Business name <span className="text-red-500">*</span>
            </label>
            <input
              id="businessName"
              type="text"
              required
              placeholder="e.g. Smith & Co Plumbing"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.businessName}
              onChange={e => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="industry">
              Industry <span className="text-red-500">*</span>
            </label>
            <input
              id="industry"
              type="text"
              required
              placeholder="e.g. Tradie / Real estate / Professional services"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.industry}
              onChange={e => setFormData(prev => ({ ...prev, industry: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="marketingChannels">
              Current marketing channels <span className="text-red-500">*</span>
            </label>
            <input
              id="marketingChannels"
              type="text"
              required
              placeholder="e.g. Word of mouth, Facebook, Google ads"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.marketingChannels}
              onChange={e => setFormData(prev => ({ ...prev, marketingChannels: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="challenge">
              Biggest marketing challenge <span className="text-red-500">*</span>
            </label>
            <textarea
              id="challenge"
              required
              rows={3}
              placeholder="e.g. I get referrals but can't generate leads consistently"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              value={formData.challenge}
              onChange={e => setFormData(prev => ({ ...prev, challenge: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="websiteUrl">
              Website URL <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="websiteUrl"
              type="url"
              placeholder="https://yourwebsite.com.au"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.websiteUrl}
              onChange={e => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="email">
              Your email address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@yourcompany.com.au"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
            <p className="text-xs text-gray-400 mt-1">We&rsquo;ll deliver your audit to this address within 24 hours.</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            {loading ? 'Setting up payment...' : 'Get my audit \u2014 $49 AUD \u2192'}
          </button>

          <p className="text-xs text-gray-400 text-center">
            Secure payment via Stripe. One-time charge. No subscription.
          </p>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-8 px-6 text-center">
        <p className="text-sm text-gray-400">
          MarketingAI &middot; Australian Marketing Automation &middot;{' '}
          <a href="/privacy" className="hover:text-gray-600">Privacy</a>
        </p>
      </footer>
    </main>
  );
}
