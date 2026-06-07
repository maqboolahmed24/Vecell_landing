import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  assertSubmissionAllowed,
  assertSameOriginSubmission,
  persistLead,
  readSubmissionJson,
  resetSubmissionRateLimits,
  SubmissionRequestError,
  validateLead
} from '@/lib/submissions';
import { POST as contactPost } from '@/app/api/contact/route';

const validLeadInput = {
  name: 'Sarah Ahmed',
  email: 'sarah@example.nhs.uk',
  organisation: 'North Hub PCN',
  role: 'Operations lead',
  intent: 'Book a walkthrough',
  message: 'We want to review the request flow and assurance model.',
  consent: true,
  idempotencyKey: 'lead-key-123'
} as const;

beforeEach(() => {
  resetSubmissionRateLimits();
});

afterEach(() => {
  delete process.env.VECELL_SUBMISSION_STORE_PATH;
});

describe('validateLead', () => {
  it('accepts a complete lead', () => {
    const lead = validateLead(validLeadInput);

    expect(lead.intent).toBe('Book a walkthrough');
    expect(lead.idempotencyKey).toBe('lead-key-123');
  });

  it('rejects missing consent', () => {
    expect(() => validateLead({
      name: 'Sarah Ahmed',
      email: 'sarah@example.nhs.uk',
      organisation: 'North Hub PCN',
      intent: 'Book a walkthrough',
      message: 'We want to review the request flow and assurance model.',
      consent: false
    })).toThrow();
  });

  it('rejects filled spam trap fields', () => {
    expect(() => validateLead({
      ...validLeadInput,
      website: 'https://spam.example'
    })).toThrow();
  });
});

describe('persistLead', () => {
  it('uses the configured Vecell submission store path environment variable', async () => {
    const tempDir = await mkdtemp(join(tmpdir(), 'vecell-env-store-'));
    process.env.VECELL_SUBMISSION_STORE_PATH = join(tempDir, 'submissions.jsonl');

    try {
      const lead = validateLead(validLeadInput);
      const record = await persistLead(lead, 'contact', 'vitest');
      const configuredStore = await readFile(process.env.VECELL_SUBMISSION_STORE_PATH, 'utf8');

      expect(configuredStore).toContain(record.id);
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });

  it('returns the original record for a repeated idempotency key', async () => {
    const tempDir = await mkdtemp(join(tmpdir(), 'vecell-submissions-'));
    process.env.VECELL_SUBMISSION_STORE_PATH = join(tempDir, 'submissions.jsonl');

    try {
      const lead = validateLead(validLeadInput);
      const first = await persistLead(lead, 'contact', 'vitest');
      const second = await persistLead(lead, 'contact', 'vitest');

      expect(second.id).toBe(first.id);
      expect(second.createdAt).toBe(first.createdAt);
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });

  it('deduplicates concurrent writes with the same idempotency key', async () => {
    const tempDir = await mkdtemp(join(tmpdir(), 'vecell-concurrent-store-'));
    process.env.VECELL_SUBMISSION_STORE_PATH = join(tempDir, 'submissions.jsonl');

    try {
      const lead = validateLead(validLeadInput);
      const records = await Promise.all(
        Array.from({ length: 8 }, () => persistLead(lead, 'contact', 'vitest'))
      );
      const content = await readFile(process.env.VECELL_SUBMISSION_STORE_PATH, 'utf8');

      expect(new Set(records.map((record) => record.id)).size).toBe(1);
      expect(content.trim().split('\n')).toHaveLength(1);
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });

  it('ignores malformed historical store lines when checking idempotency', async () => {
    const tempDir = await mkdtemp(join(tmpdir(), 'vecell-corrupt-store-'));
    process.env.VECELL_SUBMISSION_STORE_PATH = join(tempDir, 'submissions.jsonl');

    try {
      await writeFile(process.env.VECELL_SUBMISSION_STORE_PATH, '{not-json}\n', 'utf8');

      const lead = validateLead(validLeadInput);
      const record = await persistLead(lead, 'contact', 'vitest');
      const retry = await persistLead(lead, 'contact', 'vitest');

      expect(retry.id).toBe(record.id);
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });
});

describe('assertSameOriginSubmission', () => {
  it('allows requests with no Origin header', () => {
    const request = new Request('https://vecell.example/api/contact', {
      method: 'POST'
    });

    expect(() => assertSameOriginSubmission(request)).not.toThrow();
  });

  it('rejects cross-origin browser submissions', () => {
    const request = new Request('https://vecell.example/api/contact', {
      method: 'POST',
      headers: {
        origin: 'https://attacker.example'
      }
    });

    expect(() => assertSameOriginSubmission(request)).toThrow(SubmissionRequestError);
  });

  it('rejects Fetch Metadata cross-site submissions without relying on Origin', () => {
    const request = new Request('https://vecell.example/api/contact', {
      method: 'POST',
      headers: {
        'sec-fetch-site': 'cross-site'
      }
    });

    expect(() => assertSameOriginSubmission(request)).toThrow(SubmissionRequestError);
  });

  it('allows a matching Origin even when Fetch Metadata is misleading', () => {
    const request = new Request('https://vecell.example/api/contact', {
      method: 'POST',
      headers: {
        origin: 'https://vecell.example',
        'sec-fetch-site': 'cross-site'
      }
    });

    expect(() => assertSameOriginSubmission(request)).not.toThrow();
  });
});

describe('readSubmissionJson', () => {
  it('rejects oversized request bodies', async () => {
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        ...validLeadInput,
        message: 'x'.repeat(20_000)
      })
    });

    await expect(readSubmissionJson(request)).rejects.toMatchObject({
      status: 413
    });
  });
});

