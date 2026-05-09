'use client';

import { useState } from 'react';

const ACCOUNT_ID = '2282416';
const FORM_ID = '185339817098216933';
const BASE_URL = `https://assets.mailerlite.com/jsonp/${ACCOUNT_ID}/forms/${FORM_ID}/subscribe`;

export default function EmailCaptureCalendar() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName || !email) return;
    setLoading(true);
    subscribeViaJSONP(email, firstName);
  }

  function subscribeViaJSONP(email: string, name: string) {
    const callbackName = 'ml_cb_' + Date.now() + '_' + Math.round(Math.random() * 1000000);
    const url =
      BASE_URL +
      '?callback=' + callbackName +
      '&email=' + encodeURIComponent(email) +
      '&fields[name]=' + encodeURIComponent(name) +
      '&ml-submit=1';

    (window as any)[callbackName] = () => {
      cleanup();
      setSubmitted(true);
      setLoading(false);
    };

    const script = document.createElement('script');
    script.src = url;
    script.onerror = () => {
      cleanup();
      setSubmitted(true);
      setLoading(false);
    };
    document.head.appendChild(script);

    const timeout = setTimeout(() => {
      cleanup();
      setSubmitted(true);
      setLoading(false);
    }, 8000);

    function cleanup() {
      clearTimeout(timeout);
      delete (window as any)[callbackName];
      script.remove();
    }
  }

  return (
    <section className="bg-blue-600 py-12 px-6 rounded-2xl my-12">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-xl font-extrabold text-white mb-2">
          Want a free sample? Get 5 post prompts sent to your inbox.
        </h2>
        <p className="text-blue-100 text-sm mb-6">No credit card. No spam. Just 5 prompts you can use this week.</p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
            <input
              type="text"
              placeholder="Your first name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
              autoComplete="given-name"
              className="w-full px-4 py-3 rounded-lg text-gray-900 text-sm outline-none"
            />
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
              {loading ? 'Sending\u2026' : 'Send Me 5 Free Prompts \u2192'}
            </button>
          </form>
        ) : (
          <div className="bg-white/20 rounded-xl p-6">
            <p className="text-white font-bold text-lg">Check your inbox!</p>
            <p className="text-blue-100 text-sm mt-1">Your 5 free prompts are on the way.</p>
          </div>
        )}
        <p className="text-xs text-blue-200 mt-3">
          We&rsquo;ll only use your email for this and occasional MarketingAI updates. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
