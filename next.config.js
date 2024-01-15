/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
      },
      {
        hostname: 'user-images.githubusercontent.com',
      },
      {
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  rewrites: async () => [
    {
      source: '/ingest/:path*',
      destination: `${process.env.NEXT_PUBLIC_POSTHOG_HOST}/:path*`,
    },
  ],
};

module.exports = nextConfig;
