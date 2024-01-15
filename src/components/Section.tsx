'use client';

import { cn } from '@/lib/utils';
import { useActiveSection } from '@/store/active-section';
import { ActiveSection } from '@/types/active-section';
import { useInView } from 'framer-motion';
import { ElementType, ReactNode, useEffect, useRef } from 'react';

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
  const activeSection = useActiveSection(state => state.activeSection);
  const setActiveSection = useActiveSection(state => state.setActiveSection);
  const lastUpdated = useActiveSection(state => state.lastChanged);
  const lastUpdatedRef = useRef(lastUpdated);
  const sectionRef = useRef<Element>(null);
  const inView = useInView(sectionRef, {
    amount: 0.3,
  });

  useEffect(() => {
    if (!inView) return;
    const now = new Date();
    if (now.getTime() - lastUpdated.getTime() < 1000) return;
    setActiveSection(section);
  }, [inView, lastUpdated, section, setActiveSection]);

  useEffect(() => {
    try {
      if (!sectionRef.current) return;
      if (lastUpdatedRef.current === lastUpdated) return;
      if (section !== activeSection) return;
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    } finally {
      lastUpdatedRef.current = lastUpdated;
    }
  }, [activeSection, section, lastUpdated]);

  return (
    <Element ref={sectionRef} className={cn(className)}>
      {children}
    </Element>
  );
};
