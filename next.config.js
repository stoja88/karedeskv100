/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15 optimizations
  experimental: {
    // Enable new App Router features
    optimizePackageImports: ['@headlessui/react', 'framer-motion', 'lucide-react'],
  },
  // Turbopack configuration (now stable in Next.js 15)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'carpeta-sin-titulo-101.vercel.app' },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable HMR for better development experience
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

module.exports = nextConfig