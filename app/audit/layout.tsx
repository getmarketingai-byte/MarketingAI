import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Marketing Audit \u2014 $49 AUD | MarketingAI',
  description: 'Get a personalised AI Marketing Audit for your Australian business. 3-page audit with gaps analysis, 3 actionable recommendations, and a 30-day roadmap. Delivered within 24 hours for $49 AUD.',
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
