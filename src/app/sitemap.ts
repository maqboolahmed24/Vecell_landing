import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { configuredSiteUrl, fallbackLocalSiteUrl, siteUrlFromHost } from '@/lib/site-url';

export const dynamic = 'force-dynamic';

const routes = [
  '',
  '/product/how-it-works',
  '/solutions',
  '/about',
  '/contact',
  '/privacy',
  '/cookies',
  '/terms',
  '/security',
  '/accessibility'
];

async function currentSiteUrl() {
  const configuredUrl = configuredSiteUrl();

  if (configuredUrl) {
    return configuredUrl;
  }

  const requestHeaders = await headers();
  const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host');

  if (!host) {
    return fallbackLocalSiteUrl();
  }

  return siteUrlFromHost(host, requestHeaders.get('x-forwarded-proto'));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = await currentSiteUrl();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date('2026-06-05'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7
  }));
}
