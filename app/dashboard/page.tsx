import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getClientData, NextAction } from "@/lib/data";
import Nav from "@/components/Nav";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session.authenticated) redirect("/login");

  const client = getClientData(session.clientId);
  if (!client) redirect("/login");

  const activeCampaigns = client.campaigns.filter((c) => c.status === "active");
  const urgentActions = client.nextActions.filter((a) => a.urgent);

  const credentialsMailto = `mailto:${client.supportEmail ?? "support@getmarketingai.com"}?subject=LinkedIn%20Credentials%20for%20${encodeURIComponent(client.name)}&body=Hi%20team%2C%0A%0AHere%20are%20my%20LinkedIn%20credentials%20for%20post%20scheduling%3A%0A%0AEmail%3A%20%5Byour%20LinkedIn%20email%5D%0APassword%3A%20%5Byour%20LinkedIn%20password%5D%0A%0ANotes%3A%20%5Bany%20additional%20notes%5D`;

  return (
    <div>
      <Nav clientName={client.name} />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-900">{client.name}</h1>
          <p className="text-sm text-gray-500 mt-1">
            Last updated {new Date(client.updatedAt).toLocaleDateString("en-AU", {
              day: "numeric", month: "long", year: "numeric",
            })}
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <StatCard label="Active campaigns" value={activeCampaigns.length.toString()} />
          <StatCard label="Leads this week" value={client.leads.thisWeek.toString()} />
          <StatCard label="Posts queued" value={client.contentCalendar.pipeline.toString()} />
        </div>

        {/* Active campaigns */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
            Active campaigns
          </h2>
          {activeCampaigns.length === 0 ? (
            <p className="text-sm text-gray-400">No active campaigns.</p>
          ) : (
            <div className="space-y-3">
              {activeCampaigns.map((c) => (
                <div
                  key={c.id}
                  className="bg-white border border-gray-200 rounded-xl p-4"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{c.name}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{c.description}</p>
                    </div>
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      {c.status}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {c.channels.map((ch) => (
                      <span
                        key={ch}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Goal: {c.goal}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Landing page */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
            Landing page
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <span
                className={`w-2 h-2 rounded-full ${
                  client.landingPage.status === "live" ? "bg-green-500" : "bg-yellow-400"
                }`}
              />
              <span className="text-sm font-medium text-gray-900 capitalize">
                {client.landingPage.status}
              </span>
            </div>
            {client.landingPage.url && client.landingPage.url !== "TBC" && !client.landingPage.url.startsWith("TBC") && (
              <a
                href={client.landingPage.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline mt-1 block"
              >
                {client.landingPage.url}
              </a>
            )}
            {client.landingPage.emailCapture && (
              <p className="text-xs text-gray-500 mt-1">Email capture enabled</p>
            )}
          </div>
        </section>

        {/* Actions needed from you */}
        {client.nextActions.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Actions needed from you
              </h2>
              {urgentActions.length > 0 && (
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                  {urgentActions.length} urgent
                </span>
              )}
            </div>
            <div className="space-y-3">
              {client.nextActions.map((action) => (
                <ActionItem
                  key={action.id}
                  action={action}
                  credentialsMailto={credentialsMailto}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function ActionItem({
  action,
  credentialsMailto,
}: {
  action: NextAction;
  credentialsMailto: string;
}) {
  if (action.type === "info") {
    return (
      <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
        <span className="text-gray-300 mt-0.5 text-lg leading-none">·</span>
        <p className="text-sm text-gray-500">{action.text}</p>
      </div>
    );
  }

  return (
    <div
      className={`flex items-start justify-between gap-4 bg-white border rounded-xl p-4 ${
        action.urgent ? "border-amber-200 bg-amber-50" : "border-gray-200"
      }`}
    >
      <div className="flex items-start gap-3 min-w-0">
        <span className={`mt-0.5 text-lg leading-none ${action.urgent ? "text-amber-500" : "text-gray-400"}`}>
          →
        </span>
        <p className={`text-sm ${action.urgent ? "text-amber-900 font-medium" : "text-gray-700"}`}>
          {action.text}
        </p>
      </div>
      {action.type === "approval" && (
        <a
          href={`/content`}
          className="flex-shrink-0 text-xs bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
        >
          Review post
        </a>
      )}
      {action.type === "credentials" && (
        <a
          href={credentialsMailto}
          className="flex-shrink-0 text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
        >
          Submit
        </a>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  );
}
