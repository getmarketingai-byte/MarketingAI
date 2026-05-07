import type { Metadata } from 'next';
import PrintButton from './PrintButton';

export const metadata: Metadata = {
  title: 'Your LinkedIn Content Calendar | MarketingAI',
  description: 'Your 30-Day LinkedIn Content Calendar for Mortgage Brokers — ready to use.',
};

const contentThemes = [
  { number: 1, name: 'Education', description: 'Demystifying the mortgage process' },
  { number: 2, name: 'Market Insights', description: 'Rates, property trends, RBA decisions' },
  { number: 3, name: 'Client Wins', description: 'Success stories and transformations' },
  { number: 4, name: 'Behind the Business', description: 'Your process, values, and expertise' },
];

const postingTimes = [
  'Tuesday–Thursday, 7:30–9:00am AEST (before the work day starts)',
  'Tuesday–Thursday, 12:00–1:00pm AEST (lunch scroll)',
  'Avoid Monday mornings and Friday afternoons',
];

const posts = [
  // Week 1 — Education
  { day: 1, theme: 'Education', hook: 'Most first home buyers don\'t know this about mortgage pre-approval...', topic: 'Pre-approval vs. conditional approval — what\'s the difference', cta: 'Drop a question in the comments if you\'re unsure where you stand.' },
  { day: 2, theme: 'Education', hook: 'The #1 mistake I see buyers make before they even talk to a broker...', topic: 'Credit score impacts on borrowing capacity', cta: 'Have you checked your credit score recently? Reply yes or no.' },
  { day: 3, theme: 'Education', hook: 'A fixed rate sounds safe. Here\'s when it actually isn\'t...', topic: 'Fixed vs. variable rates — when each makes sense', cta: 'Which are you leaning towards? Comment below.' },
  { day: 4, theme: 'Education', hook: 'What your bank won\'t tell you about comparison rates...', topic: 'How comparison rates hide true costs', cta: 'Tag someone buying a home this year — they need to see this.' },
  { day: 5, theme: 'Education', hook: 'Offset accounts can save you tens of thousands. Here\'s exactly how...', topic: 'How mortgage offset accounts work', cta: 'Are you using an offset? Let me know in the comments.' },
  // Week 2 — Market Insights
  { day: 6, theme: 'Market Insights', hook: 'The RBA held rates again. Here\'s what that actually means for buyers...', topic: 'RBA decisions and their effect on variable rate mortgages', cta: 'Are you waiting for rates to drop before buying? Tell me why.' },
  { day: 7, theme: 'Market Insights', hook: 'Property prices in [your suburb] — buyers are feeling it...', topic: 'Current market conditions in your target area', cta: 'Where are your clients struggling to buy right now?' },
  { day: 8, theme: 'Market Insights', hook: 'Every broker I know is seeing this pattern right now...', topic: 'Current trend (refinancing surge / first home buyer activity)', cta: 'Is this matching what you\'re seeing? Drop a comment.' },
  { day: 9, theme: 'Market Insights', hook: 'The lending rule that catches clients by surprise every single time...', topic: 'APRA serviceability buffer explained simply', cta: 'Share this with someone who\'s been knocked back on a loan.' },
  { day: 10, theme: 'Market Insights', hook: 'Interest rates in 2026 — what I\'m actually telling my clients...', topic: 'Your professional take on the rate outlook', cta: 'What\'s your biggest concern about the market right now?' },
  // Week 3 — Client Wins
  { day: 11, theme: 'Client Wins', hook: 'My client was rejected twice before we got them approved. Here\'s how...', topic: 'Complex deal success story (anonymized)', cta: 'Know someone in a similar situation? Send them my way.' },
  { day: 12, theme: 'Client Wins', hook: 'First home at 24, no help from the bank of mum and dad — here\'s their story...', topic: 'First home buyer success story', cta: 'This is possible for more people than you think. Who needs to hear this?' },
  { day: 13, theme: 'Client Wins', hook: 'They nearly sold at the wrong time. This one conversation changed everything...', topic: 'Client who held off and benefited', cta: 'Sometimes the best move is patience. Do you agree?' },
  { day: 14, theme: 'Client Wins', hook: 'Refinanced and saved $600/month. Here\'s what we changed...', topic: 'Refinancing win story', cta: 'When did you last review your rate? Reply and I\'ll take a look.' },
  { day: 15, theme: 'Client Wins', hook: 'From rental stress to home ownership in 7 months — their journey...', topic: 'Client transformation narrative', cta: 'Everyone\'s home ownership story starts somewhere. What\'s yours?' },
  // Week 4 — Behind the Business
  { day: 16, theme: 'Behind the Business', hook: 'Why I became a mortgage broker (it\'s not what you\'d expect)...', topic: 'Your personal story and motivation', cta: 'What made you choose your career? I\'d love to know.' },
  { day: 17, theme: 'Behind the Business', hook: 'Here\'s what a broker actually does on a typical Tuesday...', topic: 'Day in the life of a mortgage broker', cta: 'Any questions about what this process actually looks like?' },
  { day: 18, theme: 'Behind the Business', hook: 'The question every client asks me — and my honest answer...', topic: 'FAQ / transparency about the broker model or fees', cta: 'What questions have you been afraid to ask a broker?' },
  { day: 19, theme: 'Behind the Business', hook: 'I don\'t work for the banks. Here\'s who I actually work for...', topic: 'How brokers are paid and the difference from going direct to a bank', cta: 'Did you know brokers are free to use? Share this with a first-time buyer.' },
  { day: 20, theme: 'Behind the Business', hook: 'Three things I wish I\'d known when I started brokering...', topic: 'Lessons learned / expertise demonstration', cta: 'Which of these surprises you most?' },
  // Bonus Days 21-30
  { day: 21, theme: 'Mixed', hook: 'What\'s your biggest fear about buying a home right now? (vote in comments)', topic: 'Engagement post — audience question', cta: '' },
  { day: 22, theme: 'Mixed', hook: 'Unpopular opinion: [your take on a mortgage/property myth]', topic: 'Opinion/contrarian post', cta: '' },
  { day: 23, theme: 'Mixed', hook: 'The difference between a mortgage broker and a bank — explained in 60 seconds', topic: 'Educational explainer', cta: '' },
  { day: 24, theme: 'Mixed', hook: 'Share a win from this week — even a small one', topic: 'Community engagement', cta: '' },
  { day: 25, theme: 'Mixed', hook: 'The question I get asked more than any other...', topic: 'FAQ post', cta: '' },
  { day: 26, theme: 'Mixed', hook: 'This is what financial stress looks like from where I sit. And this is what I do about it.', topic: 'Empathy + value post', cta: '' },
  { day: 27, theme: 'Mixed', hook: 'Poll: Would you rather have a lower interest rate or a lower repayment? (explain your choice)', topic: 'Poll post', cta: '' },
  { day: 28, theme: 'Mixed', hook: 'One thing your lender won\'t volunteer unless you ask for it...', topic: 'Educational tip', cta: '' },
  { day: 29, theme: 'Mixed', hook: 'Looking back at the biggest rate move of the last 12 months — here\'s what I learned', topic: 'Retrospective / market insight', cta: '' },
  { day: 30, theme: 'Mixed', hook: '30 days of LinkedIn content. Here\'s what I\'d tell my past self before starting...', topic: 'Reflection post', cta: '' },
];

