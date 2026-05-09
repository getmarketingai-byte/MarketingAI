import type { Metadata } from 'next';
import EmailCaptureCalendar from './EmailCaptureCalendar';

export const metadata: Metadata = {
  title: '30-Day LinkedIn Content Calendar for Cafes & Restaurants | MarketingAI',
  description:
    '30 done-for-you LinkedIn post prompts tailored for Australian cafes and restaurants. Instant download, $19 AUD.',
};

export default function CafesRestaurantsContentCalendarPage() {
  const stripeLink = 'https://buy.stripe.com/14A14pa7z4BP5eHaFQbsc09';

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section style={{ background: '#1a1a2e' }} className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            For Australian Cafes &amp; Restaurants
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Stop Scrambling for Content.<br />Start Filling Tables.
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            30 done-for-you LinkedIn post prompts, crafted specifically for Australian cafes and restaurants.
          </p>
          <a
            href={stripeLink}
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-extrabold text-lg px-10 py-5 rounded-xl shadow-lg transition-colors"
          >
            Get Instant Access &mdash; $19 AUD
          </a>
          <p className="text-gray-400 text-sm mt-4">Instant download. No calls. No waiting.</p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">Sound familiar?</h2>
          <ul className="space-y-5">
            {[
              "You\u2019re too busy running the kitchen to think about what to post on LinkedIn.",
              "Instagram gets all the attention, but your corporate catering clients are on LinkedIn \u2014 and you\u2019re invisible there.",
              "You know you should be building your business profile online. You just never get around to it.",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <span className="text-2xl" aria-hidden="true">&#128531;</span>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">What&rsquo;s inside</h2>
          <ul className="space-y-4">
            {[
              "30 LinkedIn post prompts \u2014 one for every day of the month",
              "4 proven content themes: customer experience, behind the scenes, seasonal menus, and local community",
              "Best posting times for the Australian professional audience",
              "5 engagement comment templates to grow your business network",
              "Hashtag strategy for hospitality and food businesses",
              "Formatted and ready to use \u2014 just fill in the blanks",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 font-bold text-lg" aria-hidden="true">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Email capture — BEFORE main CTA */}
      <div className="max-w-2xl mx-auto px-6">
        <EmailCaptureCalendar />
      </div>

      {/* Social proof */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-500 text-sm italic">
            Join 100+ Australian professionals who&rsquo;ve stopped guessing and started posting.
          </p>
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
            Ready to fill your content calendar?
          </h2>
          <p className="text-gray-300 mb-8">
            $19 AUD. Instant access. No lock-in.
          </p>
          <a
            href={stripeLink}
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-extrabold text-lg px-10 py-5 rounded-xl shadow-lg transition-colors"
          >
            Get Instant Access &mdash; $19 AUD
          </a>
        </div>
      </section>
    </main>
  );
}
