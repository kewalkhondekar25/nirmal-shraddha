import React, { useState } from 'react';
import { Sparkles, Star, Info, PhoneCall } from 'lucide-react';
import { FRAGRANCES } from '../data/fragrances';
import { FragranceVariant } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FragranceCatalogProps {
  onSelectVariant: (variant: FragranceVariant) => void;
  onOpenInquiry: () => void;
}

export const FragranceCatalog: React.FC<FragranceCatalogProps> = ({ onSelectVariant, onOpenInquiry }) => {
  const [selectedMood, setSelectedMood] = useState<string>('all');
  const { t } = useLanguage();

  const moods = [
    { id: 'all', label: 'All Essences' },
    { id: 'Devotion', label: 'Worship & Pooja' },
    { id: 'Meditation', label: 'Meditation & Peace' },
    { id: 'Purification', label: 'Aura Cleansing' },
    { id: 'Joy', label: 'Fresh Floral' },
    { id: 'Festive', label: 'Festive & Ceremonial' }
  ];

  const filteredFragrances = FRAGRANCES.filter(item => {
    if (selectedMood === 'all') return true;
    return item.mood.some(m => m.toLowerCase().includes(selectedMood.toLowerCase()));
  });

  return (
    <section id="collection" className="py-20 bg-[#FAF7F2] text-slate-900 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Curated Essence Sticks Collection</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Sacred Agarbatti Variants
          </h2>
          <p className="font-marathi text-amber-800 text-base sm:text-lg font-semibold">
            निर्मल श्रद्धा अगरबत्ती — शुद्धता, सुगंध आणि भक्तिभाव
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every incense stick is handcrafted using 100% upcycled temple flower petals, natural gum resins, and pure essential oils. Guaranteed charcoal-free with 60 minutes of uninterrupted burning time.
          </p>
        </div>

        {/* Mood Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {moods.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMood(m.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedMood === m.id
                  ? 'bg-[#1E1B4E] text-amber-300 shadow-md shadow-indigo-950/20 scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Fragrance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFragrances.map((variant) => {
            const isFlagship = variant.isFlagship;

            return (
              <div
                key={variant.id}
                className={`rounded-3xl bg-white border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${
                  isFlagship
                    ? 'border-2 border-amber-400 shadow-2xl shadow-amber-500/15 ring-2 ring-amber-400/20'
                    : 'border-amber-200/80 shadow-lg shadow-amber-900/5 hover:border-amber-400'
                }`}
              >
                {/* Top Card Banner */}
                <div
                  className={`p-6 relative text-white ${
                    isFlagship
                      ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-indigo-950'
                      : 'bg-gradient-to-br from-[#1E1B4E] via-[#2A2463] to-[#1E1B4E]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className={`text-[11px] font-bold tracking-widest uppercase font-marathi block ${isFlagship ? 'text-indigo-950' : 'text-amber-400'}`}>
                        {variant.marathiName}
                      </span>
                      <h3 className={`font-serif text-2xl font-bold mt-0.5 ${isFlagship ? 'text-slate-950' : 'text-white'}`}>
                        {variant.name}
                      </h3>
                    </div>

                    {isFlagship ? (
                      <span className="px-3 py-1 rounded-full bg-indigo-950 text-amber-300 font-extrabold text-[10px] uppercase shadow">
                        Flagship
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold text-[10px] border border-amber-400/30">
                        60 Mins Burn
                      </span>
                    )}
                  </div>

                  <p className={`text-xs mt-2 italic line-clamp-1 ${isFlagship ? 'text-slate-900 font-medium' : 'text-slate-300'}`}>
                    "{variant.tagline}"
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {variant.description}
                  </p>

                  {/* Scent Pyramid Snippet */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                      <span>Aroma Intensity</span>
                      <div className="flex items-center text-amber-500 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < variant.intensity ? 'fill-amber-400 text-amber-500' : 'text-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="text-slate-700 font-medium text-xs pt-1 border-t border-slate-200 flex flex-wrap gap-1.5">
                      <span className="text-[10px] text-amber-900 font-bold bg-amber-100 px-2 py-0.5 rounded">
                        Top Note: {variant.notes.top[0]?.name}
                      </span>
                      <span className="text-[10px] text-indigo-900 font-bold bg-indigo-100 px-2 py-0.5 rounded">
                        Base: {variant.notes.base[0]?.name}
                      </span>
                    </div>
                  </div>

                  {/* Mood Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {variant.mood.map((m, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectVariant(variant)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#1E1B4E] text-amber-300 text-xs font-bold hover:bg-indigo-900 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Scent Pyramid</span>
                  </button>

                  <button
                    onClick={onOpenInquiry}
                    className="py-2.5 px-3 rounded-xl bg-amber-400 text-slate-950 text-xs font-bold hover:bg-amber-300 transition-colors flex items-center justify-center gap-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

