'use client';

import { Button } from '@/components/ui/button';

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};

export default ErrorPage;
