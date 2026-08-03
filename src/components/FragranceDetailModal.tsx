import React from 'react';
import { X, Sparkles, Clock, Star, Flame, ShieldCheck, Volume2, PhoneCall, Check } from 'lucide-react';
import { FragranceVariant } from '../types';
import { playTempleBell } from '../utils/audioSynth';

interface FragranceDetailModalProps {
  variant: FragranceVariant | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const FragranceDetailModal: React.FC<FragranceDetailModalProps> = ({
  variant,
  onClose,
  onOpenInquiry,
}) => {
  if (!variant) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-300 my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#1E1B4E] via-[#2A2463] to-[#1E1B4E] text-white p-6 sm:p-8 relative">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-indigo-950/60 text-amber-300 hover:bg-amber-400 hover:text-slate-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1">
            <span className="text-amber-400 font-marathi text-sm font-bold tracking-wider">
              {variant.marathiName} • {variant.marathiTagline}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
              {variant.name}
            </h2>
            <p className="text-amber-200 text-xs sm:text-sm italic">
              "{variant.tagline}"
            </p>
          </div>

          {/* Quick Badges */}
          <div className="flex flex-wrap items-center gap-2 mt-4 text-xs font-semibold">
            <span className="bg-amber-400 text-slate-950 px-3 py-1 rounded-full font-bold">
              ⏱️ {variant.burnTime}
            </span>
            <span className="bg-indigo-900 text-amber-300 px-3 py-1 rounded-full border border-amber-400/40">
              🌿 100% Upcycled Temple Flowers
            </span>
            <span className="bg-indigo-900 text-amber-300 px-3 py-1 rounded-full border border-amber-400/40">
              ⚡ Charcoal-Free
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          
          {/* Scent Story */}
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-indigo-950 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Sacred Heritage Story
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed bg-amber-50/60 p-4 rounded-2xl border border-amber-200">
              {variant.story}
            </p>
          </div>

          {/* Scent Pyramid (Top, Heart, Base) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-indigo-950">
                Olfactory Scent Pyramid
              </h3>
              <button
                onClick={playTempleBell}
                className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full hover:bg-amber-200 transition-colors flex items-center gap-1.5"
              >
                <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                Chime Bell Sound
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Top Notes */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-amber-50 to-orange-50 border border-amber-200 space-y-2">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  Top Notes (पहिला सुवास)
                </div>
                {variant.notes.top.map((note, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="font-bold text-xs text-slate-900">{note.name}</div>
                    <div className="text-[11px] text-slate-600">{note.description}</div>
                  </div>
                ))}
              </div>

              {/* Heart Notes */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-indigo-50 to-purple-50 border border-indigo-200 space-y-2">
                <div className="text-xs font-bold text-indigo-900 uppercase tracking-wider">
                  Heart Notes (मध्यम सुवास)
                </div>
                {variant.notes.heart.map((note, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="font-bold text-xs text-slate-900">{note.name}</div>
                    <div className="text-[11px] text-slate-600">{note.description}</div>
                  </div>
                ))}
              </div>

              {/* Base Notes */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-emerald-50 to-teal-50 border border-emerald-200 space-y-2">
                <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                  Base Notes (अंतिम सुवास)
                </div>
                {variant.notes.base.map((note, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="font-bold text-xs text-slate-900">{note.name}</div>
                    <div className="text-[11px] text-slate-600">{note.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-xs font-bold text-slate-500 uppercase">Recommended Best Time</div>
              <div className="font-semibold text-slate-900 text-sm">{variant.bestTime}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-xs font-bold text-slate-500 uppercase">Aroma Intensity</div>
              <div className="flex items-center text-amber-500 gap-1 pt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < variant.intensity ? 'fill-amber-400 text-amber-500' : 'text-slate-300'
                    }`}
                  />
                ))}
                <span className="text-xs text-slate-700 ml-2 font-bold">{variant.intensity}/5</span>
              </div>
            </div>
          </div>

          {/* Natural Ingredients List */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Formula Ingredients
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {variant.ingredients.map((ing, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-100 text-slate-800">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{ing}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-600 font-marathi">
            निर्मल श्रद्धा • 100% पर्यावरणपूरक अगरबत्ती
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs hover:scale-105 transition-all shadow-md shadow-amber-500/20 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Inquire for Stock / Bulk</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
