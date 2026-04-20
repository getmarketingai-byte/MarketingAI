import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getClientData, Post } from "@/lib/data";
import Nav from "@/components/Nav";
import PostCard from "@/components/PostCard";

export default async function ContentPage() {
  const session = await getSession();
  if (!session.authenticated) redirect("/login");

  const client = getClientData(session.clientId);
  if (!client) redirect("/login");

  const { contentCalendar, posts, supportEmail } = client;

  const postsNeedingApproval = posts.filter((p) => p.status === "awaiting_approval");
  const scheduledPosts = posts.filter((p) => p.status !== "awaiting_approval");

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
            <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-medium bg-yellow-50 text-yellow-700">
              {contentCalendar.nextPost.status}
            </span>
          </div>
        </div>

        {postsNeedingApproval.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Needs your approval
              </h2>
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                {postsNeedingApproval.length}
              </span>
            </div>
            <div className="space-y-4">
              {postsNeedingApproval.map((post) => (
                <PostCard key={post.id} post={post} supportEmail={supportEmail} showApprove />
              ))}
            </div>
          </section>
        )}

        {scheduledPosts.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              Scheduled posts
            </h2>
            <div className="space-y-4">
              {scheduledPosts.map((post) => (
                <PostCard key={post.id} post={post} supportEmail={supportEmail} showApprove={false} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
