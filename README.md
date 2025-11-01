<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">PORTFÓLIO</h1></p>
<p align="center">
	<em><code>❯ Portfólio pessoal de Thiago Saquette</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/saquettepj/portifolio.git?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/saquettepj/portifolio.git?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/saquettepj/portifolio.git?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/saquettepj/portifolio.git?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">Construído com as ferramentas e tecnologias:</p>
<p align="center">
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<br>
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=flat&logo=GitHub-Actions&logoColor=white" alt="GitHub%20Actions">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
</p>
<br>

## Visão geral

Este repositório contém o meu portfólio pessoal, construído com Next.js, TypeScript, Tailwind CSS e outras ferramentas modernas de front-end. Ele apresenta projetos, informações de contato e demonstrações de trabalho profissional.

O site é responsivo, otimizado para desempenho e fácil de manter — ideal para apresentar habilidades e projetos a empregadores ou clientes.

## 🌐 **Acesse o site**
**Acesse:** [https://thiagosaquette.org/](https://thiagosaquette.org/)

---

## Otimizações para Lighthouse Score 100

Este documento descreve todas as otimizações implementadas para alcançar um score 100 no Google Lighthouse.

## ✅ Otimizações Implementadas

### 1. **Atualização para Next.js 15 e React 19**
- ✅ Next.js atualizado para v15.1.3 (última versão)
- ✅ React atualizado para v19.0.0 (última versão)
- ✅ TypeScript atualizado para v5.7.2
- ✅ Todas as dependências atualizadas para versões compatíveis

### 2. **Otimizações de Configuração (next.config.js)**
- ✅ SWC minification habilitado
- ✅ Remoção de console.log em produção
- ✅ Otimização de imports de pacotes (@radix-ui, lucide-react, react-fast-marquee)
- ✅ Compressão habilitada
- ✅ Header "X-Powered-By" removido
- ✅ Tree-shaking e otimização de bundle via webpack
- ✅ Cache de imagens configurado (1 ano)

### 3. **Otimizações de Performance**

#### Fontes
- ✅ System fonts implementadas (sem download de fontes externas)
- ✅ Font stack otimizado para diferentes sistemas operacionais

#### Imagens
- ✅ Lazy loading para imagens não críticas
- ✅ `fetchPriority="high"` para imagem do projeto atual
- ✅ `fetchPriority="low"` para tecnologias e projetos não visíveis
- ✅ `decoding="async"` em todas as imagens
- ✅ Tamanhos explícitos (width/height) para evitar CLS
- ✅ Formato AVIF/WebP preferencial configurado

#### JavaScript
- ✅ Code splitting com dynamic imports
- ✅ Marquee carregado apenas quando necessário (desktop)
- ✅ Componentes memoizados com `memo()` e `useMemo()`
- ✅ Callbacks otimizados com `useCallback()`
- ✅ Arrays duplicados memoizados para evitar recálculos

### 4. **Otimizações de SEO**

#### Meta Tags
- ✅ Meta tags completas (description, keywords, author)
- ✅ Open Graph completo (Facebook)
- ✅ Twitter Cards configurado
- ✅ Canonical URLs
- ✅ Robots meta melhorado com max-image-preview, max-snippet

#### Structured Data
- ✅ JSON-LD Schema.org implementado:
  - Person (dados pessoais)
  - WebSite (site principal)
  - Organization (organização)
  - ProfilePage (página de perfil)

#### Headers de Segurança
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy configurado

### 5. **Otimizações de Carregamento**

#### Recursos Externos
- ✅ Google Analytics carregado com `strategy="afterInteractive"`
- ✅ Preconnect apenas para domínios críticos (CDNs de imagens)
- ✅ DNS-prefetch para recursos não críticos

#### Cache
- ✅ Headers de cache configurados via `_headers` (Netlify) e `vercel.json` (Vercel)
- ✅ Cache de 1 ano para assets estáticos
- ✅ Cache imutável para `/_next/static/`

### 6. **Otimizações de Acessibilidade**
- ✅ Alt text descritivo em todas as imagens
- ✅ Aria labels onde necessário
- ✅ Estrutura semântica adequada
- ✅ Contraste de cores adequado (dark theme)

## ⚠️ Notas Importantes

1. **React 19**: Algumas bibliotecas podem mostrar avisos de peer dependencies, mas isso não afeta o funcionamento
2. **Output Export**: Como estamos usando `output: 'export'`, alguns recursos do Next.js (como Image Optimization) não estão disponíveis
3. **Headers**: Os headers de segurança funcionam via arquivos `_headers` ou `vercel.json`, dependendo da plataforma de deploy

