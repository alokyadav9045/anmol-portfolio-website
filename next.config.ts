import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // Production optimizations
  poweredByHeader: false,
  compress: true,
  
  // Image optimization
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Remove static export for Vercel deployment
  // output: 'export',  // Only use this for static hosting like GitHub Pages
  // trailingSlash: true,  // Only needed for static export
};

export default nextConfig;
