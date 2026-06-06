import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { officialReferences } from '@/content/site';

export const metadata = {
  title: 'Contact',
  description: 'Contact Vecell to book a walkthrough or discuss primary-care demand routing.'
};

export default function ContactPage() {
  return (
    <main>
      <section className="contact-hero">
        <div>
          <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
          <h1>Book a walkthrough of Vecell.</h1>
          <p>
            Share your primary-care demand, operations, or assurance priorities. We will respond
            with the right walkthrough path for your team.
          </p>
        </div>
        <ContactForm />
      </section>
      <section className="section reference-section">
        <h2>Standards and integration references</h2>
        <p>
          These public references are included so procurement, clinical safety, and technical teams
          can orient the conversation.
        </p>
        <div className="reference-links">
          {officialReferences.map((reference) => (
            <a key={reference.href} href={reference.href} target="_blank" rel="noopener noreferrer">
              {reference.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
