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
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        type: 'asset/source',
      }
    )
    return config
  },
};

export default nextConfig;