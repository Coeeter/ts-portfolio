'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { ReactNode } from 'react';

if (typeof window !== 'undefined') {
  posthog.init(process.env['NEXT_PUBLIC_POSTHOG_KEY']!, {
    api_host: `${window.location.href}/ingest`,
    ui_host: process.env['NEXT_PUBLIC_POSTHOG_HOST'],
    capture_pageview: false,
  });
}

export const PHProvider = ({ children }: { children: ReactNode }) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};
