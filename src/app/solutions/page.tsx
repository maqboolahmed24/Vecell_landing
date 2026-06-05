import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { IntegrationChain } from '@/components/IntegrationChain';
import { RoleSurfaceShowcase } from '@/components/RoleSurfaceShowcase';
import { SectionHeading } from '@/components/SectionHeading';
import { SolutionsVisual } from '@/components/SolutionsVisual';
import { channels, surfaces } from '@/content/site';

export const metadata = {
  title: 'Solutions',
  description: 'Vecells solutions for patients, clinical teams, operations, hubs, pharmacy, support, and governance.'
};

export default function SolutionsPage() {
  return (
    <main>
      <section className="text-hero solutions-hero">
        <div className="solutions-hero-copy">
          <Breadcrumbs items={[{ label: 'Solutions', href: '/solutions' }]} />
          <h1>Designed for patients, teams, and accountable operations.</h1>
          <p>
            Vecells gives every participant a focused surface while preserving one governed request
            across channels, decisions, handoffs, and outcomes.
          </p>
        </div>
        <SolutionsVisual />
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Channels"
          title="Meet demand where it starts."
          copy="Web, NHS App, and phone demand enter the same request spine."
        />
        <div className="channel-grid">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <article key={channel.title}>
                <Icon aria-hidden="true" size={22} />
                <h3>{channel.title}</h3>
                <p>{channel.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Roles"
          title="Give each role the surface it needs."
          copy="Focused shells reduce noise while keeping the evidence graph shared."
        />
        <RoleSurfaceShowcase />
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

      <section className="section">
        <SectionHeading
          eyebrow="Integration"
          title="A full chain from patient access to partner systems."
          copy="The same governed request can move across channels, FHIR-facing boundaries, workforce surfaces, and adapter APIs without losing audit proof."
        />
        <IntegrationChain />
      </section>

      <section className="cta-simple">
        <h2>See the model in your own care setting.</h2>
        <Link className="button button-primary" href="/contact">
          Talk to the team
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </section>
    </main>
  );
}
