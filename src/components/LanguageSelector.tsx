import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  variant?: 'header' | 'footer' | 'compact';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'header' }) => {
  const { language, setLanguage, langLabels } = useLanguage();

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-1 bg-indigo-950/80 p-1 rounded-full border border-amber-500/30 text-xs">
        {(Object.keys(langLabels) as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${
              language === lang
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-amber-200/80 hover:text-white hover:bg-amber-500/10'
            }`}
          >
            <span className="mr-1">{langLabels[lang].flag}</span>
            <span>{langLabels[lang].nativeName}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 bg-indigo-950/90 p-0.5 sm:p-1 rounded-full border border-amber-400/40 text-[10px] sm:text-xs shadow-md shrink-0">
      <div className="pl-1.5 pr-0.5 text-amber-300 hidden xs:flex items-center gap-1">
        <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </div>
      {(Object.keys(langLabels) as Language[]).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold transition-all flex items-center gap-0.5 sm:gap-1 shrink-0 ${
            language === lang
              ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 shadow-md font-extrabold'
              : 'text-amber-200/80 hover:text-white hover:bg-amber-400/20'
          }`}
        >
          <span>{langLabels[lang].flag}</span>
          <span>{langLabels[lang].nativeName}</span>
        </button>
      ))}
    </div>
  );
};
