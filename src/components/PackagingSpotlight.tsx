import React, { useState } from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, Flame, Award, HelpCircle, Layers, Feather, Info, Clock, Check } from 'lucide-react';
import { FRAGRANCES } from '../data/fragrances';
import { playTempleBell } from '../utils/audioSynth';
import { useLanguage } from '../context/LanguageContext';

export const PackagingSpotlight: React.FC = () => {
  const [selectedVariantId, setSelectedVariantId] = useState<string>('khandoba-malhar');
  const [activeTab, setActiveTab] = useState<'box' | 'front' | 'back' | 'ingredients' | 'usage'>('box');
  const { t } = useLanguage();

  const selectedVariant = FRAGRANCES.find(f => f.id === selectedVariantId) || FRAGRANCES[0];

  return (
    <section id="flagship" className="py-20 bg-[#FDFBF7] border-b border-amber-200 relative overflow-hidden text-slate-900 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 space-y-12 w-full overflow-hidden">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Packaging Spotlight & Quality Standards</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span className="font-marathi font-bold">निर्मल श्रद्धा</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Authentic Box Architecture
          </h2>
          <p className="font-marathi text-lg sm:text-xl text-amber-800 font-extrabold">
            "निर्माल्याचा सन्मान, सुगंधाचे वरदान"
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our premium packaged boxes. Each box is engineered with gold foil accents, traditional Marathi shlokas, certified DEP-free non-toxic ingredients, and a 1-hour burn guarantee per stick.
          </p>
        </div>

        {/* Flavour Box Selector Bar */}
        <div className="space-y-3">
          <div className="text-center text-xs font-bold uppercase tracking-wider text-amber-900">
            Select a Flavour Box to View Details:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {FRAGRANCES.map((variant) => (
              <button
                key={variant.id}
                onClick={() => {
                  playTempleBell();
                  setSelectedVariantId(variant.id);
                }}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  selectedVariantId === variant.id
                    ? 'bg-[#22120B] text-amber-300 shadow-xl shadow-amber-950/20 scale-105 ring-2 ring-amber-400'
                    : 'bg-white text-slate-700 border border-amber-200/80 hover:bg-amber-50 hover:border-amber-300'
                }`}
              >
                <span className="font-marathi text-amber-500">{variant.marathiName}</span>
                <span>({variant.name})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive View Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => { playTempleBell(); setActiveTab('box'); }}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'box'
                ? 'bg-amber-400 text-slate-950 shadow'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Full Box Design
          </button>

          <button
            onClick={() => { playTempleBell(); setActiveTab('front'); }}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'front'
                ? 'bg-amber-400 text-slate-950 shadow'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            Marathi Shlokas & Badges
          </button>

          <button
            onClick={() => { playTempleBell(); setActiveTab('back'); }}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'back'
                ? 'bg-amber-400 text-slate-950 shadow'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50'
            }`}
          >
            <Feather className="w-3.5 h-3.5" />
            Upcycling Eco Pledge
          </button>

          <button
            onClick={() => { playTempleBell(); setActiveTab('ingredients'); }}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'ingredients'
                ? 'bg-amber-400 text-slate-950 shadow'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            DEP-Free Ingredients
          </button>

          <button
            onClick={() => { playTempleBell(); setActiveTab('usage'); }}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'usage'
                ? 'bg-amber-400 text-slate-950 shadow'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            How to Burn & Safety
          </button>
        </div>

        {/* Main Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Product Box Photo */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-amber-200 shadow-2xl flex flex-col justify-between space-y-6">
            
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-amber-700 tracking-wider uppercase font-marathi">
                  {selectedVariant.marathiName} • {selectedVariant.marathiSlogan}
                </span>
                <h3 className="font-serif text-2xl font-extrabold text-indigo-950">
                  {selectedVariant.name} Box
                </h3>
              </div>
              <span className="bg-amber-400 text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-full shadow-md">
                1 Hour Burn
              </span>
            </div>

            {/* Box Image Showcase */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300 shadow-xl bg-slate-950 group">
              {selectedVariant.image ? (
                <img
                  src={selectedVariant.image}
                  alt={`${selectedVariant.name} Box`}
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-80 bg-gradient-to-br from-amber-500 to-indigo-950 flex items-center justify-center text-white font-bold text-xl">
                  {selectedVariant.name}
                </div>
              )}

              {/* Overlay Callout */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-indigo-950/90 backdrop-blur border border-amber-400/40 text-white space-y-1">
                <p className="font-marathi text-amber-300 text-xs sm:text-sm font-bold">
                  "{selectedVariant.marathiTagline}"
                </p>
                <p className="text-[11px] text-slate-300 italic">
                  "{selectedVariant.tagline}"
                </p>
              </div>
            </div>

            {/* Key Quality Guarantees Bar */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs font-bold pt-2">
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-0.5">
                <div className="text-xs text-indigo-950 font-black">100% Upcycled</div>
                <div className="text-[10px] text-slate-600">Temple Flowers</div>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-0.5">
                <div className="text-xs text-indigo-950 font-black">0% Charcoal</div>
                <div className="text-[10px] text-slate-600">Pure Clean Air</div>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-0.5">
                <div className="text-xs text-indigo-950 font-black">60 Mins</div>
                <div className="text-[10px] text-slate-600">Burn Guarantee</div>
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Tab Panels */}
          <div className="lg:col-span-5 bg-[#22120B] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl border border-amber-500/30">
            
            {activeTab === 'box' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Packaging Aesthetics
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {selectedVariant.name} Box Architecture
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  The packaging for <strong className="text-amber-300">{selectedVariant.name}</strong> is crafted to reflect the divine ambiance of sacred shrines. It features rich foil accents, vibrant cultural graphics, and full English & Marathi product guidance.
                </p>

                <div className="p-4 rounded-xl bg-indigo-950/80 border border-amber-400/30 space-y-2">
                  <div className="text-xs font-bold text-amber-300 font-marathi">
                    "{selectedVariant.marathiSlogan}"
                  </div>
                  <p className="text-xs text-slate-300">
                    "{selectedVariant.marathiTagline}"
                  </p>
                </div>

                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Temple Heritage Artwork:</strong> Detailed visual depiction of ancient shrines & sacred symbols.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>100% Eco Guarantee:</strong> Hand-rolled by rural women artisans from recycled flowers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>1-Hour Steady Smoke:</strong> Designed for uninterrupted morning pooja & evening aarti.</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'front' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Front Panel Inscriptions
                  </span>
                  <h3 className="font-marathi text-2xl font-bold text-amber-300">
                    {selectedVariant.marathiName} • {selectedVariant.marathiTagline}
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-200 font-marathi text-sm leading-relaxed shadow-inner">
                  "देवाचरणी अर्पण झालेल्या पवित्र फुलांचे सन्मानपूर्वक पुनर्चक्रण करून आम्ही पर्यावरणपूरक अगरबत्ती तयार करतो."
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  "We respectfully upcycle sacred floral offerings into eco-conscious incense sticks, giving each worshipper an authentic experience of faith, purity, and nature conservation."
                </p>

                <div className="space-y-2 text-xs">
                  <div className="font-bold text-amber-300">Key Guarantees printed on every box:</div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded bg-indigo-900/80 border border-amber-400/30 text-amber-200">
                      ✓ Clean Fragrance
                    </div>
                    <div className="p-2 rounded bg-indigo-900/80 border border-amber-400/30 text-amber-200">
                      ✓ Sustainable Choice
                    </div>
                    <div className="p-2 rounded bg-indigo-900/80 border border-amber-400/30 text-amber-200">
                      ✓ Made with Devotion
                    </div>
                    <div className="p-2 rounded bg-indigo-900/80 border border-amber-400/30 text-amber-200">
                      ✓ Made in India 🇮🇳
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'back' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Back Panel Story & Eco Pledge
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Giving Sacred Flowers a Fragrant New Purpose
                  </h3>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  "Our incense sticks give holy temple offerings a fragrant second life. By upcycling discarded garlands from shrines and river banks, we prevent water pollution while generating dignified livelihood for rural women artisans."
                </p>

                <div className="p-4 rounded-xl bg-indigo-950 border border-amber-400/30 space-y-2 text-xs">
                  <div className="font-bold text-amber-300 font-marathi">
                    "पुजनानंतरचे निर्माल्य वाचवा, निसर्ग वाचवा."
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Nirmal Shraddha Eco Pledge — Saving sacred Nirmalya from becoming waste.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Formula & Ingredients List
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    100% Non-Toxic & DEP-Free Formula
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  {selectedVariant.ingredients.map((ing, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-400/40 text-emerald-200 text-xs flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span><strong>DEP-Free Certified:</strong> Zero toxic chemical solvents or dark charcoal soot.</span>
                </div>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    How to Burn
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Ritual Instructions & Safety
                  </h3>
                </div>

                <ol className="space-y-2.5 text-xs text-slate-200 list-decimal list-inside">
                  <li className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30">
                    <strong>Light Tip:</strong> Hold stick tip in match/candle flame for 30 seconds.
                  </li>
                  <li className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30">
                    <strong>Blow Out Flame:</strong> Gently blow out flame until tip glows red.
                  </li>
                  <li className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30">
                    <strong>Place in Holder:</strong> Insert into ceramic/brass stand on heat-safe surface.
                  </li>
                </ol>

                <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-200 text-[11px]">
                  <strong>Safety Tip:</strong> Keep away from flammable objects, children, and pets.
                </div>
              </div>
            )}

            {/* Bottom Footer */}
            <div className="pt-4 border-t border-indigo-900/80 flex items-center justify-between text-xs text-slate-300">
              <span className="font-marathi text-amber-300">{selectedVariant.marathiName}</span>
              <span className="bg-amber-400/20 text-amber-300 px-2.5 py-1 rounded-full font-bold text-[11px]">
                Made in India 🇮🇳
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
