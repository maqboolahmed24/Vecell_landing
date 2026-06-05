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
      initial={false}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
