import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    ok: true,
    service: 'vecell-operating-layer',
    checkedAt: new Date().toISOString()
  });
}
