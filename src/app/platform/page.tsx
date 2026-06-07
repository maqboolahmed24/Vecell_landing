import Link from 'next/link';
import Image from 'next/image';
import {
  Activity,
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  FileText,
  Globe,
  Mail,
  PhoneCall,
  Pill,
  RefreshCw,
  Route,
  Smartphone,
  Stethoscope
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const intakePanels = [
  {
    title: 'Web Forms',
    copy: 'Intelligent, branch-logic questionnaires embedded securely in your practice website.',
    icon: Globe,
    tone: 'primary'
  },
  {
    title: 'Telephony API',
    copy: 'Automated transcription and structural extraction from patient voicemails or active calls.',
    icon: PhoneCall,
    tone: 'neutral'
  },
  {
    title: 'NHS App Integration',
    copy: 'Direct, authenticated patient requests flowing straight into the operational queue.',
    icon: Smartphone,
    tone: 'primary'
  }
] as const;

const missionSurfaces = [
  { title: 'Clinical Triage', copy: 'High-density medical review.', icon: Stethoscope },
  { title: 'Care Navigation', copy: 'Admin scheduling and routing.', icon: CalendarDays },
  { title: 'Pharmacy', copy: 'Medication request management.', icon: Pill },
  { title: 'Document Processing', copy: 'Incoming letter extraction.', icon: FileText },
  { title: 'Long-term Conditions', copy: 'Chronic disease monitoring.', icon: Activity },
  { title: 'Command Center', copy: 'Practice-wide analytics.', icon: BarChart3 }
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
              Capture every request. Route with safety. A FHIR-native engine built to ingest
              multi-channel demand, apply rigorous clinical logic, and direct load to the optimal
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
                <span>Throughput /s</span>
                <strong>2,048</strong>
              </div>
              <div className="metric-pill">
                <span>Safety Status</span>
                <strong>Secure</strong>
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
              Every incoming request is parsed, coded, and evaluated against clinical safety
              thresholds. The engine then routes the demand to the correct operational surface,
              ensuring right-place, right-time care delivery.
            </p>
            <ul className="check-list">
              <li>
                <CheckCircle2 aria-hidden="true" size={16} />
                FHIR r4 Native Architecture
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={16} />
                Real-time SNOMED CT coding
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
                <strong>Dr. Sarah Jenkins</strong>
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
            <h2>Six Mission Surfaces</h2>
            <p>
              Specific interfaces for specific roles. Clean, focused operational views derived from
              the central routing engine.
            </p>
          </Reveal>
          <div className="surface-grid">
            {missionSurfaces.map((surface, index) => {
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
