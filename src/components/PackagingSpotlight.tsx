import React, { useState } from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, Flame, Award, HelpCircle, Layers, Feather, Info } from 'lucide-react';
import { playTempleBell } from '../utils/audioSynth';
import { useLanguage } from '../context/LanguageContext';

export const PackagingSpotlight: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'box' | 'front' | 'back' | 'ingredients' | 'usage'>('box');
  const { t } = useLanguage();

  return (
    <section id="flagship" className="py-20 bg-[#FDFBF7] border-b border-amber-200 relative overflow-hidden text-slate-900">
      {/* Subtle traditional Indian background motif */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.spotlightBadge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span className="font-marathi font-bold">{t.brandName}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {t.spotlightTitle}
          </h2>
          <p className="font-marathi text-lg text-amber-800 font-semibold">
            {t.spotlightSub}
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.spotlightDesc}
          </p>
        </div>

        {/* Interactive View Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => { playTempleBell(); setActiveTab('box'); }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'box'
                ? 'bg-[#1E1B4E] text-amber-400 shadow-md shadow-indigo-950/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50'
            }`}
          >
            <Layers className="w-4 h-4" />
            {t.tabFullBox}
          </button>

          <button
            onClick={() => { playTempleBell(); setActiveTab('front'); }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'front'
                ? 'bg-[#1E1B4E] text-amber-400 shadow-md shadow-indigo-950/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50'
            }`}
          >
            <Award className="w-4 h-4" />
            {t.tabFront}
          </button>

          <button
            onClick={() => { playTempleBell(); setActiveTab('back'); }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'back'
                ? 'bg-[#1E1B4E] text-amber-400 shadow-md shadow-indigo-950/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50'
            }`}
          >
            <Feather className="w-4 h-4" />
            {t.tabBack}
          </button>

          <button
            onClick={() => { playTempleBell(); setActiveTab('ingredients'); }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'ingredients'
                ? 'bg-[#1E1B4E] text-amber-400 shadow-md shadow-indigo-950/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            {t.tabIngredients}
          </button>

          <button
            onClick={() => { playTempleBell(); setActiveTab('usage'); }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'usage'
                ? 'bg-[#1E1B4E] text-amber-400 shadow-md shadow-indigo-950/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50'
            }`}
          >
            <Flame className="w-4 h-4" />
            {t.tabUsage}
          </button>
        </div>


        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Box Artwork Display */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-amber-200 shadow-xl flex flex-col justify-between">
            
            {/* Box Header Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">
                  Product Box Art • 100% Authentic
                </span>
                <h3 className="font-serif text-xl font-bold text-indigo-950">
                  Nirmal Shraddha - Khandoba Malhar Box
                </h3>
              </div>
              <span className="bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                Flagship Edition
              </span>
            </div>

            {/* Box Image / Render Container */}
            <div className="my-6 relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 p-2 shadow-inner">
              
              {/* Box Image Display with interactive highlights */}
              <div className="rounded-xl overflow-hidden bg-white relative">
                <img
                  src="https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/og.png" 
                  alt="Khandoba Malhar Incense Packaging Box Art"
                  onError={(e) => {
                    // Fallback to stylized SVG visual representation of the packaging box from prompt image
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-auto object-contain max-h-[500px]"
                />

                {/* Simulated Custom Box SVG Component rendering exact colors & text from prompt image */}
                <div className="p-6 bg-gradient-to-br from-[#1E1B4E] via-[#282361] to-[#1E1B4E] text-white space-y-6 rounded-xl border-4 border-amber-400">
                  
                  {/* Top Bar Shloka Banner */}
                  <div className="bg-amber-500 text-slate-950 px-4 py-2 rounded-lg font-marathi font-bold text-center text-sm shadow-md">
                    "निर्माल्याचा सन्मान, सुगंधीचे वरदान"
                  </div>

                  {/* Box Front Panel Graphic Simulation */}
                  <div className="bg-gradient-to-b from-amber-400 via-yellow-400 to-amber-500 text-slate-950 p-6 rounded-xl shadow-lg border-2 border-amber-200 relative overflow-hidden">
                    <div className="text-center space-y-2">
                      <p className="font-marathi text-xs font-bold text-indigo-950 uppercase tracking-widest">
                        येळकोट येळकोट जय मल्हार
                      </p>
                      <h3 className="font-marathi font-extrabold text-3xl text-amber-950 drop-shadow-sm">
                        खंडोबा मल्हार
                      </h3>
                      <p className="font-marathi text-xs font-semibold text-amber-900">
                        पराक्रमाचा सुगंध, दैवी सामर्थ्याचा अनुभव
                      </p>
                      <div className="my-3 py-1 px-3 bg-[#1E1B4E] text-amber-300 inline-block font-serif font-bold tracking-wider rounded-md text-sm sm:text-base shadow">
                        KHANDOBA MALHAR
                      </div>
                      <p className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">
                        The Fragrance Of Valor, The Experience Of Divine Strength
                      </p>
                      <p className="text-[10px] font-bold text-amber-950 uppercase tracking-widest">
                        — PREMIUM INCENSE STICKS —
                      </p>
                    </div>

                    {/* 4 Callout Badges at bottom of box */}
                    <div className="grid grid-cols-4 gap-1 mt-6 text-center pt-3 border-t border-amber-600/30 text-[9px] sm:text-[10px] font-bold text-slate-950">
                      <div className="bg-amber-300/80 p-1.5 rounded">
                        <span className="block text-indigo-950 font-black">1 HOUR</span>
                        burning stick
                      </div>
                      <div className="bg-amber-300/80 p-1.5 rounded">
                        Clean Fragrance
                      </div>
                      <div className="bg-amber-300/80 p-1.5 rounded">
                        Sustainable Choice
                      </div>
                      <div className="bg-amber-300/80 p-1.5 rounded">
                        Made with Devotion
                      </div>
                    </div>
                  </div>

                  {/* Badges Bar from Box */}
                  <div className="grid grid-cols-3 gap-3 text-center text-xs font-bold">
                    <div className="p-2 rounded bg-indigo-900/80 border border-amber-400/40 text-amber-200">
                      <div className="text-[10px] text-amber-300">100%</div>
                      Recycled Temple Flowers
                    </div>
                    <div className="p-2 rounded bg-indigo-900/80 border border-amber-400/40 text-amber-200">
                      <div className="text-[10px] text-amber-300">100%</div>
                      Eco-Friendly
                    </div>
                    <div className="p-2 rounded bg-indigo-900/80 border border-amber-400/40 text-amber-200">
                      <div className="text-amber-400">★★★★★</div>
                      Charcoal Free
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Bottom Tagline Notice */}
            <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium text-center font-marathi">
              "पुजनानंतरचे निर्माल्य वाचवा, निसर्ग वाचवा." — Nirmal Shraddha Eco Pledge
            </div>
          </div>

          {/* Right Column: Tabbed Details Breakdown */}
          <div className="lg:col-span-5 bg-[#1E1B4E] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-amber-500/30">
            
            {activeTab === 'box' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Packaging Architecture
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Royal Royal Indigo & Bhandara Gold
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  The box artwork for <strong className="text-amber-300">Khandoba Malhar</strong> is designed to honor Indian spiritual traditions. It harmonizes royal deep indigo blue (symbolizing devotion and infinity) with sacred turmeric yellow (bhandara).
                </p>

                <div className="p-4 rounded-xl bg-indigo-950/80 border border-amber-400/30 space-y-2">
                  <div className="text-xs font-bold text-amber-300 font-marathi">
                    निर्माल्याचा सन्मान, सुगंधीचे वरदान
                  </div>
                  <p className="text-xs text-slate-300">
                    "Respecting the sacred floral offerings (Nirmalya) and turning them into a divine fragrance blessing for your home."
                  </p>
                </div>

                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Lord Khandoba Motif:</strong> Recreates Jejuri temple shikhara and golden turmeric hills.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Eco Guarantee:</strong> Certified 100% Charcoal-Free and upcycled from temple flowers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>1-Hour Burn Guarantee:</strong> Long-lasting steady smoke for morning & evening pooja.</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'front' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Front Panel & Marathi Taglines
                  </span>
                  <h3 className="font-marathi text-2xl font-bold text-amber-300">
                    खंडोबा मल्हार • पराक्रमाचा सुगंध
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-200 font-marathi text-sm leading-relaxed shadow-inner">
                  "देवाचरणी अर्पण झालेल्या पवित्र फुलांचे सन्मानपूर्वक पुनर्चक्रण करून आम्ही पर्यावरणपूरक अगरबत्ती तयार करतो. प्रत्येक अगरबत्ती ही श्रद्धा, शुद्धता, सुगंध आणि निसर्गसंवर्धनाची अविस्मरणीय अनुभूती आहे."
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Translation: "We eco-friendly create incense sticks by respectfully upcycling sacred flowers offered at God's feet. Each incense stick is an unforgettable experience of faith, purity, fragrance, and nature conservation."
                </p>

                <div className="space-y-2 text-xs">
                  <div className="font-bold text-amber-300">Key Taglines printed on the box:</div>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="p-2 rounded bg-indigo-900/70 border border-amber-400/30 text-amber-200 font-marathi">
                      • "निर्माल्याचा सन्मान, सुगंधीचे वरदान"
                    </div>
                    <div className="p-2 rounded bg-indigo-900/70 border border-amber-400/30 text-amber-200 font-marathi">
                      • "पुजनानंतरचे निर्माल्य वाचवा, निसर्ग वाचवा."
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'back' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Sacred Story Printed on Packaging
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Giving Sacred Flowers a Fragrant New Life
                  </h3>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  "Giving sacred floral offerings a fragrant new life. Our incense sticks are made using recycled temple flowers, natural ingredients, and premium fragrance oils. Every incense stick represents devotion, purity, and a commitment to sustainability. By giving sacred flowers a new purpose, we help reduce floral waste and protect nature."
                </p>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="p-3 rounded-xl bg-indigo-900/90 border border-amber-400/40 text-center space-y-1">
                    <div className="text-xs font-bold text-amber-300">Recycled</div>
                    <div className="text-[10px] text-slate-300">Temple Flowers 100%</div>
                  </div>
                  <div className="p-3 rounded-xl bg-indigo-900/90 border border-amber-400/40 text-center space-y-1">
                    <div className="text-xs font-bold text-amber-300">Eco-Friendly</div>
                    <div className="text-[10px] text-slate-300">100% Sustainable</div>
                  </div>
                  <div className="p-3 rounded-xl bg-indigo-900/90 border border-amber-400/40 text-center space-y-1">
                    <div className="text-xs font-bold text-amber-300">Charcoal Free</div>
                    <div className="text-[10px] font-bold text-amber-400">★★★★★</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Authentic Box Ingredients List
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    100% Natural & DEP-Free Formula
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  <div className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>Recycled Temple Flower Powder</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>Natural Wood Powder</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>Bamboo Core Stick</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>Natural Rice Powder Binder</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>Natural Tree Gum Resins</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>Plant-Based Organic Binders</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>Premium Essential Fragrance Oils</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>Selected Aromatic Herbs</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-400/40 text-emerald-200 text-xs flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span><strong>DEP-Free Certified:</strong> Contains NO Diethyl Phthalate chemical solvents or toxic burning agents.</span>
                </div>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    How To Burn (Printed Guide)
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Ritual Instructions & Safety
                  </h3>
                </div>

                <ol className="space-y-3 text-xs text-slate-200 list-decimal list-inside">
                  <li className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30">
                    <strong>Light Tip:</strong> Light one stick at a time using a match stick or candle.
                  </li>
                  <li className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30">
                    <strong>Ignite:</strong> Hold the tip in flame for approx. 30 seconds for complete ignition.
                  </li>
                  <li className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30">
                    <strong>Blow Flame Out:</strong> Gently blow out the active flame on the tip until a glowing red tip remains.
                  </li>
                  <li className="p-2.5 rounded-lg bg-indigo-950 border border-amber-400/30">
                    <strong>Stand Placement:</strong> Perform your ritual and place the stick on a ceramic or metal stand in a well-ventilated space.
                  </li>
                </ol>

                <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-200 text-[11px] space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-amber-300">
                    <Info className="w-4 h-4 text-amber-400" />
                    Safety Warning:
                  </div>
                  <p>
                    Keep burning incense away from children, pets, and flammable materials. Never leave burning incense unattended.
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Callout */}
            <div className="pt-4 border-t border-indigo-900/80 flex items-center justify-between text-xs text-slate-300">
              <span className="font-marathi text-amber-300">निर्मल श्रद्धा • खंडोबा मल्हार</span>
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
