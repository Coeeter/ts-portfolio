export const activeSections = [
  'about me',
  'skills',
  'projects',
  'awards',
  'experience',
  'contact',
] as const;

export type ActiveSection = (typeof activeSections)[number];
