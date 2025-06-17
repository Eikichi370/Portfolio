import { Star, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-lol-darkest pt-16 pb-8">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lol-gold-dark to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-8 left-[10%] w-16 h-16 border border-lol-gold/10 opacity-40 rounded-full animate-rotate-slow"></div>
      <div className="absolute bottom-16 right-[5%] w-12 h-12 border border-lol-gold/5 opacity-30 rounded-lg animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-3xl font-runic font-bold text-lol-gold">YA</a>
            <p className="text-muted-foreground mt-2 max-w-sm">
              {t('footer.slogan')}
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="#home" className="text-foreground hover:text-lol-gold transition-colors">{t('footer.nav.home')}</a>
            <a href="#about" className="text-foreground hover:text-lol-gold transition-colors">{t('footer.nav.about')}</a>
            <a href="#projects" className="text-foreground hover:text-lol-gold transition-colors">{t('footer.nav.projects')}</a>
            <a href="#skills" className="text-foreground hover:text-lol-gold transition-colors">{t('footer.nav.skills')}</a>
            <a href="#contact" className="text-foreground hover:text-lol-gold transition-colors">{t('footer.nav.contact')}</a>
          </nav>
        </div>
        
        <div className="border-t border-lol-gold-dark/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-0">
              {t('footer.copyright', { year })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
