/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProduction ? '' : '',
  assetPrefix: isProduction ? '' : '',
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
