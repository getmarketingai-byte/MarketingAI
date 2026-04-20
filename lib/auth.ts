import { getIronSession, IronSession } from "iron-session";
import { cookies } from "next/headers";

export interface SessionData {
  clientId: string;
  authenticated: boolean;
}

export const sessionOptions = {
  password: process.env.PORTAL_SECRET as string,
  cookieName: "marketingai_portal_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax" as const,
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
};

export async function getSession(): Promise<IronSession<SessionData>> {
  return getIronSession<SessionData>(await cookies(), sessionOptions);
}

/**
 * Look up clientId by email using env vars.
 * Env var pattern: CLIENT_EMAIL_neutrino=client@example.com
 * Returns the clientId (e.g. "neutrino") or null.
 */
export function getClientIdByEmail(email: string): string | null {
  const prefix = "CLIENT_EMAIL_";
  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith(prefix) && value === email) {
      return key.slice(prefix.length).toLowerCase();
    }
  }
  return null;
}

/**
 * Returns the bcrypt hash for a given clientId.
 * Env var pattern: CLIENT_PASSWORD_HASH_neutrino=$2b$10$...
 */
export function getPasswordHash(clientId: string): string | null {
  const key = `CLIENT_PASSWORD_HASH_${clientId.toUpperCase()}`;
  return process.env[key] ?? null;
}
