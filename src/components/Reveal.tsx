'use client';

import {
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState
} from 'react';

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
}

export function Reveal({ children, className, delay = 0, style, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    setReady(true);

    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const showIfAlreadyInView = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

      if (rect.top < viewportHeight && rect.bottom > 0 && rect.left < viewportWidth && rect.right > 0) {
        setVisible(true);
        return true;
      }

      return false;
    };

    if (showIfAlreadyInView()) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { rootMargin: '-60px 0px', threshold: 0.24 }
    );

    observer.observe(element);
    const fallback = window.setTimeout(showIfAlreadyInView, 300);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      {...props}
      ref={ref}
      className={['reveal', ready ? 'reveal-ready' : '', visible ? 'reveal-visible' : '', className]
        .filter(Boolean)
        .join(' ')}
      style={{ ...style, '--reveal-delay': `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
