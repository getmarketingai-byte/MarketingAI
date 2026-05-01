import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/login',
          '/dashboard',
          '/leads',
          '/content',
          '/api/',
        ],
      },
    ],
    sitemap: 'https://marketing-ai-psi-nine.vercel.app/sitemap.xml',
  };
}
