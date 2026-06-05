'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, CircleDot, ShieldCheck } from 'lucide-react';
import { roleSurfaceDetails } from '@/content/site';

export function RoleSurfaceShowcase({ compact = false }: { compact?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeSurface = roleSurfaceDetails[activeIndex] ?? roleSurfaceDetails[0];
  const primaryRows = useMemo(() => activeSurface.worklist.slice(0, 3), [activeSurface.worklist]);
  const Icon = activeSurface.icon;

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

          <div className="role-workbench" role="group" aria-label={`${activeSurface.title} preview`}>
            <div className="role-workbench-top">
              <div>
                <span>{activeSurface.metricLabel}</span>
                <strong>{activeSurface.metric}</strong>
              </div>
              <div>
                <span>{activeSurface.status}</span>
                <strong>{activeSurface.statusDetail}</strong>
              </div>
            </div>

            <div className="role-shell">
              <div className="role-shell-rail" aria-hidden="true">
                <Icon size={20} />
                <span />
                <span />
                <span />
              </div>
              <div className="role-shell-main">
                <div className="role-shell-header">
                  <div>
                    <small>Current work</small>
                    <strong>{activeSurface.title}</strong>
                  </div>
                  <span>{activeSurface.status}</span>
                </div>

                <div className="role-worklist">
                  {primaryRows.map((row, index) => (
                    <div key={row} className={index === 0 ? 'role-work-row role-work-row-active' : 'role-work-row'}>
                      <CircleDot aria-hidden="true" size={15} />
                      <span>{row}</span>
                      {index === 0 ? <strong>Active</strong> : null}
                    </div>
                  ))}
                </div>

                <div className="role-action-dock">
                  <div>
                    <ShieldCheck aria-hidden="true" size={18} />
                    <span>Safe next action</span>
                  </div>
                  <strong>{activeSurface.actions[0]}</strong>
                  <span className="role-action-cue" aria-hidden="true">
                    <ArrowRight aria-hidden="true" size={16} />
                  </span>
                </div>
              </div>
              <div className="role-shell-side">
                {activeSurface.actions.map((action) => (
                  <span key={action}>{action}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
