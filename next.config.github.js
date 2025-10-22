/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Para GitHub Pages: com basePath
  basePath: '/portifolio',
  assetPrefix: '/portifolio/',
  distDir: 'out',
}

module.exports = nextConfig
