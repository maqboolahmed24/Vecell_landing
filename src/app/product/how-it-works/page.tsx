import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AssuranceLedger } from '@/components/AssuranceLedger';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FlowVisual } from '@/components/FlowVisual';
import { OperationsVisual } from '@/components/OperationsVisual';
import { RequestPassport } from '@/components/RequestPassport';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { assuranceItems, endpointRoutes, flowSteps, operatingMetrics, surfaces } from '@/content/site';

export const metadata = {
  title: 'Product',
  description:
    'How Vecell carries primary-care demand from request intake to safe outcome, operational control, and assurance proof.'
};

export default function HowItWorksPage() {
  return (
    <main>
      <section className="subhero">
        <div>
          <Breadcrumbs
            items={[
              { label: 'Product', href: '/product/how-it-works' },
              { label: 'How it works', href: '/product/how-it-works' }
            ]}
          />
          <h1>One request lineage. Multiple safe outcomes.</h1>
          <p>
            Vecell captures primary-care demand once and carries identity, evidence, safety,
            communication, endpoint choice, outcome, and audit through the entire journey.
          </p>
          <Link className="button button-primary" href="/contact">
            Book a walkthrough
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <FlowVisual />
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Passport"
          title="The request carries its proof with it."
          copy="Every channel feeds one lineage with identity, evidence, safety, endpoint, status, ownership, and audit state kept together."
        />
        <RequestPassport />
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Lifecycle"
          title="The request lifecycle"
          copy="From first contact to safe resolution, every transition has a stable object and proof."
        />
        <div className="lifecycle-grid">
          {flowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} className="lifecycle-card" delay={index * 0.06}>
                <span>{index + 1}</span>
                <Icon aria-hidden="true" size={24} />
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Endpoint logic"
          title="Route to the right endpoint."
          copy="Each endpoint is a child workflow, not a disconnected case."
        />
        <div className="endpoint-grid">
          {endpointRoutes.map((route) => {
            const Icon = route.icon;
            return (
              <article key={route.title} className="endpoint-card">
                <Icon aria-hidden="true" size={22} />
                <h3>{route.title}</h3>
                <p>{route.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section operations-section" id="operations-assurance">
        <Reveal>
          <OperationsVisual />
        </Reveal>
        <Reveal className="section-copy">
          <p className="eyebrow">Operations and assurance</p>
          <h2>Operational control for modern primary care.</h2>
          <p>
            Real-time workboards, assurance evidence, release controls, and dependency health help
            leaders balance demand without losing proof.
          </p>
        </Reveal>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Operating view"
          title="A calmer view of what needs attention."
          copy="Teams can see priorities, ownership, handoffs, and proof in plain language without turning the page into a technical dashboard."
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
          copy="Request state, audit trail, role scope, release posture, outcome proof, and completeness checks stay aligned."
        />
        <AssuranceLedger />
      </section>

      <section className="section split-section">
        <SectionHeading
          eyebrow="Governed controls"
          title="Safety, role scope, release posture, and audit stay visible."
          copy="The assurance model is built into the workflow, so teams can act without losing the evidence behind each decision."
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
          title="Each role works in its own shell while the product keeps one proof model."
          copy="Patient, clinical, operations, hub, pharmacy, support, and governance surfaces share the same governed request context."
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
