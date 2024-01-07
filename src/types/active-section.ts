export const activeSections = [
  'about me',
  'projects',
  'awards',
  'experience',
  'contact',
] as const;

export type ActiveSection = (typeof activeSections)[number];
