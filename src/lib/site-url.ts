export function normaliseSiteUrl(value: string) {
  return value.trim().replace(/\/+$/, '');
}

export function configuredSiteUrl() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (explicitUrl) {
    return safeConfiguredSiteUrl(explicitUrl);
  }

  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (vercelProductionUrl) {
    return safeConfiguredSiteUrl(`https://${vercelProductionUrl}`);
  }

  const vercelPreviewUrl = process.env.VERCEL_URL;

  if (vercelPreviewUrl) {
    return safeConfiguredSiteUrl(`https://${vercelPreviewUrl}`);
  }

  return null;
}

export function fallbackLocalSiteUrl() {
  return `http://localhost:${process.env.PORT ?? '3000'}`;
}

export function siteUrlFromHost(hostHeader: string, protocolHeader?: string | null) {
  const host = firstHeaderValue(hostHeader);

  if (!host || /[\s/@\\]/.test(host)) {
    return fallbackLocalSiteUrl();
  }

  const protocol = allowedProtocol(firstHeaderValue(protocolHeader), host);

  try {
    return normaliseSiteUrl(new URL(`${protocol}://${host}`).origin);
  } catch {
    return fallbackLocalSiteUrl();
  }
}

function firstHeaderValue(value?: string | null) {
  return value?.split(',')[0]?.trim() ?? '';
}

function allowedProtocol(protocol: string, host: string) {
  const normalisedProtocol = protocol.toLowerCase();

  if (normalisedProtocol === 'http' || normalisedProtocol === 'https') {
    return normalisedProtocol;
  }

  return isLocalHost(host) ? 'http' : 'https';
}

function safeConfiguredSiteUrl(value: string) {
  const normalisedValue = normaliseSiteUrl(value);

  try {
    const url = new URL(normalisedValue);

    if (url.protocol === 'http:' || url.protocol === 'https:') {
      return normaliseSiteUrl(url.origin);
    }
  } catch {
    return null;
  }

  return null;
}

function isLocalHost(host: string) {
  return host.startsWith('localhost') || host.startsWith('127.0.0.1') || host.startsWith('[::1]');
}
