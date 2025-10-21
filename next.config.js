/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Aplica basePath/assetPrefix somente em produção (GitHub Pages)
  basePath: isProd ? '/portifolio' : undefined,
  assetPrefix: isProd ? '/portifolio/' : undefined,
  distDir: 'out',
}

module.exports = nextConfig
