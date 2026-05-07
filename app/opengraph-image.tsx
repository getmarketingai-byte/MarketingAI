import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MarketingAI — AI-assisted marketing for Australian small businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #4f86f7, #a78bfa)",
              borderRadius: "12px",
              padding: "12px 20px",
              marginRight: "16px",
            }}
          >
            <span style={{ color: "white", fontSize: "28px", fontWeight: "bold" }}>
              M
            </span>
          </div>
          <span style={{ color: "white", fontSize: "48px", fontWeight: "bold" }}>
            MarketingAI
          </span>
        </div>

        <div
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "28px",
            textAlign: "center",
            lineHeight: "1.4",
            maxWidth: "900px",
            marginBottom: "40px",
          }}
        >
          AI-assisted marketing systems for Australian small businesses
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {["AI Content Engine", "Lead Sequence", "Email Nurture"].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "8px",
                padding: "10px 20px",
                color: "rgba(255,255,255,0.8)",
                fontSize: "18px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #4f86f7, #a78bfa)",
            borderRadius: "50px",
            padding: "16px 40px",
            color: "white",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          $149 AUD — One-time setup
        </div>
      </div>
    ),
    { ...size }
  );
}
