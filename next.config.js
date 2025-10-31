/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: { unoptimized: true },
  trailingSlash: true,
  // Otimizações de compilação
  swcMinify: true,
  compiler: {
    removeConsole: isProduction ? {
      exclude: ['error', 'warn'],
    } : false,
  },
}

module.exports = nextConfig
