import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sample Marketing Audit — Smile Dental | MarketingAI',
  description: 'See exactly what you get. A real marketing audit for a dental practice — social media strategy, content calendar, email sequences, competitive positioning, and 30-day roadmap. Your business next for $49.',
  openGraph: {
    title: 'See a Real Marketing Audit — MarketingAI',
    description: 'This is what $49 gets you. A complete, personalised marketing audit with social strategy, content calendar, email sequences and a 30-day roadmap.',
    type: 'website',
  },
};

const STRIPE_LINK = 'https://buy.stripe.com/aFa6oJgvX7O10YrdS2bsc02';

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-1">{label}</p>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">{title}</h2>
    </div>
  );
}

function Divider() {
  return <hr className="border-gray-200 my-10" />;
}

function CTABanner({ variant = 'default' }: { variant?: 'default' | 'bottom' }) {
  const isBottom = variant === 'bottom';
  return (
    <div className={`${isBottom ? 'bg-blue-700' : 'bg-blue-600'} rounded-2xl px-8 py-10 text-center text-white`}>
      <p className="text-xs font-bold tracking-widest uppercase opacity-80 mb-3">
        {isBottom ? 'Ready to get yours?' : 'Your business is next'}
      </p>
      <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
        Get your personalised marketing audit — $49 AUD
      </h3>
      <p className="text-blue-100 mb-6 max-w-lg mx-auto">
        Everything above, built for your business, your industry, and your specific competitors. Delivered within 24 hours.
      </p>
      <a
        href={STRIPE_LINK}
        className="inline-block bg-white text-blue-700 font-extrabold px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors"
      >
        Get my audit — $49 AUD →
      </a>
      <p className="text-xs text-blue-200 mt-3">Secure payment via Stripe. One-time charge. No subscription.</p>
    </div>
  );
}

