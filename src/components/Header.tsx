import React, { useState } from 'react';
import { Sparkles, PhoneCall, Flame, Menu, X, MessageSquare } from 'lucide-react';
import brandLogoImg from '../assets/images/brand_logo_symbol_1785835748647.jpg';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  onOpenInquiry: () => void;
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry, onOpenQuiz }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-[#1A0E08]/95 backdrop-blur-md border-b border-amber-500/30 text-white shadow-xl">
      {/* Top Banner with Localized Shloka / Motto and Language Selector */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 px-4 py-1 text-xs sm:text-sm font-medium flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-950 shrink-0" />
          <span className="font-semibold tracking-wide text-center text-[11px] sm:text-xs">
            {t.bannerShloka}
          </span>
          <span className="hidden md:inline-block text-xs bg-[#1A0E08] text-amber-300 px-2 py-0.5 rounded-full font-bold ml-2 border border-amber-500/40">
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
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-amber-400 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300 bg-amber-950/80 overflow-hidden shrink-0">
            <img
              src={brandLogoImg}
              alt="Nirmal Shraddha Brand Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full group-hover:rotate-6 transition-transform duration-500"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                {t.brandName}
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-amber-300/80 font-serif tracking-widest uppercase">
              {t.brandTagline}
            </p>
          </div>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
          <a href="#flagship" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            {t.navFlagship}
          </a>
          <a href="#carousel" className="hover:text-amber-400 transition-colors">
            Flavour Carousel
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
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Direct WhatsApp Contact CTA */}
          <a
            href="https://wa.me/917304071999?text=Hello%20Nirmal%20Shraddha%2C%20I%20would%20like%20to%20inquire%20about%20your%20charcoal-free%20incense%20boxes."
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
            className="p-2 sm:p-2.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/20 hover:scale-105 flex items-center justify-center shrink-0"
          >
            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>

          {/* Contact Us Modal Trigger */}
          <button
            onClick={onOpenInquiry}
            className="px-3 sm:px-3 py-2 rounded-full text-xs font-bold bg-amber-400/15 text-amber-300 border border-amber-400/40 hover:bg-amber-400/25 transition-all flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Contact Us</span>
          </button>

          {/* Scent Quiz CTA */}
          <button
            onClick={onOpenQuiz}
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/40 hover:bg-amber-400/20 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            {t.scentFinder}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-[#2A180E] border border-amber-500/30 text-amber-300 lg:hidden hover:bg-amber-500/20 transition-all"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1A0E08] border-b border-amber-500/30 px-4 py-4 space-y-3 animate-fade-in">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-200">
            <a
              href="#flagship"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-amber-500/10 text-amber-300 font-bold border border-amber-500/20 flex items-center justify-between"
            >
              <span>{t.navFlagship}</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </a>
            <a
              href="#carousel"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-amber-500/10 hover:text-amber-300 transition-all"
            >
              Packaging Flavour Carousel
            </a>
            <a
              href="#upcycling"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-amber-500/10 hover:text-amber-300 transition-all"
            >
              {t.navStory}
            </a>
            <a
              href="#collection"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-amber-500/10 hover:text-amber-300 transition-all"
            >
              {t.navCollection}
            </a>
            <a
              href="#purity"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-amber-500/10 hover:text-amber-300 transition-all"
            >
              {t.navPurity}
            </a>
            <a
              href="#ritual"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-amber-500/10 hover:text-amber-300 transition-all"
            >
              {t.navRitual}
            </a>
          </nav>

          <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full py-2.5 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t.scentFinder}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


