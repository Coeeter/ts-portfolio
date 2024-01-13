export const experience = [
  {
    start: new Date(2023, 3),
    end: undefined,
    company: 'GovTech Singapore',
    position: 'Software Engineer (Intern)',
    image: '/experience/govtech.jpg',
    description:
      'Contracted to Ministry of Manpower (MOM) to assist in the ' +
      'IOSH Tech Refresh Project. The project aims to replace the ' +
      'existing IOSH system with a new system that is more user-friendly and efficient.',
    skills: [
      {
        name: 'figma',
        icon: '/experience/figma.svg',
        url: 'https://www.figma.com/',
      },
      {
        name: 'Next.js',
        icon: '/experience/nextjs.svg',
        url: 'https://nextjs.org/',
      },
    ],
  },
] as const;
