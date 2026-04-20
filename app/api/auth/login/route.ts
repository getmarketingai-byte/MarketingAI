import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getSession, getClientIdByEmail, getPasswordHash } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password required." }, { status: 400 });
  }

  const clientId = getClientIdByEmail(email.trim().toLowerCase());
  if (!clientId) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const hash = getPasswordHash(clientId);
  if (!hash) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, hash);
  if (!valid) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const session = await getSession();
  session.clientId = clientId;
  session.authenticated = true;
  await session.save();

  return NextResponse.json({ ok: true });
}
