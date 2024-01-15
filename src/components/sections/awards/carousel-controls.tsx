'use client';

import { CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { usePostHog } from 'posthog-js/react';

export const CarouselControls = () => {
  const posthog = usePostHog();

  return (
    <>
      <CarouselNext
        className="right-4"
        onClick={() => {
          posthog.capture('carousel next clicked');
        }}
      />
      <CarouselPrevious
        className="left-4"
        onClick={() => {
          posthog.capture('carousel previous clicked');
        }}
      />
    </>
  );
};
