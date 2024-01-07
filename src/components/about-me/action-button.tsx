'use client';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useActiveSection } from '@/store/active-section';
import { contact } from '.';
import { ReactNode } from 'react';

type ActionButtonProps = {
  value: (typeof contact)[number]['value'];
  children?: ReactNode;
};

export const ActionButton = ({ value, children }: ActionButtonProps) => {
  const setActiveSection = useActiveSection(state => state.setActiveSection);

  return (
    <Button
      key={value}
      className="h-16 w-16 rounded-full p-0 transition hover:scale-110"
      asChild={value !== '#contact'}
      onClick={() => {
        if (value !== '#contact') return;
        setActiveSection('contact', 'click');
      }}
    >
      {value === '#contact' ? (
        children
      ) : (
        <Link href={value} target="_blank">
          {children}
        </Link>
      )}
    </Button>
  );
};
