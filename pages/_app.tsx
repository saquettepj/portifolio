import '../src/index.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {/* Meta tags básicas */}
        <title>Thiago Saquette - Desenvolvedor FullStack | React, TypeScript</title>
        <meta name="description" content="Desenvolvedor FullStack brasileiro com 5 anos de experiência em React, TypeScript, Node.js, Python, AWS, Google. Projetos com IA e automações." />
        <meta name="keywords" content="desenvolvedor brasil, desenvolvedor fullstack, python developer, react developer, typescript, nodejs, aws, google cloud, machine learning, ia, automação, saas, b2b, desenvolvedor brasileiro, programador brasil" />
        <meta name="author" content="Thiago José Fagundes Saquette" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="pt-BR" />
        <meta name="geo.region" content="BR" />
        <meta name="geo.country" content="Brasil" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thiagosaquette.org/" />
        <meta property="og:title" content="Thiago Saquette - Desenvolvedor FullStack | Python, React, TypeScript" />
        <meta property="og:description" content="Desenvolvedor FullStack brasileiro com 5 anos de experiência. Experiência em Python, React, TypeScript, Node.js, AWS e Google Cloud." />
        {/* Imagens OG - primeira para domínio sem www, segunda para com www */}
        <meta property="og:image" content="https://thiagosaquette.org/portifolio-img.jpg" />
        <meta property="og:image" content="https://www.thiagosaquette.org/portifolio-img.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Thiago Saquette Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thiagosaquette.org/" />
        <meta property="twitter:title" content="Thiago Saquette - Desenvolvedor FullStack" />
        <meta property="twitter:description" content="Desenvolvedor FullStack brasileiro com 5 anos de experiência. Experiêcia em Python, React, TypeScript, Node.js, AWS e Google Cloud." />
        <meta property="twitter:image" content="https://thiagosaquette.org/portifolio-img.jpg" />
        <meta property="twitter:image" content="https://www.thiagosaquette.org/portifolio-img.jpg" />
        
        {/* Canonical URL - preferência para www */}
        <link rel="canonical" href="https://www.thiagosaquette.org/" />
        <link rel="alternate" href="https://thiagosaquette.org/" />
        
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
        
        {/* Preconnect para performance - apenas domínios críticos */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.brandfetch.io" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://icon.icepanel.io" crossOrigin="anonymous" />
        
        {/* DNS Prefetch - apenas quando necessário (não crítico) */}
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Thiago José Fagundes Saquette",
              jobTitle: "Desenvolvedor FullStack",
              description:
                "Desenvolvedor FullStack brasileiro com 5 anos de experiência em Python, React, TypeScript, Node.js, AWS e Google Cloud",
              url: "https://www.thiagosaquette.org/",
              birthDate: "1997-09-17",
              gender: "Male",
              sameAs: [
                "https://www.linkedin.com/in/saquette/",
                "https://github.com/saquettepj",
              ],
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Universidade Tecnológica Federal do Paraná",
                }
              ],
              knowsLanguage: [
                {
                  "@type": "Language",
                  name: "Portuguese"
                },
                {
                  "@type": "Language",
                  name: "English"
                }
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
                addressLocality: "Curitiba",
                addressRegion: "Paraná",
                addressCountry: "BR",
              },
              email: "thigo.saquettepj@gmail.com",
              telephone: "+55-41-99247-3450",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Thiago Saquette - Desenvolvedor FullStack",
              url: "https://www.thiagosaquette.org/",
              inLanguage: "pt-BR",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.thiagosaquette.org/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Organization - Ajuda com SEO e conhecimento estruturado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "THIAGO JOSE FAGUNDES SAQUETTE",
              url: "https://www.thiagosaquette.org/",
              description: "Desenvolvedor FullStack especializado em Python, React, TypeScript, Node.js, AWS e Google Cloud",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-41-99247-3450",
                contactType: "Professional",
                email: "thigo.saquettepj@gmail.com",
                areaServed: "BR",
                availableLanguage: ["Portuguese", "English"]
              },
              sameAs: [
                "https://www.linkedin.com/in/saquette/",
                "https://github.com/saquettepj"
              ]
            })
          }}
        />

        {/* ProfilePage - Específico para rich results visuais em portfólios */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              mainEntity: {
                "@type": "Person",
                name: "Thiago José Fagundes Saquette",
                jobTitle: "Desenvolvedor FullStack",
                url: "https://www.thiagosaquette.org/",
                sameAs: [
                  "https://www.linkedin.com/in/saquette/",
                  "https://github.com/saquettepj"
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
                  "Inteligência Artificial"
                ]
              }
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
