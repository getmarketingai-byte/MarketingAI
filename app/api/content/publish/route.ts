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
  duplicate?: boolean;
}

interface HashnodeResult {
  success: boolean;
  url?: string;
  id?: string;
  error?: string;
  duplicate?: boolean;
}

interface PublishResult {
  devto?: DevToResult;
  hashnode?: HashnodeResult;
}

async function checkHashnodeDuplicate(
  apiKey: string,
  publicationId: string,
  title: string
): Promise<{ isDuplicate: boolean; existingUrl?: string }> {
  const query = `
    query GetPublicationPosts($id: ObjectId!, $first: Int!) {
      publication(id: $id) {
        posts(first: $first) {
          edges {
            node {
              title
              url
            }
          }
        }
      }
    }
  `;
  try {
    const res = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { Authorization: apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { id: publicationId, first: 50 } }),
    });
    const data = await res.json();
    const posts: { title: string; url: string }[] =
      data?.data?.publication?.posts?.edges?.map((e: { node: { title: string; url: string } }) => e.node) ?? [];
    const titleLower = title.toLowerCase().trim();
    const match = posts.find((p) => p.title.toLowerCase().trim() === titleLower);
    return match ? { isDuplicate: true, existingUrl: match.url } : { isDuplicate: false };
  } catch {
    return { isDuplicate: false };
  }
}

async function checkDevtoDuplicate(
  apiKey: string,
  title: string
): Promise<{ isDuplicate: boolean; existingUrl?: string }> {
  try {
    const res = await fetch("https://dev.to/api/articles/me/published?per_page=100", {
      headers: { "api-key": apiKey },
    });
    if (!res.ok) return { isDuplicate: false };
    const articles: { title: string; url: string }[] = await res.json();
    const titleLower = title.toLowerCase().trim();
    const match = articles.find((a) => a.title.toLowerCase().trim() === titleLower);
    return match ? { isDuplicate: true, existingUrl: match.url } : { isDuplicate: false };
  } catch {
    return { isDuplicate: false };
  }
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
      // Duplicate check
      const { isDuplicate, existingUrl } = await checkDevtoDuplicate(devtoApiKey, title);
      if (isDuplicate) {
        result.devto = { success: false, duplicate: true, url: existingUrl, error: "Article already exists on Dev.to" };
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
  }

  if (platforms.includes("hashnode")) {
    const hashnodeApiKey = process.env.HASHNODE_API_KEY;
    const hashnodePublicationId = process.env.HASHNODE_PUBLICATION_ID;

    if (!hashnodeApiKey) {
      result.hashnode = { success: false, error: "HASHNODE_API_KEY not configured" };
    } else if (!hashnodePublicationId) {
      result.hashnode = {
        success: false,
        error: "HASHNODE_PUBLICATION_ID not configured",
      };
    } else {
      // Duplicate check
      const { isDuplicate, existingUrl } = await checkHashnodeDuplicate(hashnodeApiKey, hashnodePublicationId, title);
      if (isDuplicate) {
        result.hashnode = { success: false, duplicate: true, url: existingUrl, error: "Article already exists on Hashnode" };
      } else {
        try {
          const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .slice(0, 80);

          const mutation = `
            mutation PublishPost($input: PublishPostInput!) {
              publishPost(input: $input) {
                post {
                  id
                  url
                }
              }
            }
          `;

          const variables = {
            input: {
              title,
              contentMarkdown: body_markdown,
              publicationId: hashnodePublicationId,
              slug,
              tags: [],
              ...(canonical_url ? { originalArticleURL: canonical_url } : {}),
            },
          };

          const hashnodeRes = await fetch("https://gql.hashnode.com", {
            method: "POST",
            headers: {
              Authorization: hashnodeApiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: mutation, variables }),
          });

          const hashnodeData = await hashnodeRes.json();

          if (hashnodeData.errors && hashnodeData.errors.length > 0) {
            result.hashnode = {
              success: false,
              error: hashnodeData.errors[0].message,
            };
          } else if (hashnodeData.data?.publishPost?.post?.url) {
            result.hashnode = {
              success: true,
              url: hashnodeData.data.publishPost.post.url,
              id: hashnodeData.data.publishPost.post.id,
            };
          } else {
            result.hashnode = {
              success: false,
              error: `Unexpected Hashnode response: ${JSON.stringify(hashnodeData)}`,
            };
          }
        } catch (err) {
          result.hashnode = {
            success: false,
            error: err instanceof Error ? err.message : "Unknown error",
          };
        }
      }
    }
  }

  return NextResponse.json(result);
}
