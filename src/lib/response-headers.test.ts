import { describe, expect, it } from 'vitest';
import { responseHeaders } from '@/lib/response-headers';

describe('responseHeaders', () => {
  it('marks dynamic JSON responses as non-cacheable and preserves extra headers', () => {
    expect(responseHeaders({ 'Retry-After': '60' })).toEqual({
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      Pragma: 'no-cache',
      'retry-after': '60'
    });
  });
});
