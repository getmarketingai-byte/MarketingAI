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
  nextActions: string[];
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
