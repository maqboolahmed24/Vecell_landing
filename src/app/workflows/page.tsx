import { CheckCircle2, Eye, Filter, Gauge, ListChecks, LogIn, RefreshCw, Route } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const steps = [
  { number: '01', label: 'Capture', icon: LogIn, active: false },
  { number: '02', label: 'Screen', icon: Filter, active: false },
  { number: '03', label: 'Review', icon: ListChecks, active: true },
  { number: '04', label: 'Route', icon: Route, active: false },
  { number: '05', label: 'Update', icon: RefreshCw, active: false },
  { number: '06', label: 'Prove', icon: CheckCircle2, active: false }
] as const;

export const metadata = {
  title: 'Workflows',
  description: 'The Vecell request-to-resolution journey.'
};

export default function WorkflowsPage() {
  return (
    <main className="scroll-page">
      <section className="scroll-panel scroll-band-surface">
        <div className="page-frame workflow-hero">
          <Reveal className="hero-copy">
            <h1>
              Appointments are an outcome,
              <br />
              not the product.
            </h1>
            <p className="lead">
              Shift your operations from chaotic scheduling to structured resolution. Vecell
              orchestrates the entire patient journey from initial request to final clinical outcome,
              ensuring every action is purposeful and documented.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="scroll-panel scroll-band-white">
        <div className="section-frame">
          <Reveal className="workflow-journey">
            <h2 className="eyebrow">The Request to Resolution Journey</h2>
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
                <h2>Patient Clarity</h2>
                <p>
                  Replace hold music with real-time status visibility. Patients receive structured
                  updates, not vague promises.
                </p>
              </div>
              <div className="status-panel" aria-label="Patient request status">
                <div className="status-panel-header">
                  <span className="status-code">REQ-8492</span>
                  <span className="status-badge">IN REVIEW</span>
                </div>
                <div className="status-row">
                  <span className="status-dot" />
                  <div>
                    <strong>Submitted via Portal</strong>
                    <p>08:42 AM</p>
                  </div>
                </div>
                <div className="status-row">
                  <span className="status-dot active" />
                  <div>
                    <strong>Clinical Triage</strong>
                    <p>Awaiting clinician assignment</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="outcome-tile" delay={0.12}>
              <div>
                <Gauge aria-hidden="true" size={24} />
                <h2>Staff Efficiency</h2>
                <p>
                  A quiet, high-signal workspace. Filter noise, prioritize urgency, and act on
                  structured clinical data.
                </p>
              </div>
              <div className="queue-panel" aria-label="Staff queue">
                <div className="queue-head">
                  <span>ID</span>
                  <span>Intent</span>
                  <span>SLA</span>
                </div>
                <div className="queue-row">
                  <strong>R-992</strong>
                  <span>Urgent Refill - Lisinopril</span>
                  <span className="sla-hot">12m</span>
                </div>
                <div className="queue-row">
                  <strong>R-991</strong>
                  <span>General Inquiry - Billing</span>
                  <span>4h</span>
                </div>
                <div className="queue-row">
                  <strong>R-990</strong>
                  <span>Lab Results Review</span>
                  <span>1d</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
