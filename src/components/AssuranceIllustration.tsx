'use client';

import { useEffect, useRef, useState } from 'react';
import type { AnimationItem } from 'lottie-web';
import animationData from '../../public/illustrations/assurance-lock-lottie.json';

export function AssuranceIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    let mounted = true;
    let readyTimer: number | null = null;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    element.innerHTML = '';
    setReady(false);

    if (prefersReducedMotion) {
      return () => {
        mounted = false;
      };
    }

    import('lottie-web')
      .then(({ default: lottie }) => {
        if (!mounted) {
          return;
        }

        const animation = lottie.loadAnimation({
          container: element,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
            title: 'Assurance lock illustration',
            description: 'A lock illustration representing protected operational evidence.'
          }
        });

        const showAnimation = () => {
          if (!mounted) {
            return;
          }

          animation.setSpeed(1.25);
          animation.goToAndPlay(0, true);

          if (readyTimer) {
            window.clearTimeout(readyTimer);
          }

          readyTimer = window.setTimeout(() => {
            if (mounted) {
              setReady(true);
            }
          }, 420);
        };

        animationRef.current = animation;
        animation.addEventListener('DOMLoaded', showAnimation);
      })
      .catch(() => {
        element.dataset.failed = 'true';
      });

    return () => {
      mounted = false;
      if (readyTimer) {
        window.clearTimeout(readyTimer);
      }
      animationRef.current?.destroy();
      animationRef.current = null;
    };
  }, []);

  return (
    <div
      className={['assurance-lottie', ready ? 'assurance-lottie-ready' : ''].filter(Boolean).join(' ')}
      role="img"
      aria-label="Animated lock illustration representing protected operational evidence."
    >
      <div className="assurance-lottie-fallback" aria-hidden="true">
        <svg className="assurance-lottie-fallback-svg" viewBox="0 0 220 220" focusable="false">
          <path
            d="M110 24 173 50v49c0 45-25 77-63 96-38-19-63-51-63-96V50l63-26Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinejoin="round"
          />
          <path
            d="M78 104h64v51H78v-51Zm19 0V84c0-15 10-25 25-25s25 10 25 25v20"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="110" cy="130" r="6" fill="currentColor" />
        </svg>
      </div>
      <div className="assurance-lottie-stage" ref={containerRef} />
    </div>
  );
}
