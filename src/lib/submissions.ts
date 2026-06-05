import { randomUUID } from 'node:crypto';
import { appendFile, mkdir, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { z } from 'zod';

const maxSubmissionBytes = 16_384;
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMax = 5;
const maxRateLimitBuckets = 10_000;

interface RateLimitBucket {
  count: number;
  resetAt: number;
}

const rateLimitBuckets = new Map<string, RateLimitBucket>();
let persistenceQueue = Promise.resolve();

export const contactIntentSchema = z.enum([
  'Book a walkthrough',
  'Discuss primary-care demand',
  'Review NHS App readiness',
  'Talk about security and assurance',
  'Other'
]);

const idempotencyKeySchema = z.string().trim().min(8).max(120).regex(/^[a-zA-Z0-9._:-]+$/);

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  organisation: z.string().trim().min(2).max(160),
  role: z.string().trim().max(120).optional().default(''),
  intent: contactIntentSchema,
  message: z.string().trim().min(12).max(2000),
  consent: z.literal(true),
  idempotencyKey: idempotencyKeySchema.optional().default(''),
  website: z.string().trim().max(240).optional().default('')
}).superRefine((lead, context) => {
  if (lead.website.length > 0) {
    context.addIssue({
      code: 'custom',
      path: ['website'],
      message: 'Leave this field blank'
    });
  }
}).transform(({ website: _website, ...lead }) => lead);

export type LeadInput = z.input<typeof leadSchema>;
export type Lead = z.output<typeof leadSchema>;

export interface LeadRecord extends Lead {
  id: string;
  createdAt: string;
  source: 'contact' | 'walkthrough';
  userAgent: string;
}

export class SubmissionRequestError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly retryAfterSeconds?: number
  ) {
    super(message);
  }
}

export function validateLead(input: unknown): Lead {
  return leadSchema.parse(input);
}

function submissionStorePath() {
  return (
    process.env.VECELLS_SUBMISSION_STORE_PATH ??
    process.env.VECELL_SUBMISSION_STORE_PATH ??
    (process.env.NODE_ENV === 'production'
      ? join(tmpdir(), 'vecells-submissions.jsonl')
      : join(process.cwd(), 'data', 'submissions.jsonl'))
  );
}

async function findExistingLead(storePath: string, source: LeadRecord['source'], idempotencyKey: string) {
  if (!idempotencyKey) {
    return null;
  }

  try {
    const content = await readFile(storePath, 'utf8');
    const lines = content.trim().split('\n').filter(Boolean).reverse();

    for (const line of lines) {
      let parsed: Partial<LeadRecord>;

      try {
        parsed = JSON.parse(line) as Partial<LeadRecord>;
      } catch {
        continue;
      }

      if (parsed.source === source && parsed.idempotencyKey === idempotencyKey && typeof parsed.id === 'string') {
        return parsed as LeadRecord;
      }
    }
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      return null;
    }
    throw error;
  }

  return null;
}

export async function findExistingLeadByKey(source: LeadRecord['source'], idempotencyKey: string) {
  return findExistingLead(submissionStorePath(), source, idempotencyKey);
}

export async function persistLead(input: Lead, source: LeadRecord['source'], userAgent: string): Promise<LeadRecord> {
  const storePath = submissionStorePath();

  return withPersistenceLock(async () => {
    const existing = await findExistingLead(storePath, source, input.idempotencyKey);

    if (existing) {
      return existing;
    }

    const record: LeadRecord = {
      ...input,
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      source,
      userAgent: userAgent.slice(0, 500)
    };

    await mkdir(dirname(storePath), { recursive: true });
    await appendFile(storePath, `${JSON.stringify(record)}\n`, 'utf8');

    return record;
  });
}

