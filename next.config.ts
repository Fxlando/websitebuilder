import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Using app directory structure
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
