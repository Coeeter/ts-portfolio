'use client';

import { Button } from '@/components/ui/button';
import { useMounted } from '@/hooks/use-mounted';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type CardActionsProps = {
  className?: string;
  type?: 'all' | 'demo';
  demo?: string | null;
  repo?: string | null;
};

export const CardActions = ({
  className,
  type = 'demo',
  ...props
}: CardActionsProps) => {
  const mounted = useMounted();

  if (!mounted) return null;

  if (type === 'all') {
    return (
      <div className={cn('flex gap-2', className)}>
        {props.demo && (
          <Button asChild>
            <Link href={`/redirect?type=demo&to=${props.demo}`} target="_blank">
              Demo
            </Link>
          </Button>
        )}
        {props.repo && (
          <Button asChild variant={'secondary'}>
            <Link href={`/redirect?type=repo&to=${props.repo}`} target="_blank">
              View Repository
            </Link>
          </Button>
        )}
      </div>
    );
  }

  if (!props.demo) return null;

  return (
    <Button asChild className="ml-3">
      <Link
        href={`/redirect?type=demo&to=${props.demo}`}
        target="_blank"
        className={className}
      >
        View Demo
      </Link>
    </Button>
  );
};
