import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/baby-pull-up-pants",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/baby-wipes",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
