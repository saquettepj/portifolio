import '../src/index.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        {/* Meta tags básicas */}
        <title>Thiago Saquette - Desenvolvedor FullStack | Python, React, TypeScript</title>
        <meta name="description" content="Desenvolvedor FullStack brasileiro com 5 anos de experiência. Especialista em Python, React, TypeScript, Node.js, AWS e Google Cloud. Projetos com IA, SaaS B2B e automações." />
        <meta name="keywords" content="desenvolvedor brasil, desenvolvedor fullstack, python developer, react developer, typescript, nodejs, aws, google cloud, machine learning, ia, automação, saas, b2b, desenvolvedor brasileiro, programador brasil" />
        <meta name="author" content="Thiago José Fagundes Saquette" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="pt-BR" />
        <meta name="geo.region" content="BR" />
        <meta name="geo.country" content="Brasil" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thiagosaquette.org/" />
        <meta property="og:title" content="Thiago Saquette - Desenvolvedor FullStack | Python, React, TypeScript" />
        <meta property="og:description" content="Desenvolvedor FullStack brasileiro com 5 anos de experiência. Especialista em Python, React, TypeScript, Node.js, AWS e Google Cloud." />
        <meta property="og:image" content="https://thiagosaquette.org/images/og-image.png" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Thiago Saquette Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thiagosaquette.org/" />
        <meta property="twitter:title" content="Thiago Saquette - Desenvolvedor FullStack" />
        <meta property="twitter:description" content="Desenvolvedor FullStack brasileiro com 5 anos de experiência. Especialista em Python, React, TypeScript, Node.js, AWS e Google Cloud." />
        <meta property="twitter:image" content="https://thiagosaquette.org/images/og-image.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://thiagosaquette.org/" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="57x57" href="/favicon-57x57.png" />
        <link rel="icon" type="image/png" sizes="180x180" href="/favicon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="310x310" href="/favicon-310x310.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        
        {/* Fallback */}
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        
        
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdn.brandfetch.io" />
        <link rel="preconnect" href="https://icon.icepanel.io" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.linkedin.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//wa.me" />
        
        {/* Structured Data via next/script (teste) */}
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Thiago José Fagundes Saquette",
              jobTitle: "Desenvolvedor FullStack",
              description:
                "Desenvolvedor FullStack brasileiro com 5 anos de experiência em Python, React, TypeScript, Node.js, AWS e Google Cloud",
              url: "https://thiagosaquette.org/",
              sameAs: [
                "https://www.linkedin.com/in/saquette/",
                "https://github.com/saquettepj",
              ],
              knowsAbout: [
                "Python",
                "React",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "AWS",
                "Google Cloud Platform",
                "Machine Learning",
                "Inteligência Artificial",
                "Desenvolvimento Web",
                "Desenvolvimento Mobile",
                "Automação",
                "SaaS",
                "B2B",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
              },
              email: "thigo.saquettepj@gmail.com",
              telephone: "+55-41-99247-3450",
            }),
          }}
        />

        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Thiago Saquette - Desenvolvedor FullStack",
              url: "https://thiagosaquette.org/",
              inLanguage: "pt-BR",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://thiagosaquette.org/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      
      {/* Google Analytics 4 */}
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
            });
          `,
        }}
      />
      
      <Component {...pageProps} />
    </>
  )
}
