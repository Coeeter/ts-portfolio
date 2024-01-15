/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: '/ingest/:path*',
      destination: `${process.env.NEXT_PUBLIC_POSTHOG_HOST}/:path*`,
    },
    {
      source: '/awards/:path*',
      destination: `${process.env.IMAGE_URL_BASE}/awards/:path*`,
    },
    {
      source: '/experience/:path*',
      destination: `${process.env.IMAGE_URL_BASE}/experience/:path*`,
    },
    {
      source: '/projects/:path*',
      destination: `${process.env.IMAGE_URL_BASE}/projects/:path*`,
    },
    {
      source: '/icons/:path*',
      destination: `${process.env.IMAGE_URL_BASE}/icons/:path*`,
    },
    {
      source: '/me.jpeg',
      destination: `${process.env.IMAGE_URL_BASE}/me.jpeg`,
    },
  ],
};

module.exports = nextConfig;
