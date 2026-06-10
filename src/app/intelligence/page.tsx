import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Eye,
  GitBranch,
  MonitorDot,
  ShieldCheck,
  Sparkles,
  Workflow
} from 'lucide-react';
import { IntelligenceMeshIllustration } from '@/components/IntelligenceMeshIllustration';
import { Reveal } from '@/components/Reveal';

const signalRows = [
  {
    title: 'Incoming demand structure',
    copy: 'Patient narrative structured with review notes and terminology support.',
    tone: 'primary'
  },
  {
    title: 'Draft response generated',
    copy: 'Suggested next-step options prepared for human authorization.',
    tone: 'mint'
  }
] as const;

const traceability = [
  {
    title: 'Reviewable',
    copy:
      'Every generated summary links back to the raw patient input and the relevant clinical context.',
    icon: Eye
  },
  {
    title: 'Traceable',
    copy:
      'An immutable trail follows the case from patient contact through structuring and final human disposition.',
    icon: GitBranch
  },
  {
    title: 'Human-approved',
    copy:
      'The system drafts and signals. The definitive judgement and final action remain with the clinician.',
    icon: ShieldCheck
  }
] as const;

export const metadata = {
  title: 'Intelligence',
  description: 'Assistive intelligence for governed primary care operations.'
};

export default function IntelligencePage() {
  return (
    <main className="scroll-page intelligence-page">
      <section className="scroll-panel scroll-band-surface">
        <div className="page-frame split-hero intelligence-hero">
          <Reveal className="hero-copy intelligence-hero-copy">
            <span className="kicker">The assistive layer</span>
            <h1>Assistance without autonomy.</h1>
            <p className="lead">
              Drafts, summaries, suggestions, and signals stay reviewable, traceable, and
              human-approved. Vecell provides structured support while clinicians retain final
              judgement and action.
            </p>
            <div className="hero-actions">
              <Link className="button button-blue" href="/workflows">
                Explore the flow
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
              <Link className="button button-ghost" href="/assurance">
                Review governance
              </Link>
            </div>
          </Reveal>

          <div className="media-panel intelligence-hero-media">
            <IntelligenceMeshIllustration />
          </div>
        </div>
      </section>

      <section className="scroll-panel scroll-band-white intelligence-section intelligence-routing">
        <div className="intelligence-frame intelligence-split">
          <Reveal className="intelligence-copy">
            <h2>Intelligent routing, human oversight.</h2>
            <p>
              The assistive layer processes incoming demand across web, phone, and NHS App-ready
              journeys. It structures clinical narratives, highlights potential urgency, and
              surfaces reviewable signals.
            </p>
            <p>
              It is advisory by design. It presents options, clarifies context, and waits for
              explicit human authorization before any decision is finalized.
            </p>
          </Reveal>

          <Reveal className="signal-panel" delay={0.12}>
            <div className="signal-panel-head">
              <span>Signal panel active</span>
              <MonitorDot aria-hidden="true" size={16} />
            </div>
            <div className="signal-stack">
              {signalRows.map((row) => (
                <div className="signal-row" key={row.title}>
                  <span className={`signal-dot signal-dot-${row.tone}`} />
                  <div>
                    <h3>{row.title}</h3>
                    <p>{row.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="scroll-panel intelligence-section intelligence-governance">
        <div className="intelligence-frame">
          <Reveal className="section-title center">
            <span className="eyebrow">Governance first</span>
            <h2>Every suggestion stays traceable.</h2>
          </Reveal>
          <div className="intelligence-principles">
            {traceability.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal className="intelligence-principle" key={item.title} delay={index * 0.08}>
                  <Icon aria-hidden="true" size={26} />
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="scroll-panel scroll-band-white intelligence-section">
        <div className="intelligence-frame intelligence-split intelligence-workspace">
          <Reveal className="workspace-visual">
            <Image
              src="/illustrations/vecell-intelligence-workspace.png"
              alt="Clinical workspace displaying organized operational intelligence panels."
              width={512}
              height={512}
            />
            <div className="workspace-grid" aria-hidden="true" />
          </Reveal>

          <Reveal className="intelligence-copy" delay={0.12}>
            <span className="eyebrow">Embedded support</span>
            <h2>Intelligence where it matters.</h2>
            <p>
              The assistive layer does not require a separate application. It lives inside the
              Clinical Workspace and Operations Console where decisions already happen.
            </p>
            <p>
              It provides quiet support, surfacing relevant protocols and subtle alerts without
              interrupting established workflows.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="intelligence-cta">
        <Reveal className="intelligence-cta-inner">
          <Sparkles aria-hidden="true" size={30} />
          <h2>Build the front door primary care deserves.</h2>
          <p>
            Start with a focused pilot and see how governed intelligence supports the full request
            journey.
          </p>
          <Link className="button button-blue" href="/pilot#contact">
            Request a pilot
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </Reveal>
      </section>

      <section className="intelligence-proof-strip" aria-label="Intelligence safeguards">
        <span>
          <BadgeCheck aria-hidden="true" size={16} />
          Reviewable
        </span>
        <span>
          <Workflow aria-hidden="true" size={16} />
          Traceable
        </span>
        <span>
          <ShieldCheck aria-hidden="true" size={16} />
          Human-approved
        </span>
      </section>
    </main>
  );
}
