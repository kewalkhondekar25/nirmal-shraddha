import React, { useState } from 'react';
import { Sparkles, PhoneCall, Volume2, VolumeX, Flame } from 'lucide-react';
import { toggleOmDrone } from '../utils/audioSynth';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  onOpenInquiry: () => void;
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry, onOpenQuiz }) => {
  const [isAudioOn, setIsAudioOn] = useState(false);
  const { t } = useLanguage();

  const handleAudioToggle = () => {
    const newState = !isAudioOn;
    const active = toggleOmDrone(newState);
    setIsAudioOn(active);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#191638]/95 backdrop-blur-md border-b border-amber-500/30 text-white shadow-xl">
      {/* Top Banner with Localized Shloka / Motto and Language Selector */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 px-4 py-1 text-xs sm:text-sm font-medium flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-indigo-950 shrink-0" />
          <span className="font-semibold tracking-wide text-center">
            {t.bannerShloka}
          </span>
          <span className="hidden md:inline-block text-xs bg-indigo-950 text-amber-300 px-2 py-0.5 rounded-full font-bold ml-2">
            {t.charcoalFree}
          </span>
        </div>

        {/* Language Switcher in Top Bar */}
        <div className="mx-auto sm:mx-0">
          <LanguageSelector variant="header" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Brand Crest */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-[#191638] flex items-center justify-center">
              <Flame className="w-6 h-6 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                {t.brandName}
              </span>
            </div>
            <p className="text-[11px] text-amber-300/80 font-serif tracking-widest uppercase">
              {t.brandTagline}
            </p>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
          <a href="#flagship" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            {t.navFlagship}
          </a>
          <a href="#upcycling" className="hover:text-amber-400 transition-colors">
            {t.navStory}
          </a>
          <a href="#collection" className="hover:text-amber-400 transition-colors">
            {t.navCollection}
          </a>
          <a href="#purity" className="hover:text-amber-400 transition-colors">
            {t.navPurity}
          </a>
          <a href="#ritual" className="hover:text-amber-400 transition-colors">
            {t.navRitual}
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Audio Drone Toggle */}
          <button
            onClick={handleAudioToggle}
            title={isAudioOn ? 'Mute Sacred Drone Sound' : 'Play Sacred Om Drone'}
            className={`p-2 rounded-full border text-xs transition-all flex items-center gap-1.5 ${
              isAudioOn
                ? 'bg-amber-500 text-indigo-950 border-amber-300 font-bold shadow-md shadow-amber-500/20'
                : 'bg-indigo-950/60 text-amber-300 border-amber-500/40 hover:bg-amber-500/20'
            }`}
          >
            {isAudioOn ? <Volume2 className="w-4 h-4 animate-bounce" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden sm:inline text-xs">{isAudioOn ? t.omSound : t.sacredSound}</span>
          </button>

          {/* Scent Quiz CTA */}
          <button
            onClick={onOpenQuiz}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/40 hover:bg-amber-400/20 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            {t.scentFinder}
          </button>

          {/* Inquiry CTA */}
          <button
            onClick={onOpenInquiry}
            className="px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/25 flex items-center gap-1.5 hover:scale-105"
          >
            <PhoneCall className="w-4 h-4" />
            <span className="hidden xs:inline">{t.inquireNow}</span>
            <span className="xs:hidden">{t.stockistInquiry}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

