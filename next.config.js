/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/portifolio',
  assetPrefix: '/portifolio/',
  distDir: 'out'
}

module.exports = nextConfig
