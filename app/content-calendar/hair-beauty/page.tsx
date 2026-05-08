import type { Metadata } from 'next';
import EmailCaptureCalendar from './EmailCaptureCalendar';

export const metadata: Metadata = {
  title: '30-Day LinkedIn Content Calendar for Hair & Beauty Salons | MarketingAI',
  description:
    '30 done-for-you LinkedIn post prompts tailored for Australian hair and beauty salons. Instant download, $19 AUD.',
};

export default function HairBeautyContentCalendarPage() {
  const stripeLink = 'https://buy.stripe.com/5kQ28tdjL3xLePhbJUbsc0b';

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section style={{ background: '#1a1a2e' }} className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            For Australian Hair &amp; Beauty Salons
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Stop Letting Your Competitors<br />Steal the Spotlight.
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            30 done-for-you LinkedIn post prompts, crafted specifically for Australian hair and beauty salons.
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
              "Beauty content feels like it belongs on Instagram \u2014 LinkedIn feels corporate and stiff for your brand.",
              "You know you should be building your online profile, but every post feels forced or fake.",
              "You\u2019re spending all your time on clients, not content \u2014 and your online presence shows it.",
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
              "4 proven content themes: expertise showcasing, transformation stories, seasonal services, and team culture",
              "Best posting times for the Australian professional audience",
              "5 engagement comment templates to grow your local business network",
              "Hashtag strategy for hair, beauty, and wellness professionals",
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
