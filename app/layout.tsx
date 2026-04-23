import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

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
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7076137753154472"
          crossOrigin="anonymous"></script>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-2Q8MGZ47BC" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2Q8MGZ47BC');
          `}
        </Script>
      </head>
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
