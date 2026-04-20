import fs from "fs";
import path from "path";

export interface Campaign {
  id: string;
  name: string;
  status: "active" | "paused" | "complete";
  startDate: string;
  description: string;
  channels: string[];
  goal: string;
}

export interface Post {
  id: string;
  title: string;
  scheduledDate: string;
  platform: string;
  status: "awaiting_approval" | "approved" | "scheduled" | "published";
  body: string;
}

export interface NextAction {
  id: string;
  text: string;
  type: "approval" | "credentials" | "info";
  postId?: string;
  urgent: boolean;
}

export interface ClientRecord {
  clientId: string;
  name: string;
  status: "active" | "paused" | "churned";
  campaigns: Campaign[];
  landingPage: {
    url: string;
    status: "live" | "staging" | "pending";
    emailCapture: boolean;
  };
  leads: {
    total: number;
    thisWeek: number;
    source: string;
    lastUpdated: string;
  };
  contentCalendar: {
    source: string;
    cadence: string;
    nextPost: { date: string; type: string; status: string };
    pipeline: number;
  };
  posts: Post[];
  nextActions: NextAction[];
  supportEmail?: string;
  updatedAt: string;
}

export function getClientData(clientId: string): ClientRecord | null {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "clients",
      `${clientId}.json`
    );
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as ClientRecord;
  } catch {
    return null;
  }
}
