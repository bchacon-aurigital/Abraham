/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // Creates a standalone build
    poweredByHeader: false, // Removes the X-Powered-By header
    compress: true, // Enable compression
    images: {
      formats: ['image/avif'], 
      minimumCacheTTL: 60,
    },
    reactStrictMode: true,
    swcMinify: true, // Use SWC for minification
  }
  
  module.exports = nextConfig
