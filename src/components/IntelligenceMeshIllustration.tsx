'use client';

import { useEffect, useRef } from 'react';
import type { AnimationItem } from 'lottie-web';

const animationPath = '/illustrations/intelligence-network-lottie.json';

export function IntelligenceMeshIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    let mounted = true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    element.innerHTML = '';

    import('lottie-web')
      .then(({ default: lottie }) => {
        if (!mounted) {
          return;
        }

        const animation = lottie.loadAnimation({
          container: element,
          renderer: 'svg',
          loop: !prefersReducedMotion,
          autoplay: !prefersReducedMotion,
          path: animationPath,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
            title: 'Intelligence network illustration',
            description: 'A looping network animation representing assistive intelligence.'
          }
        });

        animationRef.current = animation;

        if (prefersReducedMotion) {
          animation.addEventListener('DOMLoaded', () => {
            animation.goToAndStop(180, true);
          });
        }
      })
      .catch(() => {
        element.dataset.failed = 'true';
      });

    return () => {
      mounted = false;
      animationRef.current?.destroy();
      animationRef.current = null;
    };
  }, []);

  return (
    <div
      className="intelligence-mesh-illustration"
      role="img"
      aria-label="Looping network animation representing assistive intelligence."
    >
      <div className="intelligence-lottie-stage" ref={containerRef} />
    </div>
  );
}
