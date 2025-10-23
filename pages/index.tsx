import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Marquee from "react-fast-marquee";
import * as Tooltip from '@radix-ui/react-tooltip'; // Substituído

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
  // ... (seu array de technologies completo, sem alterações)
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    ref: 'https://www.python.org/',
    name: 'Python',
    description: 'Linguagem de programação versátil'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    ref: 'https://react.dev/',
    name: 'React',
    description: 'Biblioteca JavaScript para UIs'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    ref: 'https://www.typescriptlang.org/',
    name: 'TypeScript',
    description: 'JavaScript com tipagem estática'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    ref: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    name: 'JavaScript',
    description: 'Linguagem de programação web'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    ref: 'https://nodejs.org/pt',
    name: 'NodeJS',
    description: 'Runtime JavaScript no servidor'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-plain.svg',
    ref: 'https://developer-mozilla-org.translate.goog/en-US/docs/Web/XML/Guides/XML_introduction?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc',
    name: 'XML',
    description: 'Linguagem de marcação extensível'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    ref: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    name: 'HTML',
    description: 'Linguagem de marcação para web'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    ref: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    name: 'CSS',
    description: 'Linguagem de estilização'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    ref: 'https://docs-oracle-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc&_x_tr_hist=true#GUID-4B6624DA-92BA-48C2-B045-D8B71046E81B',
    name: 'SQL',
    description: 'Linguagem de consulta estruturada'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-plain.svg',
    ref: 'https://www.json.org/json-en.html',
    name: 'JSON',
    description: 'Notação de objetos JavaScript'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    ref: 'https://scikit-learn.org/stable/',
    name: 'Scikit-learn',
    description: 'Biblioteca de Machine Learning'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
    ref: 'https://streamlit.io/',
    name: 'Streamlit',
    description: 'Framework para apps de dados'
  },
  {
    img: 'https://cdn.brandfetch.io/idiAAavgWY/w/1188/h/222/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1759344354267',
    ref: 'https://streamlit.io/',
    name: 'Thunkable',
    description: 'Plataforma Low Code'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    ref: 'https://nextjs.org/',
    name: 'NextJS',
    description: 'Framework React (Frame)'
  },
  {
    img: 'https://icon.icepanel.io/Technology/png-shadow-512/Fastify.png',
    ref: 'https://fastify.dev/',
    name: 'Fastify',
    description: 'Framework NodeJS (Frame)'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    ref: 'https://expressjs.com/',
    name: 'Express',
    description: 'Framework NodeJS (Frame)'
  },
  {
    img: 'https://icon.icepanel.io/Technology/svg/Nest.js.svg',
    ref: 'https://expressjs.com/',
    name: 'NestJS',
    description: 'Framework NodeJS (Frame)'
  },
  {
    img: 'https://icon.icepanel.io/Technology/svg/Knex.js.svg',
    ref: 'https://knexjs.org/',
    name: 'Knex',
    description: 'Query Builder SQL (Frame)'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
    ref: 'https://www.prisma.io/',
    name: 'Prisma',
    description: 'ORM para NodeJS & TypeScript'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    ref: 'https://www.prisma.io/',
    name: 'Tailwind',
    description: 'Framework CSS (Frame)'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    ref: 'https://www.postgresql.org/',
    name: 'PostgreSQL',
    description: 'Banco de dados relacional (RDB)'
  },
  {
    img: 'https://cdn.brandfetch.io/id7gN4JouK/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1735286125879',
    ref: 'https://n8n.io/',
    name: 'N8N',
    description: 'Automação de workflows'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    ref: 'https://git-scm.com/',
    name: 'Git',
    description: 'Sistema de controle de versão'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    ref: 'https://www.docker.com/',
    name: 'Docker',
    description: 'Plataforma de containerização'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg',
    ref: 'https://docs.docker.com/compose/',
    name: 'Compose',
    description: 'Orquestração de containers Docker'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    ref: 'https://cloud.google.com/?hl=pt-BR',
    name: 'Google Cloud',
    description: 'Plataforma de nuvem (GCP)'
  },
  {
    img: 'https://icon.icepanel.io/Technology/png-shadow-512/AWS.png',
    ref: 'https://aws.amazon.com/pt/',
    name: 'AWS',
    description: 'Plataforma de nuvem (AWS)'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-plain.svg',
    ref: 'https://cloud.google.com/?hl=pt-BR',
    name: 'Cloud Run',
    description: 'Execução de containers (Serverless)'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    ref: 'https://jestjs.io/',
    name: 'Jest',
    description: 'Framework de testes (Test)'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg',
    ref: 'https://vitest.dev/',
    name: 'Vitest',
    description: 'Framework de testes (Test)'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg',
    ref: 'https://sentry.io/welcome/',
    name: 'Sentry',
    description: 'Monitoramento de erros'
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

  const projects: Project[] = [
    // ... (seu array de projects completo, sem alterações)
    {
      img: `${baseImageUrl}/dj.png`,
      ref: 'https://saquettepj.github.io/DJ-app/',
      name: 'Modificação em plataforma de DJ',
      description: 'Melhoria em plataforma de musica gerada por inteligência artificial.'
    },
    {
      img: `${baseImageUrl}/foursales.png`,
      ref: 'https://www.foursales.com.br/candidatos',
      name: 'FourSales - Desenvolvedor Fullstack',
      description: 'Desenvolvimento frontend com React/Redux, focado em componentes reutilizáveis e UI/UX.'
    },
    {
      img: `${baseImageUrl}/analise.png`,
      ref: 'https://saquettepj.github.io/AI-static-report/',
      name: 'Analise de IA Generativa',
      description: 'Uma analise desenvolvida para empresa parceira, consultoria na aquisição de serviços de IA generativa.'
    },
    {
      img: `${baseImageUrl}/saas.png`,
      ref: 'https://github.com/saquettepj',
      name: 'Sistema Micro-SaaS B2B',
      description: 'Plataforma full-stack para gestão de ordens de serviço e vendas (React, NestJS, GCP).'
    },
    {
      img: `${baseImageUrl}/n8n.png`,
      ref: 'https://github.com/saquettepj',
      name: 'Automações com IA (N8N)',
      description: 'Automação de processos (web scraping, agentes de busca) com N8N e IA para o mercado financeiro.'
    },
    {
      img: `${baseImageUrl}/chat.png`,
      ref: 'https://github.com/saquettepj',
      name: 'Chatbot Agente com IA Generativa',
      description: 'Chat com IA generativa com acesso a banco de dados vetorial e API de busca informações em documentos.'
    },
    {
      img: `${baseImageUrl}/ia.png`,
      ref: 'https://github.com/saquettepj',
      name: 'API para Modelo de IA Preditivo',
      description: 'API em Python para servir modelo de IA treinado para predição de valores contínuos.'
    }
  ];

  useEffect(() => {
    const scrollProjects = () => {
      if (!hoveredProject && !isAnimating) {
        handleProjectChange('right');
      }
    };

    projectScrollRef.current = setInterval(scrollProjects, 4000);
    return () => {
      if (projectScrollRef.current) clearInterval(projectScrollRef.current);
    };
  }, [hoveredProject, isAnimating]);

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

  const getProjectStyle = (index: number) => {
    const diff = index - currentProject;
    const absPos = ((diff % projects.length) + projects.length) % projects.length;

    if (absPos === 0) {
      return {
        transform: 'translateX(0) translateZ(0) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 30,
      };
    } else if (absPos === 1 || absPos === projects.length - 1) {
      const isRight = absPos === 1;
      return {
        transform: `translateX(${isRight ? '280px' : '-280px'}) translateZ(-200px) rotateY(${isRight ? '-45' : '45'}deg) scale(0.8)`,
        opacity: 0.6,
        zIndex: 20,
      };
    } else if (absPos === 2 || absPos === projects.length - 2) {
      const isRight = absPos === 2;
      return {
        transform: `translateX(${isRight ? '400px' : '-400px'}) translateZ(-350px) rotateY(${isRight ? '-55' : '55'}deg) scale(0.6)`,
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

  return (
    // 1. Envolva todo o seu retorno com o Tooltip.Provider
    <Tooltip.Provider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <section className="text-center mb-24 h-[28rem] flex flex-col justify-center items-center">
            <h1 className="heading-safe text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Thiago José Fagundes Saquette
            </h1>
            <h2 className="heading-safe text-2xl sm:text-3xl text-gray-300 mt-8 mb-8">Desenvolvedor FullStack</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              5 anos desenvolvendo com paixão
            </p>
          </section>

          <section className="mb-32">
            <h3 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-200">Conhecimento em</h3>

            {/* Este div aplica a máscara transparente nas bordas */}
            <div className="[mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
              
              <Marquee
                pauseOnHover={true}
                speed={30} // Ajuste a velocidade se necessário
                gradient={false} 
              >
                {technologies.map((tech, index) => {
                  return (
                    // ***** A MUDANÇA ESTÁ AQUI *****
                    // Trocado de py-10 para pt-4 pb-10.
                    // Isso alinha o ícone no topo e dá espaço ABAIXO para a sombra.
                    <div className="px-4 pt-4 pb-10" key={`${tech.name}-${index}`}>
                      <Tooltip.Root delayDuration={150}>
                        <Tooltip.Trigger asChild>
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
                        </Tooltip.Trigger>
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

            </div>
          </section>

          <section ref={projectsSectionRef} className="mb-16">
            <h3 ref={projectsTitleRef} className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-200">
              Projetos
            </h3>
            <div className="relative h-[500px] flex items-center justify-center">

              <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1500px' }}>
                {projects.map((project, index) => {
                  const style = getProjectStyle(index);
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
                      onMouseEnter={() => index === currentProject && setHoveredProject(true)}
                      onMouseLeave={() => index === currentProject && setHoveredProject(false)}
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
                      <div className="w-80 h-96 bg-gray-900 rounded-2xl shadow-2xl border-4 border-gray-700 relative">
                        <div className="w-full h-full rounded-xl border-2 border-gray-700 overflow-hidden">
                          <img
                            src={project.img}
                            alt={project.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {index === currentProject && (
                          <div className="absolute inset-0 rounded-2xl bg-black/80 flex flex-col items-center justify-center p-6 backdrop-blur-sm 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h4 className="text-2xl font-bold mb-3 text-gray-200">
                              {project.name}
                            </h4>
                            <p className="text-gray-300 text-center">
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

          {showScrollHint && (
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
              <div className="flex flex-col items-center text-gray-400">
                <span className="text-sm mb-2">Role para ver mais</span>
                <ChevronDown className="w-6 h-6 scroll-hint" />
              </div>
            </div>
          )}
        </div>
        
        {/* O antigo componente <Tooltip id="tech-tooltip" ... /> foi REMOVIDO daqui */}
      </div>
    </Tooltip.Provider>
  );
}