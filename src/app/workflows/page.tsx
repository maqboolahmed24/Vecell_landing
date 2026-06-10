import Link from 'next/link';
import { CheckCircle2, Eye, Gauge, GitBranch, ListChecks, LogIn, Route, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const steps = [
  {
    number: '01',
    label: 'Capture',
    copy: 'Bring web forms, phone calls, NHS App-ready journeys, booking, pharmacy and admin demand into one front door.',
    icon: LogIn,
    active: false
  },
  {
    number: '02',
    label: 'Normalise',
    copy: 'Turn each contact into one request record with identity, context, source and ownership attached.',
    icon: GitBranch,
    active: false
  },
  {
    number: '03',
    label: 'Safeguard',
    copy: 'Check urgency, red flags and policy before routine work moves forward.',
    icon: ShieldCheck,
    active: false
  },
  {
    number: '04',
    label: 'Triage',
    copy: 'Show the right evidence to staff so they can prioritise, review and assign work clearly.',
    icon: ListChecks,
    active: true
  },
  {
    number: '05',
    label: 'Route',
    copy: 'Send the request to the right path: clinician, admin, hub, booking, pharmacy or patient message.',
    icon: Route,
    active: false
  },
  {
    number: '06',
    label: 'Prove',
    copy: 'Close the loop with patient updates, outcome evidence and a retained audit trail.',
    icon: CheckCircle2,
    active: false
  }
] as const;

export const metadata = {
  title: 'How Vecell works',
  description: 'How Vecell turns GP practice demand into one safe workflow from intake to closure.'
};

export default function WorkflowsPage() {
  return (
    <main className="scroll-page">
      <section className="scroll-panel scroll-band-surface">
        <div className="page-frame workflow-hero">
          <Reveal className="hero-copy">
            <h1>
              How Vecell turns GP demand{' '}
              <br />
              into accountable work.
            </h1>
            <p className="lead">
              Patients arrive through many routes. Vecell captures each contact as one traceable
              request, checks risk, routes it to the right team and keeps proof from intake to
              closure.
            </p>
            <div className="workflow-proof-row" aria-label="Vecell workflow principles">
              <span>One front door</span>
              <span>Human-controlled review</span>
              <span>Audit-ready proof</span>
              <span>Scales across sites</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="scroll-panel scroll-band-white">
        <div className="section-frame">
          <Reveal className="workflow-journey">
            <div className="workflow-section-copy">
              <h2 className="eyebrow">The operating flow</h2>
              <p>
                Vecell is not just an appointment tool. It is a governed workflow that helps a GP
                practice understand demand, choose the safest next action and prove what happened.
              </p>
            </div>
            <div className="journey-steps">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div className={step.active ? 'journey-step active' : 'journey-step'} key={step.label}>
                    <span className="journey-icon">
                      <Icon aria-hidden="true" size={22} />
                    </span>
                    <span>{step.number}</span>
                    <strong>{step.label}</strong>
                    <p>{step.copy}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="scroll-panel scroll-band-blue">
        <div className="section-frame">
          <div className="outcome-grid">
            <Reveal className="outcome-tile">
              <div>
                <Eye aria-hidden="true" size={24} />
                <h2>What practices get</h2>
                <p>
                  One place to see incoming demand, risk, ownership and the next action instead of
                  scattered inboxes, call notes and disconnected queues.
                </p>
              </div>
              <div className="status-panel" aria-label="Practice request status">
                <div className="status-panel-header">
                  <span className="status-code">VC-8492</span>
                  <span className="status-badge">OWNED</span>
                </div>
                <div className="status-row">
                  <span className="status-dot" />
                  <div>
                    <strong>Captured from web form</strong>
                    <p>Medication query with patient context</p>
                  </div>
                </div>
                <div className="status-row">
                  <span className="status-dot active" />
                  <div>
                    <strong>Safety checked and assigned</strong>
                    <p>Admin team owns next action</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="outcome-tile" delay={0.12}>
              <div>
                <Gauge aria-hidden="true" size={24} />
                <h2>Why investors should care</h2>
                <p>
                  Vecell turns overloaded GP access into repeatable software infrastructure: more
                  channels, more teams and more sites can run through the same governed layer.
                </p>
              </div>
              <div className="queue-panel" aria-label="Investor value levers">
                <div className="queue-head">
                  <span>Lever</span>
                  <span>Meaning</span>
                  <span>Value</span>
                </div>
                <div className="queue-row">
                  <strong>Demand</strong>
                  <span>Many access routes become one operating queue</span>
                  <span>Scale</span>
                </div>
                <div className="queue-row">
                  <strong>Safety</strong>
                  <span>Policy, review and route decisions are controlled</span>
                  <span>Trust</span>
                </div>
                <div className="queue-row">
                  <strong>Proof</strong>
                  <span>Every request closes with evidence and audit trail</span>
                  <span>Defensibility</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="scroll-panel scroll-band-muted">
        <div className="section-frame workflow-close">
          <Reveal>
            <h2>Start with one practice, then expand the operating layer.</h2>
            <p>
              A focused pilot can prove clearer routing, less queue fragmentation and stronger
              operational evidence before wider rollout across a PCN or group.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/pilot#contact" prefetch={false}>
                Request a pilot
              </Link>
              <Link className="button button-ghost" href="/platform" prefetch={false}>
                View platform
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
