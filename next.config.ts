import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "via.placeholder.com",
      "www.tatvasoft.com", // 👈 
    ],
  },
};

export default nextConfig;
