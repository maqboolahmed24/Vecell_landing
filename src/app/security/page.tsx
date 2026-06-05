import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Security',
  description: 'Vecells security posture overview.'
};

export default function SecurityPage() {
  return (
    <main className="legal-page">
      <Breadcrumbs items={[{ label: 'Security', href: '/security' }]} />
      <h1>Security and assurance</h1>
      <p>Last updated: 5 June 2026</p>
      <section>
        <h2>Security approach</h2>
        <p>
          Vecells is designed around minimum-necessary access, role-based visibility, evidence
          integrity, auditability, release control, and secure handling of operational data. Security
          and assurance are treated as product requirements, not add-ons.
        </p>
      </section>
      <section>
        <h2>Website security</h2>
        <p>
          The public website uses security headers, server-side form handling, payload validation,
          request size limits, duplicate-submit protection, rate limiting, and server-side enquiry
          storage. These controls help protect the website and reduce abuse of public forms.
        </p>
      </section>
      <section>
        <h2>Operational assurance</h2>
        <p>
          Operational deployments are expected to use environment-specific assurance, including
          access control, logging, monitoring, vulnerability management, incident response, backup
          and recovery planning, supplier assurance, and deployment review.
        </p>
      </section>
      <section>
        <h2>Healthcare data</h2>
        <p>
          Any deployment involving patient, clinical, NHS, or operational care data requires
          appropriate contractual, clinical safety, information governance, and data-protection
          controls for that setting. This public website does not collect patient-care requests.
        </p>
      </section>
      <section>
        <h2>Reporting a concern</h2>
        <p>
          If you believe you have found a security issue, contact Vecells through the{' '}
          <Link href="/contact">contact page</Link> and include enough detail for the issue to be
          investigated safely.
        </p>
      </section>
    </main>
  );
}
