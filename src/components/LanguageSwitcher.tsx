import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="relative"
      title={i18n.language === 'en' ? 'Switch to French' : 'Passer en anglais'}
    >
      <Globe className="h-5 w-5" />
      <span className="absolute -bottom-1 -right-1 text-xs font-bold">
        {i18n.language.toUpperCase()}
      </span>
    </Button>
  );
} 