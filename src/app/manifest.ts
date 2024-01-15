import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Noorullah Nasrullah's Portfolio",
    short_name: 'Noorullah Nasrullah',
    description: 'Noorullah Nasrullah is a full-stack and mobile developer',
    start_url: '/',
    display: 'standalone',
    categories: ['portfolio', 'developer', 'full-stack', 'mobile'],
    orientation: 'any',
    icons: [
      {
        src: '/favicon.ico',
        type: 'image/x-icon',
        sizes: '16x16 32x32',
      },
      {
        src: '/icon-192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: '/icon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
      {
        src: '/icon-192-maskable.png',
        type: 'image/png',
        sizes: '192x192',
        purpose: 'maskable',
      },
      {
        src: '/icon-512-maskable.png',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'maskable',
      },
    ],
  };
}
