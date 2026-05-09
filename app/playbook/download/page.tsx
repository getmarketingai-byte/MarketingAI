import type { Metadata } from "next";
import { cookies } from "next/headers";
import crypto from "crypto";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "The AI Agent Playbook | MarketingAI",
  description: "Your practical guide to building AI agent systems for small business.",
  robots: { index: false, follow: false },
};

const COOKIE_NAME = "playbook_access";
const PURCHASE_URL = "https://buy.stripe.com/5kQeVfcfH0lzgXp01cbsc0f";

function isValidToken(token: string | undefined, secret: string): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [expiresStr, sig] = parts;
  const expires = parseInt(expiresStr, 10);
  if (isNaN(expires) || Date.now() > expires) return false;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(expiresStr)
    .digest("hex")
    .slice(0, 24);
  return sig === expected;
}

export default async function PlaybookDownloadPage({
  searchParams,
}: {
  searchParams: Promise<{ access?: string; session_id?: string }>;
}) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const secret = process.env.CRON_SECRET || "";
  const hasAccess = isValidToken(token, secret);

  if (params.session_id && !hasAccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Verifying your purchase&hellip;</p>
        <meta httpEquiv="refresh" content={`0;url=/api/playbook-verify?session_id=${params.session_id}`} />
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-10 text-center">
          <div className="text-5xl mb-6">🤖</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Purchase Required</h1>
          <p className="text-gray-600 mb-8">
            The AI Agent Playbook is available after purchase. Get the complete guide for $15 AUD — instant access, no waiting.
          </p>
          <a
            href={PURCHASE_URL}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-md mb-4"
          >
            Get the Playbook &mdash; $15 AUD &rarr;
          </a>
          <p className="text-xs text-gray-400 mt-4">
            15-20 page guide &middot; Agent architectures &middot; Prompt templates &middot; Real examples
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { font-size: 11px; color: #111; }
          h1, h2, h3 { page-break-after: avoid; }
          .page-break { page-break-before: always; }
          a { color: #1d4ed8; }
        }
        @media screen {
          body { background: #f9fafb; }
        }
      `}</style>
      <main className="min-h-screen bg-white text-gray-900 max-w-4xl mx-auto px-8 py-10">

        {/* Header / Cover */}
        <div className="text-center mb-12 border-b pb-10">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">MarketingAI</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">The AI Agent Playbook</h1>
          <p className="text-xl text-gray-500 mb-6">
            How to build autonomous AI agent systems that run your business — even while you sleep.
          </p>
          <p className="text-sm text-gray-400">Version 1.0 &bull; May 2026 &bull; marketingai.au</p>
          <div className="mt-6 no-print">
            <PrintButton />
            <p className="text-xs text-gray-400 mt-2">Bookmark this page — your access is valid for 30 days.</p>
          </div>
        </div>

        {/* Table of Contents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Contents</h2>
          <ol className="space-y-1 text-gray-700">
            {[
              ["1", "What Are AI Agents? (And Why SMBs Should Care)"],
              ["2", "The Agent Hierarchy: CEO, CTO, and Specialist Roles"],
              ["3", "The 5 Agent Archetypes Every Business Needs"],
              ["4", "Prompt Templates for Each Agent Role"],
              ["5", "Tool Configuration Guide"],
              ["6", "Choosing the Right Model: Opus vs Sonnet vs Haiku"],
              ["7", "Real Examples From Our Production System"],
              ["8", "Your 30-Day AI Agent Getting Started Plan"],
              ["9", "Common Pitfalls and How to Avoid Them"],
            ].map(([num, title]) => (
              <li key={num} className="flex gap-3">
                <span className="text-blue-600 font-bold w-4">{num}.</span>
                <span>{title}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Chapter 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
            1. What Are AI Agents? (And Why SMBs Should Care)
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            An AI agent is more than a chatbot. It&rsquo;s an autonomous system that perceives its environment, makes decisions,
            uses tools, and takes actions — without waiting for a human to tell it what to do next.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Large enterprises have entire teams dedicated to AI strategy. Small businesses can&rsquo;t compete on headcount.
            But they can compete on automation. An AI agent running on $20/month of compute can handle the research,
            writing, scheduling, and outreach that a full-time employee would spend 20 hours a week on.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-4">
            <p className="font-bold text-blue-800 mb-2">The key difference from a chatbot:</p>
            <ul className="space-y-1 text-blue-900 text-sm">
              <li>✓ Agents <strong>act</strong> — they call APIs, send emails, update databases</li>
              <li>✓ Agents <strong>persist</strong> — they remember context across sessions</li>
              <li>✓ Agents <strong>coordinate</strong> — they delegate to other agents and specialists</li>
              <li>✓ Agents <strong>self-correct</strong> — they monitor their own output and fix errors</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            In 2026, the barrier to entry is lower than it&rsquo;s ever been. You don&rsquo;t need a machine learning team.
            You need a clear architecture, good prompts, and the right tool integrations. This playbook gives you all three.
          </p>
        </section>

        {/* Chapter 2 */}
        <div className="page-break" />
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
            2. The Agent Hierarchy: CEO, CTO, and Specialist Roles
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The most effective AI agent systems mirror human organisational structures. Not because AI needs
            hierarchy — but because humans do. A flat structure of 10 parallel agents creates coordination chaos.
            A management hierarchy creates clarity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {
                title: "Strategic Layer",
                role: "CEO Agent",
                desc: "Sets direction, prioritises tasks, allocates budget, reviews output from reports. Uses the most capable model (Opus-class). Triggers: daily or weekly.",
                color: "bg-purple-50 border-purple-200",
                badge: "bg-purple-100 text-purple-800",
              },
              {
                title: "Operations Layer",
                role: "CTO / CMO Agent",
                desc: "Translates strategy into execution. Manages specialist agents. Reviews builds, escalates blockers. Uses mid-range model (Sonnet-class). Triggers: hourly.",
                color: "bg-blue-50 border-blue-200",
                badge: "bg-blue-100 text-blue-800",
              },
              {
                title: "Execution Layer",
                role: "Specialist Agents",
                desc: "Build, write, research, test. Single-task focus. Can use smaller models (Haiku-class) for simple work. Triggers: on-demand or sub-hourly.",
                color: "bg-green-50 border-green-200",
                badge: "bg-green-100 text-green-800",
              },
            ].map((tier) => (
              <div key={tier.role} className={`border rounded-lg p-4 ${tier.color}`}>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tier.badge}`}>{tier.title}</span>
                <h3 className="font-bold text-gray-900 mt-2 mb-1">{tier.role}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Each layer has a clear job. Strategic agents don&rsquo;t write code. Execution agents don&rsquo;t set
            direction. When an agent tries to do everything, it does nothing well. Specialisation is the secret to
            reliable, scalable agent systems.
          </p>
        </section>

        {/* Chapter 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
            3. The 5 Agent Archetypes Every Business Needs
          </h2>
          <div className="space-y-4">
            {[
              {
                n: "1",
                name: "The Strategist",
                job: "Prioritises tasks, monitors metrics, allocates resources, reports to founders.",
                tools: "Task management API, analytics dashboards, calendar/scheduling tools",
                model: "Opus or Sonnet — needs strong reasoning",
                example: "\"Review this week's metrics. Identify the highest-impact next action and create 3 subtasks.\"",
              },
              {
                n: "2",
                name: "The Builder (Coder)",
                job: "Writes and deploys code. Handles git commits, Vercel deploys, API integrations.",
                tools: "Bash/shell, git, Vercel CLI, file read/write",
                model: "Sonnet — needs instruction-following and code generation",
                example: "\"Build a payment verification route. Gate /download behind Stripe session check. Use HMAC cookies.\"",
              },
              {
                n: "3",
                name: "The Researcher",
                job: "Fetches information from the web, summarises documents, monitors competitors.",
                tools: "WebSearch, WebFetch, document storage",
                model: "Haiku — mostly retrieval, minimal reasoning",
                example: "\"Find the top 5 LinkedIn growth strategies published in the last 30 days. Summarise in bullets.\"",
              },
              {
                n: "4",
                name: "The Content Writer",
                job: "Drafts articles, emails, social posts, landing page copy. Adapts to brand voice.",
                tools: "File write, publishing APIs (Dev.to, Hashnode), email APIs",
                model: "Sonnet — needs creativity and quality output",
                example: "\"Write a 1,200-word Dev.to article about AI agent architecture for non-technical founders. Include 3 real examples.\"",
              },
              {
                n: "5",
                name: "The QA Agent",
                job: "Reviews output, checks builds against acceptance criteria, flags errors.",
                tools: "WebFetch (to test live URLs), file read, issue commenting",
                model: "Sonnet — needs critical evaluation",
                example: "\"Check this landing page against our checklist: title correct, CTA matches spec, no AdSense on sales pages, footer before CTA.\"",
              },
            ].map((agent) => (
              <div key={agent.n} className="border border-gray-200 rounded-lg p-5 bg-gray-50">
                <div className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">{agent.n}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{agent.name}</h3>
                    <p className="text-sm text-gray-700 mb-2">{agent.job}</p>
                    <p className="text-xs text-gray-500 mb-1"><strong>Tools:</strong> {agent.tools}</p>
                    <p className="text-xs text-gray-500 mb-2"><strong>Model:</strong> {agent.model}</p>
                    <p className="text-xs bg-white border border-gray-200 rounded p-2 italic text-gray-600">
                      <strong>Example prompt:</strong> {agent.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chapter 4 */}
        <div className="page-break" />
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
            4. Prompt Templates for Each Agent Role
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A good agent prompt has three parts: <strong>Role</strong> (who you are), <strong>Context</strong> (what you know),
            and <strong>Constraints</strong> (what you must never do). Copy these templates and adapt to your business.
          </p>
          {[
            {
              role: "Strategist Agent",
              template: `You are the CEO of [Company Name], a [description] business targeting [target customer].

Your mission: drive the company to [specific revenue/growth goal] by [deadline].

Each session, you will:
1. Read company metrics from company/metrics.md
2. Review your task inbox
3. Prioritise ONE highest-impact task
4. Complete it or delegate it to the right specialist
5. Update task status and exit

Hard rules:
- Never send cold email or cold DMs (Spam Act)
- Never spend money without founder approval
- Always escalate legal, compliance, or security questions to the founder`,
            },
            {
              role: "Builder (Coder) Agent",
              template: `You are a senior software engineer at [Company Name].

Stack: Next.js 14 App Router, TypeScript, Tailwind CSS, Vercel.

When given a build task:
1. Read the spec carefully — understand WHAT and WHY before coding
2. Build the minimum viable implementation that satisfies the spec
3. Self-verify against the acceptance criteria before marking done
4. Push to git and confirm Vercel deploy succeeds

Hard rules:
- No placeholder content — ship real, working implementations
- No mocked API calls — wire real endpoints
- No new dependencies without checking if an existing library covers it
- Every Vercel page needs Analytics + Speed Insights`,
            },
            {
              role: "Content Writer Agent",
              template: `You are a content strategist and writer for [Company Name].

Voice: [describe your brand voice — e.g., "Direct, practical, no fluff. Written for busy Australian SMB owners."]

Target reader: [describe your ICP — e.g., "Australian tradies aged 30-50 who are growing their business but don't have a marketing team"]

For every piece of content:
1. Lead with the most valuable insight — no preamble
2. Use specific examples and numbers, not generalities
3. End with a clear CTA that matches the reader's stage of awareness
4. Comply with Australian Consumer Law — no guaranteed outcomes

Platforms and formats you write for: [list them]`,
            },
          ].map((item) => (
            <div key={item.role} className="mb-6">
              <h3 className="font-bold text-gray-800 mb-2">{item.role}</h3>
              <pre className="bg-gray-900 text-green-300 rounded-lg p-4 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap font-mono">
                {item.template}
              </pre>
            </div>
          ))}
        </section>

        {/* Chapter 5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
            5. Tool Configuration Guide
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Agents are only as powerful as the tools they can use. Here are the key integrations with the minimum viable
            setup for each.
          </p>
          <div className="space-y-4">
            {[
              {
                tool: "Stripe API",
                use: "Accept payments, verify purchases, create products and payment links",
                setup: "Get your secret key from Stripe Dashboard → Developers → API Keys. Store as STRIPE_SECRET_KEY env var. Never commit to git.",
                example: "curl -s https://api.stripe.com/v1/payment_links -u $STRIPE_SECRET_KEY:",
              },
              {
                tool: "MailerLite",
                use: "Email capture, opted-in subscriber lists, automated sequences",
                setup: "Create API token in MailerLite → Integrations → API. Store as MAILERLITE_API_KEY. Create a group for your list subscribers.",
                example: "POST https://connect.mailerlite.com/api/subscribers — add subscriber to group",
              },
              {
                tool: "Vercel",
                use: "Deploy Next.js apps, manage env vars, serve serverless functions",
                setup: "Install Vercel CLI: npm i -g vercel. Link project: vercel link. Pull env vars: vercel env pull. Deploy: git push (auto-deploys on push to main).",
                example: "vercel env add STRIPE_SECRET_KEY production",
              },
              {
                tool: "Dev.to API",
                use: "Publish long-form technical articles, build audience, drive inbound traffic",
                setup: "Settings → Extensions → Generate API Key. Store as DEVTO_API_KEY. Check for duplicate titles before publishing (rate limit: ~300s between posts).",
                example: "POST https://dev.to/api/articles — {\"article\":{\"title\":\"...\",\"body_markdown\":\"...\",\"published\":true}}",
              },
              {
                tool: "Gumroad API",
                use: "Sell digital products (PDFs, templates) with instant delivery",
                setup: "Create app at app.gumroad.com → Advanced → Applications. Get access_token. Products created via dashboard; delivery URL set in product settings.",
                example: "GET https://api.gumroad.com/v2/products — list your products",
              },
            ].map((item) => (
              <div key={item.tool} className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-1">{item.tool}</h3>
                <p className="text-sm text-gray-600 mb-2"><strong>Use case:</strong> {item.use}</p>
                <p className="text-sm text-gray-700 mb-2">{item.setup}</p>
                <code className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded block font-mono">{item.example}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Chapter 6 */}
        <div className="page-break" />
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
            6. Choosing the Right Model: Opus vs Sonnet vs Haiku
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Model selection is your biggest cost lever. Over-spec your agents and you&rsquo;ll burn budget fast.
            Under-spec them and they fail on complex tasks. Here&rsquo;s the decision framework we use:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-3 text-left font-bold">Model</th>
                  <th className="border border-gray-200 p-3 text-left font-bold">Best For</th>
                  <th className="border border-gray-200 p-3 text-left font-bold">Avoid For</th>
                  <th className="border border-gray-200 p-3 text-left font-bold">Relative Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Opus 4.6", "Strategy, complex reasoning, nuanced judgment, legal/compliance review", "Routine tasks — you'll overpay for every token", "~15x Haiku"],
                  ["Sonnet 4.6", "Code generation, content writing, task orchestration, multi-step workflows", "Simple lookups, pure retrieval tasks", "~3x Haiku"],
                  ["Haiku 4.5", "Simple classification, short responses, high-volume low-complexity tasks", "Anything requiring multi-step reasoning or complex output", "Baseline"],
                ].map(([model, best, avoid, cost]) => (
                  <tr key={model} className="even:bg-gray-50">
                    <td className="border border-gray-200 p-3 font-semibold">{model}</td>
                    <td className="border border-gray-200 p-3 text-gray-700">{best}</td>
                    <td className="border border-gray-200 p-3 text-gray-700">{avoid}</td>
                    <td className="border border-gray-200 p-3 text-gray-600 font-mono text-xs">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm font-semibold mb-1">The #1 model selection mistake:</p>
            <p className="text-amber-900 text-sm">
              Assigning a small model (Haiku with effort:low) to a complex manager role. The model can&rsquo;t follow
              multi-step instructions — it enters refusal loops or treats every trigger as a new user conversation.
              Manager agents (CEO, CTO) need Sonnet-class minimum. Execution agents can use smaller models for
              simple, well-scoped tasks.
            </p>
          </div>
        </section>

        {/* Chapter 7 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
            7. Real Examples From Our Production System
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            MarketingAI runs a live multi-agent system targeting $200 AUD in collected revenue. Here&rsquo;s what the
            production architecture looks like:
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Revenue Hunt (NMA-1136)",
                desc: "A standing parent task that never closes. All revenue-generating subtasks live under it. The CEO agent reviews the task tree every heartbeat and prioritises the highest-impact item.",
                lesson: "A persistent \"never close\" task is the backbone of continuous improvement loops.",
              },
              {
                title: "Content Calendar Gate (NMA-1230 / NMA-1234)",
                desc: "Discovered a paid deliverable (30-day LinkedIn calendar) was publicly accessible. CTO agent built a 3-layer protection: middleware cookie check → Stripe session verify route → server component HMAC validation. Stripe payment links updated via API — no manual founder action needed.",
                lesson: "Agents can fix their own security gaps. The key is having a systematic audit process, not just hoping for the best.",
              },
              {
                title: "Build → Verify → Ship Loop",
                desc: "CTO agent follows a self-verify checklist before marking any build done: title correct, inputs/outputs match spec, no leftover template content, real API calls (not stubs), structural requirements met, correct scripts in <head>. This 9-point checklist was written after 3 specific failures where missing checks cost hours of rework.",
                lesson: "Systematise your QA. Every failure is a checklist item.",
              },
              {
                title: "Rate Limit Management",
                desc: "Agents record their Claude API rate limit status to a shared file (rate-limit-live.md) at the end of every heartbeat. The CEO reads this file at the start of each session to decide whether to sprint (push more work) or conserve (reduce frequency). Five-hour rolling windows mean fresh budgets are available regularly.",
                lesson: "Model cost is a constraint you can manage, not just accept. Build visibility and controls.",
              },
            ].map((ex) => (
              <div key={ex.title} className="border-l-4 border-blue-500 pl-5 py-2">
                <h3 className="font-bold text-gray-900 mb-1">{ex.title}</h3>
                <p className="text-sm text-gray-700 mb-2">{ex.desc}</p>
                <p className="text-sm text-blue-700 italic"><strong>Lesson:</strong> {ex.lesson}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chapter 8 */}
        <div className="page-break" />
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
            8. Your 30-Day AI Agent Getting Started Plan
          </h2>
          <div className="space-y-6">
            {[
              {
                week: "Week 1 — Foundation",
                days: "Days 1–7",
                tasks: [
                  "Choose your agent platform (Paperclip, LangGraph, AutoGen, or roll your own)",
                  "Pick one use case: content writing, research, customer support, or sales ops",
                  "Create your first agent with a clear role, 3 tools, and 5 hard constraints",
                  "Run 10 test executions. Document every failure.",
                  "Write your first system prompt. Keep it under 500 words.",
                ],
              },
              {
                week: "Week 2 — First Tool Integration",
                days: "Days 8–14",
                tasks: [
                  "Integrate one external tool (Stripe, MailerLite, Vercel, or your CRM)",
                  "Build a real workflow that produces measurable output (a published article, a captured lead, a deployed page)",
                  "Set up structured logging so you can see what the agent did",
                  "Identify the most common failure modes. Add safeguards.",
                  "Calculate cost per task. Is the ROI positive at your current task volume?",
                ],
              },
              {
                week: "Week 3 — Delegation",
                days: "Days 15–21",
                tasks: [
                  "Hire your second agent — a specialist for your highest-volume task type",
                  "Define the delegation protocol: when does Agent 1 hand off to Agent 2?",
                  "Build a shared memory layer (a file, a database, or a task management system)",
                  "Test cross-agent communication. Does Agent 2 understand Agent 1's output?",
                  "Set trigger intervals: how often should each agent run?",
                ],
              },
              {
                week: "Week 4 — Scale and Optimise",
                days: "Days 22–30",
                tasks: [
                  "Review total output from the first 3 weeks. What worked? What wasted credits?",
                  "Downgrade any over-specced models. Upgrade any under-performing agents.",
                  "Add a QA agent that reviews output before it goes live",
                  "Document your agent system architecture for future maintenance",
                  "Calculate ROI: time saved × your hourly rate vs. compute cost. Share the result.",
                ],
              },
            ].map((week) => (
              <div key={week.week} className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">{week.days}</span>
                  <h3 className="font-bold text-gray-900">{week.week}</h3>
                </div>
                <ul className="space-y-1">
                  {week.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-500 mt-0.5">□</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Chapter 9 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
            9. Common Pitfalls and How to Avoid Them
          </h2>
          <div className="space-y-4">
            {[
              {
                pitfall: "The 'one agent does everything' mistake",
                symptom: "Your agent produces inconsistent quality across wildly different tasks",
                fix: "Specialise. A content writer agent and a coder agent will each outperform a generalist agent attempting both.",
              },
              {
                pitfall: "No shared memory layer",
                symptom: "Each agent execution starts from scratch. Previous decisions get repeated. Lessons don't stick.",
                fix: "Create canonical shared files (lessons.md, resources.md, metrics.md) that all agents read at the start of each session.",
              },
              {
                pitfall: "Under-specced model for the role",
                symptom: "Agent ignores complex instructions, enters loops, or treats every trigger as a new user conversation",
                fix: "Manager agents need Sonnet-class minimum. Never assign Haiku to a role requiring multi-step reasoning.",
              },
              {
                pitfall: "No rate limit visibility",
                symptom: "Agent runs burn through your monthly budget in 3 days, then everything stops",
                fix: "Read rate limit status at the start of every session. Record observations at the end. Build a decision rule: sprint when headroom is available, conserve when approaching limits.",
              },
              {
                pitfall: "Missing compliance constraints",
                symptom: "Agent sends cold emails, makes guaranteed claims, or takes irreversible actions without approval",
                fix: "Hard-code compliance rules in your system prompt. Spam Act, consumer protection laws, and irreversible actions (delete, send, publish) need explicit constraints — not just 'use good judgment'.",
              },
              {
                pitfall: "Leaving tasks in_progress forever",
                symptom: "Tasks accumulate in in_progress. Work never actually finishes.",
                fix: "One task at a time. Complete or release before starting new work. If a task can't be finished in one session, decompose it into subtasks.",
              },
            ].map((item) => (
              <div key={item.pitfall} className="border border-red-100 bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-900 mb-1">{item.pitfall}</h3>
                <p className="text-sm text-red-700 mb-2"><strong>Symptom:</strong> {item.symptom}</p>
                <p className="text-sm text-green-800"><strong>Fix:</strong> {item.fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 text-center">
          <p className="text-gray-900 font-bold mb-2">Ready to build your first agent system?</p>
          <p className="text-gray-600 text-sm mb-4">
            Get a personalised AI marketing plan for your business at marketingai.au
          </p>
          <p className="text-xs text-gray-400">
            Results are indicative only. Outcomes depend on your implementation and business context.
            &copy; 2026 MarketingAI. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
