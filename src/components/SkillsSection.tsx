import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

const SkillsSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories: SkillCategory[] = [
    {
      id: 'all',
      name: t('skills.categories.all'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers">
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
          <path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 12.5"/>
          <path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 17.5"/>
        </svg>
      ),
    },
    {
      id: 'frontend',
      name: t('skills.categories.frontend'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
          <line x1="3" x2="21" y1="9" y2="9"/>
          <line x1="9" x2="9" y1="21" y2="9"/>
        </svg>
      ),
    },
    {
      id: 'backend',
      name: t('skills.categories.backend'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server">
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
          <line x1="6" x2="6.01" y1="6" y2="6"/>
          <line x1="6" x2="6.01" y1="18" y2="18"/>
        </svg>
      ),
    },
    {
      id: 'mobile',
      name: t('skills.categories.mobile'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
          <path d="M12 18h.01"/>
        </svg>
      ),
    },
    {
      id: 'tools',
      name: t('skills.categories.tools'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
    },
  ];
  
  const skills: Skill[] = [
    // Frontend
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'React', level: 92, category: 'frontend' },
    { name: 'Vue.js', level: 85, category: 'frontend' },
    { name: 'Angular', level: 80, category: 'frontend' },
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 87, category: 'backend' },
    { name: 'PHP/Laravel', level: 85, category: 'backend' },
    { name: 'Python', level: 80, category: 'backend' },
    { name: 'C#', level: 75, category: 'backend' },
    { name: 'Spring Boot', level: 90, category: 'backend' },
    { name: 'Java EE', level: 65, category: 'backend' },
    { name: 'MariaDB', level: 85, category: 'backend' },
    { name: 'MySQL', level: 85, category: 'backend' },
    
    // Mobile
    { name: 'React Native', level: 89, category: 'mobile' },
    { name: 'Android (Kotlin)', level: 75, category: 'mobile' },
    
    // Tools
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Docker', level: 82, category: 'tools' },
    { name: 'CI/CD', level: 80, category: 'tools' },
    { name: 'AWS', level: 78, category: 'tools' },
    { name: 'Auth0', level: 70, category: 'tools' },
    { name: 'Figma', level: 75, category: 'tools' },
  ];
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);
    
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('skills.title')}</h2>
        
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-lol-gold text-lol-darkest font-medium'
                  : 'bg-lol-dark border border-lol-gold-dark/50 hover:border-lol-gold'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-icon group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-2 text-lol-gold">
                {/* We could replace this with appropriate icons for each skill */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              
              <h3 className="font-medium text-lg mb-2">{skill.name}</h3>
              
              <div className="w-full bg-lol-darker rounded-full h-2.5 mb-2">
                <div 
                  className="bg-gradient-to-r from-lol-gold-dark to-lol-gold h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <span className="text-sm text-muted-foreground">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
