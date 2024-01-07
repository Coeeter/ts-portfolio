'use client';

import { useActiveSection } from '@/store/active-section';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const contact = [
  {
    label: 'Mail',
    value: '#contact',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'https://github.com/Coeeter',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/noorullah-nasrullah/',
    icon: Linkedin,
  },
];

type ActionButtonProps = {
  value: (typeof contact)[number]['value'];
  children?: ReactNode;
};

const ActionButton = ({ value, children }: ActionButtonProps) => {
  const setActiveSection = useActiveSection(state => state.setActiveSection);

  return (
    <Button
      key={value}
      className="h-16 w-16 rounded-full p-0 shadow-xl transition hover:scale-110"
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

export const ActionButtonsGrid = ({
  className,
  hideEmail,
  ...props
}: React.HTMLProps<HTMLDivElement> & {
  hideEmail?: boolean;
}) => {
  const links = contact.filter(
    ({ value }) => !hideEmail || value !== '#contact'
  );

  return (
    <div
      className={cn('my-12 flex h-full w-full justify-center gap-8', className)}
      {...props}
    >
      {links.map(({ value, icon: Icon }) => (
        <ActionButton key={value} value={value}>
          <Icon className="h-6 w-6" />
        </ActionButton>
      ))}
    </div>
  );
};
