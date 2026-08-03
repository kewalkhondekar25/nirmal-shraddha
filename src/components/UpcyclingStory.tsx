import React from 'react';
import { Flower2, Waves, HeartHandshake, ShieldCheck, Sparkles, Globe, Heart, Recycle, Leaf, Compass, ArrowRight } from 'lucide-react';
import upcycledFlowersImg from '../assets/images/upcycled_flowers_1785612360709.jpg';
import templeGarlandsImg from '../assets/images/temple_garlands_waste_1785785786612.jpg';
import flowerSortingImg from '../assets/images/flower_sorting_drying_1785785801698.jpg';
import artisanRollingImg from '../assets/images/artisan_incense_rolling_1785785813915.jpg';
import { useLanguage } from '../context/LanguageContext';

interface UpcyclingStoryProps {
  onOpenInquiry?: () => void;
  onExploreCatalog?: () => void;
}

export const UpcyclingStory: React.FC<UpcyclingStoryProps> = ({ onOpenInquiry, onExploreCatalog }) => {
  const { t } = useLanguage();

  const howItWorksSteps = [
    {
      num: '01',
      title: t.howStep1Title,
      desc: t.howStep1Desc,
      icon: Recycle,
      image: templeGarlandsImg,
      caption: 'Collection of sacred temple flower garlands & offerings'
    },
    {
      num: '02',
      title: t.howStep2Title,
      desc: t.howStep2Desc,
      icon: Leaf,
      image: flowerSortingImg,
      caption: 'Sorting, cleaning & natural sun-drying of flower petals'
    },
    {
      num: '03',
      title: t.howStep3Title,
      desc: t.howStep3Desc,
      icon: Sparkles,
      image: artisanRollingImg,
      caption: 'Hand-rolling organic floral powder with natural resins'
    },
    {
      num: '04',
      title: t.howStep4Title,
      desc: t.howStep4Desc,
      icon: Heart,
      image: upcycledFlowersImg,
      caption: 'Eco-conscious packaging & divine, soot-free aroma'
    },
  ];

  const whyChooseUs = [
    { emoji: '♻️', title: t.why1, desc: 'Collected from revered shrines & community poojas before becoming waste.' },
    { emoji: '🌿', title: t.why2, desc: '100% Charcoal-free and DEP-free with zero toxic carbon monoxide.' },
    { emoji: '🌸', title: t.why3, desc: 'Infused with natural flower petals, herbal resins & essential oils.' },
    { emoji: '🕉️', title: t.why4, desc: 'Rooted in ancient Vedic recipes & sacred Maharashtra traditions.' },
    { emoji: '🌎', title: t.why5, desc: 'Prevents thousands of kilograms of flowers from polluting rivers.' },
    { emoji: '❤️', title: t.why6, desc: 'Hand-rolled with devotion by rural women artisans.' },
  ];

  const impactList = [
    t.impactItem1,
    t.impactItem2,
    t.impactItem3,
    t.impactItem4,
    t.impactItem5,
  ];

  return (
    <section id="upcycling" className="py-20 bg-gradient-to-b from-[#191638] via-[#231F46] to-[#191638] text-white border-b border-amber-500/20 relative overflow-hidden">
      
      {/* Background Decorative Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-semibold border border-amber-400/30">
            <Flower2 className="w-4 h-4 text-amber-400" />
            <span>{t.upcyclingBadge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t.upcyclingTitle}
          </h2>
          <p className="font-marathi text-amber-300 text-base sm:text-lg font-medium">
            {t.upcyclingSub}
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.upcyclingDesc}
          </p>
        </div>

        {/* --- OUR STORY & OUR MISSION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl shadow-amber-500/20 group">
              <img
                src={upcycledFlowersImg}
                alt="Upcycled Sacred Temple Flowers"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/30 to-transparent"></div>

              {/* Quote Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#191638]/90 backdrop-blur-md border border-amber-400/30">
                <p className="font-marathi text-amber-200 text-sm leading-relaxed italic">
                  {t.upcyclingQuote}
                </p>
                <div className="text-[11px] text-amber-400 font-bold mt-2 flex items-center gap-1">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Nirmal Shraddha Green Mission</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Mission Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Our Story Block */}
            <div className="p-6 rounded-3xl bg-indigo-950/80 border border-amber-500/30 shadow-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.ourStoryTitle}</span>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {t.ourStoryP1}
              </p>
              <p className="font-serif font-bold text-amber-300 text-base sm:text-lg italic">
                "{t.ourStoryP2}"
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.ourStoryP3}
              </p>
            </div>

            {/* Our Mission Block */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 border border-amber-400/40 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-serif font-extrabold text-xl text-white">
                  {t.ourMissionTitle}: <span className="text-amber-300">{t.ourMissionSub}</span>
                </h3>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {t.ourMissionDesc}
              </p>
            </div>

          </div>

        </div>

        {/* --- HOW IT WORKS (4 STEPS) --- */}
        <div className="space-y-8 pt-4">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-400/30">
              {t.howItWorksBadge}
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-white">
              {t.howItWorksTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="rounded-3xl bg-indigo-950/80 border border-amber-500/30 overflow-hidden hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 group relative flex flex-col justify-between shadow-xl"
                >
                  {/* Step Image Header */}
                  <div className="relative h-44 overflow-hidden border-b border-amber-500/20">
                    <img
                      src={step.image}
                      alt={step.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/20 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black text-xs flex items-center justify-center font-serif shadow-lg">
                      {step.num}
                    </span>
                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-indigo-950/80 backdrop-blur border border-amber-400/40 text-amber-300">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-base text-white group-hover:text-amber-300 transition-colors mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-amber-500/10 text-[11px] text-amber-300/80 font-medium italic flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>{step.caption}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- WHY CHOOSE US? (6 BADGES) --- */}
        <div className="p-8 sm:p-10 rounded-3xl bg-indigo-950/90 border border-amber-500/40 shadow-2xl space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-amber-300">
              {t.whyChooseUsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Pure, charcoal-free, divine incense crafted with reverence for faith and nature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#191638] border border-amber-500/20 hover:border-amber-400/50 transition-all flex items-start gap-3.5"
              >
                <span className="text-2xl shrink-0 p-2 rounded-xl bg-amber-500/10 border border-amber-400/20">
                  {item.emoji}
                </span>
                <div>
                  <h4 className="font-bold text-sm text-white">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- OUR IMPACT & VISION GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Our Impact List */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-gradient-to-br from-indigo-950 via-[#231F46] to-indigo-950 border border-amber-400/30 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400">
                <Globe className="w-6 h-6" />
                <h3 className="font-serif text-2xl font-extrabold text-white">
                  {t.ourImpactTitle}
                </h3>
              </div>
              <p className="font-serif font-semibold text-amber-200 text-sm sm:text-base">
                {t.ourImpactSub}
              </p>

              <div className="space-y-2.5 pt-2">
                {impactList.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-400/20 text-xs sm:text-sm text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-amber-500/20 text-center">
              <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20">
                <div className="font-serif font-extrabold text-2xl text-amber-300">10,000+ kg</div>
                <div className="text-[11px] text-slate-300">Temple Flowers Saved Monthly</div>
              </div>
              <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20">
                <div className="font-serif font-extrabold text-2xl text-amber-300">0% Soot</div>
                <div className="text-[11px] text-slate-300">Clean Air & River Protection</div>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-amber-500/20 via-yellow-500/15 to-amber-600/20 border-2 border-amber-400/40 shadow-2xl flex flex-col justify-between space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold mx-auto lg:mx-0 shadow-lg">
                <Flower2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                {t.ourVisionTitle}
              </h3>
              <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
                "{t.ourVisionDesc}"
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#191638]/80 border border-amber-400/30 text-xs text-amber-300 font-marathi">
              "पुजनानंतरचे निर्माल्य वाचवा, निसर्ग वाचवा. निर्माल्य हे केवळ कचरा नसून देवाचा आशीर्वाद आहे."
            </div>
          </div>

        </div>

        {/* --- CALL TO ACTION BANNER --- */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 shadow-2xl text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="font-serif text-2xl sm:text-4xl font-extrabold tracking-tight">
              {t.ctaTitle}
            </h3>
            <p className="text-slate-900 text-sm sm:text-base font-medium leading-relaxed">
              {t.ctaSub}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-2">
            {onExploreCatalog && (
              <button
                onClick={onExploreCatalog}
                className="px-8 py-4 rounded-full bg-slate-950 text-white font-bold text-sm shadow-xl hover:bg-slate-900 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>{t.ctaButton}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            )}

            {onOpenInquiry && (
              <button
                onClick={onOpenInquiry}
                className="px-6 py-4 rounded-full bg-white/90 text-slate-950 font-bold text-sm border border-slate-950/20 hover:bg-white transition-all shadow"
              >
                {t.stockistInquiry}
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
