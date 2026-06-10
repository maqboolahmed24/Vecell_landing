import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { ContactIllustration } from '@/components/ContactIllustration';
import { Reveal } from '@/components/Reveal';
import { officialReferences } from '@/content/site';

export const metadata = {
  title: 'Contact',
  description: 'Contact Vecell to book a walkthrough or discuss primary-care demand routing.'
};

export default function ContactPage() {
  return (
    <main className="scroll-page">
      <section className="scroll-panel scroll-band-surface">
        <div className="page-frame contact-hero">
          <Reveal className="contact-copy">
            <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
            <h1>Book a walkthrough of Vecell.</h1>
            <p>
              Share your primary-care demand, operations, or assurance priorities. We will respond
              with the right walkthrough path for your team.
            </p>
          </Reveal>
          <Reveal className="contact-form-column" delay={0.12}>
            <ContactIllustration />
            <ContactForm />
          </Reveal>
        </div>
      </section>
      <section className="scroll-panel scroll-band-white">
        <div className="section-frame">
          <Reveal className="section-title">
            <h2>Standards and integration references</h2>
            <p>
              These public references are included so procurement, clinical safety, and technical
              teams can orient the conversation.
            </p>
          </Reveal>
          <div className="reference-links">
            {officialReferences.map((reference, index) => (
              <Reveal className="reference-link-reveal" key={reference.href} delay={index * 0.04}>
                <a href={reference.href} target="_blank" rel="noopener noreferrer">
                  {reference.label}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
