import { CircleUser, Star, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('about.title')}</h2>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Profile column */}
          <div className="md:col-span-1">
            <div className="myst-border p-6 bg-lol-dark rounded-lg">
              <div className="rounded-full w-48 h-48 mx-auto overflow-hidden border-2 border-lol-gold-dark p-1 mb-6">
                <img
                  src="/images/profil.png"
                  alt="Photo de profil"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-2 text-center">{t('hero.title')}</h3>
              <p className="text-center text-muted-foreground mb-4">{t('about.role')}</p>
              
              <div className="flex justify-center space-x-4 mb-6">
                <a href="#" className="text-foreground hover:text-lol-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="#" className="text-foreground hover:text-lol-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </a>
              </div>
              {/* Bouton de téléchargement du CV */}
              <a
                href="/cv_youssef_ayad.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="arcane-button w-full inline-block text-center mb-4"
                download
              >
                Télécharger mon CV
              </a>
              <div className="border-t border-lol-gold-dark/50 pt-4">
                <div className="flex items-center mb-2">
                  <Star className="text-lol-gold mr-2" size={18} />
                  <span>{t('about.experience')}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Briefcase className="text-lol-gold mr-2" size={18} />
                  <span>{t('about.position')}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-lol-gold mr-2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{t('about.location')}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio column */}
          <div className="md:col-span-2">
            <div className="myst-border p-6 bg-lol-dark rounded-lg h-full">
              <h3 className="text-2xl font-display font-bold mb-6">{t('about.journey.title')}</h3>
              
              <p className="mb-6 leading-relaxed">
                {t('about.journey.description1')}
              </p>
              
              <p className="mb-6 leading-relaxed">
                {t('about.journey.description2')}
              </p>
              
              <h4 className="text-xl font-display text-lol-gold-light mb-4">{t('about.expertise.title')}</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-lol-darker p-4 rounded-lg border border-lol-gold-dark/30">
                  <h5 className="font-display text-lol-gold mb-2">{t('about.expertise.languages.title')}</h5>
                  <p className="text-muted-foreground">{t('about.expertise.languages.list')}</p>
                </div>
                
                <div className="bg-lol-darker p-4 rounded-lg border border-lol-gold-dark/30">
                  <h5 className="font-display text-lol-gold mb-2">{t('about.expertise.frontend.title')}</h5>
                  <p className="text-muted-foreground">{t('about.expertise.frontend.list')}</p>
                </div>
                
                <div className="bg-lol-darker p-4 rounded-lg border border-lol-gold-dark/30">
                  <h5 className="font-display text-lol-gold mb-2">{t('about.expertise.backend.title')}</h5>
                  <p className="text-muted-foreground">{t('about.expertise.backend.list')}</p>
                </div>
                
                <div className="bg-lol-darker p-4 rounded-lg border border-lol-gold-dark/30">
                  <h5 className="font-display text-lol-gold mb-2">{t('about.expertise.mobile.title')}</h5>
                  <p className="text-muted-foreground">{t('about.expertise.mobile.list')}</p>
                </div>
              </div>
              
              <a href="#contact" className="arcane-button inline-block">
                <span>{t('about.cta')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
