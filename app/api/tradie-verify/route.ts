import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const COOKIE_NAME = "tradie_access";
const COOKIE_TTL_DAYS = 30;

function makeAccessToken(secret: string): string {
  const expires = Date.now() + COOKIE_TTL_DAYS * 24 * 60 * 60 * 1000;
  const payload = String(expires);
  const sig = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex")
    .slice(0, 24);
  return `${expires}.${sig}`;
}

async function verifyStripeSession(sessionId: string, stripeKey: string): Promise<boolean> {
  try {
    const res = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
      headers: { Authorization: `Bearer ${stripeKey}` },
    });
    if (!res.ok) return false;
    const session = await res.json();
    return session.payment_status === "paid";
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const secret = process.env.CRON_SECRET;

  if (!sessionId || !stripeKey || !secret) {
    return NextResponse.redirect(
      new URL("/tradie-calendar/download?access=required", request.url)
    );
  }

  const paid = await verifyStripeSession(sessionId, stripeKey);

  if (!paid) {
    return NextResponse.redirect(
      new URL("/tradie-calendar/download?access=required", request.url)
    );
  }

  const token = makeAccessToken(secret);
  const response = NextResponse.redirect(
    new URL("/tradie-calendar/download", request.url)
  );

  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: COOKIE_TTL_DAYS * 24 * 60 * 60,
    path: "/",
  });

  return response;
}
