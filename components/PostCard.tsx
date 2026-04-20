"use client";

import { useState } from "react";
import { Post } from "@/lib/data";

const STATUS_STYLES: Record<string, string> = {
  awaiting_approval: "bg-amber-50 text-amber-700",
  approved: "bg-green-50 text-green-700",
  scheduled: "bg-blue-50 text-blue-700",
  published: "bg-gray-100 text-gray-600",
};

const STATUS_LABELS: Record<string, string> = {
  awaiting_approval: "Awaiting your approval",
  approved: "Approved",
  scheduled: "Scheduled",
  published: "Published",
};

interface PostCardProps {
  post: Post;
  supportEmail?: string;
  showApprove: boolean;
}

export default function PostCard({ post, supportEmail, showApprove }: PostCardProps) {
  const [expanded, setExpanded] = useState(showApprove);

  const approveMailto = `mailto:${supportEmail ?? "support@getmarketingai.com"}?subject=APPROVED%3A%20${encodeURIComponent(post.title)}&body=Hi%20team%2C%0A%0AI%20approve%20the%20following%20post%20for%20publishing%3A%0A%0APost%3A%20${encodeURIComponent(post.title)}%0AScheduled%3A%20${encodeURIComponent(post.scheduledDate)}%0A%0APlease%20go%20ahead%20and%20publish%20as%20scheduled.%0A%0AThanks`;

  const requestChangeMailto = `mailto:${supportEmail ?? "support@getmarketingai.com"}?subject=CHANGE%20REQUEST%3A%20${encodeURIComponent(post.title)}&body=Hi%20team%2C%0A%0AI%27d%20like%20to%20request%20a%20change%20to%20this%20post%20before%20it%20goes%20live%3A%0A%0APost%3A%20${encodeURIComponent(post.title)}%0AScheduled%3A%20${encodeURIComponent(post.scheduledDate)}%0A%0ARequested%20changes%3A%0A%5BDescribe%20what%20you%27d%20like%20changed%5D`;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
            <p className="text-xs text-gray-400 mt-0.5">
              {post.platform} ·{" "}
              {new Date(post.scheduledDate).toLocaleDateString("en-AU", {
                weekday: "short", day: "numeric", month: "short",
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-3 flex-shrink-0">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_STYLES[post.status] ?? "bg-gray-100 text-gray-600"}`}>
            {STATUS_LABELS[post.status] ?? post.status}
          </span>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform ${expanded ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-gray-100">
          <pre className="mt-4 text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
            {post.body}
          </pre>

          {showApprove && post.status === "awaiting_approval" && (
            <div className="mt-5 flex gap-3">
              <a
                href={approveMailto}
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Approve post
              </a>
              <a
                href={requestChangeMailto}
                className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg transition-colors"
              >
                Request changes
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
