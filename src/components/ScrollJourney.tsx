'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const PANEL_SELECTOR = [
  '.scroll-panel',
  '.home-flow-panel',
  '.intelligence-cta',
  '.intelligence-proof-strip'
].join(',');

const FRAME_SELECTOR = [
  ':scope > .page-frame',
  ':scope > .section-frame',
  ':scope > .home-flow-copy',
  ':scope > .intelligence-frame'
].join(',');

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const SHORT_PAGE_PANEL_LIMIT = 3;
const SHORT_PAGE_HEIGHT_LIMIT = 2.7;
const HOME_PANEL_ORIGINS = [
  { x: 0, y: -0.28 },
  { x: 0, y: 0.16 },
  { x: 0, y: -0.12 },
  { x: 0, y: 0.18 }
] as const;
const HOME_ITEM_SELECTOR = [
  ':scope > .home-flow-copy > .eyebrow',
  ':scope > .home-flow-copy > h1',
  ':scope > .home-flow-copy > h2',
  ':scope > .home-flow-copy > .lead',
  ':scope > .home-flow-copy > .landing-actions > a',
  ':scope > .home-flow-copy > .chip-row > .chip',
  ':scope > .home-flow-copy > .home-flow-proof > span',
  ':scope > .home-flow-copy > .button'
].join(',');
const HOME_MOTION_PROPERTIES = [
  '--home-flow-x',
  '--home-flow-y',
  '--home-flow-scale',
  '--home-hero-copy-x',
  '--home-hero-copy-y',
  '--home-hero-media-y',
  '--home-hero-media-scale',
  '--home-hero-peek-y'
] as const;
const HOME_ITEM_MOTION_PROPERTIES = [
  '--home-item-opacity',
  '--home-item-blur',
  '--home-item-x',
  '--home-item-y',
  '--home-item-z',
  '--home-item-scale',
  '--home-item-rotate',
  '--home-item-clip'
] as const;

const lerp = (from: number, to: number, amount: number) => from + (to - from) * amount;
const smoothStep = (value: number) => value * value * (3 - 2 * value);
const mixColor = (from: [number, number, number], to: [number, number, number], amount: number) =>
  from.map((channel, index) => Math.round(lerp(channel, to[index], amount))).join(' ');

const setTone = (element: HTMLElement, depth: number) => {
  const amount = smoothStep(clamp(depth));
  const darkness = lerp(0, 0.94, amount);
  const purple = lerp(0, 0.9, amount);
  const contrast = smoothStep(clamp((darkness + purple * 0.18 - 0.28) / 0.3));
  const purpleLift = smoothStep(clamp((purple - 0.08) / 0.42));
  const purpleBlend = clamp(purple * (0.44 + darkness * 0.95));
  const monochromeBg = mixColor([248, 249, 253], [10, 10, 11], darkness);

  element.style.setProperty('--journey-bg', `rgb(${mixColor(monochromeBg.split(' ').map(Number) as [number, number, number], [18, 7, 52], purpleBlend)})`);
  element.style.setProperty('--journey-ink', `rgb(${mixColor([26, 28, 29], [248, 248, 249], contrast)})`);
  element.style.setProperty('--journey-soft', `rgb(${mixColor([65, 71, 83], [216, 218, 224], contrast)})`);
  element.style.setProperty('--journey-muted', `rgb(${mixColor([114, 119, 132], [172, 176, 186], contrast)})`);
  element.style.setProperty('--journey-outline', `rgb(${mixColor([193, 198, 213], [72, 74, 82], contrast)})`);
  element.style.setProperty('--journey-outline-soft', `rgb(${mixColor([229, 229, 231], [46, 48, 54], contrast)})`);
  element.style.setProperty('--journey-card', `rgb(${mixColor([255, 255, 255], [28, 29, 32], contrast)})`);
  element.style.setProperty('--journey-card-soft', `rgb(${mixColor([243, 243, 245], [38, 39, 43], contrast)})`);
  element.style.setProperty('--journey-primary', `rgb(${mixColor([0, 78, 159], [142, 103, 255], purpleLift)})`);
  element.style.setProperty('--journey-primary-soft', `rgb(${mixColor([215, 227, 255], [38, 21, 82], purpleLift)})`);
  element.style.setProperty('--journey-surface-shadow', `0 34px 92px rgba(66, 35, 168, ${(0.065 + purpleLift * 0.28).toFixed(3)})`);
  element.style.setProperty('--journey-glow-border', `rgba(150, 105, 255, ${(0.08 + purpleLift * 0.28).toFixed(3)})`);
};

