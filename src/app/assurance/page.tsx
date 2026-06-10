import { Cloud, FileCheck2, History, LockKeyhole, Scale, ShieldCheck } from 'lucide-react';
import { AssuranceIllustration } from '@/components/AssuranceIllustration';
import { Reveal } from '@/components/Reveal';

export const metadata = {
  title: 'Assurance',
  description: 'Every Vecell action leaves operational evidence.'
};

export default function AssurancePage() {
  return (
    <main className="scroll-page">
      <section className="scroll-panel scroll-band-surface">
        <div className="page-frame assurance-hero">
          <Reveal className="assurance-hero-copy">
            <h1>Every action leaves evidence.</h1>
            <p className="lead">
              Safety is built into the operating model. Vecell is designed so requests, decisions,
              ownership, and outcomes can carry clear evidence from intake to closure.
            </p>
          </Reveal>
          <Reveal className="media-panel assurance-media">
            <AssuranceIllustration />
          </Reveal>
        </div>
      </section>

      <section className="scroll-panel scroll-band-white">
        <div className="section-frame">
          <div className="assurance-grid">
            <Reveal className="proof-tile large">
              <div>
                <span className="eyebrow">01 / Operational Proof</span>
                <h2>Evidence-led controls</h2>
                <p>
                  Actions are designed to carry an accountable owner, a reason, a state change, and
                  a reviewable audit trail, reducing ambiguity across clinical and operational work.
                </p>
              </div>
              <div className="proof-meta">
                <div className="proof-icons" aria-hidden="true">
                  <ShieldCheck size={24} />
                  <FileCheck2 size={24} />
                  <Scale size={24} />
                </div>
                <span className="metric-value">Reviewable by design</span>
              </div>
            </Reveal>

            <Reveal className="proof-tile medium" delay={0.08}>
              <History aria-hidden="true" size={32} />
              <div>
                <h3>Audit-ready operations</h3>
                <p>
                  Key state changes, decisions, and handoffs are structured so assurance evidence can
                  be reviewed, exported, and reconciled against the request history.
                </p>
              </div>
            </Reveal>

            <Reveal className="proof-tile half" delay={0.12}>
              <div>
                <span className="kicker">
                  <Cloud aria-hidden="true" size={16} />
                  Recovery planning
                </span>
                <h3>Recovery-aware systems</h3>
                <p>
                  Deployment planning can include backup, restore, monitoring, and incident-response
                  evidence so operational resilience is part of the assurance conversation.
                </p>
              </div>
            </Reveal>

            <Reveal className="proof-tile half" delay={0.16}>
              <div>
                <span className="kicker">
                  <LockKeyhole aria-hidden="true" size={16} />
                  Scope control
                </span>
                <h3>Governance-first design</h3>
                <p>
                  Role-based visibility, purpose-of-use, release posture, and audit evidence are
                  treated as product controls rather than after-the-fact reporting.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
