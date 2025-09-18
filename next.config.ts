import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "resources.latinowebstudio.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/:path*",
        destination: "/articles/:path*",
        permanent: true,
      },
      {
        source: "/podcast/quirkwins",
        destination: "/podcast/quirkwins-pi-attorney",
        permanent: true, // use true for 301, false for 307
      },
      {
        source: "/blog/ai-ranking",
        destination: "/blog/ai-powered-search",
        permanent: true, // use true for 301, false for 307
      },
    ];
  },
};

export default nextConfig;
