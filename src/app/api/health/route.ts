import { NextResponse } from 'next/server';
import { responseHeaders } from '@/lib/response-headers';

export function GET() {
  return NextResponse.json({
    ok: true,
    service: 'vecell-operating-layer',
    checkedAt: new Date().toISOString()
  }, {
    headers: responseHeaders()
  });
}
