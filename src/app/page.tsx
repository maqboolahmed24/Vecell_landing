import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AssuranceLedger } from '@/components/AssuranceLedger';
import { ContactForm } from '@/components/ContactForm';
import { ExperienceVisual } from '@/components/ExperienceVisual';
import { FlowVisual } from '@/components/FlowVisual';
import { IntegrationChain } from '@/components/IntegrationChain';
import { OperationsVisual } from '@/components/OperationsVisual';
import { RequestPassport } from '@/components/RequestPassport';
import { Reveal } from '@/components/Reveal';
import { RoleSurfaceShowcase } from '@/components/RoleSurfaceShowcase';
import { SectionHeading } from '@/components/SectionHeading';
import { assuranceItems, challenges, endpointRoutes, flowSteps, surfaces, trustBadges } from '@/content/site';

export default function HomePage() {
  return (
    <main>
      <section className="hero hero-home">
        <div className="hero-copy">
          <p className="eyebrow">Primary care demand, safely routed</p>
          <h1>Vecells</h1>
          <p className="hero-statement">
            One governed front door for web, phone, and NHS App demand, carrying every request
            from first contact to safe resolution with audit-ready proof.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Book a walkthrough
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link className="button button-ghost" href="/product/how-it-works">
              See the request flow
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="trust-strip" role="list" aria-label="Trust indicators">
            {trustBadges.slice(0, 4).map((badge) => (
              <span key={badge} role="listitem">
                <CheckCircle2 aria-hidden="true" size={15} />
                {badge}
              </span>
            ))}
          </div>
        </div>
        <Reveal className="hero-media" delay={0.1}>
          <FlowVisual />
        </Reveal>
      </section>

      <section className="section split-section">
        <Reveal>
          <SectionHeading
            eyebrow="Problem"
            title="The challenges we help primary care solve."
            copy="Primary-care demand should enter once, become one accountable lineage, then move through safety, triage, endpoint routing, outcome, and assurance."
          />
        </Reveal>
        <div className="challenge-grid">
          {challenges.map((challenge, index) => (
            <Reveal key={challenge.title} className="challenge-block" delay={index * 0.08}>
              <span>{index + 1}</span>
              <h3>{challenge.title}</h3>
              <p>{challenge.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section flow-section">
        <SectionHeading
          eyebrow="Model"
          title="One governed request from first contact to closure."
          copy="The request passport keeps identity, evidence, safety posture, triage decision, endpoint, patient status, owner, and audit proof in one visible lineage."
        />
        <Reveal>
          <RequestPassport />
        </Reveal>
        <div className="steps-rail" role="list" aria-label="Request lifecycle">
          {flowSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} className="step-item" delay={index * 0.05} role="listitem">
                <div className="step-icon">
                  <Icon aria-hidden="true" size={23} />
                </div>
                <strong>{step.title}</strong>
                <p>{step.copy}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section operations-section">
        <Reveal>
          <OperationsVisual />
        </Reveal>
        <Reveal className="section-copy">
          <p className="eyebrow">Operations and assurance</p>
          <h2>See demand, act with confidence, and prove what happened.</h2>
          <p>
            Operations teams see demand flow, hub pressure, capacity mismatch, dependency health,
            recommended intervention, and the assurance trail behind each decision.
          </p>
          <Link className="button button-ghost" href="/platform/operations-assurance">
            Explore the platform
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </Reveal>
      </section>

      <section className="section ledger-section">
        <SectionHeading
          eyebrow="Assurance"
          title="A living proof layer for every decision."
          copy="Identity, safety, policy, route, outcome, and audit evidence stay linked from intake through closure."
        />
        <Reveal>
          <AssuranceLedger />
        </Reveal>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Platform surfaces"
          title="Purpose-built surfaces for every role and workflow."
          copy="Each surface is shaped around the person using it, while the request and evidence model stays shared."
        />
        <Reveal>
          <RoleSurfaceShowcase compact />
        </Reveal>
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

      <section className="section endpoint-section">
        <SectionHeading
          eyebrow="Endpoint logic"
          title="Every endpoint remains part of the same accountable journey."
          copy="Self-care, admin, messaging, callback, booking, hub coordination, and pharmacy referrals are routed as child workflows with the same evidence spine."
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

      <section className="section experience-section">
        <Reveal className="section-copy">
          <p className="eyebrow">Patients and teams</p>
          <h2>Better experiences without breaking the request spine.</h2>
          <p>
            Patients get clear progress and safe next steps. Teams get the same request, evidence,
            decision context, and audit trail without jumping between disconnected tools.
          </p>
          <Link className="button button-ghost" href="/solutions">
            See role surfaces
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </Reveal>
        <Reveal>
          <ExperienceVisual />
        </Reveal>
      </section>

      <section className="section split-section">
        <SectionHeading
          eyebrow="Governed by design"
          title="Control, transparency, and safety are built in."
          copy="Every action keeps ownership, role scope, evidence, outcome state, and assurance proof visible without adding parallel queues."
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

      <section className="section channel-band">
        <Reveal className="section-copy">
          <p className="eyebrow">Open by design</p>
          <h2>Connect patient access, workforce tools, and partner systems.</h2>
          <p>
            Vecells is designed to sit between front-door demand and the services that resolve it,
            keeping context and audit proof intact across the chain.
          </p>
          <Link className="button button-ghost" href="/solutions">
            See the integration chain
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </Reveal>
        <Reveal>
          <IntegrationChain />
        </Reveal>
      </section>

      <section className="cta-section">
        <div>
          <p className="eyebrow">Walkthrough</p>
          <h2>Build a safer front door for primary-care demand.</h2>
          <p>
            See the end-to-end request flow, operations console, assurance ledger, and the
            patient and staff experience in one session.
          </p>
        </div>
        <ContactForm compact />
      </section>
    </main>
  );
}
