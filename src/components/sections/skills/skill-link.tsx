'use client';

import { usePostHog } from 'posthog-js/react';
import { ReactNode } from 'react';

type SkillLinkProps = { children: ReactNode; url: string };

export const SkillLink = ({ children, url }: SkillLinkProps) => {
  const posthog = usePostHog();

  return (
    <a
      href={url}
      target="_blank"
      className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-bold transition hover:scale-110 hover:bg-foreground/5 dark:bg-muted dark:hover:bg-muted/70"
      onClick={() => {
        posthog.capture('skill link clicked', { url });
      }}
    >
      {children}
    </a>
  );
};
