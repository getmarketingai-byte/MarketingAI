import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getClientData } from "@/lib/data";
import Nav from "@/components/Nav";

export default async function ContentPage() {
  const session = await getSession();
  if (!session.authenticated) redirect("/login");

  const client = getClientData(session.clientId);
  if (!client) redirect("/login");

  const { contentCalendar } = client;

  return (
    <div>
      <Nav clientName={client.name} />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-900">Content calendar</h1>
          <p className="text-sm text-gray-500 mt-1">
            {contentCalendar.cadence} · {contentCalendar.source}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-2xl font-semibold text-gray-900">{contentCalendar.pipeline}</p>
            <p className="text-xs text-gray-500 mt-1">Posts queued</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-sm font-medium text-gray-900">
              {new Date(contentCalendar.nextPost.date).toLocaleDateString("en-AU", {
                weekday: "short", day: "numeric", month: "short",
              })}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Next post · {contentCalendar.nextPost.type}
            </p>
            <span
              className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-medium ${
                contentCalendar.nextPost.status === "ready"
                  ? "bg-green-50 text-green-700"
                  : "bg-yellow-50 text-yellow-700"
              }`}
            >
              {contentCalendar.nextPost.status}
            </span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">
            Full content calendar is managed by your MarketingAI team. Posts are
            drafted, reviewed, and ready to publish on the scheduled dates. Your team will
            notify you before any post goes live for your approval.
          </p>
        </div>
      </main>
    </div>
  );
}
