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
import { responseHeaders } from '@/lib/response-headers';
import { notifyLeadSubmission } from '@/lib/lead-notifications';

export async function POST(request: Request) {
  try {
    assertSameOriginSubmission(request);
    const input = await readSubmissionJson(request);
    const lead = validateLead({
      ...(input && typeof input === 'object' ? input : {}),
      intent: 'Book a walkthrough'
    });
    const existing = await findExistingLeadByKey('walkthrough', lead.idempotencyKey);

    if (existing) {
      return NextResponse.json(leadResponse(existing), { status: 200, headers: responseHeaders() });
    }

    assertSubmissionAllowed(clientFingerprint(request.headers));
    const record = await persistLead(lead, 'walkthrough', request.headers.get('user-agent') ?? 'unknown', {
      beforePersist: notifyLeadSubmission
    });

    return NextResponse.json(leadResponse(record), { status: 201, headers: responseHeaders() });
  } catch (error) {
    const body = errorResponse(error);
    return NextResponse.json(body, {
      status: errorStatus(error),
      headers: responseHeaders(errorHeaders(error))
    });
  }
}
