import React from 'react';
import { Flame, Heart, MapPin, Phone, Mail } from 'lucide-react';
import brandLogoImg from '../assets/images/brand_logo_symbol_1785835748647.jpg';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface FooterProps {
  onOpenInquiry: () => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onOpenQuiz }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1A0E08] text-white border-t border-amber-500/30 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Indian Motif Pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-amber-900/50">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-amber-400 p-0.5 shadow-lg shadow-amber-500/20 bg-amber-950/80 overflow-hidden shrink-0">
                <img
                  src={brandLogoImg}
                  alt="Nirmal Shraddha Brand Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
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
              Contact & WhatsApp
            </h4>

            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Nirmal Shraddha Eco Works, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/917304071999" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 font-bold underline">
                  +91 7304071999 (WhatsApp Contact)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>contact@nirmalshraddha.in</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/917304071999?text=Hello%20Nirmal%20Shraddha%2C%20I%20want%20to%20know%20more%20about%20your%20charcoal-free%20incense%20boxes."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors shadow flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
              <button
                onClick={onOpenInquiry}
                className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors shadow"
              >
                Contact Form
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

