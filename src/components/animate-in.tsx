'use client';

import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type AnimateInProps = MotionProps & {
  children?: ReactNode;
  className?: string;
};

export const AnimateIn = ({
  children,
  className,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  ...options
}: AnimateInProps) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      {...options}
      className={className}
    >
      {children}
    </motion.div>
  );
};
