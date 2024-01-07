'use client';

import { cn } from '@/lib/utils';
import { useActiveSection } from '@/store/active-section';
import { ActiveSection } from '@/types/active-section';
import { ElementType, ReactNode, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

type SectionProps = {
  children: ReactNode;
  section: ActiveSection;
  className?: string;
  as?: ElementType;
};

export const Section = ({
  children,
  section,
  className,
  as: Element = 'div',
}: SectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const lastUpdated = useActiveSection(state => state.lastChanged);
  const lastUpdatedRef = useRef(lastUpdated);
  const activeSection = useActiveSection(state => state.activeSection);
  const setActiveSection = useActiveSection(state => state.setActiveSection);

  useEffect(() => {
    if (!inView) return;
    const now = new Date();
    if (now.getTime() - lastUpdated.getTime() < 1000) return;
    setActiveSection(section);
  }, [inView, lastUpdated, section, setActiveSection]);

  useEffect(() => {
    try {
      if (lastUpdatedRef.current === lastUpdated) return;
      if (section !== activeSection) return;
      document.getElementById(section)?.scrollIntoView({
        behavior: 'smooth',
      });
    } finally {
      lastUpdatedRef.current = lastUpdated;
    }
  }, [activeSection, section, lastUpdated]);

  return (
    <Element ref={ref} id={section} className={cn('min-h-full', className)}>
      {children}
    </Element>
  );
};
