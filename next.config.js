/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
/*   basePath: isProduction ? '/portifolio' : '',
  assetPrefix: isProduction ? '/portifolio' : '', */
  basePath: '/portifolio',
  assetPrefix: '/portifolio',
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
