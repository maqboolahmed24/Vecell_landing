import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Vecell privacy policy.'
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Breadcrumbs items={[{ label: 'Privacy', href: '/privacy' }]} />
      <h1>Privacy policy</h1>
      <p>Last updated: 5 June 2026</p>
      <section>
        <h2>Who we are</h2>
        <p>
          This privacy policy explains how Vecell handles personal information collected through
          this public website, including enquiry and walkthrough request forms. Vecell is the
          controller for personal information collected through this website.
        </p>
      </section>
      <section>
        <h2>Information covered by this policy</h2>
        <p>
          This policy covers business contact information and website enquiry data. It does not
          replace any deployment-specific privacy notice, data processing agreement, clinical safety
          documentation, or patient-facing notice used by a healthcare organisation.
        </p>
      </section>
      <section>
        <h2>What we collect</h2>
        <p>
          When you contact Vecell, we collect the information you provide, such as your name, work
          email address, organisation, role, enquiry type, message, consent confirmation, submission
          time, and limited technical information such as browser user-agent.
        </p>
      </section>
      <section>
        <h2>Special category and patient data</h2>
        <p>
          This public website is for business enquiries. Do not submit patient information, clinical
          details, urgent-care requests, or special category personal data through the website forms.
          Deployment-specific processing for healthcare organisations must be covered by its own
          contractual, clinical safety, and data-protection documentation.
        </p>
      </section>
      <section>
        <h2>How we use personal information</h2>
        <p>
          We use website enquiry data to respond to your request, arrange walkthroughs, manage
          business communications, understand organisational requirements, maintain security, prevent
          abuse of the forms, and keep appropriate records of inbound enquiries.
        </p>
      </section>
      <section>
        <h2>Lawful basis</h2>
        <p>
          We process business enquiry information where it is necessary for our legitimate interests
          in responding to potential customers and operating a secure website. Where a communication
          requires consent, we rely on the consent you provide and you may withdraw it at any time.
        </p>
      </section>
      <section>
        <h2>Sharing</h2>
        <p>
          We do not sell personal information. We may share enquiry information with service
          providers that help us host, secure, operate, or manage business communications, and where
          required by law, regulation, contractual obligation, or a valid authority request.
        </p>
      </section>
      <section>
        <h2>Retention</h2>
        <p>
          We keep enquiry records only for as long as needed for the purpose they were collected,
          including responding to you, managing a business relationship, resolving disputes, meeting
          legal obligations, and maintaining security records.
        </p>
      </section>
      <section>
        <h2>Security</h2>
        <p>
          We use appropriate technical and organisational measures for this public website, including
          server-side validation, request-size limits, rate limiting, duplicate-submit protection,
          access controls, and security headers. No internet service can be guaranteed completely
          secure, so please use the website only for non-urgent business enquiries.
        </p>
      </section>
      <section>
        <h2>International transfers</h2>
        <p>
          If personal information is processed outside the UK, we use appropriate safeguards such as
          contractual protections, transfer risk assessment, or another lawful transfer mechanism.
        </p>
      </section>
      <section>
        <h2>Your rights</h2>
        <p>
          Depending on the circumstances, you may have rights to access, rectify, erase, restrict,
          object to, or receive a copy of your personal information. You also have the right to
          complain to the Information Commissioner’s Office. The ICO publishes guidance on{' '}
          <a href="https://ico.org.uk/global/privacy-notice/your-data-protection-rights/" rel="noopener noreferrer" target="_blank">
            data-protection rights
          </a>{' '}
          and has a service for{' '}
          <a href="https://ico.org.uk/make-a-complaint/data-protection-complaints/" rel="noopener noreferrer" target="_blank">
            personal-information complaints
          </a>.
        </p>
      </section>
      <section>
        <h2>Automated decisions</h2>
        <p>
          This website does not make automated decisions with legal or similarly significant effects
          about website visitors or enquiry contacts.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          To ask a privacy question or exercise a data-protection right, contact Vecell through the{' '}
          <Link href="/contact">contact page</Link>.
        </p>
      </section>
    </main>
  );
}
