import { afterEach, describe, expect, it } from 'vitest';
import { configuredSiteUrl, fallbackLocalSiteUrl, normaliseSiteUrl, siteUrlFromHost } from '@/lib/site-url';

const originalEnv = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  PORT: process.env.PORT,
  VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
  VERCEL_URL: process.env.VERCEL_URL
};

afterEach(() => {
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
});

describe('site URL helpers', () => {
  it('normalises configured site URLs without trailing slashes', () => {
    expect(normaliseSiteUrl('https://vecells.example///')).toBe('https://vecells.example');
  });

  it('uses the active local port for fallback URLs', () => {
    process.env.PORT = '3001';

    expect(fallbackLocalSiteUrl()).toBe('http://localhost:3001');
  });

  it('returns a valid configured public site URL', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://vecells.example///';

    expect(configuredSiteUrl()).toBe('https://vecells.example');
  });

  it('drops path segments from configured public site URLs', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://vecells.example/app/path';

    expect(configuredSiteUrl()).toBe('https://vecells.example');
  });

  it('ignores malformed configured site URLs before metadata uses them', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'localhost:3000';
    delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
    delete process.env.VERCEL_URL;

    expect(configuredSiteUrl()).toBeNull();
  });

  it('uses Vercel production URL when no explicit site URL is configured', () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    process.env.VERCEL_PROJECT_PRODUCTION_URL = 'vecells.vercel.app';

    expect(configuredSiteUrl()).toBe('https://vecells.vercel.app');
  });

  it('builds a safe origin from forwarded host and protocol headers', () => {
    expect(siteUrlFromHost('vecells.example, proxy.local', 'https, http')).toBe('https://vecells.example');
  });

  it('defaults to HTTPS for public hosts when the forwarded protocol is invalid', () => {
    expect(siteUrlFromHost('vecells.example', 'javascript')).toBe('https://vecells.example');
  });

  it('falls back locally for malformed host headers', () => {
    process.env.PORT = '3002';

    expect(siteUrlFromHost('vecells.example/path', 'https')).toBe('http://localhost:3002');
  });
});
