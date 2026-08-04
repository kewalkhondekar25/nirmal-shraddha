import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: 'Pandit Rameshwar Joshi',
      title: 'Head Priest, Pune Shrines',
      quote: 'Nirmal Shraddha is a blessing for our temples. Upcycling offered flower garlands into pure, natural agarbatti prevents river pollution while filling our sanctum with soothing divine fragrance.',
      rating: 5,
      variant: 'Khandoba Malhar'
    },
    {
      name: 'Ananya Kulkarni',
      title: 'Yoga & Meditation Practitioner, Mumbai',
      quote: 'Khandoba Malhar by Nirmal Shraddha is pure, fragrant, and burns so cleanly for a full hour! My meditation studio stays calm and beautifully aromatic.',
      rating: 5,
      variant: 'Chandan Royale'
    },
    {
      name: 'Suresh Rao',
      title: 'Spiritual Gift Store Owner, Nashik',
      quote: 'Khandoba Malhar box packaging is gorgeous with traditional Jejuri motifs. Our customers love the turmeric floral aroma and the fact that it supports eco-friendly flower upcycling.',
      rating: 5,
      variant: 'Khandoba Malhar'
    }
  ];

  return (
    <section className="py-20 bg-white text-slate-900 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Devotee Reverence</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            {t.testimonialsTitle}
          </h2>
          <p className="font-marathi text-amber-800 text-base sm:text-lg font-semibold">
            {t.testimonialsSub}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#FAF7F2] border border-amber-200/80 shadow-lg shadow-amber-900/5 flex flex-col justify-between space-y-6 relative hover:border-amber-400 transition-all"
            >
              <Quote className="w-10 h-10 text-amber-300/60 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-amber-200/60 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-indigo-950 text-sm">
                    {rev.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {rev.title}
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-amber-200 text-amber-900 px-2.5 py-1 rounded-full">
                  {rev.variant}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

