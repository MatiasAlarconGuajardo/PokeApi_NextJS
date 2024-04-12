/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  env: {
    FLAVOR_TEXT_ENDPOINT: process.env.FLAVOR_TEXT_ENDPOINT,
  },
  };



export default nextConfig;



