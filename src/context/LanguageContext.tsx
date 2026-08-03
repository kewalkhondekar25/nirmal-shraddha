import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, Translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  langLabels: Record<Language, { label: string; nativeName: string; flag: string }>;
}

const langLabels: Record<Language, { label: string; nativeName: string; flag: string }> = {
  en: { label: 'English', nativeName: 'English', flag: '🇬🇧' },
  mr: { label: 'Marathi', nativeName: 'मराठी', flag: '🚩' },
  hi: { label: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('nirmal_shraddha_lang');
    if (saved === 'mr' || saved === 'hi' || saved === 'en') {
      return saved;
    }
    return 'mr'; // Default to Marathi given the local region & Khandoba Malhar focus
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('nirmal_shraddha_lang', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
    langLabels,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
