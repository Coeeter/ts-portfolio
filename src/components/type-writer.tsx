'use client';

import { useMounted } from '@/hooks/use-mounted';
import TypewriterComponent from 'typewriter-effect';

const descriptions = [
  'A Mobile Developer',
  'A Full Stack Developer',
  'A WorldSkills Medalist',
  'A Problem Solver',
  'A Learner',
];

export const TypeWriterBio = () => {
  const mounted = useMounted();

  if (!mounted) return '_';

  return (
    <TypewriterComponent
      options={{
        strings: descriptions,
        autoStart: true,
        cursor: '_',
        loop: true,
      }}
    />
  );
};
