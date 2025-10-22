/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Para GitHub Pages: usa /portifolio
  // Para domínio personalizado (thiagosaquette.org): usa / (raiz)
  basePath: process.env.USE_BASE_PATH === 'true' ? '/portifolio' : '',
  assetPrefix: process.env.USE_BASE_PATH === 'true' ? '/portifolio/' : '',
  distDir: 'out',
}

module.exports = nextConfig
