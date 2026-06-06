import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
  title: 'About',
  description: 'About Vecell and its primary-care demand platform.'
};

export default function AboutPage() {
  return (
    <main>
      <section className="text-hero">
        <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
        <h1>Vecell is built around governed primary-care demand.</h1>
        <p>
          Primary care needs a front door that is simple for patients, calm for teams, and provable
          for leaders. Vecell is built around one request lineage, one safety model, and one audit trail.
        </p>
      </section>
      <section className="section">
        <h2>What guides the product</h2>
        <div className="about-grid">
          <article>
            <span>Request first</span>
            <strong>Capture once</strong>
            <p>Every channel feeds a single governed request rather than parallel queues.</p>
          </article>
          <article>
            <span>Safety first</span>
            <strong>Route carefully</strong>
            <p>Safety posture and evidence stay visible before endpoint decisions are made.</p>
          </article>
          <article>
            <span>Proof first</span>
            <strong>Close cleanly</strong>
            <p>Outcomes, owners, and audit evidence remain attached to the request.</p>
          </article>
        </div>
      </section>
      <section className="section legal-copy">
        <h2>What Vecell is for</h2>
        <p>
          Vecell is intended to help primary-care organisations capture demand, maintain context,
          apply safety checks, route work to the correct endpoint, and preserve operational proof.
        </p>
        <p>
          The public website avoids claiming live certification, NHS endorsement, or production
          deployment status unless that evidence is part of a current commercial assurance pack.
        </p>
      </section>
    </main>
  );
}
