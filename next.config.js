/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  use: ["@svgr/webpack"],
  api: {
    responseLimit: false,
  },
};

module.exports = nextConfig;
