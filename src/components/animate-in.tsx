'use client';

import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { HTMLProps, ReactNode } from 'react';

type AnimateInProps = MotionProps &
  Omit<HTMLProps<HTMLDivElement>, 'ref'> & {
    children?: ReactNode;
    scroll?: boolean;
  };

export const AnimateIn = ({
  children,
  initial = { opacity: 0, y: 75 },
  animate = { opacity: 1, y: 0 },
  scroll = false,
  ...options
}: AnimateInProps) => {
  if (scroll) {
    options.whileInView = options.whileInView || {
      opacity: 1,
      y: 0,
      transition: options.transition,
    };
    options.viewport = options.viewport || {
      once: true,
      amount: 0.9,
    };
    animate = false;
  }

  const Comp = motion(options.as || 'div');

  return (
    <Comp initial={initial} animate={animate} {...options}>
      {children}
    </Comp>
  );
};
