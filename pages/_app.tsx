import '../src/index.css'
import Head from 'next/head'
import Script from 'next/script'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import seo from '../src/seo.json'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  // URL canônica preferida (sempre com www)
  const canonicalUrl = seo.canonical
  
  // Construir URL atual baseada no pathname, sempre usando a versão canônica
  const currentPath = router.asPath === '/' ? '' : router.asPath
  const currentCanonical = `${canonicalUrl}${currentPath}`.replace(/\/$/, '') || canonicalUrl
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {/* Meta tags básicas */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={seo.author} />
        <meta name="viewport" content={seo.viewport} />
        <meta name="theme-color" content={seo.themeColor} />
        <meta name="color-scheme" content={seo.colorScheme} />
        <meta name="robots" content={seo.robots} />
        <meta name="language" content={seo.language} />
        <meta name="geo.region" content={seo.geoRegion} />
        <meta name="geo.country" content={seo.geoCountry} />
        
        {/* Open Graph / Facebook - sempre usando URL canônica */}
        <meta property="og:type" content={seo.openGraph.type} />
        <meta property="og:url" content={currentCanonical} />
        <meta property="og:title" content={seo.openGraph.title} />
        <meta property="og:description" content={seo.openGraph.description} />
        {seo.openGraph.images.map((img) => (
          <meta key={img} property="og:image" content={img} />
        ))}
        <meta property="og:image:width" content={seo.openGraph.imageWidth} />
        <meta property="og:image:height" content={seo.openGraph.imageHeight} />
        <meta property="og:image:type" content={seo.openGraph.imageType} />
        <meta property="og:locale" content={seo.openGraph.locale} />
        <meta property="og:site_name" content={seo.openGraph.siteName} />
        
        {/* Twitter - sempre usando URL canônica */}
        <meta property="twitter:card" content={seo.twitter.card} />
        <meta property="twitter:url" content={currentCanonical} />
        <meta property="twitter:title" content={seo.twitter.title} />
        <meta property="twitter:description" content={seo.twitter.description} />
        {seo.twitter.images.map((img) => (
          <meta key={img} property="twitter:image" content={img} />
        ))}
        
        {/* Canonical URL - sempre aponta para versão preferida (com www) */}
        <link rel="canonical" href={currentCanonical} />
        {seo.alternate && (
          <link rel="alternate" href={seo.alternate} />
        )}
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="16x16" href={seo.icons.favicon16} />
        <link rel="icon" type="image/png" sizes="32x32" href={seo.icons.favicon32} />
        <link rel="icon" type="image/png" sizes="57x57" href={seo.icons.favicon57} />
        <link rel="icon" type="image/png" sizes="180x180" href={seo.icons.favicon180} />
        <link rel="icon" type="image/png" sizes="192x192" href={seo.icons.favicon192} />
        <link rel="icon" type="image/png" sizes="310x310" href={seo.icons.favicon310} />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href={seo.icons.apple57} />
        <link rel="apple-touch-icon" sizes="180x180" href={seo.icons.apple180} />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href={seo.icons.favicon192} />
        
        {/* Fallback */}
        <link rel="shortcut icon" href={seo.icons.shortcut} />
        
        {/* Preconnect para performance - apenas domínios críticos */}
        {seo.preconnect.map((url) => (
          <link key={url} rel="preconnect" href={url} crossOrigin="anonymous" />
        ))}
        
        {/* DNS Prefetch - apenas quando necessário (não crítico) */}
        {seo.dnsPrefetch.map((url) => (
          <link key={url} rel="dns-prefetch" href={url} />
        ))}
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...seo.structuredData.person,
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...seo.structuredData.website,
            })
          }}
        />

        {/* Organization - Ajuda com SEO e conhecimento estruturado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...seo.structuredData.organization,
            })
          }}
        />

        {/* ProfilePage - Específico para rich results visuais em portfólios */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...seo.structuredData.profilePage,
            })
          }}
        />
      </Head>
      
      {/* Google Analytics 4 - Carregado após interação do usuário para melhor performance */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-39MJ7RH569"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-39MJ7RH569', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: false
            });
          `,
        }}
      />
      
      <Component {...pageProps} />
    </>
  )
}
