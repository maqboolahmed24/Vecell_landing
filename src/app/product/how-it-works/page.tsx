import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FlowVisual } from '@/components/FlowVisual';
import { RequestPassport } from '@/components/RequestPassport';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { endpointRoutes, flowSteps } from '@/content/site';

export const metadata = {
  title: 'How It Works',
  description: 'How Vecells carries a primary-care request from first contact to safe outcome.'
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
            Vecells captures primary-care demand once and carries identity, evidence, safety,
            communication, endpoint choice, outcome, and audit through the entire journey.
          </p>
          <Link className="button button-primary" href="/contact">
            See the platform
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
    </main>
  );
}
