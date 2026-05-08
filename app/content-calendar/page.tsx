import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LinkedIn Content Calendars for Australian Professionals | MarketingAI',
  description:
    'Done-for-you LinkedIn content calendars for Australian professionals. Choose your industry: Mortgage Brokers, Real Estate Agents, Personal Trainers, Accountants. $19 AUD each.',
};

const niches = [
  {
    name: 'Mortgage Brokers',
    slug: 'mortgage-brokers',
    description: '30 LinkedIn post prompts crafted for Australian mortgage brokers.',
  },
  {
    name: 'Real Estate Agents',
    slug: 'real-estate-agents',
    description: '30 LinkedIn post prompts crafted for Australian real estate agents.',
  },
  {
    name: 'Personal Trainers',
    slug: 'personal-trainers',
    description: '30 LinkedIn post prompts crafted for Australian personal trainers.',
  },
  {
    name: 'Accountants',
    slug: 'accountants',
    description: '30 LinkedIn post prompts crafted for Australian accountants.',
  },
];

export default function ContentCalendarIndexPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section style={{ background: '#1a1a2e' }} className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            30 Days of LinkedIn Posts. Done For You.
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Pick your industry. Get instant access to 30 post prompts crafted for Australian professionals.
          </p>
        </div>
      </section>

      {/* Bundle upsell banner */}
      <div className="bg-yellow-50 border-y border-yellow-200 py-4 px-6 text-center">
        <p className="text-gray-800 font-semibold">
          Get all 4 for $49 &mdash; save 35%{' '}
          <Link href="/content-calendar/bundle" className="text-blue-600 underline font-bold">
            View bundle &rarr;
          </Link>
        </p>
      </div>

      {/* Niche cards */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {niches.map((niche) => (
              <div
                key={niche.slug}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col gap-4"
              >
                <h2 className="text-xl font-extrabold text-gray-900">{niche.name}</h2>
                <p className="text-gray-600 text-sm flex-1">{niche.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-gray-900">$19 AUD</span>
                  <Link
                    href={`/content-calendar/${niche.slug}`}
                    className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                  >
                    Get Instant Access
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom bundle CTA */}
      <section className="py-12 px-6 text-center" style={{ background: '#1a1a2e' }}>
        <div className="max-w-xl mx-auto">
          <p className="text-gray-300 mb-6 text-lg">
            Not sure which to pick? Get all 4 for $49 and save 35%.
          </p>
          <Link
            href="/content-calendar/bundle"
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-extrabold text-lg px-10 py-5 rounded-xl shadow-lg transition-colors"
          >
            Get the Bundle
          </Link>
        </div>
      </section>
    </main>
  );
}
