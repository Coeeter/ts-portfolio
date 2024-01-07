'use client';

import { Button } from '@/components/ui/button';

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="mx-auto flex h-full w-full max-w-sm flex-col justify-center gap-6">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      {process.env.NODE_ENV === 'development' && (
        <pre className="w-full overflow-hidden text-wrap text-muted-foreground">
          {error.message}
        </pre>
      )}
      <Button onClick={reset}>Reload the page</Button>
    </div>
  );
};

export default ErrorPage;
