'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps
  extends Omit<HTMLMotionProps<'div'>, 'children' | 'initial' | 'transition' | 'viewport' | 'whileInView'> {
  children: ReactNode;
  delay?: number;
}

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 48 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ amount: 0.32, once: true, margin: '-60px' }}
      transition={{ duration: 1.08, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
