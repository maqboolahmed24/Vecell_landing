import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Vecell cookie policy.'
};

export default function CookiesPage() {
  return (
    <main className="legal-page">
      <Breadcrumbs items={[{ label: 'Cookies', href: '/cookies' }]} />
      <h1>Cookie policy</h1>
      <p>Last updated: 7 June 2026</p>
      <section>
        <h2>What cookies are</h2>
        <p>
          Cookies are small text files stored on your device by websites. Similar technologies,
          such as local storage, pixels, and server logs, can also help a website operate, secure
          itself, remember choices, or measure use.
        </p>
      </section>
      <section>
        <h2>Cookies used by this website</h2>
        <p>
          The Vecell public website does not set analytics, advertising, or personalisation cookies
          by default. The website may process technical request information in server logs for
          security, availability, abuse prevention, and diagnostics.
        </p>
      </section>
      <section>
        <h2>Strictly necessary technologies</h2>
        <p>
          Some technical processing is necessary to deliver pages, protect the service, receive
          forms, rate-limit abuse, and maintain security. These technologies do not require consent
          where they are strictly necessary for the service you request.
        </p>
      </section>
      <section>
        <h2>Optional cookies</h2>
        <p>
          Vecell will not use optional analytics, advertising, or personalisation cookies unless
          this policy is updated and a consent mechanism is provided where required by law.
        </p>
      </section>
      <section>
        <h2>Managing cookies</h2>
        <p>
          You can block, delete, or limit cookies using your browser settings. Blocking strictly
          necessary technologies may affect site availability, form submission, security controls,
          or other requested features.
        </p>
      </section>
      <section>
        <h2>Questions and concerns</h2>
        <p>
          For questions about this website’s cookie or similar-technology use, contact Vecell
          through the <Link href="/contact">contact page</Link>. The Information Commissioner’s
          Office also accepts{' '}
          <a href="https://ico.org.uk/make-a-complaint/" rel="noopener noreferrer" target="_blank">
            complaints and concerns
          </a>{' '}
          about cookies and privacy.
        </p>
      </section>
      <section>
        <h2>Changes to this policy</h2>
        <p>
          We update this policy when our cookie or similar-technology use changes. The date above
          shows when this page was last updated.
        </p>
      </section>
    </main>
  );
}
