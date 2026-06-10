import Link from 'next/link';
import { ArrowRight, CheckCircle2, FlaskConical, TrendingUp } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { ContactIllustration } from '@/components/ContactIllustration';
import { Reveal } from '@/components/Reveal';

export const metadata = {
  title: 'Pilot',
  description: 'Initiate a Vecell pilot for a GP practice or Primary Care Network.'
};

export default function PilotPage() {
  return (
    <main className="scroll-page">
      <section className="scroll-panel scroll-band-surface">
        <div className="page-frame pilot-hero">
          <Reveal className="hero-copy">
            <span className="chip">Focused pilots</span>
            <h1>Build the front door primary care deserves.</h1>
            <p className="lead">
              Start with one GP practice or PCN pathway. Map demand, test the operating flow, and
              build the evidence needed for a wider rollout decision.
            </p>
            <div className="hero-actions">
              <Link className="button button-blue" href="#contact">
                Talk to the team
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
              <Link className="button button-ghost" href="#contact">
                Request a pilot pack
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal className="pilot-visual" delay={0.12}>
            <ContactIllustration />
          </Reveal>
        </div>
      </section>

      <section className="scroll-panel scroll-band-white">
        <div className="section-frame">
          <Reveal className="section-title">
            <h2>The Pilot Methodology</h2>
            <p>A disciplined approach to evaluating Vecell inside existing primary-care pathways.</p>
          </Reveal>
          <div className="method-grid">
            <Reveal className="method-tile">
              <div>
                <div className="method-head">
                  <span className="phase-label">Phase 01</span>
                  <FlaskConical aria-hidden="true" size={22} />
                </div>
                <h3>Prove the pathway</h3>
                <p>
                  We establish a controlled baseline within a single practice or focused pathway.
                  The pilot measures demand, routing time, handoffs, ownership, and evidence quality.
                </p>
              </div>
              <div className="method-footer">
                <div>
                  <span className="phase-label">Metric A</span>
                  <strong>Routing Time</strong>
                </div>
                <span aria-hidden="true" />
                <div>
                  <span className="phase-label">Metric B</span>
                  <strong>Evidence Quality</strong>
                </div>
              </div>
            </Reveal>

            <Reveal className="method-tile" delay={0.12}>
              <div>
                <div className="method-head">
                  <span className="phase-label">Phase 02</span>
                  <TrendingUp aria-hidden="true" size={22} />
                </div>
                <h3>Scale with confidence</h3>
                <p>
                  Once the pathway is understood and the operating case is clear, the next stage can
                  plan rollout across a wider Primary Care Network or group.
                </p>
              </div>
              <div>
                <div className="progress-track" aria-hidden="true">
                  <div className="progress-fill" />
                </div>
                <div className="method-progress-meta">
                  <span className="phase-label">Rollout</span>
                  <strong>Network-wide</strong>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="scroll-panel scroll-band-blue" id="contact">
        <div className="section-frame contact-split">
          <Reveal className="contact-split-copy">
            <h2>Initiate a pilot.</h2>
            <p>
              Provide your operational details. Our technical team will prepare a custom pilot pack
              outlining pathway scope, resource requirements, and realistic timelines for your PCN.
            </p>
            <ul className="check-list">
              <li>
                <CheckCircle2 aria-hidden="true" size={16} />
                Direct product consultation
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={16} />
                Pathway mapping
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={16} />
                Implementation support
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <ContactForm compact />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
