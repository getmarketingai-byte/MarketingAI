'use client';

import { useState } from 'react';

const ACCOUNT_ID = '2282416';
const FORM_ID = '185339817098216933';
const BASE_URL = `https://assets.mailerlite.com/jsonp/${ACCOUNT_ID}/forms/${FORM_ID}/subscribe`;

export default function EmailCaptureSection() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !type || !email) return;
    setLoading(true);
    subscribeViaJSONP(email, name, type);
  }

  function subscribeViaJSONP(email: string, name: string, type: string) {
    const callbackName = 'ml_cb_' + Date.now() + '_' + Math.round(Math.random() * 1000000);
    const url = BASE_URL + '?callback=' + callbackName +
      '&email=' + encodeURIComponent(email) +
      '&fields[name]=' + encodeURIComponent(name) +
      '&fields[last_name]=' + encodeURIComponent(type) +
      '&ml-submit=1';

    (window as any)[callbackName] = (response: any) => {
      cleanup();
      redirect(email, name);
    };

    const script = document.createElement('script');
    script.src = url;
    script.onerror = () => {
      cleanup();
      fallback(email, name);
    };
    document.head.appendChild(script);

    const timeout = setTimeout(() => {
      cleanup();
      fallback(email, name);
    }, 8000);

    function cleanup() {
      clearTimeout(timeout);
      delete (window as any)[callbackName];
      script.remove();
    }
  }

  function redirect(email: string, name: string) {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'form_submit', { form_id: 'early-access', page_title: 'Home' });
    }
    window.location.href = 'https://marketingai-checklist.vercel.app/?email=' + encodeURIComponent(email) + '&name=' + encodeURIComponent(name);
  }

  function fallback(email: string, name: string) {
    const subject = encodeURIComponent('MarketingAI: ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email);
    window.location.href = 'mailto:getmarketingai@gmail.com?subject=' + subject + '&body=' + body;
  }

  return (
    <section className="bg-blue-600 py-16 px-6" id="early-access">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3">
          Get the Free Checklist + Early Access
        </h2>
        <p className="text-blue-100 text-sm mb-8">
          Download The 5-Point Marketing System Checklist for Australian Service Businesses — instantly, free.
          Plus get notified when new tools and resources drop. No credit card. No obligation.
          When you&rsquo;re ready to set up your AI-assisted marketing system ($149 once-off), we&rsquo;re here.
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
              {loading ? 'Sending\u2026' : 'Send Me the Checklist \u2192'}
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