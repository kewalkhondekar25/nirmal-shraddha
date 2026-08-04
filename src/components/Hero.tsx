import React, { useState, useEffect } from 'react';
import { Sparkles, Flower2, Clock, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, PhoneCall, MessageSquare } from 'lucide-react';
import { FRAGRANCES } from '../data/fragrances';
import { FragranceVariant } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onExploreCatalog: () => void;
  onOpenQuiz: () => void;
  onOpenFlagship: () => void;
  onSelectVariant?: (variant: FragranceVariant) => void;
  onOpenInquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCatalog,
  onOpenQuiz,
  onOpenFlagship,
  onSelectVariant,
  onOpenInquiry
}) => {
  const { t } = useLanguage();
  const [activeBoxIndex, setActiveBoxIndex] = useState(0);

  const currentVariant = FRAGRANCES[activeBoxIndex];

  // Auto cycle through boxes continuously every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBoxIndex((prev) => (prev + 1) % FRAGRANCES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleBoxSelect = (index: number) => {
    setActiveBoxIndex(index);
  };

  const handlePrev = () => {
    setActiveBoxIndex((prev) => (prev - 1 + FRAGRANCES.length) % FRAGRANCES.length);
  };

  const handleNext = () => {
    setActiveBoxIndex((prev) => (prev + 1) % FRAGRANCES.length);
  };

  const handleInspectCurrent = () => {
    if (onSelectVariant) {
      onSelectVariant(currentVariant);
    } else {
      onOpenFlagship();
    }
  };

  // Dynamic Theme Colors per Product Box
  const getBoxTheme = (themeName: string) => {
    switch (themeName) {
      case 'turmeric-gold':
        return {
          glow: 'from-amber-500/30 via-yellow-500/20 to-amber-950/60',
          border: 'border-amber-400',
          badgeBg: 'bg-amber-400 text-slate-950',
          accentText: 'text-amber-300',
        };
      case 'rose-pink':
        return {
          glow: 'from-rose-500/30 via-pink-500/20 to-rose-950/60',
          border: 'border-pink-400',
          badgeBg: 'bg-pink-400 text-slate-950',
          accentText: 'text-pink-300',
        };
      case 'sky-blue':
        return {
          glow: 'from-sky-500/30 via-blue-500/20 to-sky-950/60',
          border: 'border-sky-400',
          badgeBg: 'bg-sky-400 text-slate-950',
          accentText: 'text-sky-300',
        };
      case 'slate-gray':
        return {
          glow: 'from-slate-500/30 via-slate-700/20 to-black/80',
          border: 'border-slate-300',
          badgeBg: 'bg-slate-300 text-slate-950',
          accentText: 'text-slate-200',
        };
      case 'saffron-red':
        return {
          glow: 'from-red-500/30 via-rose-500/20 to-red-950/60',
          border: 'border-red-400',
          badgeBg: 'bg-red-500 text-white',
          accentText: 'text-red-300',
        };
      default:
        return {
          glow: 'from-amber-500/30 via-yellow-500/20 to-amber-950/60',
          border: 'border-amber-400',
          badgeBg: 'bg-amber-400 text-slate-950',
          accentText: 'text-amber-300',
        };
    }
  };

  const theme = getBoxTheme(currentVariant.boxColorTheme || 'turmeric-gold');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#22120B] via-[#2D1A10] to-[#180B06] text-white pt-8 pb-16 sm:pt-12 sm:pb-20 border-b border-amber-500/20 w-full max-w-full">
      
      {/* Traditional Indian Mandala Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#EAB308_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Radiant Dynamic Glow Behind Hero Card */}
      <div className={`absolute top-1/3 right-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-gradient-to-br ${theme.glow} rounded-full blur-3xl pointer-events-none transition-all duration-1000`}></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 space-y-10 w-full overflow-hidden">
        
        {/* Main Hero 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Identity & Value Props */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <Flower2 className="w-4 h-4 text-amber-400 animate-spin-slow shrink-0" />
              <span>{t.heroTagline}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="font-marathi font-bold">{t.brandName}</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              {t.heroTitle1}{' '}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400 bg-clip-text text-transparent block mt-1">
                {t.heroTitleHighlight}
              </span>
            </h1>

            {/* Subhead Quote from packaging */}
            <div className="p-4 rounded-2xl bg-[#2A160C]/90 border border-amber-500/30 font-marathi text-amber-200 text-sm sm:text-base leading-relaxed shadow-inner">
              {t.heroQuote}
            </div>

            {/* Localized Description */}
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              {t.heroDescription}
            </p>

            {/* Key Quality Guarantees Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#2A160C]/80 border border-amber-500/20 text-left">
                <Flower2 className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">{t.recycledFlowers}</div>
                  <div className="text-[10px] text-amber-300/80">100% Upcycled</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#2A160C]/80 border border-amber-500/20 text-left">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">{t.charcoalFree}</div>
                  <div className="text-[10px] text-amber-300/80">Zero Soot Smoke</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#2A160C]/80 border border-amber-500/20 text-left">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">{t.burnTimeGuarantee}</div>
                  <div className="text-[10px] text-amber-300/80">60 Mins Stick</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#2A160C]/80 border border-amber-500/20 text-left">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">{t.depFree}</div>
                  <div className="text-[10px] text-amber-300/80">DEP Free Pure</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onExploreCatalog}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>{t.heroShopNow}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenQuiz}
                className="px-5 py-3.5 rounded-full bg-[#2A160C]/90 border border-amber-400/50 text-amber-200 font-semibold text-xs sm:text-sm hover:bg-amber-400/20 hover:text-white transition-all flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.scentFinder}</span>
              </button>

              <a
                href="https://wa.me/917304071999?text=Hello%20Nirmal%20Shraddha%2C%20I%20want%20to%20know%20more%20about%20your%20charcoal-free%20incense%20boxes."
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="px-4 py-3.5 rounded-full bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Right Column: ACTUAL PRODUCT BOX SHOWCASE (Interactive First Screen UI) */}
          <div
            className="lg:col-span-6 relative"
          >
            
            {/* Box Display Frame with Golden Border */}
            <div className={`relative rounded-3xl p-3 bg-gradient-to-br from-amber-400 via-amber-600 to-yellow-500 shadow-2xl shadow-amber-500/30 border-2 ${theme.border} transition-all duration-700`}>
              
              <div 
                onClick={handleInspectCurrent}
                className="rounded-2xl overflow-hidden bg-slate-950 relative aspect-[4/3] sm:aspect-[16/11] group cursor-pointer"
                title="Click to view packaging box details"
              >
                
                {/* High-Resolution Actual Product Photo */}
                <img
                  src={currentVariant.image}
                  alt={currentVariant.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30"></div>

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <div className="bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/40 text-amber-300 text-xs font-bold font-marathi flex items-center gap-1.5 shadow">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{currentVariant.marathiName}</span>
                  </div>

                  <span className={`px-3 py-0.5 rounded-full font-bold text-[10px] uppercase shadow ${theme.badgeBg}`}>
                    Box #{activeBoxIndex + 1} of 6
                  </span>
                </div>

                {/* Prev / Next Navigation Arrows on Image */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-amber-300 border border-amber-400/40 hover:bg-amber-400 hover:text-slate-950 transition-all opacity-80 hover:opacity-100 shadow"
                  aria-label="Previous Product Box"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 text-amber-300 border border-amber-400/40 hover:bg-amber-400 hover:text-slate-950 transition-all opacity-80 hover:opacity-100 shadow"
                  aria-label="Next Product Box"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>



              </div>

            </div>

            {/* Quick 6-Box Thumbnail Selector Bar on First Screen */}
            <div className="mt-4 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-amber-300/80 font-medium px-1">
                <span>Select Packaging Box to Preview:</span>
                <span className="font-serif text-amber-400 font-bold">{activeBoxIndex + 1} / 6</span>
              </div>

              <div className="grid grid-cols-6 gap-1.5">
                {FRAGRANCES.map((variant, index) => {
                  const isSelected = index === activeBoxIndex;
                  return (
                    <button
                      key={variant.id}
                      onClick={() => handleBoxSelect(index)}
                      className={`relative rounded-xl overflow-hidden aspect-square border transition-all duration-300 ${
                        isSelected
                          ? 'border-amber-400 ring-2 ring-amber-300 scale-105 shadow-lg shadow-amber-500/30'
                          : 'border-amber-500/20 opacity-70 hover:opacity-100 hover:border-amber-400/50'
                      }`}
                      title={`${variant.name} (${variant.marathiName})`}
                    >
                      <img
                        src={variant.image}
                        alt={variant.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-amber-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 fill-slate-950" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
