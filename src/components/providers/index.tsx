'use client';

import { ReactNode } from 'react';
import { PHProvider } from './posthog-provider';
import { ThemeProvider } from './theme-provider';

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <PHProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </PHProvider>
  );
};
