'use client';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type NavigationLinkProps = {
  href: string;
  label: string;
};

export const NavigationLink = ({ href, label }: NavigationLinkProps) => {
  const pathname = usePathname();

  return (
    <Button
      key="navigation-link"
      variant={'link'}
      className={cn(
        'group relative flex flex-col hover:no-underline',
        pathname === href
          ? 'hover:text-accent-foreground'
          : 'text-muted-foreground hover:text-foreground'
      )}
      asChild
    >
      <Link href={href}>
        {label}

        {pathname === href && (
          <motion.span
            className="absolute inset-0 -z-10 rounded-full border border-input bg-background "
            layoutId="activeSection"
            transition={{
              type: 'spring',
              stiffness: 380,
              damping: 30,
            }}
          ></motion.span>
        )}
      </Link>
    </Button>
  );
};
