import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { configuredSiteUrl, fallbackLocalSiteUrl, siteUrlFromHost } from '@/lib/site-url';

export const dynamic = 'force-dynamic';

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

export default async function robots(): Promise<MetadataRoute.Robots> {
  const siteUrl = await currentSiteUrl();

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
