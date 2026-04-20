import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getClientData } from "@/lib/data";
import Nav from "@/components/Nav";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session.authenticated) redirect("/login");

  const client = getClientData(session.clientId);
  if (!client) redirect("/login");

  const activeCampaigns = client.campaigns.filter((c) => c.status === "active");

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
            {client.landingPage.url && client.landingPage.url !== "TBC" && (
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

        {/* Next actions */}
        {client.nextActions.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              Next actions
            </h2>
            <ul className="space-y-2">
              {client.nextActions.map((action, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-gray-400 mt-0.5">→</span>
                  {action}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
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
