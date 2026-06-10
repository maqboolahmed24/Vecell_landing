const noStoreResponseHeaders = {
  'Cache-Control': 'no-store, no-cache, must-revalidate',
  Pragma: 'no-cache'
} as const;

export function responseHeaders(extraHeaders?: HeadersInit) {
  return {
    ...noStoreResponseHeaders,
    ...(extraHeaders ? Object.fromEntries(new Headers(extraHeaders).entries()) : {})
  };
}