export async function readSubmissionJson(request: Request) {
  const declaredLength = Number(request.headers.get('content-length') ?? 0);

  if (Number.isFinite(declaredLength) && declaredLength > maxSubmissionBytes) {
    throw new SubmissionRequestError('Request payload is too large', 413);
  }

  const text = await request.text();

  if (new TextEncoder().encode(text).byteLength > maxSubmissionBytes) {
    throw new SubmissionRequestError('Request payload is too large', 413);
  }

  try {
    return JSON.parse(text) as unknown;
  } catch {
    throw new SubmissionRequestError('Invalid JSON payload', 400);
  }
}

export function assertSameOriginSubmission(request: Request) {
  const fetchSite = request.headers.get('sec-fetch-site')?.toLowerCase();

  if (fetchSite === 'cross-site') {
    throw new SubmissionRequestError('Request origin is not allowed', 403);
  }

  const originHeader = request.headers.get('origin');

  if (!originHeader) {
    return;
  }

  let origin: string;
  let requestOrigin: string;

  try {
    origin = new URL(originHeader).origin;
    requestOrigin = new URL(request.url).origin;
  } catch {
    throw new SubmissionRequestError('Request origin is not allowed', 403);
  }

  if (origin !== requestOrigin) {
    throw new SubmissionRequestError('Request origin is not allowed', 403);
  }
}

async function withPersistenceLock<T>(action: () => Promise<T>) {
  const previous = persistenceQueue;
  let release: () => void;
  persistenceQueue = new Promise<void>((resolve) => {
    release = resolve;
  });

  await previous;

  try {
    return await action();
  } finally {
    release!();
  }
}

export function clientFingerprint(headers: Headers) {
  const forwardedFor = headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const realIp = headers.get('x-real-ip')?.trim();
  const userAgent = headers.get('user-agent')?.slice(0, 120) ?? 'unknown';

  return `${forwardedFor || realIp || 'local'}:${userAgent}`;
}

function pruneExpiredRateLimitBuckets(now: number) {
  for (const [fingerprint, bucket] of rateLimitBuckets) {
    if (bucket.resetAt <= now) {
      rateLimitBuckets.delete(fingerprint);
    }
  }
}

export function assertSubmissionAllowed(fingerprint: string, now = Date.now()) {
  pruneExpiredRateLimitBuckets(now);

  if (rateLimitBuckets.size > maxRateLimitBuckets) {
    rateLimitBuckets.clear();
  }

  const bucket = rateLimitBuckets.get(fingerprint);

  if (!bucket || bucket.resetAt <= now) {
    rateLimitBuckets.set(fingerprint, {
      count: 1,
      resetAt: now + rateLimitWindowMs
    });
    return;
  }

  if (bucket.count >= rateLimitMax) {
    const retryAfterSeconds = Math.max(1, Math.ceil((bucket.resetAt - now) / 1000));
    throw new SubmissionRequestError('Too many requests', 429, retryAfterSeconds);
  }

  bucket.count += 1;
}

export function resetSubmissionRateLimits() {
  rateLimitBuckets.clear();
}

export function leadResponse(record: LeadRecord) {
  return {
    ok: true,
    id: record.id,
    receivedAt: record.createdAt,
    nextStep: 'A Vecells team member will review the request and respond with the appropriate walkthrough route.'
  };
}

export function errorResponse(error: unknown) {
  if (error instanceof z.ZodError) {
    return {
      ok: false,
      error: 'Validation failed',
      issues: error.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message
      }))
    };
  }

  if (error instanceof SubmissionRequestError) {
    return {
      ok: false,
      error: error.message
    };
  }

  return {
    ok: false,
    error: 'Request could not be processed'
  };
}

export function errorStatus(error: unknown) {
  if (error instanceof z.ZodError) {
    return 400;
  }

  if (error instanceof SubmissionRequestError) {
    return error.status;
  }

  return 500;
}

export function errorHeaders(error: unknown) {
  if (error instanceof SubmissionRequestError && error.retryAfterSeconds) {
    return {
      'Retry-After': String(error.retryAfterSeconds)
    };
  }

  return undefined;
}
