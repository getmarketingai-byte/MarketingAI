'use client';

import { useState } from 'react';

const MAILERLITE_ENDPOINT = 'https://assets.mailerlite.com/jsonp/2282416/forms/185339817098216933/subscribe';

export default function VibeCoderEmailCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [project, setProject] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!project || !email) return;
    setLoading(true);

    const params = new URLSearchParams();
    params.append('fields[email]', email);
    params.append('fields[name]', project);
    params.append('fields[last_name]', 'vibe-coder');
    params.append('ml-submit', '1');
    params.append('anticsrf', 'true');

    try {
      await fetch(MAILERLITE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      });
    } catch {
      // ignore network errors — subscriber still gets redirect
    }

    window.location.href =
      'https://marketingai-checklist.vercel.app/?email=' +
      encodeURIComponent(email) +
      '&name=' +
      encodeURIComponent(project);

    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section className="bg-blue-600 py-16 px-6" id="early-access">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3">
          Get the Free Marketing Quick-Start Guide
        </h2>
        <p className="text-blue-100 text-sm mb-8">
          A no-fluff checklist built for builders — the exact five marketing moves that get your
          product found without pulling you away from the codebase. Free, instant download.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
            <input
              type="text"
              placeholder="What are you building? (e.g. SaaS for designers)"
              value={project}
              onChange={e => setProject(e.target.value)}
              required
              autoComplete="off"
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
              {loading ? 'Sending\u2026' : 'Send Me the Guide \u2192'}
            </button>
          </form>
        ) : (
          <div className="bg-white/20 rounded-xl p-8">
            <h3 className="text-xl font-extrabold text-white mb-2">On its way!</h3>
            <p className="text-blue-100 text-sm">
              Check your inbox &mdash; the guide comes from getmarketingai@gmail.com.
            </p>
          </div>
        )}
        <p className="text-xs text-blue-200 mt-4 leading-relaxed">
          No spam. No pitch. Just the checklist. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
