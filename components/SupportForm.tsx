"use client";

import { useState, FormEvent } from "react";

type IssueType = "bug" | "feature" | "question" | "other";

const ISSUE_TYPE_LABELS: Record<IssueType, string> = {
  bug: "Bug report",
  feature: "Feature request",
  question: "Question",
  other: "Other",
};

interface SupportFormProps {
  clientName: string;
  supportEmail: string;
}

export default function SupportForm({ clientName, supportEmail }: SupportFormProps) {
  const [type, setType] = useState<IssueType>("bug");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(`[${ISSUE_TYPE_LABELS[type]}] ${title} — ${clientName}`);
    const body = encodeURIComponent(
      `Client: ${clientName}\nType: ${ISSUE_TYPE_LABELS[type]}\n\n${description}`
    );

    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <p className="text-sm font-medium text-green-800">Your email client has been opened.</p>
        <p className="text-sm text-green-700 mt-1">
          Send the pre-filled email to submit your request. Your team will respond within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-green-600 hover:text-green-800 underline"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
        <div className="flex gap-2 flex-wrap">
          {(Object.keys(ISSUE_TYPE_LABELS) as IssueType[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                type === t
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {ISSUE_TYPE_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title <span className="text-gray-400 font-normal">(short summary)</span>
        </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={type === "bug" ? "e.g. Lead count not updating" : "e.g. Add CSV export for leads"}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          placeholder={
            type === "bug"
              ? "What happened? What did you expect to happen? Steps to reproduce."
              : "What would you like? Why would it be useful?"
          }
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg py-2.5 transition-colors"
      >
        Submit via email
      </button>

      <p className="text-xs text-gray-400 text-center">
        This will open your email client with a pre-filled message to {supportEmail}.
      </p>
    </form>
  );
}
