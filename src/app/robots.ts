import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/consult/success',
        '/api/',
      ],
    },
    sitemap: 'https://www.medicolegalaid.com/sitemap.xml',
  };
}
