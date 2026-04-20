import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getClientData } from "@/lib/data";

export async function GET(
  _req: NextRequest,
  { params }: { params: { clientId: string } }
) {
  const session = await getSession();
  if (!session.authenticated || session.clientId !== params.clientId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = getClientData(params.clientId);
  if (!data) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}
