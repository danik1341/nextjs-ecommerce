/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    // remotePatterns: [
    //   { hostname: "images.unsplash.com" },
    //   { hostname: "plus.unsplash.com" },
    //   { hostname: "lh3.googleusercontent.com" },
    // ], Use for testing porpeses
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
