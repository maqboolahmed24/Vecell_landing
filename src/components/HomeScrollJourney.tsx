import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const demandChannels = ['Web forms', 'Phone calls', 'NHS App-ready', 'Booking', 'Pharmacy', 'Admin'] as const;

export function HomeScrollJourney() {
  return (
    <div className="home-flow">
      <section className="home-flow-panel home-flow-hero">
        <div className="home-hero-media home-hero-reveal home-hero-reveal-media" aria-hidden="true">
          <Image
            alt=""
            src="/illustrations/vecell-platform-orchestration-hero.png"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
          />
        </div>
        <div className="home-flow-copy home-hero-reveal home-hero-reveal-copy">
          <span className="eyebrow">Primary care operating system</span>
          <h1>The front door for GP practice demand.</h1>
          <p className="lead">
            Vecell brings web forms, phone calls, NHS App-ready journeys, booking, pharmacy and
            admin requests into one safe workflow. GP teams get a live queue and clear ownership;
            investors see scalable software infrastructure for primary care.
          </p>
          <div className="landing-actions">
            <Link className="button button-primary" href="/pilot#contact" prefetch={false}>
              Request a pilot
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link className="button button-ghost" href="/workflows" prefetch={false}>
              See how it works
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
        <a
          className="home-hero-peek home-hero-reveal home-hero-reveal-peek"
          href="#demand"
          aria-label="Next See how demand becomes accountable work."
        >
          <span>Next</span>
          <strong>See how demand becomes accountable work.</strong>
          <ArrowRight aria-hidden="true" size={16} />
        </a>
      </section>

      <section id="demand" className="home-flow-panel home-flow-white">
        <div className="home-flow-copy">
          <span className="eyebrow">The problem</span>
          <h2>GP demand is spread across forms, phones and queues.</h2>
          <p className="lead">
            Vecell captures every request into one governed path, so practices can stop relying on
            inboxes, callbacks and ad hoc workarounds to know what needs attention.
          </p>
          <div className="chip-row" aria-label="Primary care demand channels">
            {demandChannels.map((channel) => (
              <span className="chip" key={channel}>
                {channel}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="home-flow-panel home-flow-blue">
        <div className="home-flow-copy">
          <span className="eyebrow">The system</span>
          <h2>Every request gets a safe owner, route and record.</h2>
          <p className="lead">
            The platform structures the request, checks risk, routes it to the right clinical,
            admin, booking or pharmacy workflow, and keeps proof from intake to closure.
          </p>
          <div className="home-flow-proof" aria-label="Request flow proof points">
            <span>Capture every channel</span>
            <span>Route to the right team</span>
            <span>Close with evidence</span>
          </div>
        </div>
      </section>

      <section className="home-flow-panel home-flow-final">
        <div className="home-flow-copy">
          <span className="eyebrow">Business case</span>
          <h2>A scalable operating layer for modern primary care.</h2>
          <p className="lead">
            Start with one GP practice or PCN pilot, prove faster routing and clearer oversight,
            then expand across teams, channels and sites.
          </p>
          <Link className="button button-primary" href="/pilot#contact" prefetch={false}>
            Request a pilot
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
