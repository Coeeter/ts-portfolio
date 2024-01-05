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
        'hover:no-underline text-muted-foreground hover:text-foreground flex flex-col relative group',
        pathname === href && 'text-foreground'
      )}
      asChild
    >
      <Link href={href}>
        {label}

        {pathname === href && (
          <motion.span
            className="bg-primary/20 rounded-full absolute inset-0 -z-10 dark:bg-primary/80 group-hover:bg-primary/10 dark:group-hover:bg-primary/70"
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
