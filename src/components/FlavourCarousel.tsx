import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Star, Clock, Info, PhoneCall, MessageSquare } from 'lucide-react';
import { FRAGRANCES } from '../data/fragrances';
import { FragranceVariant } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FlavourCarouselProps {
  onSelectVariant: (variant: FragranceVariant) => void;
  onOpenInquiry: () => void;
}

export const FlavourCarousel: React.FC<FlavourCarouselProps> = ({ onSelectVariant, onOpenInquiry }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const total = FRAGRANCES.length;
  const currentVariant = FRAGRANCES[currentIndex];

  // Carousel ALWAYS auto-plays continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Get theme styles dynamically per variant
  const getThemeStyles = (variant: FragranceVariant) => {
    switch (variant.boxColorTheme) {
      case 'turmeric-gold':
        return {
          cardBg: 'from-amber-950/90 via-yellow-950/80 to-slate-950',
          border: 'border-amber-400',
          badgeBg: 'bg-amber-400 text-slate-950',
          accentText: 'text-amber-300',
          ringColor: 'ring-amber-400',
        };
      case 'rose-pink':
        return {
          cardBg: 'from-rose-950/90 via-pink-950/80 to-slate-950',
          border: 'border-pink-400',
          badgeBg: 'bg-pink-400 text-slate-950',
          accentText: 'text-pink-300',
          ringColor: 'ring-pink-400',
        };
      case 'sky-blue':
        return {
          cardBg: 'from-sky-950/90 via-blue-950/80 to-slate-950',
          border: 'border-sky-400',
          badgeBg: 'bg-sky-400 text-slate-950',
          accentText: 'text-sky-300',
          ringColor: 'ring-sky-400',
        };
      case 'slate-gray':
        return {
          cardBg: 'from-slate-900 via-slate-950 to-black',
          border: 'border-slate-400',
          badgeBg: 'bg-slate-300 text-slate-950',
          accentText: 'text-slate-300',
          ringColor: 'ring-slate-400',
        };
      case 'saffron-red':
        return {
          cardBg: 'from-red-950/90 via-rose-950/80 to-slate-950',
          border: 'border-red-400',
          badgeBg: 'bg-red-500 text-white',
          accentText: 'text-red-300',
          ringColor: 'ring-red-400',
        };
      default:
        return {
          cardBg: 'from-amber-950/90 via-amber-900/80 to-slate-950',
          border: 'border-amber-400',
          badgeBg: 'bg-amber-400 text-slate-950',
          accentText: 'text-amber-300',
          ringColor: 'ring-amber-400',
        };
    }
  };

  const currentTheme = getThemeStyles(currentVariant);

  return (
    <section id="carousel" className="py-16 bg-[#21140E] text-white border-b border-amber-500/30 relative overflow-hidden">
      
      {/* Background Mandala Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-amber-500/20 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Packaging Showcase Carousel</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white mt-1">
              Explore All 6 Flavour Boxes
            </h2>
            <p className="font-marathi text-amber-300 text-sm sm:text-base font-semibold">
              निर्मल श्रद्धा ६ सुवासिक फ्लेवर्स — सुगंध व संस्कृती
            </p>
          </div>

          {/* Carousel Control Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/20"
              aria-label="Previous Box"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-serif font-bold text-amber-300 min-w-[45px] text-center">
              {currentIndex + 1} / {total}
            </span>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/20"
              aria-label="Next Box"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Active Card Display (Continuous Auto-Play) */}
        <div
          className={`rounded-3xl bg-gradient-to-br ${currentTheme.cardBg} border-2 ${currentTheme.border} p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-700 relative overflow-hidden`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Box Photo View */}
            <div className="lg:col-span-5 relative">
              <div className={`relative rounded-2xl overflow-hidden border-2 ${currentTheme.border} shadow-2xl bg-slate-950 aspect-[4/3] sm:aspect-[16/11] group`}>
                {currentVariant.image ? (
                  <img
                    src={currentVariant.image}
                    alt={currentVariant.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-amber-600 to-indigo-950 flex items-center justify-center text-white font-bold text-2xl">
                    {currentVariant.name}
                  </div>
                )}

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur px-3 py-1 rounded-full text-amber-300 font-marathi font-bold text-xs border border-amber-400/40">
                  {currentVariant.marathiName}
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur p-2.5 rounded-xl text-center text-amber-300 font-marathi font-bold text-xs border border-amber-400/30">
                  "{currentVariant.marathiSlogan || 'निर्मल श्रद्धा'}"
                </div>
              </div>
            </div>

            {/* Box Information Details */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-3 py-1 rounded-full font-bold text-xs uppercase ${currentTheme.badgeBg}`}>
                    Variant #{currentIndex + 1}
                  </span>
                  {currentVariant.isFlagship && (
                    <span className="bg-amber-400 text-slate-950 px-3 py-1 rounded-full font-black text-xs uppercase shadow flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Flagship Box
                    </span>
                  )}
                  <span className="bg-slate-900 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold border border-amber-400/30 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    1 Hour Burn Guarantee
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight pt-1">
                  {currentVariant.name}
                </h3>
                <p className="font-marathi text-amber-300 text-lg sm:text-xl font-extrabold">
                  {currentVariant.marathiName} • {currentVariant.marathiTagline}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-amber-500/20 space-y-2">
                <p className="text-amber-200 text-xs sm:text-sm italic font-medium">
                  "{currentVariant.tagline}"
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {currentVariant.description}
                </p>
              </div>

              {/* Scent Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-amber-500/20">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Top Note</span>
                  <span className="font-semibold text-white truncate block">{currentVariant.notes.top[0]?.name}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-amber-500/20">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Heart Note</span>
                  <span className="font-semibold text-white truncate block">{currentVariant.notes.heart[0]?.name}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-amber-500/20 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Intensity</span>
                  <div className="flex items-center gap-0.5 text-amber-400 pt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < currentVariant.intensity ? 'fill-amber-400' : 'text-slate-700'}`} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onSelectVariant(currentVariant)}
                  className="px-6 py-3 rounded-2xl bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm hover:bg-amber-300 transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  <span>Inspect Box Details</span>
                </button>

                <a
                  href={`https://wa.me/917304071999?text=Hello%20Nirmal%20Shraddha%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(currentVariant.name)}%20(${encodeURIComponent(currentVariant.marathiName)})%20incense%20box.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-500 transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20"
                >
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>WhatsApp Us</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {FRAGRANCES.map((variant, index) => {
            const isSelected = index === currentIndex;

            return (
              <button
                key={variant.id}
                onClick={() => handleThumbnailClick(index)}
                className={`p-2.5 rounded-2xl text-left transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 shadow-lg scale-105 ring-2 ring-amber-300 font-bold'
                    : 'bg-slate-900/80 text-slate-300 border border-amber-500/20 hover:bg-amber-500/10'
                }`}
              >
                <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0 border border-amber-400/30 bg-slate-950">
                  {variant.image ? (
                    <img
                      src={variant.image}
                      alt={variant.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-amber-500"></div>
                  )}
                </div>
                <div className="truncate text-xs">
                  <div className="font-marathi text-[11px] font-bold truncate">
                    {variant.marathiName}
                  </div>
                  <div className="text-[10px] opacity-80 truncate">
                    {variant.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
