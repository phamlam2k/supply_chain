/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src']
  },

  trailingSlash: true,

  reactStrictMode: false,
  swcMinify: true,

  experimental: {
    optimizeCss: true // enabling this will enable SSR for Tailwind
  },

  // SVGR
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/ // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack']
      }
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    config.optimization.minimize = true
    config.optimization.splitChunks = {
      chunks: (chunk) => {
        return chunk && chunk.name && !chunk.name.includes('icon.svg')
      },
      minSize: 20000,
      maxSize: 50000
    }

    return config
  }
}

module.exports = withBundleAnalyzer(nextConfig)
