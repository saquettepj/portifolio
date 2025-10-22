/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portifolio',
  assetPrefix: '/portifolio',
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
