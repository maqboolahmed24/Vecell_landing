'use client';

import { useEffect, useRef } from 'react';
import type { AnimationItem } from 'lottie-web';

const animationPath = '/illustrations/contact-phone-lottie.json';

export function ContactIllustration() {
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
            title: 'Contact illustration',
            description: 'A phone interaction illustration for contacting Vecell.'
          }
        });

        animationRef.current = animation;

        if (prefersReducedMotion) {
          animation.addEventListener('DOMLoaded', () => {
            animation.goToAndStop(60, true);
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
      className="contact-lottie"
      role="img"
      aria-label="Looping phone interaction illustration for contacting Vecell."
    >
      <div className="contact-lottie-stage" ref={containerRef} />
    </div>
  );
}
