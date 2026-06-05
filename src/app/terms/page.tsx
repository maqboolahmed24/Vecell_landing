import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Terms',
  description: 'Vecells website terms.'
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <Breadcrumbs items={[{ label: 'Terms', href: '/terms' }]} />
      <h1>Website terms</h1>
      <p>Last updated: 5 June 2026</p>
      <section>
        <h2>Use of this website</h2>
        <p>
          This website is provided for business information, product evaluation, and enquiry
          purposes. You may use it only for lawful purposes and in a way that does not impair,
          overload, attack, scrape, or interfere with the website or its users.
        </p>
      </section>
      <section>
        <h2>No medical advice</h2>
        <p>
          Website content is not medical advice, clinical triage, urgent-care guidance, or a
          substitute for professional judgement. If you need urgent medical help, use the appropriate
          emergency or healthcare route for your location.
        </p>
      </section>
      <section>
        <h2>Product information</h2>
        <p>
          Product descriptions, illustrations, interface examples, metrics, and workflow examples
          are provided to explain the Vecells model. They are not a contractual commitment unless
          they are included in a signed agreement.
        </p>
      </section>
      <section>
        <h2>Standards and third-party references</h2>
        <p>
          References to NHS, NHS App, NHS login, ISO 27001, DCB0129, DPIA, and UK GDPR describe
          product design alignment or integration pathways. They do not by themselves prove
          certification, commissioning, endorsement, or approval.
        </p>
      </section>
      <section>
        <h2>Intellectual property</h2>
        <p>
          Unless otherwise stated, website content, layout, copy, graphics, and branding belong to
          Vecells or its licensors. You may view the website for evaluation purposes, but you may not
          copy, modify, distribute, or create derivative works from it without permission.
        </p>
      </section>
      <section>
        <h2>External links</h2>
        <p>
          This website may link to third-party websites and public standards. Those websites are
          controlled by their own operators, and Vecells is not responsible for their content,
          availability, or policies.
        </p>
      </section>
      <section>
        <h2>Availability and accuracy</h2>
        <p>
          We aim to keep website information accurate and available, but the website is provided on
          an &quot;as is&quot; and &quot;as available&quot; basis. Product capabilities, assurance status, standards,
          and integration requirements may change.
        </p>
      </section>
      <section>
        <h2>Liability</h2>
        <p>
          Nothing in these terms excludes liability that cannot be excluded by law. To the fullest
          extent permitted by law, Vecells is not liable for loss arising from use of, or inability
          to use, this public website.
        </p>
      </section>
      <section>
        <h2>Governing law</h2>
        <p>
          Unless a separate written agreement says otherwise, these website terms are governed by
          the laws of England and Wales.
        </p>
      </section>
      <section>
        <h2>Changes to these terms</h2>
        <p>
          We may update these website terms when the website, product information, or legal
          requirements change. The date above shows when this page was last updated.
        </p>
      </section>
    </main>
  );
}
