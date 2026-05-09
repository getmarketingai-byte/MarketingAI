import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "@/lib/auth";

const PUBLIC_PATHS = ["/login", "/api/auth/login"];
const TRADIE_ACCESS_COOKIE = "tradie_access";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Gate tradie calendar content behind purchase verification cookie
  // Full HMAC verification happens in the server component; middleware only gates on presence
  if (pathname.startsWith("/tradie-calendar/content")) {
    const cookie = request.cookies.get(TRADIE_ACCESS_COOKIE)?.value;
    if (!cookie) {
      return NextResponse.redirect(
        new URL("/tradie-calendar/download?access=required", request.url)
      );
    }
    return NextResponse.next();
  }

  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  const session = await getIronSession<SessionData>(
    request,
    response,
    sessionOptions
  );

  if (!session.authenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/tradie-calendar/content/:path*",
    "/dashboard/:path*",
    "/content/:path*",
    "/leads/:path*",
  ],
};
