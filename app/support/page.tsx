import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getClientData } from "@/lib/data";
import Nav from "@/components/Nav";
import SupportForm from "@/components/SupportForm";

export default async function SupportPage() {
  const session = await getSession();
  if (!session.authenticated) redirect("/login");

  const client = getClientData(session.clientId);
  if (!client) redirect("/login");

  return (
    <div>
      <Nav clientName={client.name} />
      <main className="max-w-2xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-900">Support</h1>
          <p className="text-sm text-gray-500 mt-1">
            Report a bug or request a feature. Your team will respond within one business day.
          </p>
        </div>

        <SupportForm
          clientName={client.name}
          supportEmail={client.supportEmail ?? "support@getmarketingai.com"}
        />
      </main>
    </div>
  );
}
