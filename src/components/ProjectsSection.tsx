import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'design' | 'backend';

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "LingoRingo",
    description: "Application web pour l'apprentissage des langues avec des jeux et des quiz interactifs.",
    category: "web",
    image: "https://raw.githubusercontent.com/Eikichi370/LingoRingo/main/public/preview.png",
    technologies: ["Angular", "Spring Boot", "MariaDB"],
    githubUrl: "https://github.com/Eikichi370/LingoRingo"
  },
  {
    id: 2,
    title: "ReserVite",
    description: "Plateforme de réservation en ligne de chambres d'hôtel à thème.",
    category: "web",
    image: "https://raw.githubusercontent.com/Eikichi370/ReserVite/main/public/preview.png",
    technologies: ["ASP.NET", "C#", "SQL Server"],
    githubUrl: "https://github.com/Eikichi370/ReserVite"
  },
  {
    id: 3,
    title: "app_vinylsParadise",
    description: "Application mobile pour collectionner, acheter et vendre des vinyles.",
    category: "mobile",
    image: "/images/vinylparadise.png",
    technologies: ["Kotlin", "Android"],
    githubUrl: "https://github.com/Eikichi370/app_vinylsParadise"
  },
  {
    id: 4,
    title: "API-VinylParadise",
    description: "API RESTful pour gérer les données de l'application Vinyls Paradise.",
    category: "backend",
    image: "/images/api_vinylparadise.png",
    technologies: ["Spring Boot", "Java", "MariaDB"],
    githubUrl: "https://github.com/Eikichi370/API-VinylParadise"
  },
  {
    id: 5,
    title: "Animix",
    description: "Plateforme de streaming d'animes. Backend en PHP, frontend en HTML/CSS.",
    category: "web",
    image: "/images/animix.png",
    technologies: ["PHP", "HTML", "CSS"],
    githubUrl: "#"
  }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const { t } = useTranslation();
  
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);
    
  const categories: { value: ProjectCategory, label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Apps' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'design', label: 'Design' },
    { value: 'backend', label: 'Backend' }
  ];
  
  return (
    <section id="projects" className="py-24 relative bg-lol-darkest">
      {/* Ornamental corners */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-lol-gold-dark opacity-60"></div>
      <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-lol-gold-dark opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-lol-gold-dark opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-lol-gold-dark opacity-60"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('projects.featured')}</h2>
        
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-5 py-2 m-1 rounded-md font-display transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-lol-gold text-lol-darkest'
                  : 'bg-lol-dark text-foreground hover:bg-lol-gold/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card group">
              {/* Project Image */}
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Project Content */}
              <div className="project-card-content">
                <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-lol-darker text-sm px-3 py-1 rounded-full border border-lol-gold-dark/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex space-x-4 mt-4">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      className="flex items-center text-lol-gold hover:text-lol-gold-light transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-lol-gold hover:text-lol-gold-light transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
