export const metadata = {
  title: "Privacy Policy — MarketingAI",
  description: "Privacy Policy for MarketingAI — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-extrabold text-lg tracking-tight">MarketingAI</a>
        <a href="https://calendly.com/getmarketingai/30min" target="_blank" rel="noopener noreferrer" className="text-xs font-bold bg-blue-600 text-white px-3 py-1 rounded-full tracking-wide">
          Book a Call
        </a>
      </nav>

      <section className="max-w-2xl mx-auto px-6 py-16">
        <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">Legal</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Effective date: 1 January 2026</p>

        <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">What we collect</h2>
            <p>
              We collect your email address when you sign up via our forms (with your consent).
              We also collect anonymous usage data through Google Analytics (G-2Q8MGZ47BC) to understand how our site is used.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">How we use your information</h2>
            <p>
              Email addresses are used to send you marketing content and updates you have opted in to receive.
              Analytics data is used to improve our site and services. We do not sell your personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">Cookies and third-party services</h2>
            <p>
              We use Google AdSense (ca-pub-7076137753154472) which may place cookies on your device for ad personalisation.
              Google Analytics also uses cookies to track site usage. You can disable cookies in your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">Email unsubscribe</h2>
            <p>
              You can unsubscribe from our emails at any time by clicking the unsubscribe link in any email we send,
              or by contacting us at <a href="mailto:getmarketingai@gmail.com" className="text-blue-600 underline">getmarketingai@gmail.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">Contact</h2>
            <p>
              For any privacy-related questions, contact us at{' '}
              <a href="mailto:getmarketingai@gmail.com" className="text-blue-600 underline">getmarketingai@gmail.com</a>.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/" className="text-sm text-blue-600 hover:underline">&larr; Back to home</a>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200 px-6 py-8 text-center">
        <p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
          <strong>Important:</strong> Outcomes described on this page are illustrative only.
          MarketingAI does not guarantee specific marketing results, revenue outcomes, or timelines.
        </p>
        <p className="text-xs text-gray-400 mt-2">&copy; 2026 MarketingAI</p>
      </footer>
    </main>
  );
}
