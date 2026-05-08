import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Calendar Bundle \u2014 All 4 Niches | MarketingAI',
  description:
    'Get all 4 LinkedIn content calendars in one bundle. Mortgage Brokers, Real Estate Agents, Personal Trainers & Accountants. $49 AUD \u2014 save 35% vs buying individually.',
};

export default function ContentCalendarBundlePage() {
  const stripeLink = 'https://buy.stripe.com/dRm5kF93vgkx36z01cbsc06';

  const niches = [
    { name: 'Mortgage Brokers', slug: 'mortgage-brokers' },
    { name: 'Real Estate Agents', slug: 'real-estate-agents' },
    { name: 'Personal Trainers', slug: 'personal-trainers' },
    { name: 'Accountants', slug: 'accountants' },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section style={{ background: '#1a1a2e' }} className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Best Value
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Get All 4 Content Calendars. Save 35%.
          </h1>
          <p className="text-xl text-gray-300 mb-4 leading-relaxed">
            120 done-for-you LinkedIn post prompts across 4 Australian industries. One low price.
          </p>
          <p className="text-2xl font-extrabold text-yellow-400 mb-8">
            $49 AUD &mdash; vs $76 if bought individually
          </p>
          <a
            href={stripeLink}
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-extrabold text-lg px-10 py-5 rounded-xl shadow-lg transition-colors"
          >
            Get the Bundle &mdash; $49 AUD
          </a>
          <p className="text-gray-400 text-sm mt-4">Instant download. No calls. No waiting.</p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
            Everything included in the bundle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {niches.map((niche) => (
              <div
                key={niche.slug}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center gap-4"
              >
                <span className="text-green-500 font-bold text-2xl" aria-hidden="true">&#10003;</span>
                <div>
                  <p className="font-extrabold text-gray-900">{niche.name} Content Calendar</p>
                  <p className="text-sm text-gray-500 mt-1">30 LinkedIn post prompts</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings callout */}
      <section className="py-12 px-6 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-xl mx-auto text-center space-y-2">
          <p className="text-gray-600">Individual price: <span className="line-through text-gray-400">$76 AUD</span> (4 &times; $19)</p>
          <p className="text-2xl font-extrabold text-gray-900">Bundle price: $49 AUD</p>
          <p className="text-green-600 font-bold">You save: $27 AUD (35% off)</p>
        </div>
      </section>

      {/* Footer disclaimer BEFORE main CTA */}
      <section className="py-4 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-gray-400">
            Results are indicative only. Outcomes depend on your consistency and audience.
          </p>
        </div>
      </section>

      {/* Main CTA */}
      <section className="py-16 px-6 text-center" style={{ background: '#1a1a2e' }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to fill 4 months of content calendars?
          </h2>
          <p className="text-gray-300 mb-8">
            $49 AUD. Instant access. All 4 industries.
          </p>
          <a
            href={stripeLink}
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-extrabold text-lg px-10 py-5 rounded-xl shadow-lg transition-colors"
          >
            Get the Bundle &mdash; $49 AUD
          </a>
        </div>
      </section>
    </main>
  );
}
