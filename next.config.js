/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: { 
    unoptimized: true,
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
  
  // IMPORTANTE: Headers não funcionam com output: 'export' (static export)
  // Segundo a documentação do Next.js: https://nextjs.org/docs/app/guides/content-security-policy
  // Para static exports, os headers devem ser configurados no servidor/hospedagem
  // Headers estão configurados em vercel.json para hospedagem na Vercel
  // Para outras plataformas, consulte: https://nextjs.org/docs/app/guides/static-exports
  
  // Compressão e otimizações
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
