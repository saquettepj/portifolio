/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Aplica basePath/assetPrefix somente quando NODE_ENV=production E não for domínio personalizado
  // Para domínio personalizado, não usar basePath para que os assets sejam servidos da raiz
  basePath: process.env.USE_BASE_PATH === 'true' ? '/portifolio' : undefined,
  assetPrefix: process.env.USE_BASE_PATH === 'true' ? '/portifolio/' : undefined,
  distDir: 'out',
}

module.exports = nextConfig
