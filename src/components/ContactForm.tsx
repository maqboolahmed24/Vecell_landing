'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { contactIntents } from '@/content/site';

type SubmitState =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success'; id: string }
  | { state: 'error'; message: string };

function createSubmissionKey() {
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitState, setSubmitState] = useState<SubmitState>({ state: 'idle' });
  const [submissionKey, setSubmissionKey] = useState(createSubmissionKey);

  async function handleSubmit(formData: FormData) {
    setSubmitState({ state: 'submitting' });
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      organisation: formData.get('organisation'),
      role: formData.get('role'),
      intent: formData.get('intent'),
      message: formData.get('message'),
      consent: formData.get('consent') === 'on',
      idempotencyKey: submissionKey,
      website: formData.get('website')
    };

    try {
      const response = await fetch(compact ? '/api/walkthrough' : '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const body = await response.json().catch(() => null);

      if (!response.ok || !body?.ok || typeof body.id !== 'string') {
        setSubmitState({
          state: 'error',
          message: body?.error ?? 'The request could not be sent.'
        });
        return;
      }

      setSubmitState({ state: 'success', id: body.id });
      setSubmissionKey(createSubmissionKey());
    } catch {
      setSubmitState({
        state: 'error',
        message: 'The request could not be sent. Check your connection and try again.'
      });
    }
  }

  return (
    <form
      className={compact ? 'contact-form contact-form-compact' : 'contact-form'}
      action={handleSubmit}
      aria-busy={submitState.state === 'submitting'}
    >
      <input name="idempotencyKey" type="hidden" value={submissionKey} readOnly />
      <div className="spam-field" aria-hidden="true">
        <input name="website" aria-label="Company website" autoComplete="off" tabIndex={-1} />
      </div>
      <div className="field-grid">
        <label>
          Name
          <input name="name" autoComplete="name" required minLength={2} />
        </label>
        <label>
          Work email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="field-grid">
        <label>
          Organisation
          <input name="organisation" autoComplete="organization" required minLength={2} />
        </label>
        <label>
          Role
          <input name="role" autoComplete="organization-title" />
        </label>
      </div>
      <label>
        What should we help with?
        <select name="intent" defaultValue={compact ? 'Book a walkthrough' : 'Discuss primary-care demand'} required>
          {contactIntents.map((intent) => (
            <option key={intent}>{intent}</option>
          ))}
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          required
          minLength={12}
          rows={compact ? 4 : 6}
          defaultValue={compact ? 'I would like to see the governed request flow and operations assurance model.' : ''}
        />
      </label>
      <label className="checkbox-row">
        <input name="consent" type="checkbox" required />
        <span>I agree that Vecells can use this information to respond to my enquiry.</span>
      </label>
      <button className="button button-primary form-submit" type="submit" disabled={submitState.state === 'submitting'}>
        {submitState.state === 'submitting' ? 'Sending' : compact ? 'Request walkthrough' : 'Send enquiry'}
        <ArrowRight aria-hidden="true" size={16} />
      </button>
      {submitState.state === 'success' ? (
        <p className="form-state form-success" role="status">
          <CheckCircle2 aria-hidden="true" size={18} />
          Request received. Reference {submitState.id.slice(0, 8)}.
        </p>
      ) : null}
      {submitState.state === 'error' ? <p className="form-state form-error" role="alert">{submitState.message}</p> : null}
    </form>
  );
}
