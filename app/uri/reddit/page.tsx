export const metadata = {
  title: "Reddit OAuth Callback — MarketingAI",
  description: "Reddit OAuth callback endpoint for MarketingAI.",
};

export default function RedditCallbackPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6">
      <div className="max-w-md text-center">
        <a href="/" className="font-extrabold text-lg tracking-tight block mb-10">MarketingAI</a>
        <h1 className="text-2xl font-extrabold tracking-tight mb-4">Reddit OAuth Callback</h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          This page handles Reddit authentication callbacks for MarketingAI. It is used as the
          OAuth redirect URI for the MarketingAI Reddit API application.
        </p>
        <p className="text-sm text-gray-400 mt-6">
          If you arrived here unexpectedly, you can{" "}
          <a href="/" className="text-blue-600 underline">return to the MarketingAI homepage</a>.
        </p>
      </div>
    </main>
  );
}
