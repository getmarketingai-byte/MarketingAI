'use client';

import { useState } from 'react';

const ACCOUNT_ID = '2282416';
const FORM_ID = '185339817098216933';

export default function VibeCoderEmailCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [project, setProject] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!project || !email) return;
    setLoading(true);
    subscribeViaJSONP(email, project);
  }

  function subscribeViaJSONP(em: string, proj: string) {
    const cb = 'mlcb_' + Date.now();
    const endpoint = `https://assets.mailerlite.com/jsonp/${ACCOUNT_ID}/forms/${FORM_ID}/subscribe`;
    const postData = 'email=' + encodeURIComponent(em) + '&fields[name]=' + encodeURIComponent(proj) + '&fields[last_name]=vibe-coder&ml-submit=1';

    (window as any)[cb] = () => { cleanup(); redirect(em, proj); };

    let timeout: ReturnType<typeof setTimeout>;
    const cleanup = () => {
      clearTimeout(timeout);
      delete (window as any)[cb];
      const s = document.getElementById(cb);
      if (s) s.remove();
    };

    timeout = setTimeout(() => { cleanup(); redirect(em, proj); }, 8000);

    const script = document.createElement('script');
    script.id = cb;
    script.src = endpoint + '?callback=' + cb + '&' + postData;
    script.onerror = () => { cleanup(); redirect(em, proj); };
    document.head.appendChild(script);
  }

  function redirect(em: string, proj: string) {
    setSubmitted(true);
    window.location.href = 'https://marketingai-checklist.vercel.app/?email=' + encodeURIComponent(em) + '&name=' + encodeURIComponent(proj);
    setLoading(false);
  }

  function subscribeViaJSONP(em: string, nm: string) {
    const cb = 'ml_cb_' + Date.now() + '_' + Math.round(Math.random() * 1000000);
    const endpoint = `https://assets.mailerlite.com/jsonp/${ACCOUNT_ID}/forms/${FORM_ID}/subscribe`;
    const url = endpoint + '?callback=' + cb + '&email=' + encodeURIComponent(em) + '&fields[name]=' + encodeURIComponent(nm) + '&fields[last_name]=vibe-coder&ml-submit=1';

    (window as any)[cb] = () => {
      cleanup(cb);
      redirect(em, nm);
    };

    const script = document.createElement('script');
    script.src = url;
    script.onerror = () => { cleanup(cb); redirect(em, nm); };
    document.head.appendChild(script);

    setTimeout(() => { cleanup(cb); redirect(em, nm); }, 8000);

    function cleanup(c: string) {
      delete (window as any)[c];
      script.remove();
    }
  }

  function redirect(em: string, nm: string) {
    window.location.href = 'https://marketingai-checklist.vercel.app/?email=' + encodeURIComponent(em) + '&name=' + encodeURIComponent(nm);
  }

  function subscribeViaJSONP(email: string, project: string) {
    const callbackName = 'ml_vc_' + Date.now();
    const endpoint = `https://assets.mailerlite.com/jsonp/${ACCOUNT_ID}/forms/${FORM_ID}/subscribe`;
    const postData = 'email=' + encodeURIComponent(email) + '&fields[name]=' + encodeURIComponent(project) + '&fields[last_name]=vibe-coder&ml-submit=1';

    (window as any)[callbackName] = () => {
      cleanup();
      setSubmitted(true);
      window.location.href = 'https://marketingai-checklist.vercel.app/?email=' + encodeURIComponent(email) + '&name=' + encodeURIComponent(project);
    };

    let timeout: ReturnType<typeof setTimeout>;
    const cleanup = () => {
      clearTimeout(timeout);
      delete (window as any)[callbackName];
      const s = document.getElementById(callbackName);
      if (s) s.remove();
    };

    timeout = setTimeout(() => {
      cleanup();
      fallback(email, project);
    }, 8000);

    const script = document.createElement('script');
    script.id = callbackName;
    script.src = endpoint + '?callback=' + callbackName + '&' + postData;
    script.onerror = () => { cleanup(); fallback(email, project); };
    document.head.appendChild(script);
  }

  function fallback(email: string, project: string) {
    setSubmitted(true);
    window.location.href = 'mailto:getmarketingai@gmail.com?subject=' + encodeURIComponent('MarketingAI Vibe Coder: ' + project) + '&body=' + encodeURIComponent('Project: ' + project + '\nEmail: ' + email);
  }

  function subscribeViaJSONP(email: string, name: string) {
    const callbackName = 'ml_cb_' + Date.now();
    const endpoint = `https://assets.mailerlite.com/jsonp/${ACCOUNT_ID}/forms/${FORM_ID}/subscribe`;
    const postData = 'email=' + encodeURIComponent(email) + '&fields[name]=' + encodeURIComponent(name) + '&fields[last_name]=vibe-coder&ml-submit=1';

    (window as any)[callbackName] = () => {
      cleanup();
      redirect(email, name);
    };

    let timeout: ReturnType<typeof setTimeout>;
    const cleanup = () => {
      clearTimeout(timeout);
      delete (window as any)[callbackName];
      const s = document.getElementById(callbackName);
      if (s) s.remove();
    };

    timeout = setTimeout(() => { cleanup(); redirect(email, name); }, 8000);

    const script = document.createElement('script');
    script.id = callbackName;
    script.src = endpoint + '?callback=' + callbackName + '&' + postData;
    script.onerror = () => { cleanup(); redirect(email, name); };
    document.head.appendChild(script);
  }

  function redirect(email: string, name: string) {
    window.location.href = 'https://marketingai-checklist.vercel.app/?email=' + encodeURIComponent(email) + '&name=' + encodeURIComponent(name);
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
