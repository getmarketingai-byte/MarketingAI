import Image from 'next/image';
export const metadata = {
  title: "About — MarketingAI Reddit Integration",
  description: "How MarketingAI uses Reddit to share helpful marketing content, tips, and tools for small businesses.",
};

export default function AboutRedditPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <a href="/"><Image src="/logo.jpg" alt="MarketingAI" width={40} height={40} className="rounded-md" /></a>
        <a href="/audit" className="text-xs font-bold bg-blue-600 text-white px-3 py-1 rounded-full tracking-wide">
          Get Marketing Audit
        </a>
      </nav>

      <section className="max-w-2xl mx-auto px-6 py-16">
        <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">Reddit Integration</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
          About MarketingAI on Reddit
        </h1>
        <p className="text-sm text-gray-500 mb-10 leading-relaxed">
          This page describes how MarketingAI interacts with Reddit and uses the Reddit API.
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="text-xl font-bold mb-3">What is MarketingAI?</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              MarketingAI is an AI-assisted marketing service for Australian small businesses. We help
              business owners — mortgage brokers, real estate agents, personal trainers, accountants,
              and more — set up automated marketing systems including content engines, lead sequences,
              and email nurture workflows.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              Our free marketing calculators (ROI, CAC, CLV, ROAS, and more) are available at{" "}
              <a href="https://calcfuel.com" className="text-blue-600 underline">calcfuel.com</a>. We also provide SEO
              articles and done-with-you marketing system setup. We are based in Australia and
              operate under Australian Consumer Law and the Australian Privacy Act.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">How We Use Reddit</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              MarketingAI uses the Reddit API to share helpful marketing content, tips, tools, and
              resources with relevant Reddit communities. Our use of Reddit is focused on providing
              genuine value to communities interested in marketing, small business, entrepreneurship,
              and related topics.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              We follow Reddit's API Terms of Service, including rate limits and content policies.
              We do not engage in spam, vote manipulation, or any activity that violates Reddit's
              platform rules.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">API Usage &amp; Rate Limits</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our Reddit API integration operates within the limits set by Reddit's API Terms of
              Service. We respect rate limits and do not scrape, harvest, or store Reddit user data
              beyond what is necessary for the operation of our service. We use OAuth 2.0
              authentication for authorised access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Data &amp; Privacy</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              MarketingAI does not collect, store, or share Reddit user data for third-party purposes.
              Any data accessed via the Reddit API is used solely for the purpose of publishing
              content on behalf of the MarketingAI account. We comply with Australia's Privacy Act 1988
              and the Australian Privacy Principles.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              For details on how we handle personal information more broadly, please see our{" "}
              <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Contact</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you have questions about our Reddit integration or API usage, please contact us at:{" "}
              <a href="mailto:getmarketingai@gmail.com" className="text-blue-600 underline">
                getmarketingai@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200 px-6 py-8 text-center">
        <p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
          &copy; 2026 MarketingAI. Australian sole trader. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          <a href="/privacy" className="underline">Privacy Policy</a> &nbsp;|&nbsp;
          <a href="/support" className="underline">Contact</a>
        </p>
      </footer>
    </main>
  );
}
