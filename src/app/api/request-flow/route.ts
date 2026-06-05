import { NextResponse } from 'next/server';
import { requestFlowPayload } from '@/lib/request-flow';

export function GET() {
  return NextResponse.json(requestFlowPayload());
}
