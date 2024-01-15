export const activeSections = [
  'about me',
  'skills',
  'projects',
  'achievements',
  'experience',
  'contact',
] as const;

export type ActiveSection = (typeof activeSections)[number];
