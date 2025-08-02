import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/legal/'],
      },
      {
        userAgent: '*',
        allow: ['/legal/privacy', '/legal/terms', '/legal/cookies', '/legal/crypto'],
      },
    ],
    sitemap: 'https://rulo.pro/sitemap.xml',
  }
}