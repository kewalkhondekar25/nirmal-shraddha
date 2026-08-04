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
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center p-2 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fade-in pt-12 sm:pt-10 pb-10"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Floating Fixed Close Button Always Visible on Mobile Viewport */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        title="Close"
        className="fixed top-3 right-3 sm:top-6 sm:right-6 z-[60] w-11 h-11 rounded-full bg-amber-400 text-slate-950 hover:bg-amber-300 font-black shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-slate-950 shrink-0"
      >
        <X className="w-6 h-6 stroke-[3]" />
      </button>

      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-300 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#1E1B4E] via-[#2A2463] to-[#1E1B4E] text-white p-5 sm:p-8 relative pr-14">
          
          {/* Header Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-indigo-950/80 text-amber-300 hover:bg-amber-400 hover:text-slate-950 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1">
            <span className="text-amber-400 font-marathi text-sm sm:text-base font-bold tracking-wider">
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
              ⚡ 100% Pure & Natural
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[72vh] overflow-y-auto">
          
          {/* Box Image & Heritage Story Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left: Box Artwork */}
            {variant.image && (
              <div className="md:col-span-5 relative rounded-2xl overflow-hidden border-2 border-amber-300 shadow-xl bg-slate-900">
                <img
                  src={variant.image}
                  alt={variant.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-72 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-amber-300 text-xs font-marathi font-bold text-center">
                  "{variant.marathiSlogan || 'निर्मल श्रद्धा'}"
                </div>
              </div>
            )}

            {/* Right: Scent Story */}
            <div className={`${variant.image ? 'md:col-span-7' : 'md:col-span-12'} space-y-3`}>
              <h3 className="font-serif text-lg font-bold text-indigo-950 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                Sacred Heritage Story
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed bg-amber-50/70 p-4 rounded-2xl border border-amber-200">
                {variant.story}
              </p>
              <div className="p-3 rounded-xl bg-slate-100 text-xs text-slate-700 font-medium">
                <strong>Packaging Feature:</strong> {variant.packagingHighlight}
              </div>
            </div>

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
