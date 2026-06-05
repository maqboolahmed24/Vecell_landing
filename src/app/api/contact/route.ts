import { NextResponse } from 'next/server';
import {
  assertSubmissionAllowed,
  assertSameOriginSubmission,
  clientFingerprint,
  errorHeaders,
  errorResponse,
  errorStatus,
  findExistingLeadByKey,
  leadResponse,
  persistLead,
  readSubmissionJson,
  validateLead
} from '@/lib/submissions';

export async function POST(request: Request) {
  try {
    assertSameOriginSubmission(request);
    const input = await readSubmissionJson(request);
    const lead = validateLead(input);
    const existing = await findExistingLeadByKey('contact', lead.idempotencyKey);

    if (existing) {
      return NextResponse.json(leadResponse(existing), { status: 200 });
    }

    assertSubmissionAllowed(clientFingerprint(request.headers));
    const record = await persistLead(lead, 'contact', request.headers.get('user-agent') ?? 'unknown');

    return NextResponse.json(leadResponse(record), { status: 201 });
  } catch (error) {
    const body = errorResponse(error);
    return NextResponse.json(body, {
      status: errorStatus(error),
      headers: errorHeaders(error)
    });
  }
}
