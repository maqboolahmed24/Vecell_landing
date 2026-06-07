import Link from 'next/link';
import { ArrowRight, BarChart3, CheckCircle2, FlaskConical, Network, TrendingUp } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
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
            <span className="chip">Pilot Program Active</span>
            <h1>Build the front door primary care deserves.</h1>
            <p className="lead">
              Transform your GP practice or PCN operations. Deploy high-signal workflows with surgical
              precision. Prove the pathway, then scale with confidence across your network.
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
            <div className="pilot-visual-card" aria-hidden="true">
              <div className="pilot-line short" />
              <div className="pilot-item">
                <span className="pilot-item-icon">
                  <Network size={24} />
                </span>
                <div>
                  <div className="pilot-line" />
                  <div className="pilot-line short" />
                </div>
              </div>
              <div className="pilot-line" />
              <div className="pilot-item">
                <span className="pilot-item-icon">
                  <BarChart3 size={24} />
                </span>
                <div>
                  <div className="pilot-line" />
                  <div className="pilot-line short" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="scroll-panel scroll-band-white">
        <div className="section-frame">
          <Reveal className="section-title">
            <h2>The Pilot Methodology</h2>
            <p>A disciplined approach to integrating Vecell into your existing clinical pathways.</p>
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
                  We establish a controlled baseline within a single practice or targeted patient
                  cohort. By instrumenting key friction points, we gather high-fidelity data on time
                  saved and triage accuracy.
                </p>
              </div>
              <div className="method-footer">
                <div>
                  <span className="phase-label">Metric A</span>
                  <strong>Triage Velocity</strong>
                </div>
                <span aria-hidden="true" />
                <div>
                  <span className="phase-label">Metric B</span>
                  <strong>Routing Accuracy</strong>
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
                  Once the pathway is verified and operational ROI is confirmed, we provide the
                  architectural blueprint to deploy across your entire Primary Care Network
                  seamlessly.
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
              outlining integration steps, resource requirements, and projected timelines for your PCN.
            </p>
            <ul className="check-list">
              <li>
                <CheckCircle2 aria-hidden="true" size={16} />
                Direct technical consultation
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={16} />
                Custom pathway architecture
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={16} />
                Full operational support
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
