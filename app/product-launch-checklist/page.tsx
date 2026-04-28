'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProductLaunchChecklist() {
  const [formView, setFormView] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    targetAudience: '',
    currentStatus: '',
    budget: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('product_launch_checklist_data');
    if (saved) {
      const data = JSON.parse(saved);
      setFormData(data);
      if (data.productName) {
        setFormView(false);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      ...formData,
      submittedAt: new Date().toISOString()
    };

    localStorage.setItem('product_launch_checklist_data', JSON.stringify(data));
    localStorage.setItem('product_launch_checklist_' + Date.now(), JSON.stringify(data));

    setFormView(false);
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const productLaunchItems = [
    'Test with 3-5 friends before public launch',
    'Write 1-sentence value prop for your product',
    'Create awesome screenshot or demo GIF',
    'Set up landing page (link: marketing-ai.com/templates)',
    'Configure analytics (Google Analytics + Vercel)'
  ];

  const marketingBudgetZero = [
    'Post on ProductHunt (day-of + 24h comment engagement)',
    'Post on 2-3 relevant subreddits (niche communities)',
    'HackerNews "Show HN" post',
    'Post on Indie Hackers + engage comments'
  ];

  const marketingBudgetUnder100 = [
    'Google Ads: $100 budget targeting your ICP',
    'Twitter/X ads: $20 budget + reply engagement'
  ];

  const marketingBudget100to1k = [
    'LinkedIn organic posts (5 tips on your problem)',
    'LinkedIn ads: $50 budget'
  ];

  const marketingBudget1kPlus = [
    'Paid email newsletter sponsorship',
    'Influencer/ambassador outreach',
    'TikTok/YouTube video ads ($500+)'
  ];

  const getMarketingItems = () => {
    const items = [...marketingBudgetZero];
    if (formData.budget === 'under100' || formData.budget === '100to1k' || formData.budget === '1kplus') {
      items.push(...marketingBudgetUnder100);
    }
    if (formData.budget === '100to1k' || formData.budget === '1kplus') {
      items.push(...marketingBudget100to1k);
    }
    if (formData.budget === '1kplus') {
      items.push(...marketingBudget1kPlus);
    }
    return items;
  };

  const getBudgetLabel = () => {
    const labels: Record<string, string> = {
      'zero': '$0',
      'under100': 'Under $100',
      '100to1k': '$100 - $1k',
      '1kplus': '$1k+'
    };
    return labels[formData.budget] || formData.budget;
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Product Launch Checklist",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "AUD"
            }
          })
        }}
      />

      {/* NAV */}
      <nav className="bg-[#1a1a2e] px-6 py-4 flex items-center justify-between">
        <Link href="https://marketing-ai-psi-nine.vercel.app/" className="font-bold text-lg text-white">
          Marketing<span className="text-[#6c63ff]">AI</span>
        </Link>
      </nav>

      {/* HERO */}
      <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white py-12 px-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">Product Launch Checklist</h1>
        <p className="text-sm sm:text-base opacity-85 max-w-lg mx-auto">
          Free checklist for launching your first product with minimal marketing budget. Find your first 10 customers.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-5 -mt-6 pb-10">
        {/* FORM VIEW */}
        {formView ? (
          <div className="bg-white rounded-xl p-7 shadow-lg">
            <h2 className="text-lg font-bold mb-5 text-[#1a1a2e]">Tell us about your product</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="productName" className="block font-semibold text-sm mb-1.5 text-gray-600">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  value={formData.productName}
                  onChange={(e) => updateField('productName', e.target.value)}
                  placeholder="e.g. My Awesome SaaS"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-[#6c63ff]"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="category" className="block font-semibold text-sm mb-1.5 text-gray-600">
                  Category
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => updateField('category', e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-[#6c63ff]"
                >
                  <option value="">Select category...</option>
                  <option value="saas">SaaS</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="api">API</option>
                  <option value="tool">Tool</option>
                  <option value="service">Service</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="targetAudience" className="block font-semibold text-sm mb-1.5 text-gray-600">
                  Target Audience
                </label>
                <select
                  id="targetAudience"
                  value={formData.targetAudience}
                  onChange={(e) => updateField('targetAudience', e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-[#6c63ff]"
                >
                  <option value="">Select audience...</option>
                  <option value="developers">Developers</option>
                  <option value="designers">Designers</option>
                  <option value="smb-owners">SMB Owners</option>
                  <option value="enterprises">Enterprises</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block font-semibold text-sm mb-1.5 text-gray-600">
                  Current Status
                </label>
                <div className="flex flex-wrap gap-3">
                  {['pre-launch', 'beta', 'live'].map((status) => (
                    <label key={status} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="currentStatus"
                        value={status}
                        checked={formData.currentStatus === status}
                        onChange={(e) => updateField('currentStatus', e.target.value)}
                        required
                        className="w-4 h-4 text-[#6c63ff] focus:ring-[#6c63ff]"
                      />
                      <span className="text-sm capitalize">{status === 'pre-launch' ? 'Pre-launch' : status}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <label className="block font-semibold text-sm mb-1.5 text-gray-600">
                  Budget for Launch
                </label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: 'zero', label: '$0' },
                    { value: 'under100', label: 'Under $100' },
                    { value: '100to1k', label: '$100 - $1k' },
                    { value: '1kplus', label: '$1k+' }
                  ].map((budget) => (
                    <label key={budget.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        value={budget.value}
                        checked={formData.budget === budget.value}
                        onChange={(e) => updateField('budget', e.target.value)}
                        required
                        className="w-4 h-4 text-[#6c63ff] focus:ring-[#6c63ff]"
                      />
                      <span className="text-sm">{budget.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#6c63ff] text-white border-none rounded-lg text-base font-bold cursor-pointer transition-colors hover:bg-[#574fd6] disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Generating...' : 'Generate My Checklist'}
              </button>
            </form>
          </div>
        ) : (
          /* RESULTS VIEW */
          <div>
            {/* Summary */}
            <div className="bg-violet-50 rounded-xl p-6 text-center mb-6">
              <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">Your Launch Plan is Ready!</h3>
              <p className="text-sm text-gray-600">
                {formData.productName} — {formData.category} for {formData.targetAudience}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                <span className="bg-[#6c63ff] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {formData.currentStatus === 'pre-launch' ? 'Pre-launch' : formData.currentStatus}
                </span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Budget: {getBudgetLabel()}
                </span>
              </div>
            </div>

            {/* Product Launch Checklist - Always shown */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-[#6c63ff] text-white rounded-full flex items-center justify-center text-sm">1</span>
                Product Launch
              </h3>
              <ul className="space-y-3">
                {productLaunchItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id={`product-${idx}`}
                      className="w-5 h-5 mt-0.5 rounded text-[#6c63ff] focus:ring-[#6c63ff]"
                    />
                    <label htmlFor={`product-${idx}`} className="text-sm text-gray-700 cursor-pointer">
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Marketing Launch Checklist - Budget based */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                Marketing Launch
              </h3>
              <ul className="space-y-3">
                {getMarketingItems().map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id={`marketing-${idx}`}
                      className="w-5 h-5 mt-0.5 rounded text-green-600 focus:ring-green-600"
                    />
                    <label htmlFor={`marketing-${idx}`} className="text-sm text-gray-700 cursor-pointer">
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] rounded-xl p-7 text-white text-center mb-6">
              <h2 className="text-lg font-bold mb-2">Your launch plan is ready. Ready to unlock your first 10 customers?</h2>
              <p className="text-sm opacity-85 mb-5">
                MarketingAI can handle your marketing system setup — Linkedin posts, email sequences, outreach templates, built and delivered in a week.
              </p>
              <div className="text-4xl font-extrabold mb-2">$149 AUD <span className="text-base font-normal opacity-70">one-time setup</span></div>
              <a
                href="https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#6c63ff] text-white rounded-lg text-base font-bold transition-colors hover:bg-[#574fd6] hover:-translate-y-0.5"
              >
                Get Started - $149 AUD
              </a>
              <p className="text-xs opacity-50 mt-3">Results vary. No guaranteed outcomes.</p>
            </div>

            {/* Start Over */}
            <div className="text-center">
              <button
                onClick={() => {
                  localStorage.removeItem('product_launch_checklist_data');
                  setFormData({
                    productName: '',
                    category: '',
                    targetAudience: '',
                    currentStatus: '',
                    budget: ''
                  });
                  setFormView(true);
                }}
                className="text-[#6c63ff] text-sm font-semibold hover:underline"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="bg-[#1a1a2e] text-center py-6 px-6">
        <p className="text-xs text-gray-400">&copy; 2026 MarketingAI — Australian small businesses only.</p>
      </footer>
    </main>
  );
}
