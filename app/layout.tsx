import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "MarketingAI — AI-assisted marketing systems for Australian small businesses",
  description: "MarketingAI sets up three AI-assisted marketing systems for your Australian business: AI Content Engine, Outbound Lead Sequence, and Email Nurture Sequence. $149 AUD one-time setup. No lock-in.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        {/* Google AdSense - Lesson #17 */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7076137753154472"
          crossOrigin="anonymous"></script>
        {/* Google tag (gtag.js) - Lesson #38 */}
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
