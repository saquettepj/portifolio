import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const technologies: Technology[] = [
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    ref: 'https://react.dev/',
    name: 'React',
    description: 'Biblioteca JavaScript para construir interfaces de usuário'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    ref: 'https://www.typescriptlang.org/',
    name: 'TypeScript',
    description: 'JavaScript com tipagem estática'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    ref: 'https://nodejs.org/',
    name: 'Node.js',
    description: 'Runtime JavaScript para servidor'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    ref: 'https://www.python.org/',
    name: 'Python',
    description: 'Linguagem de programação versátil e poderosa'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    ref: 'https://www.postgresql.org/',
    name: 'PostgreSQL',
    description: 'Banco de dados relacional avançado'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    ref: 'https://www.docker.com/',
    name: 'Docker',
    description: 'Plataforma de containerização'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    ref: 'https://git-scm.com/',
    name: 'Git',
    description: 'Sistema de controle de versão'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    ref: 'https://tailwindcss.com/',
    name: 'Tailwind CSS',
    description: 'Framework CSS utility-first'
  }
];

const projects: Project[] = [
  {
    img: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    ref: '#',
    name: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com carrinho e pagamentos'
  },
  {
    img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    ref: '#',
    name: 'Dashboard Analytics',
    description: 'Dashboard para análise de dados em tempo real'
  },
  {
    img: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    ref: '#',
    name: 'Social Network',
    description: 'Rede social com chat e compartilhamento de mídia'
  },
  {
    img: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
    ref: '#',
    name: 'Task Manager',
    description: 'Sistema de gerenciamento de tarefas e projetos'
  }
];

export default function Home() {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [currentProject, setCurrentProject] = useState(1);
  const [hoveredProject, setHoveredProject] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const projectScrollRef = useRef<NodeJS.Timeout | null>(null);
  const techContainerRef = useRef<HTMLDivElement>(null);

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

  const handleTechClick = (index: number) => {
    window.open(technologies[index % technologies.length].ref, '_blank');
  };

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

  const triplicatedTechs = [...technologies, ...technologies, ...technologies];

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <section className="text-center mb-24 pt-12">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            Thiago José Fagundes Saquette
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-300 mb-6">Desenvolvedor FullStack</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            5 anos desenvolvendo com paixão
          </p>
        </section>

        <section className="mb-32">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-200">Tecnologias</h3>
          <div className="relative overflow-hidden py-20">
            <div
              ref={techContainerRef}
              className="flex gap-8 animate-scroll"
              onMouseEnter={() => {
                if (techContainerRef.current) {
                  techContainerRef.current.style.animationPlayState = 'paused';
                }
              }}
              onMouseLeave={() => {
                if (techContainerRef.current) {
                  techContainerRef.current.style.animationPlayState = 'running';
                }
              }}
            >
              {triplicatedTechs.map((tech, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 group"
                  onMouseEnter={() => {
                    setHoveredTech(index);
                    if (techContainerRef.current) {
                      techContainerRef.current.style.animationPlayState = 'paused';
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredTech(null);
                    if (techContainerRef.current) {
                      techContainerRef.current.style.animationPlayState = 'running';
                    }
                  }}
                  onClick={() => handleTechClick(index)}
                >
                  <div className="w-24 h-24 bg-gray-800 rounded-xl p-4 flex items-center justify-center cursor-pointer transition-all hover:scale-125 hover:bg-gray-700 hover:shadow-xl hover:shadow-gray-500/20">
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {hoveredTech === index && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 rounded-lg shadow-xl whitespace-nowrap z-20 border border-gray-600">
                      <p className="text-sm font-semibold text-gray-200">{tech.name}</p>
                      <p className="text-xs text-gray-400 max-w-xs">{tech.description}</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                        <div className="border-8 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-200">Projetos</h3>
          <div className="relative h-[500px] flex items-center justify-center">
            <button
              onClick={() => handleProjectChange('left')}
              className="absolute left-4 z-40 bg-gray-800/90 hover:bg-gray-700 p-4 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1500px' }}>
              {projects.map((project, index) => {
                const style = getProjectStyle(index);
                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-700 ease-out cursor-pointer"
                    style={{
                      ...style,
                      transformStyle: 'preserve-3d',
                    }}
                    onMouseEnter={() => index === currentProject && setHoveredProject(true)}
                    onMouseLeave={() => setHoveredProject(false)}
                    onClick={() => index === currentProject && handleProjectClick()}
                  >
                    <div className="w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-700 relative">
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />

                      {hoveredProject && index === currentProject && (
                        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-6 backdrop-blur-sm">
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

            <button
              onClick={() => handleProjectChange('right')}
              className="absolute right-4 z-40 bg-gray-800/90 hover:bg-gray-700 p-4 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Next project"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
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
  );
}
