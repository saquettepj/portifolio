/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: { 
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 ano para cache de imagens
  },
  trailingSlash: true,
  
  // Otimizações de compilação
  compiler: {
    // Remove console.log, console.info, console.debug em produção | Mantém console.error e console.warn para debug em produção
    removeConsole: isProduction ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Otimizações para reduzir JavaScript legado e não usado
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-tooltip', 
      '@radix-ui/react-popover', 
      'lucide-react',
      'react-fast-marquee'
    ],
  },
  
  // Nota: Headers não funcionam com output: 'export'
  // Configure esses headers no seu servidor/hospedagem (Vercel, Netlify, etc.)
  
  // Compressão e otimizações
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
