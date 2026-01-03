import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Linux-app-installer',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
