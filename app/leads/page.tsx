import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getClientData } from "@/lib/data";
import Nav from "@/components/Nav";

export default async function LeadsPage() {
  const session = await getSession();
  if (!session.authenticated) redirect("/login");

  const client = getClientData(session.clientId);
  if (!client) redirect("/login");

  const { leads } = client;

  return (
    <div>
      <Nav clientName={client.name} />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-900">Leads</h1>
          <p className="text-sm text-gray-500 mt-1">
            Source: {leads.source} · Last updated{" "}
            {new Date(leads.lastUpdated).toLocaleDateString("en-AU", {
              day: "numeric", month: "long", year: "numeric",
            })}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-3xl font-semibold text-gray-900">{leads.total}</p>
            <p className="text-xs text-gray-500 mt-1">Total leads captured</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-3xl font-semibold text-gray-900">{leads.thisWeek}</p>
            <p className="text-xs text-gray-500 mt-1">This week</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">
            Individual lead details and contact information are managed via your email
            capture provider. Your MarketingAI team updates these counts weekly. Once the
            email capture system is connected to a live source, this page will reflect
            real-time counts.
          </p>
        </div>
      </main>
    </div>
  );
}
