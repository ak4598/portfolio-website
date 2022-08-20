/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  use: ["@svgr/webpack"],
};

module.exports = nextConfig;
