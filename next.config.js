/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production'
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? '/portifolio' : '',
  assetPrefix: isGitHubPages ? '/portifolio' : '',
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
