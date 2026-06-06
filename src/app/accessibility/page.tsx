import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Accessibility',
  description: 'Vecell accessibility statement.'
};

export default function AccessibilityPage() {
  return (
    <main className="legal-page">
      <Breadcrumbs items={[{ label: 'Accessibility', href: '/accessibility' }]} />
      <h1>Accessibility statement</h1>
      <p>Last updated: 5 June 2026</p>
      <section>
        <h2>Scope</h2>
        <p>
          This accessibility statement applies to the Vecell public website. It does not cover
          deployment-specific product environments, third-party websites, or documents provided by
          healthcare organisations, which should have their own accessibility information.
        </p>
      </section>
      <section>
        <h2>Commitment</h2>
        <p>
          Vecell aims for the public website to be accessible, usable, and understandable for as
          many people as possible. The website is designed with semantic structure, keyboard access,
          visible focus states, readable contrast, responsive layouts, and reduced-motion support.
        </p>
      </section>
      <section>
        <h2>How you should be able to use this website</h2>
        <p>
          You should be able to navigate the website with a keyboard, zoom content without losing
          information, use browser or device contrast settings, understand form labels and errors,
          and reduce motion where your device requests it.
        </p>
      </section>
      <section>
        <h2>Compliance status</h2>
        <p>
          The public website aims to meet{' '}
          <a href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag" rel="noopener noreferrer" target="_blank">
            WCAG 2.2 AA
          </a>{' '}
          where practical. The site has been checked during development for navigation, forms,
          page structure, motion, contrast, responsive behaviour, and image alternatives, but it has
          not yet been independently audited.
        </p>
      </section>
      <section>
        <h2>Known limitations</h2>
        <p>
          Some illustrative product previews are simplified visual examples. Where an image is
          decorative, it is hidden from assistive technology; where it conveys meaning, surrounding
          text provides the relevant information.
        </p>
      </section>
      <section>
        <h2>Alternative formats</h2>
        <p>
          If you need website information in another format, such as large print, plain text, or a
          more accessible format, use the <Link href="/contact">contact form</Link> and describe
          the page or information you need.
        </p>
      </section>
      <section>
        <h2>Feedback</h2>
        <p>
          If you find an accessibility issue, use the <Link href="/contact">contact form</Link> and
          include the page URL, device, browser, assistive technology if relevant, and a description
          of the problem. We review accessibility feedback and use it to improve the website.
        </p>
      </section>
      <section>
        <h2>Preparation of this statement</h2>
        <p>
          This statement was prepared for the current public website on 5 June 2026. It will be
          reviewed when the website materially changes.
        </p>
      </section>
    </main>
  );
}
