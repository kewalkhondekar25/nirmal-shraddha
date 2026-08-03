import React from 'react';
import { Flame, ShieldAlert, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const RitualGuide: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      step: '01',
      title: 'Light the Tip',
      marathiTitle: 'अगरबत्तीच्या टोकाला पेटवा',
      desc: 'Light one stick at a time using a wooden matchstick or candle flame.',
    },
    {
      step: '02',
      title: '30-Second Flame Ignition',
      marathiTitle: '३० सेकंद ज्योत धरा',
      desc: 'Hold the tip directly in the flame for approximately 30 seconds for complete ignition.',
    },
    {
      step: '03',
      title: 'Gently Blow Flame Out',
      marathiTitle: 'ज्योत हलकेच विझवा',
      desc: 'Gently blow out the active flame on the tip until a glowing red ember remains.',
    },
    {
      step: '04',
      title: 'Ceramic Stand Ritual',
      marathiTitle: 'स्टैंडवर ठेवून ध्यान करा',
      desc: 'Place the stick securely on a ceramic or brass stand in a well-ventilated space.',
    }
  ];

  return (
    <section id="ritual" className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F3EEE3] text-slate-900 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300">
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.ritualBadge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            {t.ritualTitle}
          </h2>
          <p className="font-marathi text-amber-800 text-base sm:text-lg font-semibold">
            {t.ritualSub}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-amber-200 shadow-lg shadow-amber-900/5 relative space-y-3 hover:border-amber-400 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl font-black text-amber-600">
                  {s.step}
                </span>
                <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <Sparkles className="w-4 h-4" />
                </span>
              </div>

              <h3 className="font-serif font-bold text-lg text-indigo-950">
                {s.title}
              </h3>
              <div className="font-marathi text-xs font-bold text-amber-700">
                {s.marathiTitle}
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Box Printed Warning Card */}
        <div className="p-6 rounded-3xl bg-[#1E1B4E] text-white border border-amber-400/40 shadow-xl max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-lg">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-amber-300 text-base">
              {t.ritualSafetyTitle}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-marathi">
              {t.ritualSafetyText}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

