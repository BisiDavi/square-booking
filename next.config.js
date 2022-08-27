/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    format: ["image/webp"],
    domains: [
      "square-web-production-f.squarecdn.com",
      "items-images-production.s3.us-west-2.amazonaws.com",
    ],
    deviceSizes: [320, 375, 425, 640, 768, 828, 1024, 1200, 1440, 1920, 2560],
    minimumCacheTTL: 60 * 60 * 24,
  },
};

module.exports = withTM(nextConfig);
