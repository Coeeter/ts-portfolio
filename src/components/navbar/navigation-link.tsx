'use client';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useActiveSection } from '@/store/active-section';
import { ActiveSection } from '@/types/active-section';

type NavigationLinkProps = {
  section: ActiveSection;
};

export const NavigationLink = ({ section }: NavigationLinkProps) => {
  const activeSection = useActiveSection(state => state.activeSection);
  const setActiveSection = useActiveSection(state => state.setActiveSection);

  return (
    <Button
      key="navigation-link"
      variant={'link'}
      className={cn(
        'group relative flex flex-col text-xs capitalize hover:no-underline md:text-sm',
        activeSection === section
          ? 'hover:text-accent-foreground'
          : 'text-muted-foreground hover:text-foreground'
      )}
      onClick={() => setActiveSection(section, 'click')}
    >
      {section}

      {activeSection === section && (
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
    </Button>
  );
};
