import Link from 'next/link';
import { ArrowRight, CheckCircle2, ClipboardCheck, UsersRound } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { FlowVisual } from '@/components/FlowVisual';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { challenges, trustBadges } from '@/content/site';

const homeRoutes = [
  {
    eyebrow: 'Product',
    title: 'Review the request and operating model.',
    copy: 'See intake, triage, routing, operational control, proof records, and outcome assurance in one product page.',
    href: '/product/how-it-works',
    cta: 'Open product',
    icon: ClipboardCheck
  },
  {
    eyebrow: 'Solutions',
    title: 'Match each role to the right surface.',
    copy: 'Open the patient, clinical, operations, hub, pharmacy, support, and governance views.',
    href: '/solutions',
    cta: 'View solutions',
    icon: UsersRound
  }
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="hero hero-home">
        <div className="hero-copy">
          <p className="eyebrow">Primary care demand, safely routed</p>
          <h1>Vecell</h1>
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

      <section className="section home-pathways">
        <SectionHeading
          eyebrow="Explore"
          title="Choose the detail that matches the job."
          copy="Start with the core promise, then move into the request flow, operational control, or role-specific surfaces."
        />
        <div className="home-route-grid">
          {homeRoutes.map((route, index) => {
            const Icon = route.icon;

            return (
              <Reveal key={route.href} delay={index * 0.08}>
                <Link className="home-route-card" href={route.href}>
                  <span className="home-route-icon">
                    <Icon aria-hidden="true" size={24} />
                  </span>
                  <small>{route.eyebrow}</small>
                  <h3>{route.title}</h3>
                  <p>{route.copy}</p>
                  <strong>
                    {route.cta}
                    <ArrowRight aria-hidden="true" size={16} />
                  </strong>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <p className="eyebrow">Walkthrough</p>
          <h2>Build a safer front door for primary-care demand.</h2>
          <p>
            See the request journey, operational controls, and role-specific surfaces in one
            focused session.
          </p>
        </div>
        <ContactForm compact />
      </section>
    </main>
  );
}
