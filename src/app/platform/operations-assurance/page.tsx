import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AssuranceLedger } from '@/components/AssuranceLedger';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { OperationsVisual } from '@/components/OperationsVisual';
import { SectionHeading } from '@/components/SectionHeading';
import { assuranceItems, operatingMetrics, surfaces } from '@/content/site';

export const metadata = {
  title: 'Operations & Assurance',
  description: 'The Vecells operations and assurance model for primary-care demand.'
};

export default function OperationsAssurancePage() {
  return (
    <main>
      <section className="subhero subhero-ops">
        <div>
          <Breadcrumbs
            items={[
              { label: 'Platform', href: '/platform/operations-assurance' },
              { label: 'Operations & Assurance', href: '/platform/operations-assurance' }
            ]}
          />
          <h1>Operational control for modern primary care.</h1>
          <p>
            Real-time workboards, assurance evidence, release controls, and dependency health
            help leaders balance demand without losing proof.
          </p>
          <Link className="button button-primary" href="/contact">
            Book a walkthrough
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <OperationsVisual />
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Control room"
          title="A calm board for pressure, capacity, dependencies, and intervention."
          copy="The console is not a generic BI wall. It keeps one dominant anomaly and one intervention surface active."
        />
        <div className="metric-showcase">
          {operatingMetrics.map((metric) => (
            <article key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Assurance ledger"
          title="Every decision is backed by evidence."
          copy="The platform keeps request state, audit trail, role scope, release posture, outcome proof, and completeness checks aligned."
        />
        <AssuranceLedger />
      </section>

      <section className="section split-section">
        <SectionHeading
          eyebrow="Governed controls"
          title="Safety, role scope, release posture, and audit stay visible."
          copy="The assurance model is built into the workflow, so operators can act without losing the evidence behind the decision."
        />
        <div className="assurance-grid">
          {assuranceItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="assurance-item">
                <Icon aria-hidden="true" size={22} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Surface families"
          title="Operations sees the whole system without owning every workflow."
          copy="Each role works in its own shell while operations keeps the assurance view."
        />
        <div className="surface-grid">
          {surfaces.map((surface) => {
            const Icon = surface.icon;
            return (
              <article key={surface.title} className="surface-card">
                <Icon aria-hidden="true" size={24} />
                <h3>{surface.title}</h3>
                <p>{surface.copy}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
