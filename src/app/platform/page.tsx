import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  HeartPulse,
  LockKeyhole,
  Mail,
  MessageSquareText,
  PhoneCall,
  Pill,
  RefreshCw,
  Route,
  Smartphone,
  Stethoscope,
  UsersRound
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const intakePanels = [
  {
    title: 'Web Forms',
    copy: 'Structured branch-logic questionnaires configured for practice websites and request capture.',
    icon: Globe,
    tone: 'primary'
  },
  {
    title: 'Phone capture',
    copy: 'Phone and IVR demand can be captured into the same evidence and review workflow.',
    icon: PhoneCall,
    tone: 'neutral'
  },
  {
    title: 'NHS App-ready journeys',
    copy: 'A pathway model for authenticated patient entry when local integration approvals are in place.',
    icon: Smartphone,
    tone: 'primary'
  }
] as const;

const platformSurfaces = [
  {
    title: 'Patient Portal',
    copy: 'A simple patient-facing place for requests, status updates, appointments, messages and the next safe action.',
    icon: HeartPulse
  },
  {
    title: 'Clinical Workspace',
    copy: 'A clinician and reviewer workspace for triage, evidence review, decisions, messages, booking and handoff.',
    icon: Stethoscope
  },
  {
    title: 'Pharmacy Console',
    copy: 'A pharmacy-facing surface for consent, eligibility, referral review, dispatch and outcome recording.',
    icon: Pill
  },
  {
    title: 'Operations Console',
    copy: 'A leadership view for queue pressure, capacity, site performance, dependency health and assurance.',
    icon: BarChart3
  },
  {
    title: 'Hub Desk',
    copy: 'A PCN and hub team workspace for cross-site routing, local capacity and return-to-practice visibility.',
    icon: UsersRound
  },
  {
    title: 'Support Desk',
    copy: 'A controlled admin surface for patient enquiries, delivery repair, masked context and safe escalation.',
    icon: MessageSquareText
  },
  {
    title: 'Governance & Admin',
    copy: 'A platform control area for roles, policies, audit exports, configuration, approvals and release control.',
    icon: LockKeyhole
  }
] as const;

export const metadata = {
  title: 'Platform',
  description: 'The Vecell infrastructure for demand orchestration.'
};

export default function PlatformPage() {
  return (
    <main className="scroll-page">
      <section className="scroll-panel scroll-band-surface">
        <div className="page-frame split-hero">
          <Reveal className="hero-copy">
            <span className="kicker">The Operating Layer</span>
            <h1>The infrastructure for demand orchestration.</h1>
            <p className="lead">
              Capture every request. Route with safety. A FHIR-aware operating layer built to
              structure multi-channel demand, apply governed rules, and direct work to the right
              operational surface.
            </p>
            <div className="hero-actions">
              <Link className="button button-blue" href="/workflows">
                Explore Architecture
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal className="media-panel" delay={0.12}>
            <Image
              alt="Abstract operating-layer visual showing patient-demand streams converging into a central routing core and branching into ordered pathways."
              src="/illustrations/vecell-platform-orchestration-hero.png"
              width={1672}
              height={941}
              priority
            />
            <div className="metric-float" aria-hidden="true">
              <div className="metric-pill">
                <span>Lineage</span>
                <strong>Traceable</strong>
              </div>
              <div className="metric-pill">
                <span>Safety posture</span>
                <strong>Review gated</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="scroll-panel scroll-band-white">
        <div className="section-frame">
          <Reveal className="section-title">
            <h2>Unified Intake Pipeline</h2>
          </Reveal>
          <div className="tile-grid">
            {intakePanels.map((panel, index) => {
              const Icon = panel.icon;

              return (
                <Reveal className="tile" key={panel.title} delay={index * 0.08}>
                  <Icon aria-hidden="true" size={24} />
                  <div>
                    <h3>{panel.title}</h3>
                    <p>{panel.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="scroll-panel scroll-band-blue">
        <div className="section-frame routing-layout">
          <Reveal className="hero-copy">
            <h2>The Routing Engine</h2>
            <p>
              Every incoming request is structured, safety-screened, and evaluated against clinical
              thresholds. The engine then routes the demand to the correct operational surface,
              keeping the next action clear, reviewable, and owned.
            </p>
            <ul className="check-list">
              <li>
                <CheckCircle2 aria-hidden="true" size={16} />
                FHIR-aligned exchange pathway
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={16} />
                Terminology mapping support
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={16} />
                Deterministic routing rules
              </li>
            </ul>
          </Reveal>

          <Reveal className="routing-card" delay={0.12}>
            <div className="route-top">
              <span className="kicker">
                <Mail aria-hidden="true" size={14} />
                Raw Input: Web Form
              </span>
              <span className="metric-label">ID: 8842</span>
            </div>
            <div className="route-sync">
              <RefreshCw aria-hidden="true" size={24} />
            </div>
            <div className="route-output">
              <div className="route-destination">
                <span className="metric-label">Destination: Clinical</span>
                <strong>Clinical Workspace</strong>
              </div>
              <div className="route-destination inactive">
                <span className="metric-label">Destination: Admin</span>
                <strong>Scheduling Team</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="scroll-panel scroll-band-muted">
        <div className="section-frame">
          <Reveal className="section-title center">
            <h2>Platforms we offer</h2>
            <p>
              Vecell is delivered as role-specific interfaces on one operating layer, so every team
              sees the work, evidence and controls they need.
            </p>
          </Reveal>
          <div className="surface-grid">
            {platformSurfaces.map((surface, index) => {
              const Icon = surface.icon;

              return (
                <Reveal className="surface-tile" key={surface.title} delay={index * 0.05}>
                  <Icon aria-hidden="true" size={24} />
                  <div>
                    <h3>{surface.title}</h3>
                    <p>{surface.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
