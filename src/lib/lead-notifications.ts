import type { LeadRecord } from '@/lib/submissions';
import { SubmissionRequestError } from '@/lib/submissions';

export const leadNotificationRecipient = 'admin@vecell.co.uk';

const resendEndpoint = 'https://api.resend.com/emails';
const fallbackFromEmail = 'Vecell Website <admin@vecell.co.uk>';

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function leadNotificationText(record: LeadRecord) {
  return [
    `New Vecell ${record.source} request`,
    '',
    `Reference: ${record.id}`,
    `Received: ${record.createdAt}`,
    `Name: ${record.name}`,
    `Email: ${record.email}`,
    `Organisation: ${record.organisation}`,
    `Role: ${record.role || 'Not provided'}`,
    `Intent: ${record.intent}`,
    '',
    'Message:',
    record.message
  ].join('\n');
}

function leadNotificationHtml(record: LeadRecord) {
  const rows = [
    ['Reference', record.id],
    ['Received', record.createdAt],
    ['Name', record.name],
    ['Email', record.email],
    ['Organisation', record.organisation],
    ['Role', record.role || 'Not provided'],
    ['Intent', record.intent],
    ['Source', record.source]
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #17202a; line-height: 1.5;">
      <h1 style="font-size: 20px; margin: 0 0 16px;">New Vecell request</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tbody>
          ${rows
            .map(([label, value]) => `
              <tr>
                <th style="border: 1px solid #d9e0ea; padding: 8px; text-align: left; width: 150px;">${escapeHtml(label)}</th>
                <td style="border: 1px solid #d9e0ea; padding: 8px;">${escapeHtml(value)}</td>
              </tr>
            `)
            .join('')}
        </tbody>
      </table>
      <h2 style="font-size: 16px; margin: 20px 0 8px;">Message</h2>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(record.message)}</p>
    </div>
  `;
}

export async function notifyLeadSubmission(record: LeadRecord) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? fallbackFromEmail;

  if (!apiKey) {
    throw new SubmissionRequestError('Email delivery is not configured', 503);
  }

  const response = await fetch(resendEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [leadNotificationRecipient],
      reply_to: record.email,
      subject: `New Vecell ${record.source} request from ${record.organisation}`,
      text: leadNotificationText(record),
      html: leadNotificationHtml(record)
    })
  });

  if (!response.ok) {
    throw new SubmissionRequestError('Email delivery failed', 502);
  }
}
