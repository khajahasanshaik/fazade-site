/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow dev server to accept connections from host (e.g. Docker)
  ...(process.env.DOCKER && { devIndicators: false }),
};

module.exports = nextConfig;
