/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: '/ingest/:path*',
      destination: `${process.env.NEXT_PUBLIC_POSTHOG_HOST}/:path*`,
    },
  ],
};

module.exports = nextConfig;
