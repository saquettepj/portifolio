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
  // Otimizações para reduzir JavaScript legado e não usado
  experimental: {
    optimizePackageImports: ['@radix-ui/react-tooltip', '@radix-ui/react-popover', 'lucide-react'],
  },
}

module.exports = nextConfig
