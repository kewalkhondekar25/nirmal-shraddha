import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, RotateCcw, ArrowRight, PhoneCall } from 'lucide-react';
import { QUIZ_QUESTIONS, FRAGRANCES } from '../data/fragrances';
import { FragranceVariant } from '../types';
import { playTempleBell } from '../utils/audioSynth';

interface ScentQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVariant: (variant: FragranceVariant) => void;
  onOpenInquiry: () => void;
}

export const ScentQuizModal: React.FC<ScentQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectVariant,
  onOpenInquiry
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [resultVariant, setResultVariant] = useState<FragranceVariant | null>(null);

  if (!isOpen) return null;

  const handleOptionSelect = (qId: number, recId: string, value: string) => {
    playTempleBell();
    const updated = { ...selectedAnswers, [qId]: value };
    setSelectedAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate recommended variant
      const matched = FRAGRANCES.find(f => f.id === recId) || FRAGRANCES[0];
      setResultVariant(matched);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setResultVariant(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#191638] text-white rounded-3xl overflow-hidden shadow-2xl border border-amber-400/40 my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-950 p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-950" />
            <h3 className="font-serif font-bold text-lg text-slate-950">
              Discover Your Sacred Scent • तुमची सुगंधी अगरबत्ती
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-950/20 text-slate-950 hover:bg-slate-950/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quiz Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {!resultVariant ? (
            <div>
              {/* Question Step Indicator */}
              <div className="flex items-center justify-between text-xs text-amber-300 mb-4 font-semibold">
                <span>Step {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
                <span className="font-marathi">निर्मल श्रद्धा क्विझ</span>
              </div>

              {/* Question */}
              <div className="space-y-1 mb-6">
                <h4 className="font-serif text-xl font-bold text-white">
                  {QUIZ_QUESTIONS[currentStep].question}
                </h4>
                <p className="font-marathi text-amber-300 text-sm">
                  {QUIZ_QUESTIONS[currentStep].marathiQuestion}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(QUIZ_QUESTIONS[currentStep].id, option.recommendedId, option.value)}
                    className="w-full text-left p-4 rounded-2xl bg-indigo-950/80 border border-amber-500/30 hover:border-amber-400 hover:bg-indigo-900/90 transition-all duration-200 group flex items-start justify-between gap-3 shadow-md"
                  >
                    <div>
                      <div className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                        {option.label}
                      </div>
                      <div className="font-marathi text-xs text-amber-400 my-0.5">
                        {option.marathiLabel}
                      </div>
                      <div className="text-[11px] text-slate-300">
                        {option.subtitle}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Recommendation Card */
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/40">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Your Ideal Nirmal Shraddha Match</span>
              </div>

              <div className="p-6 rounded-3xl bg-gradient-to-b from-amber-500/20 via-yellow-500/10 to-indigo-950 border-2 border-amber-400 space-y-4">
                <span className="font-marathi text-amber-400 font-bold text-sm block">
                  {resultVariant.marathiName} • {resultVariant.marathiTagline}
                </span>

                <h3 className="font-serif text-3xl font-extrabold text-white">
                  {resultVariant.name}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed max-w-lg mx-auto">
                  {resultVariant.description}
                </p>

                <div className="p-3 rounded-xl bg-indigo-950/90 border border-amber-400/30 text-xs text-amber-200 font-medium">
                  <strong>Recommended Ritual:</strong> {resultVariant.bestTime} ({resultVariant.burnTime})
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={resetQuiz}
                  className="px-4 py-2.5 rounded-xl border border-amber-500/30 text-amber-300 text-xs font-semibold hover:bg-amber-500/10 transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onSelectVariant(resultVariant);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-indigo-900 border border-amber-400 text-amber-300 font-bold text-xs hover:bg-amber-400 hover:text-indigo-950 transition-all"
                >
                  View Notes
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenInquiry();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs hover:scale-105 transition-all shadow-lg shadow-amber-500/20 flex items-center gap-1.5"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Inquire for Stock</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
