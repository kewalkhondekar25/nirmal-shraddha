import React from 'react';
import { Sparkles, Flower2, Clock, ShieldCheck, ArrowRight, Play } from 'lucide-react';
import heroRitualImg from '../assets/images/hero_incense_ritual_1785612345500.jpg';
import { playTempleBell } from '../utils/audioSynth';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onExploreCatalog: () => void;
  onOpenQuiz: () => void;
  onOpenFlagship: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onOpenQuiz, onOpenFlagship }) => {
  const { t, language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#22120B] via-[#2D1A10] to-[#180B06] text-white pt-10 pb-20 border-b border-amber-500/20">
      {/* Traditional Indian Mandala Background Pattern Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#EAB308_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Radiant Glowing Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Story & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <Flower2 className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>{t.heroTagline}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="font-marathi font-bold">{t.brandName}</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              {t.heroTitle1}{' '}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400 bg-clip-text text-transparent block mt-1">
                {t.heroTitleHighlight}
              </span>
            </h1>

            {/* Subhead Quote from packaging */}
            <div className="p-4 rounded-xl bg-[#2A160C]/80 border border-amber-500/30 font-marathi text-amber-200 text-base sm:text-lg leading-relaxed shadow-inner">
              {t.heroQuote}
            </div>

            {/* Localized Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {t.heroDescription}
            </p>

            {/* Key Feature Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#2A160C]/80 border border-amber-500/20 text-left">
                <Flower2 className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">{t.recycledFlowers}</div>
                  <div className="text-[10px] text-amber-300/80">100% Sacred Flowers</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#2A160C]/80 border border-amber-500/20 text-left">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">{t.charcoalFree}</div>
                  <div className="text-[10px] text-amber-300/80">Zero Soot Smoke</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#2A160C]/80 border border-amber-500/20 text-left">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">{t.burnTimeGuarantee}</div>
                  <div className="text-[10px] text-amber-300/80">60 Mins per Stick</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#2A160C]/80 border border-amber-500/20 text-left">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">{t.depFree}</div>
                  <div className="text-[10px] text-amber-300/80">Natural Binders</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onExploreCatalog}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>{t.heroShopNow}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const carouselElem = document.getElementById('carousel');
                  if (carouselElem) {
                    carouselElem.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3.5 rounded-full bg-[#2A160C]/90 border border-amber-400/50 text-amber-200 font-semibold text-sm hover:bg-amber-400/20 hover:text-white transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Carousel Showcase</span>
              </button>

              <button
                onClick={onOpenFlagship}
                className="px-4 py-3 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-all text-xs font-semibold flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.heroInspectBox}</span>
              </button>

              <button
                onClick={() => {
                  playTempleBell();
                  onOpenQuiz();
                }}
                className="px-4 py-3 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-all text-xs font-semibold flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                {t.heroChimeQuiz}
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Indian Traditional Arch Frame */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-amber-400 via-amber-600 to-yellow-500 shadow-2xl shadow-amber-500/30">
                <div className="rounded-2xl overflow-hidden bg-slate-950 relative aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src={heroRitualImg}
                    alt="Nirmal Shraddha Incense Ritual"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Floating Smoke Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22120B] via-transparent to-transparent opacity-80"></div>

                  {/* Flagship Product Floating Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#22120B]/90 backdrop-blur-md border border-amber-400/40 text-left flex items-center justify-between shadow-xl">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-amber-400 tracking-wider uppercase font-marathi">
                          खंडोबा मल्हार
                        </span>
                        <span className="bg-amber-500/20 text-amber-300 text-[10px] px-2 py-0.5 rounded font-semibold">
                          {t.flagshipBoxBadge}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-white text-sm sm:text-base">
                        {t.flagshipTitle}
                      </h4>
                      <p className="text-[11px] text-slate-300">
                        {t.flagshipTagline}
                      </p>
                    </div>

                    <button
                      onClick={onOpenFlagship}
                      className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold hover:bg-amber-300 transition-colors shrink-0"
                    >
                      {t.viewArtwork}
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-amber-400 text-slate-950 px-3 py-1.5 rounded-full font-bold text-xs shadow-lg flex items-center gap-1.5 border border-amber-200">
                <Sparkles className="w-3.5 h-3.5 text-indigo-950" />
                <span>{t.madeInIndia}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

