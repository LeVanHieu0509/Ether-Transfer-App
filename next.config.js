/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "turquoise-obliged-centipede-803.mypinata.cloud",
      "gateway.pinata.cloud",
    ],
  },
};

module.exports = nextConfig;
