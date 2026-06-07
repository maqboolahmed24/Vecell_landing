'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const demandChannels = ['Web', 'Phone', 'NHS App-ready', 'Booking', 'Hub', 'Pharmacy'] as const;

const sectionMotion: Variants = {
  hidden: { opacity: 0, y: 82 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.22,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.14
    }
  }
};

const itemMotion: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] }
  }
};

const viewport = { amount: 0.42, once: true } as const;

export function HomeScrollJourney() {
  const reducedMotion = useReducedMotion();
  const motionProps = reducedMotion
    ? {}
    : {
        initial: 'hidden',
        whileInView: 'visible',
        viewport,
        variants: sectionMotion
      };

  return (
    <div className="home-flow">
      <motion.section className="home-flow-panel home-flow-hero" {...motionProps}>
        <motion.div className="home-hero-media" variants={itemMotion} aria-hidden="true">
          <Image
            alt=""
            src="/illustrations/vecell-platform-orchestration-hero.png"
            fill
            priority
            sizes="100vw"
          />
        </motion.div>
        <motion.div className="home-flow-copy" variants={itemMotion}>
          <span className="eyebrow">Vecell</span>
          <h1>The operating layer for primary care.</h1>
          <p className="lead">One front door. One live view. Every request routed safely.</p>
          <div className="landing-actions">
            <Link className="button button-primary" href="/pilot#contact">
              Request a pilot
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link className="button button-ghost" href="/workflows">
              See the flow
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </motion.div>
        <motion.a className="home-hero-peek" href="#demand" variants={itemMotion}>
          <span>Next</span>
          <strong>Demand is fragmented. Safety can&apos;t be.</strong>
          <ArrowRight aria-hidden="true" size={16} />
        </motion.a>
      </motion.section>

      <motion.section id="demand" className="home-flow-panel home-flow-white" {...motionProps}>
        <motion.div className="home-flow-copy" variants={itemMotion}>
          <span className="eyebrow">Demand</span>
          <h2>Demand is fragmented. Safety can&apos;t be.</h2>
          <p className="lead">
            Patients arrive through every channel. Vecell turns that demand into one governed path.
          </p>
          <div className="chip-row" aria-label="Primary care demand channels">
            {demandChannels.map((channel) => (
              <span className="chip" key={channel}>
                {channel}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section className="home-flow-panel home-flow-blue" {...motionProps}>
        <motion.div className="home-flow-copy" variants={itemMotion}>
          <span className="eyebrow">Flow</span>
          <h2>One request becomes one accountable route.</h2>
          <p className="lead">
            Intake, safety state, ownership, updates, and proof move together instead of splitting
            across separate queues.
          </p>
          <div className="home-flow-proof" aria-label="Request flow proof points">
            <span>Capture once</span>
            <span>Route safely</span>
            <span>Close with proof</span>
          </div>
        </motion.div>
      </motion.section>

      <motion.section className="home-flow-panel home-flow-final" {...motionProps}>
        <motion.div className="home-flow-copy" variants={itemMotion}>
          <span className="eyebrow">Pilot</span>
          <h2>Build the front door primary care deserves.</h2>
          <p className="lead">Start with a focused pilot, then scale the operating layer with confidence.</p>
          <Link className="button button-primary" href="/pilot#contact">
            Request a pilot
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
