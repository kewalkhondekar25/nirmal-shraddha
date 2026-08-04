import React, { useState } from 'react';
import { Sparkles, Star, Info, PhoneCall, CheckCircle2, Flame, Clock } from 'lucide-react';
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

  const categories = [
    { id: 'all', label: 'All 6 Essence Boxes' },
    { id: 'Devotion', label: 'Valor & Devotion' },
    { id: 'Grace', label: 'Motherly Grace' },
    { id: 'Faith', label: 'Faith & Saburi' },
    { id: 'Protection', label: 'Aura Protection' },
    { id: 'Strength', label: 'Shakti & Strength' }
  ];

  const filteredFragrances = FRAGRANCES.filter(item => {
    if (selectedMood === 'all') return true;
    return (
      item.mood.some(m => m.toLowerCase().includes(selectedMood.toLowerCase())) ||
      item.name.toLowerCase().includes(selectedMood.toLowerCase()) ||
      item.tagline.toLowerCase().includes(selectedMood.toLowerCase())
    );
  });

  return (
    <section id="collection" className="py-20 bg-[#FAF7F2] text-slate-900 border-b border-amber-200 relative overflow-hidden w-full max-w-full">
      
      {/* Background Subtle Gradient */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold border border-amber-300 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Authentic Box Collection • 100% Upcycled Flowers</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Nirmal Shraddha Agarbatti Flavour Boxes
          </h2>
          <p className="font-marathi text-amber-800 text-lg sm:text-xl font-extrabold">
            निर्मल श्रद्धा सुगंधित अगरबत्ती — ६ दिव्य अनुभूती
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover our six signature incense variants. Each box features authentic temple motifs, traditional Marathi shlokas, and 100% charcoal-free sticks crafted with 1-hour clean burn guarantee.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedMood(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedMood === cat.id
                  ? 'bg-[#1E1B4E] text-amber-300 shadow-lg shadow-indigo-950/20 scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50 hover:border-amber-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Fragrance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFragrances.map((variant) => {
            const isFlagship = variant.isFlagship;

            return (
              <div
                key={variant.id}
                className={`rounded-3xl bg-white border transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden group shadow-xl ${
                  isFlagship
                    ? 'border-2 border-amber-400 ring-4 ring-amber-400/20 shadow-amber-500/15'
                    : 'border-amber-200/90 hover:border-amber-400'
                }`}
              >
                {/* Product Box Image Display */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900 border-b border-amber-200">
                  {variant.image ? (
                    <img
                      src={variant.image}
                      alt={`${variant.name} Packaging Box`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-500 via-amber-600 to-indigo-950 flex items-center justify-center text-white font-serif font-bold text-2xl">
                      {variant.name}
                    </div>
                  )}

                  {/* Gradient Overlay for Text Visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-indigo-950/90 backdrop-blur text-amber-300 font-extrabold text-[11px] font-marathi border border-amber-400/40 shadow">
                      {variant.marathiName}
                    </span>

                    {isFlagship ? (
                      <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] uppercase shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-indigo-950" />
                        Flagship Box
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur text-amber-300 font-bold text-[10px] border border-amber-400/30 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        1 Hour Burn
                      </span>
                    )}
                  </div>

                  {/* Bottom Text inside Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                    {variant.marathiSlogan && (
                      <div className="text-[11px] font-marathi text-amber-300 font-bold drop-shadow">
                        "{variant.marathiSlogan}"
                      </div>
                    )}
                    <h3 className="font-serif text-2xl font-extrabold text-white tracking-wide drop-shadow-md">
                      {variant.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body Details */}
                <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                  
                  {/* Tagline & Description */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200/80 italic">
                      "{variant.tagline}"
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {variant.description}
                    </p>
                  </div>

                  {/* Scent & Burn Stats */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 font-semibold">Fragrance Intensity</span>
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < variant.intensity ? 'fill-amber-400 text-amber-500' : 'text-slate-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200 flex flex-wrap gap-1.5">
                      <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-md">
                        Top Note: {variant.notes.top[0]?.name}
                      </span>
                      <span className="text-[10px] font-bold text-indigo-900 bg-indigo-100 px-2.5 py-0.5 rounded-md">
                        Base: {variant.notes.base[0]?.name}
                      </span>
                    </div>
                  </div>

                  {/* Mood Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {variant.mood.map((m, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200/80"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Action Buttons */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectVariant(variant)}
                    className="flex-1 py-3 px-3 rounded-2xl bg-[#1E1B4E] text-amber-300 text-xs font-bold hover:bg-indigo-900 transition-all flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Info className="w-4 h-4" />
                    <span>View Box Details</span>
                  </button>

                  <button
                    onClick={onOpenInquiry}
                    className="py-3 px-4 rounded-2xl bg-amber-400 text-slate-950 text-xs font-black hover:bg-amber-300 transition-all flex items-center justify-center gap-1.5 shadow-md shrink-0"
                  >
                    <PhoneCall className="w-4 h-4" />
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
