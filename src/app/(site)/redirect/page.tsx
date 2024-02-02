'use client';

import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePostHog } from 'posthog-js/react';
import { useEffect } from 'react';

const RedirectPage = () => {
  const postHog = usePostHog();
  const router = useRouter();
  const searchParams = useSearchParams();
  const to = searchParams.get('to');
  const type = searchParams.get('type');

  useEffect(() => {
    if (!to || !type) return router.replace('/');
    postHog.capture(`${type} button clicked`, { [type]: to });
    router.replace(to);
  }, [to, router, postHog, type]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-5 text-2xl font-bold">Redirecting...</h1>
      <p className="text-sm text-muted-foreground">
        If you are not redirected,{' '}
        <Button
          variant="link"
          className="h-fit p-0"
          onClick={() => router.replace('/')}
        >
          click here
        </Button>
      </p>
    </div>
  );
};

export default RedirectPage;
