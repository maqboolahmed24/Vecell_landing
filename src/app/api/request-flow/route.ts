import { NextResponse } from 'next/server';
import { requestFlowPayload } from '@/lib/request-flow';
import { responseHeaders } from '@/lib/response-headers';

export function GET() {
  return NextResponse.json(requestFlowPayload(), {
    headers: responseHeaders()
  });
}
