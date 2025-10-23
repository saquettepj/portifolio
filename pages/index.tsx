import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Marquee from "react-fast-marquee";
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Popover from '@radix-ui/react-popover';
import { useSwipeable } from 'react-swipeable';
import { Linkedin, Github, Mail, MessageCircle } from 'lucide-react';

interface Technology {
  img: string;
  ref: string;
  name: string;
  description: string;
}

interface Project {
  img: string;
  ref: string;
  name: string;
  description: string;
}

const baseImageUrl = ''
console.log(process.env.NODE_ENV)

const technologies: Technology[] = [
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    ref: 'https://www.python.org/',
    name: 'Python',
    description: 'Python é uma linguagem de programação de alto nível, interpretada e dinamicamente tipada, famosa por sua sintaxe limpa e legibilidade. Python é extremamente versátil, sendo amplamente utilizada em desenvolvimento web, análise de dados, machine learning (IA) e scripts de automação.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    ref: 'https://react.dev/',
    name: 'React',
    description: 'React (ou React.js) é uma biblioteca JavaScript de código aberto focada na criação de interfaces de usuário (UIs) componentizadas. Mantida pelo Facebook, React permite que desenvolvedores criem UIs interativas e reutilizáveis, gerenciando eficientemente o estado da aplicação e atualizando o DOM.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    ref: 'https://www.typescriptlang.org/',
    name: 'TypeScript',
    description: 'TypeScript é um superconjunto (superset) de JavaScript, desenvolvido pela Microsoft, que adiciona tipagem estática opcional ao JavaScript. O TypeScript compila para JavaScript puro e ajuda a detectar erros em tempo de desenvolvimento, melhorando a manutenibilidade e escalabilidade de grandes aplicações.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    ref: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    name: 'JavaScript',
    description: 'JavaScript (JS) é a principal linguagem de programação para a web, permitindo interatividade e comportamento dinâmico em sites. JavaScript é uma linguagem de alto nível, interpretada e multiparadigma, essencial para o desenvolvimento front-end (com frameworks como React) e back-end (via NodeJS).'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    ref: 'https://nodejs.org/pt',
    name: 'NodeJS',
    description: 'NodeJS é um ambiente de execução (runtime) JavaScript assíncrono e orientado a eventos, construído sobre o motor V8 do Chrome. NodeJS permite que o JavaScript seja executado no lado do servidor, sendo ideal para construir APIs rápidas, escaláveis, microserviços e aplicações de rede.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-plain.svg',
    ref: 'https://developer.mozilla.org/pt-BR/docs/Web/XML',
    name: 'XML',
    description: 'XML (Extensible Markup Language) é uma linguagem de marcação projetada para armazenar e transportar dados de forma legível tanto por humanos quanto por máquinas. Diferente do HTML, o XML foca na estrutura dos dados, sendo fundamental para arquivos de configuração, feeds (RSS) e integração de sistemas (SOAP).'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    ref: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    name: 'HTML',
    description: 'HTML (HyperText Markup Language) é a linguagem de marcação padrão para criar e estruturar páginas web. O HTML define os elementos semânticos de um documento, como títulos, parágrafos, links e imagens, formando o esqueleto básico sobre o qual o CSS e o JavaScript atuam para criar sites completos.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    ref: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    name: 'CSS',
    description: 'CSS (Cascading Style Sheets) é a linguagem usada para estilizar e definir a apresentação visual de documentos escritos em HTML. O CSS controla layout, cores, fontes e responsividade, separando o conteúdo (HTML) da estética, permitindo que sites se adaptem a diferentes tamanhos de tela.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    ref: 'https://www.mysql.com/',
    name: 'SQL',
    description: 'SQL (Structured Query Language) é a linguagem padrão para gerenciar e manipular bancos de dados relacionais (RDBMS). O SQL é usado para consultar, inserir, atualizar e deletar dados, além de definir e modificar esquemas de bancos de dados como PostgreSQL, MySQL e outros, sendo crucial para persistência de dados.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-plain.svg',
    ref: 'https://www.json.org/json-en.html',
    name: 'JSON',
    description: 'JSON (JavaScript Object Notation) é um formato leve e de fácil leitura para intercâmbio de dados. Baseado na sintaxe de objetos JavaScript, o JSON é amplamente utilizado em APIs REST e arquivos de configuração por ser facilmente interpretado por máquinas e compreensível por humanos.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    ref: 'https://scikit-learn.org/stable/',
    name: 'Scikit-learn',
    description: 'Scikit-learn é uma das bibliotecas de Machine Learning mais populares para Python. Scikit-learn oferece ferramentas eficientes e simples para análise preditiva de dados, incluindo algoritmos de classificação, regressão, clusterização e redução de dimensionalidade, integrada ao ecossistema científico do Python.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
    ref: 'https://streamlit.io/',
    name: 'Streamlit',
    description: 'Streamlit é um framework Python de código aberto que permite criar e compartilhar rapidamente aplicações web personalizadas para ciência de dados e Machine Learning. Com Streamlit, é possível transformar scripts de dados em dashboards interativos com widgets, gráficos e mapas, com mínimo esforço de front-end.'
  },
  {
    img: 'https://cdn.brandfetch.io/idiAAavgWY/w/1188/h/222/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1759344354267',
    ref: 'https://thunkable.com/',
    name: 'Thunkable',
    description: 'Thunkable é uma plataforma de desenvolvimento Low Code/No-Code que permite criar aplicações móveis nativas para iOS e Android usando uma interface visual de arrastar e soltar (drag-and-drop). Thunkable foca em agilizar a prototipagem e o desenvolvimento de apps sem a necessidade de escrita de código complexo.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    ref: 'https://nextjs.org/',
    name: 'NextJS',
    description: 'NextJS é um framework React de código aberto para desenvolvimento web focado em produção. NextJS oferece renderização do lado do servidor (SSR), geração de sites estáticos (SSG) e componentização, melhorando a performance, o SEO e a experiência do desenvolvedor em aplicações React escaláveis.'
  },
  {
    img: 'https://icon.icepanel.io/Technology/png-shadow-512/Fastify.png',
    ref: 'https://fastify.dev/',
    name: 'Fastify',
    description: 'Fastify é um framework web de alta performance para NodeJS, conhecido por sua baixa sobrecarga (overhead) e arquitetura baseada em plugins. Fastify é focado em velocidade, fornecendo roteamento rápido e validação de esquemas JSON, sendo uma alternativa moderna e eficiente para construção de APIs.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    ref: 'https://expressjs.com/',
    name: 'Express',
    description: 'Express (ou Express.js) é um framework minimalista e flexível para NodeJS, considerado o padrão de fato para a construção de APIs e aplicações web no ecossistema Node. Express simplifica o gerenciamento de rotas, middlewares e requisições HTTP, servindo como base para muitos outros frameworks.'
  },
  {
    img: 'https://icon.icepanel.io/Technology/svg/Nest.js.svg',
    ref: 'https://nestjs.com/',
    name: 'NestJS',
    description: 'NestJS é um framework NodeJS progressivo para construir aplicações de servidor eficientes, escaláveis e confiáveis. NestJS usa TypeScript e é fortemente inspirado no Angular, aplicando conceitos como Injeção de Dependência e arquitetura modular, sendo ideal para microserviços e APIs complexas.'
  },
  {
    img: 'https://icon.icepanel.io/Technology/svg/Knex.js.svg',
    ref: 'https://knexjs.org/',
    name: 'Knex',
    description: 'Knex (ou Knex.js) é um construtor de consultas SQL (Query Builder) para JavaScript/TypeScript, compatível com vários bancos de dados (PostgreSQL, MySQL, etc.). Knex permite escrever consultas SQL de forma programática e segura, além de gerenciar migrações de banco de dados.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
    ref: 'https://www.prisma.io/',
    name: 'Prisma',
    description: 'Prisma é um ORM (Object-Relational Mapper) de última geração para NodeJS e TypeScript. Prisma facilita a interação com bancos de dados através de um esquema declarativo e um cliente de consulta fortemente tipado, melhorando a segurança e a produtividade no acesso a dados em aplicações backend.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    ref: 'https://tailwindcss.com/',
    name: 'Tailwind',
    description: 'Tailwind CSS é um framework CSS "utility-first" que permite construir designs personalizados diretamente no HTML. Em vez de classes pré-definidas (como "card"), Tailwind oferece blocos de construção (como "flex", "pt-4"), agilizando o desenvolvimento de interfaces responsivas e modernas sem sair do HTML.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    ref: 'https://www.postgresql.org/',
    name: 'PostgreSQL',
    description: 'PostgreSQL (ou Postgres) é um sistema gerenciador de banco de dados objeto-relacional (ORDBMS) de código aberto, conhecido por sua robustez, conformidade com o padrão SQL e extensibilidade. PostgreSQL é amplamente utilizado em aplicações complexas que exigem transações confiáveis e tipos de dados avançados.'
  },
  {
    img: 'https://cdn.brandfetch.io/id7gN4JouK/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1735286125879',
    ref: 'https://n8n.io/',
    name: 'N8N',
    description: 'N8N (n8n.io) é uma ferramenta de automação de fluxo de trabalho (workflow automation) extensível, muitas vezes "self-hosted" (auto-hospedada). N8N permite conectar diferentes APIs e serviços (como Discord, Google Sheets, APIs) através de uma interface visual baseada em nós para criar automações complexas.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    ref: 'https://git-scm.com/',
    name: 'Git',
    description: 'Git é um sistema de controle de versão distribuído (DVCS), criado por Linus Torvalds, essencial no desenvolvimento de software moderno. Git rastreia mudanças no código-fonte, permitindo que múltiplos desenvolvedores colaborem em projetos de forma assíncrona, gerenciando branches, merges e histórico de alterações.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    ref: 'https://www.docker.com/',
    name: 'Docker',
    description: 'Docker é uma plataforma de containerização que permite empacotar, distribuir e executar aplicações em ambientes isolados chamados "containers". Docker garante consistência entre os ambientes de desenvolvimento, teste e produção, simplificando o deploy e o gerenciamento de infraestrutura (DevOps).'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg',
    ref: 'https://docs.docker.com/compose/',
    name: 'Compose',
    description: 'Compose (anteriormente Docker Compose) é uma ferramenta do ecossistema Docker para definir e executar aplicações multi-container. Usando um arquivo YAML, o Compose configura e orquestra os serviços da aplicação (ex: um backend, um banco de dados e um cache), facilitando o gerenciamento de ambientes locais complexos.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    ref: 'https://cloud.google.com/?hl=pt-BR',
    name: 'Google Cloud',
    description: 'Google Cloud (GCP) é a plataforma de computação em nuvem do Google, oferecendo um vasto conjunto de serviços de infraestrutura (IaaS) e plataforma (PaaS). Google Cloud é forte em análise de dados (BigQuery), IA/ML e orquestração de containers (GKE), competindo diretamente com AWS e Azure.'
  },
  {
    img: 'https://icon.icepanel.io/Technology/png-shadow-512/AWS.png',
    ref: 'https://aws.amazon.com/pt/',
    name: 'AWS',
    description: 'AWS (Amazon Web Services) é a plataforma de computação em nuvem líder de mercado, oferecendo a mais ampla gama de serviços sob demanda. AWS fornece infraestrutura escalável (como EC2 e S3), bancos de dados gerenciados (RDS), serviços de IA e ferramentas de DevOps para empresas de todos os tamanhos.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-plain.svg',
    ref: 'https://cloud.google.com/?hl=pt-BR',
    name: 'Cloud Run',
    description: 'Cloud Run é um serviço serverless (sem servidor) da Google Cloud (GCP) que permite executar containers stateless diretamente na nuvem. O Cloud Run abstrai toda a infraestrutura, escalando automaticamente (inclusive para zero) e cobrando apenas pelo uso, ideal para APIs, microserviços e web apps.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    ref: 'https://jestjs.io/',
    name: 'Jest',
    description: 'Jest é um framework de testes JavaScript de "configuração zero" (zero-config), amplamente utilizado no ecossistema React, mas compatível com qualquer projeto JS/TS. Jest oferece um executor de testes rápido, assertions integradas, mocks e relatórios de cobertura de código, simplificando o processo de testes.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg',
    ref: 'https://vitest.dev/',
    name: 'Vitest',
    description: 'Vitest é um framework de testes unitários extremamente rápido, nativo do ecossistema Vite. Vitest utiliza a configuração do Vite (ESM nativo, HMR) para uma experiência de desenvolvimento ágil, oferecendo uma API compatível com Jest e alta performance para projetos JavaScript e TypeScript modernos.'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg',
    ref: 'https://sentry.io/welcome/',
    name: 'Sentry',
    description: 'Sentry é uma plataforma de monitoramento de aplicações e rastreamento de erros (error tracking) em tempo real. Sentry ajuda desenvolvedores a diagnosticar, corrigir e otimizar o desempenho de suas aplicações, capturando exceções de front-end (JS, React) e back-end (Node, Python) antes que afetem os usuários.'
  }
];


