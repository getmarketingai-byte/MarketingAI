export default function AuditSuccessPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="text-6xl mb-6">&#9989;</div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4">
          Payment received &mdash; your audit is on its way
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          We&rsquo;ve got your business details. Your personalised AI Marketing Audit will be in your inbox within 24 hours.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 text-left mb-8">
          <h2 className="font-bold mb-4">What happens next</h2>
          <ol className="space-y-3 text-sm text-gray-600">
            <li className="flex gap-3 items-start">
              <span className="font-bold text-blue-600 mt-0.5">1.</span>
              <span>We review your business details</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold text-blue-600 mt-0.5">2.</span>
              <span>Our AI generates your personalised audit</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold text-blue-600 mt-0.5">3.</span>
              <span>We review and refine it for accuracy</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold text-blue-600 mt-0.5">4.</span>
              <span>You receive your 3-page audit via email within 24 hours</span>
            </li>
          </ol>
        </div>

        <p className="text-sm text-gray-500 mb-2">
          Want the full marketing system built for you?
        </p>
        <p className="text-sm text-gray-400 mb-8">
          Reply to your confirmation email and we&rsquo;ll apply your $49 as credit toward the $149 full setup.
        </p>

        <p className="text-sm text-gray-400 mb-6">
          Questions? Email{' '}
          <a href="mailto:getmarketingai@gmail.com" className="text-blue-600 hover:underline">
            getmarketingai@gmail.com
          </a>
        </p>

        <a
          href="/"
          className="inline-block border border-gray-300 hover:border-gray-600 text-gray-700 font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
        >
          Back to MarketingAI
        </a>
      </div>
    </main>
  );
}
