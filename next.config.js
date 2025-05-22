/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: false
  },
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

module.exports = nextConfig;