const hashtags = {
  primary: ['#MortgageBroker', '#HomeLoans', '#PropertyAustralia'],
  secondary: ['#FirstHomeBuyer', '#Refinancing', '#AustralianProperty', '#MortgageAdvice'],
  niche: ['#BrisbaneProperty', '#SydneyRealEstate', '#MelbourneHomes (use your city)'],
};

const commentTemplates = [
  'Great question! The short answer is [answer]. Happy to go deeper — feel free to DM me.',
  "This is something I see every week. You're definitely not alone in this situation.",
  "Really depends on your situation — the generalised advice isn't always right. What's your specific concern?",
  'Thanks for sharing this! [Tag someone] — you might want to read this too.',
  'Exactly right. And the part most people miss is [additional insight].',
];

const themeColors: Record<string, string> = {
  'Education': 'bg-blue-50 border-blue-200',
  'Market Insights': 'bg-purple-50 border-purple-200',
  'Client Wins': 'bg-green-50 border-green-200',
  'Behind the Business': 'bg-orange-50 border-orange-200',
  'Mixed': 'bg-gray-50 border-gray-200',
};

export default function ContentCalendarDownloadPage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { font-size: 11px; }
          .print-break { page-break-before: always; }
        }
      `}</style>
      <main className="min-h-screen bg-white text-gray-900 max-w-4xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Your LinkedIn Content Calendar Is Ready!
          </h1>
          <p className="text-gray-500 mb-4">
            Bookmark this page — your 30-day content calendar for mortgage brokers is below.
          </p>
          <p className="text-sm text-gray-400 mb-4 no-print">
            Press <strong>Ctrl+P</strong> (or <strong>Cmd+P</strong> on Mac) to save as PDF.
          </p>
          <div className="no-print">
            <PrintButton />
          </div>
        </div>

        {/* Content Themes */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4 border-b pb-2">4 Content Themes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contentThemes.map(t => (
              <div key={t.number} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-extrabold text-blue-500 mb-1">{t.number}</div>
                <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs mt-1">{t.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Posting Times */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4 border-b pb-2">Best Posting Times (AEST)</h2>
          <ul className="space-y-2">
            {postingTimes.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="text-blue-500 font-bold mt-0.5">\u2022</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 30 Day Posts */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6 border-b pb-2">30-Day Post Calendar</h2>
          <div className="space-y-4">
            {posts.map(post => (
              <div
                key={post.day}
                className={`border rounded-lg p-4 ${themeColors[post.theme] || 'bg-gray-50 border-gray-200'}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center font-extrabold text-gray-700 text-sm">
                    {post.day}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{post.theme}</div>
                    <p className="font-bold text-gray-900 text-sm leading-snug mb-1">&ldquo;{post.hook}&rdquo;</p>
                    <p className="text-gray-600 text-xs mb-1"><strong>Topic:</strong> {post.topic}</p>
                    {post.cta && (
                      <p className="text-gray-500 text-xs italic"><strong>CTA:</strong> {post.cta}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hashtag Strategy */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4 border-b pb-2">Hashtag Strategy</h2>
          <div className="space-y-3">
            <div>
              <span className="text-sm font-bold text-gray-700">Primary: </span>
              <span className="text-sm text-blue-600">{hashtags.primary.join(' ')}</span>
            </div>
            <div>
              <span className="text-sm font-bold text-gray-700">Secondary: </span>
              <span className="text-sm text-blue-600">{hashtags.secondary.join(' ')}</span>
            </div>
            <div>
              <span className="text-sm font-bold text-gray-700">Niche (location): </span>
              <span className="text-sm text-blue-600">{hashtags.niche.join(' ')}</span>
            </div>
          </div>
        </section>

        {/* 5 Comment Templates */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4 border-b pb-2">5 Engagement Comment Templates</h2>
          <ol className="space-y-3 list-decimal list-inside">
            {commentTemplates.map((tpl, i) => (
              <li key={i} className="text-gray-700 text-sm leading-relaxed bg-gray-50 rounded-lg p-3 border border-gray-200">
                {tpl}
              </li>
            ))}
          </ol>
        </section>

        {/* Footer disclaimer */}
        <footer className="border-t pt-6 text-center">
          <p className="text-xs text-gray-400">
            Results are indicative only. Outcomes depend on your consistency and audience.
            &copy; 2026 MarketingAI.
          </p>
        </footer>
      </main>
    </>
  );
}
