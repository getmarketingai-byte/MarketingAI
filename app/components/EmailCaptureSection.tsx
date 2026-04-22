'use client';

import { useState } from 'react';

const MAILERLITE_ENDPOINT = 'https://assets.mailerlite.com/jsonp/2282416/forms/185339817098216933/subscribe';

export default function EmailCaptureSection() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !type || !email) return;
    setLoading(true);

    const params = new URLSearchParams();
    params.append('fields[email]', email);
    params.append('fields[name]', name);
    params.append('fields[last_name]', type);
    params.append('ml-submit', '1');
    params.append('anticsrf', 'true');

    try {
      await fetch(MAILERLITE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      });
    } catch {
      // Fallback to mailto on network error
      const subject = encodeURIComponent('MarketingAI Early Access: ' + name);
      const body = encodeURIComponent(
        'New early access signup:\n\n' +
        'Business name: ' + name + '\n' +
        'Industry: ' + type + '\n' +
        'Email: ' + email + '\n\n' +
        '\u2014 Submitted via marketingai landing page (MailerLite fallback)'
      );
      window.location.href = 'mailto:getmarketingai@gmail.com?subject=' + subject + '&body=' + body;
    }

    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section className="bg-blue-600 py-16 px-6" id="early-access">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3">
          Get a free content strategy recommendation
        </h2>
        <p className="text-blue-100 text-sm mb-8">
          Tell us about your business and we&rsquo;ll send you a personalised content strategy &mdash;
          what to post, who to target, and how to start getting traction. Free, within 24 hours.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
            <input
              type="text"
              placeholder="Your business name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              autoComplete="organization"
              className="w-full px-4 py-3 rounded-lg text-gray-900 text-sm outline-none"
            />
            <select
              value={type}
              onChange={e => setType(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg text-gray-900 text-sm outline-none"
            >
              <option value="" disabled>Your industry / business type</option>
              <option>Trades &amp; Construction</option>
              <option>Health &amp; Wellness</option>
              <option>Professional Services</option>
              <option>Retail &amp; E-Commerce</option>
              <option>Food &amp; Hospitality</option>
              <option>Education &amp; Coaching</option>
              <option>Technology &amp; SaaS</option>
              <option>Real Estate</option>
              <option>Creative &amp; Design</option>
              <option>Other</option>
            </select>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-4 py-3 rounded-lg text-gray-900 text-sm outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-4 rounded-lg text-sm transition-colors"
            >
              {loading ? 'Sending\u2026' : 'Send my free recommendation \u2192'}
            </button>
          </form>
        ) : (
          <div className="bg-white/20 rounded-xl p-8">
            <h3 className="text-xl font-extrabold text-white mb-2">You&rsquo;re on the list!</h3>
            <p className="text-blue-100 text-sm">
              We&rsquo;ll review your business details and send your personalised content strategy
              recommendation within 24 hours. Check your inbox &mdash; it comes from getmarketingai@gmail.com.
            </p>
          </div>
        )}
        <p className="text-xs text-blue-200 mt-4 leading-relaxed">
          We will only use your email to send your recommendation and occasional MarketingAI updates.
          No spam. Unsubscribe at any time. Your details are never shared.
        </p>
      </div>
    </section>
  );
}
