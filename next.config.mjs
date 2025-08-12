/** @type {import('next').NextConfig} */
const nextConfig = {
  // Experimental features
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // Suppress common warnings
  eslint: {
    // Warning: This disables ESLint during builds
    // Only use if you're running ESLint separately
    ignoreDuringBuilds: false,
  },

  // TypeScript configuration
  typescript: {
    // Dangerously allow production builds to successfully complete even if your project has type errors
    ignoreBuildErrors: false,
  },

  // Image optimization
  images: {
    // Disable image optimization warnings
    unoptimized: false,
    // Add your image domains here
    domains: ['localhost'],
    // Remote patterns for external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Suppress specific warnings
    config.infrastructureLogging = {
      level: 'error',
    }

    // Handle SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Output configuration
  output: 'standalone',

  // Disable powered by header
  poweredByHeader: false,

  // React strict mode
  reactStrictMode: true,

  // SWC minify
  swcMinify: true,

  // Transpile packages
  transpilePackages: [
    'framer-motion',
    'lucide-react',
  ],

  // Redirects
  async redirects() {
    return []
  },

  // Rewrites
  async rewrites() {
    return []
  },

  // Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig