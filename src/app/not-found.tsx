import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex max-w-md flex-col gap-3">
        <h1 className="font-montserrat text-3xl font-bold">404 Not Found</h1>
        <p className="mb-2 text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
