import React from 'react';
import { Flame, Heart, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface FooterProps {
  onOpenInquiry: () => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onOpenQuiz }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#191638] text-white border-t border-amber-500/30 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Indian Motif Pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-indigo-900">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center p-0.5 shadow-lg">
                <div className="w-full h-full rounded-full bg-[#191638] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
                  {t.brandName}
                </span>
                <p className="text-[10px] text-amber-300 font-serif tracking-widest uppercase">
                  {t.brandTagline}
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md">
              Giving sacred floral offerings a fragrant new life. Upcycling 100% temple flowers into eco-friendly, charcoal-free, long-burning incense sticks. Made with devotion in India.
            </p>

            <div className="p-3 rounded-xl bg-indigo-950/80 border border-amber-500/30 text-xs text-amber-300 font-marathi">
              {t.bannerShloka}
            </div>

            {/* Footer Language Selector */}
            <div className="pt-2">
              <span className="text-[11px] text-slate-400 block mb-1 font-semibold">Select Language / भाषा निवडा:</span>
              <LanguageSelector variant="compact" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#flagship" className="hover:text-amber-400 transition-colors">
                  {t.navFlagship}
                </a>
              </li>
              <li>
                <a href="#upcycling" className="hover:text-amber-400 transition-colors">
                  {t.navStory}
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-amber-400 transition-colors">
                  {t.navCollection}
                </a>
              </li>
              <li>
                <a href="#purity" className="hover:text-amber-400 transition-colors">
                  {t.navPurity}
                </a>
              </li>
              <li>
                <a href="#ritual" className="hover:text-amber-400 transition-colors">
                  {t.navRitual}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiry */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
              Stockist & Business Contact
            </h4>

            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Nirmal Shraddha Eco Works, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 98765 43210 (WhatsApp Stockist Inquiry)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>inquiry@nirmalshraddha.in</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors shadow"
              >
                {t.stockistInquiry}
              </button>
              <button
                onClick={onOpenQuiz}
                className="px-4 py-2 rounded-xl bg-indigo-900 text-amber-300 border border-amber-400/40 text-xs font-semibold hover:bg-amber-400/20 transition-colors"
              >
                {t.scentFinder}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-1 font-marathi text-amber-300">
            <span>© 2026 {t.brandName}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-1 text-slate-300">
            <span>Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>& Devotion in India 🇮🇳</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

