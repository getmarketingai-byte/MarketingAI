import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "MarketingAI — Automated marketing for Australian businesses",
  description: "MarketingAI sets up an automated marketing system for your Australian business. AI Funnel Machine, Outbound Engine, and Creative Goldmine. $149 AUD one-time setup.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
