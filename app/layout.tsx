import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "MarketingAI — AI-assisted marketing systems for Australian small businesses",
  description: "MarketingAI sets up three AI-assisted marketing systems for your Australian business: AI Content Engine, Outbound Lead Sequence, and Email Nurture Sequence. $149 AUD one-time setup. No lock-in.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MarketingAI",
  "url": "https://marketing-ai-psi-nine.vercel.app",
  "description": "MarketingAI sets up an automated marketing system for Australian small businesses — AI Content Engine, Outbound Lead Sequence, and Email Nurture Sequence — in under a week for $149 AUD.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": "https://calendly.com/getmarketingai/30min"
  },
  "areaServed": ["AU", "US", "GB", "CA", "NZ"]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Marketing System Setup",
  "provider": {
    "@type": "Organization",
    "name": "MarketingAI"
  },
  "description": "Done-with-you marketing system setup including AI Content Engine, Outbound Lead Sequence, and Email Nurture Sequence. Configured to your business and delivered in under 7 days.",
  "offers": {
    "@type": "Offer",
    "price": "149",
    "priceCurrency": "AUD",
    "url": "https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00"
  },
  "areaServed": ["AU", "US", "GB", "CA", "NZ"]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MarketingAI",
  "url": "https://marketing-ai-psi-nine.vercel.app"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
       <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
         {children}
         <footer style={{ background: '#1a1a2e', color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '20px', fontSize: '0.82rem' }}>
           <p>
             <a href="/about" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>About</a> |
             <a href="/privacy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>Privacy Policy</a> |
             <a href="/support" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>Contact</a> |
             <a href="https://calendly.com/getmarketingai/30min" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>Book a Call</a>
           </p>
           <p style={{ marginTop: '8px' }}>© 2026 MarketingAI. Results are indicative only. Marketing outcomes are not guaranteed.</p>
         </footer>
         <Analytics />
         <SpeedInsights />
       </body>
    </html>
  );
}