const clearTone = (element: HTMLElement) => {
  element.style.removeProperty('--journey-bg');
  element.style.removeProperty('--journey-ink');
  element.style.removeProperty('--journey-soft');
  element.style.removeProperty('--journey-muted');
  element.style.removeProperty('--journey-outline');
  element.style.removeProperty('--journey-outline-soft');
  element.style.removeProperty('--journey-card');
  element.style.removeProperty('--journey-card-soft');
  element.style.removeProperty('--journey-primary');
  element.style.removeProperty('--journey-primary-soft');
  element.style.removeProperty('--journey-surface-shadow');
  element.style.removeProperty('--journey-glow-border');
};

const getHomeItemProfile = (element: HTMLElement, itemIndex: number, itemCount: number) => {
  const lane = itemIndex - (itemCount - 1) / 2;

  if (element.matches('h1, h2')) {
    return { x: 0, y: 58, z: -34, blur: 7, scale: 0.975, rotate: 0, clip: 14, parallaxY: -14 };
  }

  if (element.matches('.lead')) {
    return { x: 0, y: 42, z: -24, blur: 5.5, scale: 0.982, rotate: 0, clip: 10, parallaxY: -9 };
  }

  if (element.matches('.eyebrow')) {
    return { x: 0, y: -24, z: -16, blur: 4, scale: 0.988, rotate: 0, clip: 8, parallaxY: -6 };
  }

  if (element.matches('.chip, .home-flow-proof span')) {
    return { x: lane * 9, y: 34, z: -14, blur: 4, scale: 0.986, rotate: 0, clip: 8, parallaxY: -5 };
  }

  return { x: lane * 7, y: 38, z: -18, blur: 4.5, scale: 0.984, rotate: 0, clip: 8, parallaxY: -6 };
};

const setHomeMotion = (
  panel: HTMLElement,
  index: number,
  progress: number,
  centerProgress: number,
  entryFade: number,
  viewportWidth: number
) => {
  if (!panel.classList.contains('home-flow-panel')) {
    return;
  }

  const origin = HOME_PANEL_ORIGINS[index % HOME_PANEL_ORIGINS.length];
  const travel = Math.min(96, Math.max(42, viewportWidth * 0.045));
  const activeDepth = smoothStep(clamp((entryFade - 0.04) / 0.96));
  const motionItems = Array.from(panel.querySelectorAll<HTMLElement>('.home-motion-item'));

  panel.style.setProperty('--home-flow-x', `${centerProgress * travel * origin.x * 0.1}px`);
  panel.style.setProperty('--home-flow-y', `${centerProgress * travel * origin.y * 0.16}px`);
  panel.style.setProperty('--home-flow-scale', `${(0.992 + activeDepth * 0.008).toFixed(4)}`);

  motionItems.forEach((element, itemIndex) => {
    const itemProfile = getHomeItemProfile(element, itemIndex, motionItems.length);
    const isSmallItem = element.matches('.chip, .home-flow-proof span, .button, .landing-actions a');
    const itemDelay = itemIndex * (isSmallItem ? 0.014 : 0.028);
    const arrival = smoothStep(clamp((progress - 0.16 - itemDelay) / 0.3));
    const departure = smoothStep(clamp((1.04 - progress + itemIndex * 0.006) / 0.3));
    const presence = clamp(arrival * departure);
    const absence = 1 - presence;
    const readingDrift = centerProgress * (isSmallItem ? 4 : 7);
    const x = itemProfile.x * absence;
    const y = itemProfile.y * absence + centerProgress * itemProfile.parallaxY + readingDrift * absence;
    const z = itemProfile.z * absence;
    const opacity = clamp(0.12 + presence * 0.88);
    const blur = itemProfile.blur * absence;
    const scale = itemProfile.scale + presence * (1 - itemProfile.scale) - Math.abs(centerProgress) * (isSmallItem ? 0.002 : 0.004);
    const rotation = itemProfile.rotate * absence;
    const clip = itemProfile.clip * absence;

    element.style.setProperty('--home-item-opacity', opacity.toFixed(4));
    element.style.setProperty('--home-item-blur', `${blur.toFixed(2)}px`);
    element.style.setProperty('--home-item-x', `${x.toFixed(2)}px`);
    element.style.setProperty('--home-item-y', `${y.toFixed(2)}px`);
    element.style.setProperty('--home-item-z', `${z.toFixed(2)}px`);
    element.style.setProperty('--home-item-scale', scale.toFixed(4));
    element.style.setProperty('--home-item-rotate', `${rotation.toFixed(3)}deg`);
    element.style.setProperty('--home-item-clip', `${clip.toFixed(2)}%`);
  });

  if (!panel.classList.contains('home-flow-hero')) {
    return;
  }

  const heroDepth = smoothStep(progress);

  panel.style.setProperty('--home-hero-copy-x', `${centerProgress * -42}px`);
  panel.style.setProperty('--home-hero-copy-y', `${centerProgress * -74}px`);
  panel.style.setProperty('--home-hero-media-y', `${centerProgress * -116}px`);
  panel.style.setProperty('--home-hero-media-scale', `${(1.058 - heroDepth * 0.034).toFixed(4)}`);
  panel.style.setProperty('--home-hero-peek-y', `${centerProgress * -96}px`);
};

