/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'cdn.oran.zone',
        port: ''
      },
    ],
  },
};

export default nextConfig;