export default function Home() {
  const [currentProject, setCurrentProject] = useState(1);
  const [hoveredProject, setHoveredProject] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const projectScrollRef = useRef<NodeJS.Timeout | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const projectsTitleRef = useRef<HTMLHeadingElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  
  const [treadmillPosition, setTreadmillPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragCurrent, setDragCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const treadmillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };
    
    handleResize(mediaQuery);
    mediaQuery.addEventListener('change', handleResize);
    
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);


  const projects: Project[] = [
    {
      img: `${baseImageUrl}/dj.png`,
      ref: 'https://saquettepj.github.io/DJ-app/',
      name: 'Modificação em plataforma de DJ',
      description: 'Refinamento de UI/UX e Otimização de Plataforma de Música com IA\nAtuação direta na evolução de uma plataforma de DJ baseada em inteligência artificial. O foco foi aprimorar a experiência do usuário (UI/UX) e implementar novas funcionalidades, resultando em uma interação mais intuitiva e no aumento da capacidade de geração musical da ferramenta.'
    },
    {
      img: `${baseImageUrl}/foursales.png`,
      ref: 'https://www.foursales.com.br/candidatos',
      name: 'FourSales - Full stack',
      description: 'Desenvolvimento de Componentes Reutilizáveis e Interfaces Completas\nEm ambiente de alta demanda, atuei no frontend (React/Redux), contribuindo ativamente para o refinamento do design e implementação de código com alta reusabilidade em componentes (UI/UX). A adoção desses componentes reduziu o tempo de desenvolvimento em projetos futuros e ajudou a manter a estabilidade do software via QA.'
    },
    {
      img: `${baseImageUrl}/analise.png`,
      ref: 'https://saquettepj.github.io/AI-static-report/',
      name: 'Analise de IA Generativa',
      description: 'Consultoria Estratégica e Análise Técnica para Adoção de IA Generativa\nElaboração de um relatório de análise e consultoria para uma empresa parceira, focado na aquisição de serviços de IA generativa. O projeto envolveu a avaliação de provedores e modelos, culminando em uma recomendação estratégica que alinhou as necessidades técnicas da empresa com as soluções de melhor custo-benefício.'
    },
    {
      img: `${baseImageUrl}/saas.png`,
      ref: 'https://github.com/saquettepj',
      name: 'Sistema Micro-SaaS B2B',
      description: 'Arquitetura e Desenvolvimento Full-Stack de Solução Micro-SaaS B2B\nConstrução de uma plataforma completa (React, NestJS) para gestão de ordens de serviço e vendas, hospedada na Google Cloud Platform (GCP). O projeto foi desenhado para otimizar a gestão de clientes e processos internos, focando na escalabilidade e automação de tarefas para o público B2B.'
    },
    {
      img: `${baseImageUrl}/n8n.png`,
      ref: 'https://github.com/saquettepj',
      name: 'Automações com IA (N8N)',
      description: 'Criação de Agentes de Automação (N8N) e Web Scraping com IA\nImplementação de fluxos de automação avançados utilizando N8N, integrados com modelos de IA. O sistema realiza web scraping e análise de dados (agentes de busca) para o mercado de pontos em crédito, permitindo a extração e processamento de informações periodicamente.'
    },
    {
      img: `${baseImageUrl}/chat.png`,
      ref: 'https://github.com/saquettepj',
      name: 'Chatbot Agente com IA Generativa',
      description: 'Desenvolvimento de Agente Conversacional (RAG) com IA Generativa\nCriação de um chatbot (agente) com IA generativa, utilizando a arquitetura RAG. O sistema se conecta a um banco de dados vetorial e a uma API de busca para consultar e processar informações de documentos privados, fornecendo respostas precisas e contextualizadas com base em uma base de conhecimento.'
    },
    {
      img: `${baseImageUrl}/ia.png`,
      ref: 'https://github.com/saquettepj',
      name: 'API para Modelo de IA Preditivo',
      description: 'Desenvolvimento de API (Python) para Produção de Modelo Preditivo (MLOps)\nImplementação de uma API robusta em Python (FastAPI/Flask) para servir um modelo de machine learning treinado (regressão) para predição de valores contínuos. O projeto focou na criação de modelo com rápido processamento em CPUs para a predição em tempo mínimo.'
    }
  ]

  useEffect(() => {
    if (isMobile) {
      if (projectScrollRef.current) clearInterval(projectScrollRef.current);
      return;
    }

    const scrollProjects = () => {
      if (!hoveredProject && !isAnimating) {
        handleProjectChange('right');
      }
    };

    projectScrollRef.current = setInterval(scrollProjects, 4000);
    return () => {
      if (projectScrollRef.current) clearInterval(projectScrollRef.current);
    };
  }, [hoveredProject, isAnimating, isMobile]);

  useEffect(() => {
    const checkScrollHint = () => {
      if (projectsTitleRef.current) {
        const rect = projectsTitleRef.current.getBoundingClientRect();
        const isTitleBelowScreen = rect.top >= window.innerHeight;
        setShowScrollHint(isTitleBelowScreen);
      } else if (window.scrollY === 0) {
        setShowScrollHint(true);
      }
    };

    checkScrollHint();
    window.addEventListener('scroll', checkScrollHint, { passive: true });
    window.addEventListener('resize', checkScrollHint);

    return () => {
      window.removeEventListener('scroll', checkScrollHint);
      window.removeEventListener('resize', checkScrollHint);
    };
  }, []);

  const handleProjectChange = (direction: 'left' | 'right') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentProject((prev) => {
      if (direction === 'right') {
        return (prev + 1) % projects.length;
      }
      return prev === 0 ? projects.length - 1 : prev - 1;
    });
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleProjectClick = () => {
    window.open(projects[currentProject].ref, '_blank');
  };

  const getProjectStyle = (index: number, isMobile: boolean) => {
    const diff = index - currentProject;
    const absPos = ((diff % projects.length) + projects.length) % projects.length;

    const mainTranslateX = isMobile ? 180 : 280;
    const mainTranslateZ = isMobile ? -100 : -200;
    const mainRotate = isMobile ? -35 : -45;
    
    const sideTranslateX = isMobile ? 240 : 400;
    const sideTranslateZ = isMobile ? -200 : -350;
    const sideRotate = isMobile ? -45 : -55;

    if (absPos === 0) {
      return {
        transform: 'translateX(0) translateZ(0) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 30,
      };
    } else if (absPos === 1 || absPos === projects.length - 1) {
      const isRight = absPos === 1;
      return {
        transform: `translateX(${isRight ? mainTranslateX : -mainTranslateX}px) translateZ(${mainTranslateZ}px) rotateY(${isRight ? mainRotate : -mainRotate}deg) scale(0.8)`,
        opacity: 0.6,
        zIndex: 20,
      };
    } else if (absPos === 2 || absPos === projects.length - 2) {
      const isRight = absPos === 2;
      return {
        transform: `translateX(${isRight ? sideTranslateX : -sideTranslateX}px) translateZ(${sideTranslateZ}px) rotateY(${isRight ? sideRotate : -sideRotate}deg) scale(0.6)`,
        opacity: 0.3,
        zIndex: 10,
      };
    }
    return {
      transform: 'translateX(0) translateZ(-500px) scale(0)',
      opacity: 0,
      zIndex: 0,
    };
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleProjectChange('right'),
    onSwipedRight: () => handleProjectChange('left'),
    trackMouse: false
  });

  const handleTreadmillTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragCurrent(e.touches[0].clientX);
    setDragOffset(0);
    setOpenPopover(null);
  };

  const handleTreadmillTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || !isDragging) return;
    e.preventDefault();
    const currentX = e.touches[0].clientX;
    setDragCurrent(currentX);
    
    const offset = currentX - dragStart;
    const techWidth = 128;
    const totalWidth = technologies.length * techWidth;
    const maxPosition = 0;
    const minPosition = -totalWidth;
    
    const limitedOffset = Math.max(
      minPosition - treadmillPosition,
      Math.min(maxPosition - treadmillPosition, offset)
    );
    
    setDragOffset(limitedOffset);
  };

  const handleTreadmillTouchEnd = () => {
    if (!isMobile || !isDragging) return;
    setIsDragging(false);
    
    const sensitivity = 0.8;
    
    if (Math.abs(dragOffset) > 10) {
      let newPosition = treadmillPosition + (dragOffset * sensitivity);
      
      const techWidth = 128;
      const totalWidth = technologies.length * techWidth;
      const maxPosition = 0;
      const minPosition = -totalWidth;
      
      newPosition = Math.max(minPosition, Math.min(maxPosition, newPosition));
      
      setTreadmillPosition(newPosition);
    }
    
    setDragStart(0);
    setDragCurrent(0);
    setDragOffset(0);
  };

  const handleTreadmillMouseDown = (e: React.MouseEvent) => {
    if (!isMobile) return;
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragCurrent(e.clientX);
    setDragOffset(0);
    setOpenPopover(null);
  };

  const handleTreadmillMouseMove = (e: React.MouseEvent) => {
    if (!isMobile || !isDragging) return;
    const currentX = e.clientX;
    setDragCurrent(currentX);
    
    const offset = currentX - dragStart;
    const techWidth = 128;
    const totalWidth = technologies.length * techWidth;
    const maxPosition = 0;
    const minPosition = -totalWidth;
    
    const limitedOffset = Math.max(
      minPosition - treadmillPosition,
      Math.min(maxPosition - treadmillPosition, offset)
    );
    
    setDragOffset(limitedOffset);
  };

  const handleTreadmillMouseUp = () => {
    if (!isMobile || !isDragging) return;
    setIsDragging(false);
    
    const sensitivity = 0.8;
    
    if (Math.abs(dragOffset) > 10) {
      let newPosition = treadmillPosition + (dragOffset * sensitivity);
      
      const techWidth = 128;
      const totalWidth = technologies.length * techWidth;
      const maxPosition = 0;
      const minPosition = -totalWidth;
      
      newPosition = Math.max(minPosition, Math.min(maxPosition, newPosition));
      
      setTreadmillPosition(newPosition);
    }
    
    setDragStart(0);
    setDragCurrent(0);
    setDragOffset(0);
  };

  return (
    <Tooltip.Provider>
      <div className="min-h-screen bg-black text-white">

        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
          <div className="max-w-7xl mx-auto px-4 pt-16 md:pt-20 sm:px-6 lg:px-8">
            
            <section className="text-center md:mb-24 h-auto md:h-[28rem] flex flex-col justify-center items-center">
              <h1 className="heading-safe text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                Thiago José Fagundes Saquette
              </h1>
              <h2 className="heading-safe text-2xl sm:text-3xl text-gray-300 mt-8 mb-1">Desenvolvedor FullStack</h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                5 anos desenvolvendo com paixão
              </p>
            </section>

            <section className="pb-64 md:pb-80">
              <h3 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-200">Conhecimento em</h3>
              
              {isMobile && (
                <div className="text-center mb-2 mt-2">
                  <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                    <span>←</span>
                    <span>Arraste para explorar</span>
                    <span>→</span>
                  </p>
                </div>
              )}

              <div className="[mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] overflow-hidden">
                {isMobile ? (
                  <div
                    ref={treadmillRef}
                    className="flex transition-transform duration-300 ease-out"
                    style={{ 
                      transform: `translateX(${treadmillPosition + dragOffset}px)`,
                      cursor: isDragging ? 'grabbing' : 'grab'
                    }}
                    onTouchStart={handleTreadmillTouchStart}
                    onTouchMove={handleTreadmillTouchMove}
                    onTouchEnd={handleTreadmillTouchEnd}
                    onMouseDown={handleTreadmillMouseDown}
                    onMouseMove={handleTreadmillMouseMove}
                    onMouseUp={handleTreadmillMouseUp}
                    onMouseLeave={handleTreadmillMouseUp}
                  >
                    {[...technologies, ...technologies].map((tech, index) => {
                      const key = `${tech.name}-${index}`;
                      
                      const triggerDiv = (
                        <div className="relative inline-block align-top group">
                          <div className="w-24 h-24 bg-gray-800 rounded-xl p-4 flex items-center justify-center cursor-pointer transition-all hover:scale-125 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-500/20">
                            <img
                              src={tech.img}
                              alt={tech.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      );

                      return (
                        <div className="px-4 pt-4 pb-10" key={key}>
                          <Popover.Root 
                            open={openPopover === key}
                            onOpenChange={(open) => {
                              if (!isDragging) {
                                setOpenPopover(open ? key : null);
                              }
                            }}
                          >
                            <Popover.Trigger asChild>{triggerDiv}</Popover.Trigger>
                            <Popover.Portal>
                              <Popover.Content
                                side="top"
                                align="center"
                                sideOffset={8}
                                className="z-50 px-4 py-2 bg-gray-900 rounded-lg shadow-xl border border-gray-600 outline-none"
                              >
                                <p className="text-sm font-semibold text-gray-200">{tech.name}</p>
                                <p className="text-xs text-gray-400 max-w-xs">{tech.description}</p>
                                <a
                                  href={tech.ref}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-blue-400 hover:underline mt-2 block"
                                >
                                  Acesse o link
                                </a>
                                <Popover.Arrow
                                  className="fill-gray-900"
                                  style={{ stroke: 'rgb(75 85 99)', strokeWidth: 1 }}
                                />
                              </Popover.Content>
                            </Popover.Portal>
                          </Popover.Root>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <Marquee
                    pauseOnHover={true}
                    speed={50}
                    gradient={false}
                  >
                    {technologies.map((tech, index) => {
                      const key = `${tech.name}-${index}`;
                      
                      const triggerDiv = (
                        <div
                          className="relative inline-block align-top group"
                          onClick={() => window.open(tech.ref, '_blank')}
                        >
                          <div className="w-24 h-24 bg-gray-800 rounded-xl p-4 flex items-center justify-center cursor-pointer transition-all hover:scale-125 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-500/20">
                            <img
                              src={tech.img}
                              alt={tech.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      );

                      return (
                        <div className="px-4 pt-4 pb-10" key={key}>
                          <Tooltip.Root delayDuration={150}>
                            <Tooltip.Trigger asChild>{triggerDiv}</Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                side="top"
                                align="center"
                                sideOffset={8}
                                className="z-50 px-4 py-2 bg-gray-900 rounded-lg shadow-xl border border-gray-600"
                              >
                                <p className="text-sm font-semibold text-gray-200">{tech.name}</p>
                                <p className="text-xs text-gray-400 max-w-xs">{tech.description}</p>
                                <Tooltip.Arrow
                                  className="fill-gray-900"
                                  style={{ stroke: 'rgb(75 85 99)', strokeWidth: 1 }}
                                />
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </div>
                      );
                    })}
                  </Marquee>
                )}
              </div>
            </section>
            
          </div>
        </div>
        

        <div className="bg-black -mt-80 md:-mt-96">
          <div className="max-w-7xl mx-auto px-4 pb-0 sm:px-6 lg:px-8">

            <section ref={projectsSectionRef} className=" pt-48 md:pt-64">
              <h3 ref={projectsTitleRef} className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-200">
                Projetos
              </h3>
              
              <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
                
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-10">
                  <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                    <span>↓</span>
                    <span>Toque para ver detalhes</span>
                  </p>
                </div>

                <div
                  {...swipeHandlers}
                  className="relative w-full h-full flex items-center justify-center overflow-hidden md:overflow-visible"
                  style={{ perspective: '1500px', marginTop: '2px' }}
                >
                  {projects.map((project, index) => {
                    const style = getProjectStyle(index, isMobile);
                    const diff = index - currentProject;
                    const absPos = ((diff % projects.length) + projects.length) % projects.length;
                    return (
                      <div
                        key={index}
                        className="absolute transition-all duration-700 ease-out cursor-pointer group"
                        style={{
                          ...style,
                          transformStyle: 'preserve-3d',
                        }}
                        onMouseEnter={!isMobile ? () => index === currentProject && setHoveredProject(true) : undefined}
                        onMouseLeave={!isMobile ? () => index === currentProject && setHoveredProject(false) : undefined}
                        onClick={() => {
                          if (index === currentProject) {
                            handleProjectClick();
                            return;
                          }
                          
                          setHoveredProject(true); 

                          if (absPos === 1) {
                            handleProjectChange('right');
                            return;
                          }
                          if (absPos === projects.length - 1) {
                            handleProjectChange('left');
                            return;
                          }
                        }}
                      >
                        <div className="w-64 h-80 md:w-80 md:h-96 bg-gray-900 rounded-2xl shadow-2xl border-4 border-gray-700 relative">
                          <div className="w-full h-full rounded-xl border-2 border-gray-700 overflow-hidden">
                            <img
                              src={project.img}
                              alt={project.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {index === currentProject && (
                            <div className={`absolute inset-0 rounded-xl bg-black/80 flex flex-col items-center justify-center p-4 md:p-6 backdrop-blur-sm 
                                            transition-opacity duration-300 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                              <h4 className="text-xl md:text-xl font-bold mb-3 text-gray-200 text-center">
                                {project.name}
                              </h4>
                              <p className="text-gray-300 text-center text-xs md:text-base">
                                {project.description}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setHoveredProject(false); 
                      setCurrentProject(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentProject
                        ? 'bg-gray-200 w-8'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </section>
            
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 [mask-image:linear-gradient(to_top,black_70%,transparent_100%)]">
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 sm:px-6 lg:px-8">
            
            <section className="text-center">
              <h3 className="text-4xl sm:text-5xl font-bold mb-12 mt-40 text-gray-200">Contato</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <button
                  onClick={() => window.open('https://www.linkedin.com/in/saquette/', '_blank')}
                  className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20 group"
                >
                  <Linkedin className="w-8 h-8 text-blue-400 mb-3 group-hover:text-blue-300 transition-colors" />
                  <span className="text-gray-200 font-medium">LinkedIn</span>
                </button>

                <button
                  onClick={() => window.open('https://github.com/saquettepj', '_blank')}
                  className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20 group"
                >
                  <Github className="w-8 h-8 text-gray-300 mb-3 group-hover:text-white transition-colors" />
                  <span className="text-gray-200 font-medium">GitHub</span>
                </button>

                <button
                  onClick={() => window.open('mailto:thigo.saquettepj@gmail.com?subject=Contato%20via%20Portfolio', '_blank')}
                  className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20 group"
                >
                  <Mail className="w-8 h-8 text-red-400 mb-3 group-hover:text-red-300 transition-colors" />
                  <span className="text-gray-200 font-medium">Gmail</span>
                </button>

                <button
                  onClick={() => window.open('https://wa.me/5541992473450?text=Olá%20Thiago!%20Vim%20através%20do%20seu%20portfolio.', '_blank')}
                  className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20 group"
                >
                  <MessageCircle className="w-8 h-8 text-green-400 mb-3 group-hover:text-green-300 transition-colors" />
                  <span className="text-gray-200 font-medium">WhatsApp</span>
                </button>
              </div>
            </section>
            
          </div>
        </div>

        {showScrollHint && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex flex-col items-center text-gray-400">
              <span className="text-sm mb-2">Role para ver mais</span>
              <ChevronDown className="w-6 h-6 scroll-hint" />
            </div>
          </div>
        )}

      </div>
    </Tooltip.Provider>
  );
}