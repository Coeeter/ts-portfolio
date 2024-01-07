export const activeSections = [
  'home',
  'about',
  'projects',
  'experience',
  'contact',
] as const;

export type ActiveSection = (typeof activeSections)[number];
