import { NextRequest, NextResponse } from "next/server";

interface PublishRequest {
  title: string;
  body_markdown: string;
  tags?: string[];
  canonical_url?: string;
  platforms?: string[];
}

interface DevToResult {
  success: boolean;
  url?: string;
  id?: number;
  error?: string;
}

interface PublishResult {
  devto?: DevToResult;
  // hashnode?: HashnodeResult; // TODO: add when Hashnode account is created
}

export async function POST(req: NextRequest) {
  // Authenticate via CRON_SECRET
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: PublishRequest;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { title, body_markdown, tags = [], canonical_url, platforms = ["devto"] } = body;

  if (!title || !body_markdown) {
    return NextResponse.json({ error: "title and body_markdown are required" }, { status: 400 });
  }

  const result: PublishResult = {};

  if (platforms.includes("devto")) {
    const devtoApiKey = process.env.DEVTO_API_KEY;
    if (!devtoApiKey) {
      result.devto = { success: false, error: "DEVTO_API_KEY not configured" };
    } else {
      try {
        const devtoRes = await fetch("https://dev.to/api/articles", {
          method: "POST",
          headers: {
            "api-key": devtoApiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            article: {
              title,
              body_markdown,
              published: true,
              tags,
              ...(canonical_url ? { canonical_url } : {}),
            },
          }),
        });

        const devtoData = await devtoRes.json();

        if (devtoRes.ok && devtoData.url) {
          result.devto = { success: true, url: devtoData.url, id: devtoData.id };
        } else {
          result.devto = {
            success: false,
            error: devtoData.error || `Dev.to returned ${devtoRes.status}`,
          };
        }
      } catch (err) {
        result.devto = {
          success: false,
          error: err instanceof Error ? err.message : "Unknown error",
        };
      }
    }
  }

  // TODO: Add Hashnode support when HASHNODE_API_KEY is available
  // if (platforms.includes("hashnode")) { ... }

  return NextResponse.json(result);
}
