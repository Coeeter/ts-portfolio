'use client';

import { useActiveSection } from '@/store/active-section';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { usePostHog } from 'posthog-js/react';

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
  label: (typeof contact)[number]['label'];
  children?: ReactNode;
};

const ActionButton = ({ label, value, children }: ActionButtonProps) => {
  const setActiveSection = useActiveSection(state => state.setActiveSection);
  const posthog = usePostHog();

  return (
    <Button
      key={value}
      className="h-16 w-16 rounded-full p-0 shadow-xl transition hover:scale-110"
      asChild={value !== '#contact'}
      onClick={() => {
        posthog.capture('contact button clicked', { label, value });
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
      {links.map(({ label, value, icon: Icon }) => (
        <ActionButton key={value} value={value} label={label}>
          <Icon className="h-6 w-6" />
        </ActionButton>
      ))}
    </div>
  );
};