export default function SampleAuditPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Link href="/"><Image src="/logo.jpg" alt="MarketingAI" width={40} height={40} className="rounded-md" /></Link>
        <a
          href={STRIPE_LINK}
          className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          Get my audit — $49 →
        </a>
      </nav>

      {/* HERO */}
      <section className="bg-gray-50 border-b border-gray-200 px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Sample audit — dental practice</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-5">
            See exactly what you&rsquo;re getting before you pay
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mb-8">
            This is a real marketing audit — built for a fictional dental practice called <strong className="text-gray-700">Smile Dental</strong>.
            Every section you see below is what we build for your business, personalised to your industry, your competitors, and your goals.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <span className="bg-white border border-gray-200 px-4 py-2 rounded-full">Social media strategy</span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded-full">30-day content calendar</span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded-full">Email nurture sequences</span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded-full">Competitive positioning</span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded-full">Priority roadmap</span>
          </div>
        </div>
      </section>

      {/* AUDIT DOCUMENT */}
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* AUDIT HEADER — Looks like a real document cover */}
        <div className="border-2 border-blue-100 rounded-2xl bg-blue-50 p-8 mb-12">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-1">Marketing Audit</p>
              <h2 className="text-3xl font-extrabold text-gray-900">Smile Dental</h2>
              <p className="text-gray-500 mt-1">General dentistry practice &middot; Melbourne, VIC</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 mb-1">Prepared by</p>
              <p className="font-bold text-gray-700">MarketingAI</p>
              <p className="text-xs text-gray-400 mt-1">May 2026</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 text-center border border-blue-100">
              <p className="text-2xl font-extrabold text-blue-600">3</p>
              <p className="text-xs text-gray-500 mt-1">Key gaps identified</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-blue-100">
              <p className="text-2xl font-extrabold text-blue-600">30</p>
              <p className="text-xs text-gray-500 mt-1">Days of content planned</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-blue-100">
              <p className="text-2xl font-extrabold text-blue-600">3</p>
              <p className="text-xs text-gray-500 mt-1">Email sequences ready</p>
            </div>
          </div>
        </div>

        {/* SECTION 1 — GAPS ANALYSIS */}
        <SectionHeader label="Section 1 of 5" title="Marketing gaps analysis" />
        <p className="text-gray-500 mb-6">
          Based on your business profile, here are the three most significant gaps holding Smile Dental back from consistent new patient growth.
        </p>

        <div className="space-y-4 mb-8">
          <div className="border-l-4 border-red-400 pl-5 py-2">
            <h3 className="font-bold text-gray-900 mb-1">Gap 1 — No consistent content presence</h3>
            <p className="text-sm text-gray-600">
              Smile Dental posts on Facebook 2–3 times per month with no defined theme or posting schedule. Potential patients who see the page get no sense of authority or speciality. Competitors like <strong>Bright Smiles Clinic</strong> post 4× per week with educational content that dominates local search and social feeds.
            </p>
          </div>
          <div className="border-l-4 border-orange-400 pl-5 py-2">
            <h3 className="font-bold text-gray-900 mb-1">Gap 2 — No email nurture system</h3>
            <p className="text-sm text-gray-600">
              Patients who enquire but don&rsquo;t book immediately receive no follow-up. Without a nurture sequence, warm leads go cold within 72 hours. The practice has no automated way to re-engage them. Estimated 15–20% of enquiries could convert with a structured 3-email sequence.
            </p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-5 py-2">
            <h3 className="font-bold text-gray-900 mb-1">Gap 3 — Undifferentiated positioning</h3>
            <p className="text-sm text-gray-600">
              Current messaging ("Family dentist in Melbourne") matches every competitor in the area. There is no articulation of why Smile Dental&rsquo;s 15-year experience with anxious patients creates a meaningfully different experience. This positioning gap makes it impossible to compete on anything except price.
            </p>
          </div>
        </div>

        <Divider />

        {/* SECTION 2 — SOCIAL MEDIA STRATEGY */}
        <SectionHeader label="Section 2 of 5" title="Social media strategy" />
        <p className="text-gray-500 mb-6">
          A focused LinkedIn and Facebook strategy for Smile Dental based on where trust-based, high-value patients actually engage.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-3">Recommended platform focus</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">Facebook (primary) — 4×/week</p>
              <p className="text-sm text-gray-500">Local community engagement. Target: Melbourne parents and professionals aged 30–55. Emphasis on trust, comfort, and experience.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">Google Business Profile — 2×/week</p>
              <p className="text-sm text-gray-500">Posts tied to search intent: "emergency dentist Melbourne", "family dentist CBD". Direct link to booking.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Content themes (4 rotating)</h3>
          <div className="space-y-3">
            {[
              { theme: 'Trust Builder', desc: 'Behind-the-scenes: meet the team, explain procedures, show your sterilisation process. Reduces anxiety before the first visit.', color: 'bg-blue-100 text-blue-700' },
              { theme: 'Patient Win', desc: 'Anonymous stories ("One of our nervous patients came in for the first time in 8 years…"). Social proof that speaks to the anxious patient persona.', color: 'bg-green-100 text-green-700' },
              { theme: 'Education', desc: 'Quick tips: "3 signs your child needs to see a dentist", "What happens if you leave a cracked tooth". Positions you as the authority.', color: 'bg-purple-100 text-purple-700' },
              { theme: 'Community', desc: 'Local Melbourne content. School holidays, AFL season, local events. Makes you part of the community, not just a business in it.', color: 'bg-orange-100 text-orange-700' },
            ].map((item) => (
              <div key={item.theme} className="flex gap-3 items-start">
                <span className={`text-xs font-bold px-2 py-1 rounded-full mt-0.5 whitespace-nowrap ${item.color}`}>{item.theme}</span>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* SECTION 3 — CONTENT CALENDAR */}
        <SectionHeader label="Section 3 of 5" title="30-day content calendar preview" />
        <p className="text-gray-500 mb-6">
          The first two weeks of your content calendar — every post scripted and ready to schedule.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 rounded-tl-lg">Day</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Theme</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 rounded-tr-lg">Post hook</th>
              </tr>
            </thead>
            <tbody>
              {[
                { day: 'Mon 1', theme: 'Trust Builder', hook: '"We know dentists make most people nervous. Here\'s what we do differently before you even sit in the chair…"' },
                { day: 'Wed 3', theme: 'Education', hook: '"3 things dentists wish their patients knew about coffee stains (and it\'s not what you think)"' },
                { day: 'Fri 5', theme: 'Patient Win', hook: '"Sarah hadn\'t been to a dentist in 9 years. She booked after reading this post. Here\'s what she said after her visit…"' },
                { day: 'Mon 8', theme: 'Community', hook: '"If you\'re in the Fitzroy area this weekend, here\'s something we love about the local community market…"' },
                { day: 'Wed 10', theme: 'Trust Builder', hook: '"Behind the scenes: what happens to our instruments between patients (the full sterilisation process)"' },
                { day: 'Fri 12', theme: 'Education', hook: '"A cracked tooth vs a broken tooth — the difference matters, and so does the timing. Here\'s why…"' },
                { day: 'Mon 15', theme: 'Patient Win', hook: '"He came in expecting to lose the tooth. He left with his smile intact. What changed?"' },
                { day: 'Wed 17', theme: 'Community', hook: '"School holidays are here. A quick checklist for kids\' dental health before term 3 starts."' },
              ].map((row) => (
                <tr key={row.day} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">{row.day}</td>
                  <td className="px-4 py-3">
                    <span className="text-xs font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{row.theme}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 italic">{row.hook}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-400 mb-4 text-center">
          Showing 8 of 30 posts &mdash; full calendar delivered with your audit.
        </p>

        <Divider />

        {/* SECTION 4 — EMAIL SEQUENCES */}
        <SectionHeader label="Section 4 of 5" title="Email nurture sequences" />
        <p className="text-gray-500 mb-6">
          Three emails designed to turn a warm enquiry into a booked appointment — without pressure or spam.
        </p>

        <div className="space-y-5 mb-6">
          {/* Email 1 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email 1 of 3 — Sent immediately after enquiry</span>
              <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">Credibility</span>
            </div>
            <div className="px-5 py-4">
              <p className="text-sm font-semibold text-gray-700 mb-1">Subject: Thanks for reaching out — what happens next</p>
              <div className="text-sm text-gray-600 space-y-2">
                <p>Hi [First name],</p>
                <p>Thanks for getting in touch. We know choosing a dentist takes a bit of trust, and we don&rsquo;t take that lightly.</p>
                <p>Here&rsquo;s what you can expect when you come in: a no-rush appointment, plain English explanations of everything we find, and a plan you&rsquo;re comfortable with before we do anything.</p>
                <p>We&rsquo;ve been looking after Melbourne families for 15 years — many of our patients were nervous on their first visit. Almost all of them are now regulars who bring their kids.</p>
                <p>A team member will be in touch within one business day to confirm your booking. If you have any questions in the meantime, reply to this email.</p>
                <p className="text-gray-400">— The Smile Dental team</p>
              </div>
            </div>
          </div>

          {/* Email 2 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email 2 of 3 — Sent 48 hours later (if not booked)</span>
              <span className="text-xs bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">Value</span>
            </div>
            <div className="px-5 py-4">
              <p className="text-sm font-semibold text-gray-700 mb-1">Subject: One thing most dentists don&rsquo;t tell you upfront</p>
              <div className="text-sm text-gray-600 space-y-2">
                <p>Hi [First name],</p>
                <p>Most people put off dentist appointments because they don&rsquo;t know what to expect — and the not knowing feels worse than the visit itself.</p>
                <p>So here&rsquo;s what a first visit to Smile Dental actually looks like: 45 minutes, a gentle check-up, X-rays if needed, and a clear picture of where your teeth are at. No upselling, no judgment.</p>
                <p>If it&rsquo;s been a while — even a long while — we&rsquo;ve seen it all. You won&rsquo;t be lectured.</p>
                <p>Ready to book? <strong>[Book online here]</strong></p>
                <p className="text-gray-400">— Sarah, Smile Dental</p>
              </div>
            </div>
          </div>

          {/* Email 3 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email 3 of 3 — Sent 5 days later</span>
              <span className="text-xs bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-full">CTA</span>
            </div>
            <div className="px-5 py-4">
              <p className="text-sm font-semibold text-gray-700 mb-1">Subject: Still happy to help whenever you&rsquo;re ready</p>
              <div className="text-sm text-gray-600 space-y-2">
                <p>Hi [First name],</p>
                <p>No pressure at all — we know timing isn&rsquo;t always right.</p>
                <p>When you&rsquo;re ready, our online booking is open and we&rsquo;re usually able to fit new patients within a week. We hold a few spots each week for people who are a bit nervous or haven&rsquo;t been in a while.</p>
                <p><strong>[Book when you&rsquo;re ready →]</strong></p>
                <p>If you have questions first, just reply to this email. We&rsquo;re happy to answer anything before you commit to a visit.</p>
                <p className="text-gray-400">— The Smile Dental team</p>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* SECTION 5 — COMPETITIVE POSITIONING + ROADMAP */}
        <SectionHeader label="Section 5 of 5" title="Competitive positioning &amp; 30-day roadmap" />

        <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Competitive positioning</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-700">Practice</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-700">Positioning</th>
                  <th className="text-left py-2 font-semibold text-gray-700">Gap you can own</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">Bright Smiles Clinic</td>
                  <td className="py-2 pr-4 text-gray-500">"Modern dentistry, affordable prices"</td>
                  <td className="py-2 text-gray-500">Price-focused. No warmth.</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium">CBD Dental</td>
                  <td className="py-2 pr-4 text-gray-500">"Professional, city-based"</td>
                  <td className="py-2 text-gray-500">Corporate tone. Not community.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-bold text-blue-700">Smile Dental ✓</td>
                  <td className="py-2 pr-4 text-blue-700 font-medium">"The dentist for people who hate going"</td>
                  <td className="py-2 text-blue-700 font-medium">Own the nervous-patient niche.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            <strong className="text-gray-700">Recommended positioning statement:</strong> &ldquo;Smile Dental is the Melbourne practice built for people who&rsquo;ve been putting off their appointment. 15 years of experience with anxious patients. No judgment. Clear plans.&rdquo;
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">30-day priority roadmap</h3>
          <div className="space-y-4">
            {[
              { week: 'Week 1', title: 'Set up your content system', tasks: ['Create Facebook content calendar for weeks 1–4', 'Write your bio using the new positioning statement', 'Set up Google Business Profile posts'] },
              { week: 'Week 2', title: 'Launch email nurture', tasks: ['Load 3-email sequence into your email tool', 'Connect enquiry form to automation trigger', 'Test the sequence end-to-end'] },
              { week: 'Week 3', title: 'Amplify and engage', tasks: ['Post all Week 1 content per calendar', 'Respond to all comments within 24h', 'Share Week 2 content — vary format (photo vs video)'] },
              { week: 'Week 4', title: 'Review and double down', tasks: ['Check which posts got the most engagement', 'Identify which email had the best open rate', 'Write 4 posts modelled on your best performers'] },
            ].map((item) => (
              <div key={item.week} className="flex gap-4">
                <div className="w-20 shrink-0">
                  <span className="text-xs font-bold bg-blue-600 text-white px-2 py-1 rounded-full">{item.week}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {item.tasks.map((task) => (
                      <li key={task} className="flex gap-2"><span className="text-green-500">✓</span>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* WHAT MAKES YOURS DIFFERENT */}
        <section className="mb-10">
          <SectionHeader label="Your audit" title="What makes yours different" />
          <p className="text-gray-500 mb-6">
            The Smile Dental audit above is a real example. But here&rsquo;s what changes when we build yours:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '🏢', title: 'Your industry', desc: 'The content themes, post hooks, and email tone are all rewritten for your specific sector — whether you\'re a mortgage broker, tradie, allied health professional, or business coach.' },
              { icon: '🎯', title: 'Your competitors', desc: 'We research who\'s actually competing with you locally, what they\'re doing, and where the gap is. Your positioning is built to own what they\'re missing.' },
              { icon: '🗣️', title: 'Your voice', desc: 'The email sequences and post copy are written in your tone — not generic corporate language. We match how you actually talk to clients.' },
              { icon: '📍', title: 'Your goals', desc: 'If you want to attract referrals, generate enquiries, or convert more warm leads — the roadmap is built around your specific conversion objective.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <CTABanner variant="default" />

        <Divider />

        {/* SOCIAL PROOF / TRUST SIGNALS */}
        <section className="mb-10 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Built for Australian small businesses</p>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-extrabold text-blue-600">24h</p>
              <p className="text-sm text-gray-500 mt-1">Delivery turnaround</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-blue-600">$49</p>
              <p className="text-sm text-gray-500 mt-1">One-time. No subscription.</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-blue-600">100%</p>
              <p className="text-sm text-gray-500 mt-1">Personalised to you</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold tracking-tight mb-6 text-center">Common questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How is this different from generic AI content?', a: 'We use AI tools, but the output is tailored to your business profile, your competitors, and your audience. You don\'t get a template — you get a strategy built for your specific situation.' },
              { q: 'What do you need from me?', a: 'After payment, you\'ll get a short intake form (5–7 questions). Your business name, industry, target customer, current marketing, biggest challenge, and website if you have one. Takes about 10 minutes.' },
              { q: 'Do I need to be on LinkedIn?', a: 'No. The audit adapts to where your customers actually are. Most of our Australian small business clients focus on Facebook, Google Business Profile, or email — not LinkedIn.' },
              { q: 'Can I use this to upgrade to the full system later?', a: 'Yes. The $49 applies as credit toward the $149 full marketing system setup. Just mention the audit when you enquire.' },
              { q: 'What if I\'m not happy with it?', a: 'We include one revision round within 7 days of delivery. If something doesn\'t fit your voice or business, we fix it.' },
            ].map((item) => (
              <details key={item.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-50 flex items-center justify-between list-none">
                  {item.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform text-lg">↓</span>
                </summary>
                <div className="px-5 pb-4 pt-2 text-sm text-gray-600 border-t border-gray-100">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <CTABanner variant="bottom" />

        {/* DISCLAIMER */}
        <p className="text-xs text-gray-400 text-center mt-8">
          Outcomes vary by business, market, offer quality, and execution consistency. MarketingAI configures and delivers marketing systems — results are not guaranteed and depend on how the client uses the system in their specific context.
        </p>
      </div>
    </main>
  );
}
