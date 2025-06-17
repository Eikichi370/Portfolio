import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-lol-darkest/80 via-lol-darker/60 to-lol-darkest/90 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-20">
        {/* <div className="absolute top-[20%] left-[10%] w-24 h-24 border border-lol-gold/20 rounded-full animate-pulse-glow"></div> */}
        <div className="absolute bottom-[15%] right-[15%] w-32 h-32 border border-lol-gold/10 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] right-[20%] w-16 h-16 border-2 border-lol-gold/30 rounded-lg animate-float" style={{ animationDelay: '1s', transform: 'rotate(45deg)' }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-30 text-center">
        <h1 className="font-runic text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-pulse-glow">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-lol-gold-light via-lol-gold to-lol-gold-dark">
            {t('hero.title')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto mb-12">
          {t('hero.subtitle')}
        </p>
        
        <a 
          href="#projects" 
          className="arcane-button group inline-flex items-center"
        >
          <span>{t('hero.cta')}</span>
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
        </a>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-lol-gold/50 flex items-start justify-center">
          <div className="w-1 h-2 bg-lol-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