describe('assertSubmissionAllowed', () => {
  it('rate-limits repeated submissions in the active window', () => {
    const now = Date.now();

    for (let attempt = 0; attempt < 5; attempt += 1) {
      expect(() => assertSubmissionAllowed('local:test-agent', now + attempt)).not.toThrow();
    }

    expect(() => assertSubmissionAllowed('local:test-agent', now + 5)).toThrow(SubmissionRequestError);
  });
});

describe('contact POST idempotency', () => {
  it('blocks cross-origin browser submissions before writing a lead', async () => {
    const tempDir = await mkdtemp(join(tmpdir(), 'vecell-origin-route-'));
    process.env.VECELL_SUBMISSION_STORE_PATH = join(tempDir, 'submissions.jsonl');

    try {
      const response = await contactPost(new Request('https://vecell.example/api/contact', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          origin: 'https://attacker.example',
          'user-agent': 'vitest-agent'
        },
        body: JSON.stringify(validLeadInput)
      }));

      expect(response.status).toBe(403);
      await expect(readFile(process.env.VECELL_SUBMISSION_STORE_PATH, 'utf8')).rejects.toMatchObject({
        code: 'ENOENT'
      });
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });

  it('returns the existing lead for duplicate retries without consuming the rate limit', async () => {
    const tempDir = await mkdtemp(join(tmpdir(), 'vecell-contact-route-'));
    process.env.VECELL_SUBMISSION_STORE_PATH = join(tempDir, 'submissions.jsonl');

    try {
      const responses = [];

      for (let attempt = 0; attempt < 7; attempt += 1) {
        responses.push(await contactPost(new Request('http://localhost/api/contact', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'user-agent': 'vitest-agent',
            'x-real-ip': '203.0.113.4'
          },
          body: JSON.stringify(validLeadInput)
        })));
      }

      const bodies = await Promise.all(responses.map((response) => response.json()));

      expect(responses[0].status).toBe(201);
      expect(responses.slice(1).every((response) => response.status === 200)).toBe(true);
      expect(new Set(bodies.map((body) => body.id)).size).toBe(1);
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });
});
