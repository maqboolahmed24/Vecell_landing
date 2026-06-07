import Image from 'next/image';
import { Cloud, FileCheck2, History, LockKeyhole, Scale, ShieldCheck } from 'lucide-react';
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
              Safety isn&apos;t a feature; it&apos;s the foundation. Our architecture provides unshakeable
              operational proof, transforming regulatory compliance from an afterthought into an
              immutable structural guarantee.
            </p>
          </Reveal>
          <Reveal className="media-panel assurance-media" delay={0.12}>
            <Image
              alt="Abstract evidence-ledger visual showing translucent audit tiles connected by tamper-evident proof lines."
              src="/illustrations/vecell-assurance-evidence-hero.png"
              width={1672}
              height={941}
              priority
            />
          </Reveal>
        </div>
      </section>

      <section className="scroll-panel scroll-band-white">
        <div className="section-frame">
          <div className="assurance-grid">
            <Reveal className="proof-tile large">
              <div>
                <span className="eyebrow">01 / Operational Proof</span>
                <h2>Structural Guarantees</h2>
                <p>
                  Every action within the ecosystem is strictly authorized, executed correctly, and
                  recorded permanently. We eliminate ambiguity through deterministic architecture.
                </p>
              </div>
              <div className="proof-meta">
                <div className="proof-icons" aria-hidden="true">
                  <ShieldCheck size={24} />
                  <FileCheck2 size={24} />
                  <Scale size={24} />
                </div>
                <span className="metric-value">100% Deterministic</span>
              </div>
            </Reveal>

            <Reveal className="proof-tile medium" delay={0.08}>
              <History aria-hidden="true" size={32} />
              <div>
                <h3>Audit-ready operations</h3>
                <p>
                  Continuous, zero-configuration compliance tracking. Every state change is hashed and
                  written to a write-once-read-many ledger.
                </p>
              </div>
            </Reveal>

            <Reveal className="proof-tile half" delay={0.12}>
              <div>
                <span className="kicker">
                  <Cloud aria-hidden="true" size={16} />
                  Active-Active Replication
                </span>
                <h3>Recovery-proven systems</h3>
                <p>
                  Geographically distributed failover ensures that critical operational data remains
                  accessible even during catastrophic infrastructure events.
                </p>
              </div>
            </Reveal>

            <Reveal className="proof-tile half" delay={0.16}>
              <div>
                <span className="kicker">
                  <LockKeyhole aria-hidden="true" size={16} />
                  API Layer Enforcement
                </span>
                <h3>Governance-first design</h3>
                <p>
                  Granular Role-Based Access Control enforced intrinsically at the API gateway layer,
                  preventing unauthorized access before it reaches core systems.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
