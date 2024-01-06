'use client';

import TypewriterComponent from 'typewriter-effect';

const descriptions = [
  'A Mobile Developer',
  'A Full Stack Developer',
  'A WorldSkills Medalist',
  'A Problem Solver',
  'A Learner',
];

export const TypeWriterBio = () => {
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
