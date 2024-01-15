'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePostHog } from 'posthog-js/react';

type CardActionsProps = {
  demo?: string | null;
  repo: string;
  className?: string;
};

export const CardActions = ({ className, demo, repo }: CardActionsProps) => {
  const postHog = usePostHog();

  return (
    <div className={cn('flex gap-2', className)}>
      {demo && (
        <Button asChild>
          <Link
            href={demo}
            target="_blank"
            onClick={() => {
              postHog.capture('demo button clicked', { demo });
            }}
          >
            Demo
          </Link>
        </Button>
      )}
      <Button asChild variant={'secondary'}>
        <Link
          href={repo}
          target="_blank"
          onClick={() => {
            postHog.capture('repo button clicked', { repo });
          }}
        >
          View Repository
        </Link>
      </Button>
    </div>
  );
};
