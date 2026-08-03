import React from 'react';
import { ShieldCheck, Flower2, Clock, Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PurityGuarantee: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t.charcoalFree,
      marathiTitle: 'कोळसामुक्त अगरबत्ती',
      desc: 'Conventional charcoal incense burns hot, producing black soot and toxic carbon monoxide that irritates lungs. Nirmal Shraddha uses natural wood powder and flower petals for clean, smooth smoke.',
      icon: ShieldCheck,
    },
    {
      title: t.recycledFlowers,
      marathiTitle: 'पवित्र निर्माल्याचा पुनर्चक्रण',
      desc: 'We collect floral offerings from temples to prevent river pollution, transforming divine roses, marigolds, and lotus petals into aromatic sacred incense.',
      icon: Flower2,
    },
    {
      title: t.depFree,
      marathiTitle: 'केमिकल व DEP मुक्त',
      desc: 'Formulated strictly without Diethyl Phthalate (DEP) or artificial burning accelerators. Safe for daily morning pooja, children, and pets.',
      icon: Sparkles,
    },
    {
      title: t.burnTimeGuarantee,
      marathiTitle: '१ तास सतत जळणारी',
      desc: 'Each stick is thick, dense, and uniformly hand-rolled to guarantee a long 1-hour burn time during your prayers and meditation sessions.',
      icon: Clock,
    },
    {
      title: 'Empowering Local Artisans',
      marathiTitle: 'महिला व कारागीर सक्षमीकरण',
      desc: 'Hand-rolled by rural women artisans who craft every stick with love, pride, and spiritual devotion, earning fair livelihood.',
      icon: Heart,
    }
  ];

  return (
    <section id="purity" className="py-20 bg-white text-slate-900 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>The Nirmal Shraddha Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            {t.purityTitle}
          </h2>
          <p className="font-marathi text-amber-800 text-base sm:text-lg font-semibold">
            {t.puritySub}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FAF7F2] border border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1E1B4E] text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-base text-indigo-950">
                    {pillar.title}
                  </h3>
                  <div className="font-marathi text-xs font-bold text-amber-700 my-1">
                    {pillar.marathiTitle}
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed mt-2">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-amber-200/60 flex items-center gap-1.5 text-[11px] font-bold text-indigo-950">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Certified Pure</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

