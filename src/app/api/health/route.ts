import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    ok: true,
    service: 'vecell-landing-page',
    checkedAt: new Date().toISOString()
  });
}
