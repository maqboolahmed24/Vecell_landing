'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { roleSurfaceDetails } from '@/content/site';

export function RoleSurfaceShowcase({ compact = false }: { compact?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeSurface = roleSurfaceDetails[activeIndex] ?? roleSurfaceDetails[0];

  return (
    <div className={compact ? 'role-showcase role-showcase-compact' : 'role-showcase'} data-testid="role-showcase">
      <div className="role-selector" role="group" aria-label="Role surface selector">
        {roleSurfaceDetails.map((surface, index) => {
          const SurfaceIcon = surface.icon;
          const selected = index === activeIndex;

          return (
            <button
              key={surface.title}
              type="button"
              className="role-tab"
              aria-pressed={selected}
              onClick={() => setActiveIndex(index)}
            >
              <SurfaceIcon aria-hidden="true" size={18} />
              <span>{surface.title}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeSurface.title}
          className="role-surface"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="role-surface-copy">
            <p className="eyebrow">{activeSurface.audience}</p>
            <h3>{activeSurface.title}</h3>
            <p>{activeSurface.summary}</p>
            <div className="role-proof-strip">
              {activeSurface.proof.map((proof) => (
                <span key={proof}>
                  <CheckCircle2 aria-hidden="true" size={15} />
                  {proof}
                </span>
              ))}
            </div>
          </div>

          <div className="role-illustration-panel" role="group" aria-label={`${activeSurface.title} illustrated preview`}>
            <div className="role-illustration-frame">
              <Image
                src={activeSurface.previewImage}
                alt={activeSurface.previewAlt}
                fill
                unoptimized
                priority={activeIndex === 0}
                sizes="(max-width: 760px) 92vw, (max-width: 1180px) 86vw, 58vw"
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
