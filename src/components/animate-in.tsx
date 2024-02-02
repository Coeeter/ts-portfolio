'use client';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { ComponentProps, ElementType, HTMLProps, ReactNode } from 'react';

type AnimateInProps<T extends ElementType> = MotionProps &
  Omit<HTMLProps<HTMLDivElement>, 'ref'> & {
    children?: ReactNode;
    scroll?: boolean;
    asElement?: T;
  } & ComponentProps<T>;

export const AnimateIn = <T extends ElementType>({
  children,
  initial = { opacity: 0, y: 75 },
  animate = { opacity: 1, y: 0 },
  scroll = false,
  ...options
}: AnimateInProps<T>) => {
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

  const Comp = motion(options.asElement || 'div');

  return (
    <Comp initial={initial} animate={animate} {...options}>
      {children}
    </Comp>
  );
};