const clearHomeMotion = (element: HTMLElement) => {
  for (const property of HOME_MOTION_PROPERTIES) {
    element.style.removeProperty(property);
  }
};

const clearHomeItemMotion = (element: HTMLElement) => {
  for (const property of HOME_ITEM_MOTION_PROPERTIES) {
    element.style.removeProperty(property);
  }
};

export function ScrollJourney() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let frame = 0;
    let disposed = false;
    const panels = Array.from(document.querySelectorAll<HTMLElement>(PANEL_SELECTOR));
    const frameElements = new Set<HTMLElement>();
    const homeMotionElements = new Set<HTMLElement>();

    document.body.classList.add('scroll-journey-active');

    panels.forEach((panel, index) => {
      panel.classList.add('journey-panel', index % 2 === 0 ? 'journey-panel-even' : 'journey-panel-odd');
      panel.dataset.journeyIndex = String(index);

      const directFrames = Array.from(panel.querySelectorAll<HTMLElement>(FRAME_SELECTOR));
      for (const element of directFrames) {
        if (!element.classList.contains('reveal')) {
          element.classList.add('journey-frame');
          frameElements.add(element);
        }
      }

      if (panel.classList.contains('home-flow-panel')) {
        const motionItems = Array.from(panel.querySelectorAll<HTMLElement>(HOME_ITEM_SELECTOR));

        motionItems.forEach((element, itemIndex) => {
          element.classList.add('home-motion-item');
          element.dataset.homeMotionIndex = String(itemIndex);
          homeMotionElements.add(element);
        });
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const panel = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            panel.classList.add('journey-in-view', 'journey-has-entered');
          } else {
            panel.classList.remove('journey-in-view');
          }
        }
      },
      { rootMargin: '-12% 0px -12% 0px', threshold: [0.08, 0.28, 0.52] }
    );

    for (const panel of panels) {
      observer.observe(panel);
    }

    const update = () => {
      frame = 0;

      if (disposed) {
        return;
      }

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - viewportHeight);
      const pageProgress = clamp(window.scrollY / maxScroll);
      const isShortPage =
        panels.length <= SHORT_PAGE_PANEL_LIMIT || document.documentElement.scrollHeight <= viewportHeight * SHORT_PAGE_HEIGHT_LIMIT;
      const hasDarkHero = Boolean(document.querySelector('.home-flow-hero'));
      const longPageDepth = isShortPage || hasDarkHero ? 0 : smoothStep(clamp((pageProgress - 0.36) / 0.4));

      setTone(document.body, longPageDepth);
      document.body.classList.toggle('scroll-journey-dark', longPageDepth > 0.46);

      panels.forEach((panel, index) => {
        const rect = panel.getBoundingClientRect();

        if (rect.bottom < -viewportHeight * 0.65 || rect.top > viewportHeight * 1.75) {
          return;
        }

        const rawProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        const progress = clamp(rawProgress);
        const centerProgress = progress - 0.5;
        const direction = index % 2 === 0 ? 1 : -0.72;
        const mediaDirection = index % 2 === 0 ? 1 : -0.86;
        const entryFade = clamp(Math.min(progress * 2.6, (1 - progress) * 2.6) + 0.08);
        const frameArrival = smoothStep(clamp((progress - 0.03) / 0.38));
        const frameHold = smoothStep(clamp((1.08 - progress) / 0.24));
        const framePresence = clamp(frameArrival * frameHold);
        const cueArrival = smoothStep(clamp((progress - 0.46) / 0.28));
        const cueDeparture = 1 - smoothStep(clamp((progress - 0.94) / 0.1));
        const cuePresence = clamp(cueArrival * cueDeparture);

        panel.style.setProperty('--journey-progress', progress.toFixed(4));
        panel.style.setProperty('--journey-shift', `${(0.5 - progress) * 138 * direction}px`);
        panel.style.setProperty('--journey-bg-shift', `${(0.5 - progress) * 96}px`);
        panel.style.setProperty('--journey-media-shift', `${centerProgress * 104 * mediaDirection}px`);
        panel.style.setProperty('--journey-item-shift', `${(1 - entryFade) * 46}px`);
        panel.style.setProperty('--journey-frame-opacity', (0.36 + framePresence * 0.64).toFixed(4));
        panel.style.setProperty('--journey-frame-blur', `${((1 - framePresence) * 8).toFixed(2)}px`);
        panel.style.setProperty('--journey-frame-scale', (0.982 + framePresence * 0.018).toFixed(4));
        panel.style.setProperty('--journey-frame-y', `${((1 - framePresence) * 42).toFixed(2)}px`);
        panel.style.setProperty('--journey-cue-opacity', (cuePresence * 0.26).toFixed(4));
        panel.style.setProperty('--journey-cue-y', `${((1 - cuePresence) * 58).toFixed(2)}px`);
        panel.style.setProperty('--journey-cue-scale', (0.985 + cuePresence * 0.015).toFixed(4));
        panel.style.setProperty('--journey-fade', entryFade.toFixed(4));
        panel.style.setProperty('--journey-line-opacity', (0.16 + entryFade * 0.24).toFixed(4));
        panel.style.setProperty('--journey-rail-y', `${(12 + progress * 76).toFixed(2)}%`);
        panel.style.setProperty('--journey-rail-drift', `${centerProgress * 180 * direction}px`);
        panel.style.setProperty('--journey-track-shift', `${progress * 96}px`);
        panel.style.setProperty('--journey-sweep', `${(progress * 120 - 60).toFixed(2)}%`);
        setHomeMotion(panel, index, progress, centerProgress, entryFade, viewportWidth);
      });
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      disposed = true;

      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      observer.disconnect();
      document.body.classList.remove('scroll-journey-active');
      document.body.classList.remove('scroll-journey-dark');

      for (const panel of panels) {
        panel.classList.remove(
          'journey-panel',
          'journey-panel-even',
          'journey-panel-odd',
          'journey-in-view',
          'journey-has-entered'
        );
        delete panel.dataset.journeyIndex;
        panel.style.removeProperty('--journey-progress');
        panel.style.removeProperty('--journey-shift');
        panel.style.removeProperty('--journey-bg-shift');
        panel.style.removeProperty('--journey-media-shift');
        panel.style.removeProperty('--journey-item-shift');
        panel.style.removeProperty('--journey-frame-opacity');
        panel.style.removeProperty('--journey-frame-blur');
        panel.style.removeProperty('--journey-frame-scale');
        panel.style.removeProperty('--journey-frame-y');
        panel.style.removeProperty('--journey-cue-opacity');
        panel.style.removeProperty('--journey-cue-y');
        panel.style.removeProperty('--journey-cue-scale');
        panel.style.removeProperty('--journey-fade');
        panel.style.removeProperty('--journey-line-opacity');
        panel.style.removeProperty('--journey-rail-y');
        panel.style.removeProperty('--journey-rail-drift');
        panel.style.removeProperty('--journey-track-shift');
        panel.style.removeProperty('--journey-sweep');
        clearHomeMotion(panel);
        clearTone(panel);
      }

      clearTone(document.body);

      for (const element of frameElements) {
        element.classList.remove('journey-frame');
      }

      for (const element of homeMotionElements) {
        element.classList.remove('home-motion-item');
        delete element.dataset.homeMotionIndex;
        clearHomeItemMotion(element);
      }
    };
  }, [pathname]);

  return null;
}
