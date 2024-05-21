/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.oran.zone',
        port: ''
      },
    ],
  },
};

export default nextConfig;