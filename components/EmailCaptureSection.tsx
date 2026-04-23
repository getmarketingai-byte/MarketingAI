export default function EmailCaptureSection() {
  return (
    <section className="bg-blue-50 border-y border-blue-100 py-14 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">Early access</p>
        <h2 className="text-2xl font-extrabold tracking-tight mb-3">
          Get early access &mdash; before the price goes up
        </h2>
        <p className="text-sm text-gray-500 mb-7">
          We&rsquo;re taking a limited number of early-access clients at $149. Join the list and we&rsquo;ll reach out when a spot opens.
        </p>
        <form
          action="MAILCHIMP_FORM_ACTION_URL"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="Your email address"
            required
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Anti-bot honeypot field — do not remove */}
          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
            <input type="text" name="b_MAILCHIMP_HONEYPOT" tabIndex={-1} defaultValue="" />
          </div>
          <button
            type="submit"
            name="subscribe"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
          >
            Get early access
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-3">
          By submitting you agree to receive emails about MarketingAI. You can unsubscribe any time.
          We will never share your details. Australian Spam Act compliant.
        </p>
      </div>
    </section>
  );
}


