import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FlavourCarousel } from './components/FlavourCarousel';
import { PackagingSpotlight } from './components/PackagingSpotlight';
import { UpcyclingStory } from './components/UpcyclingStory';
import { FragranceCatalog } from './components/FragranceCatalog';
import { FragranceDetailModal } from './components/FragranceDetailModal';
import { ScentQuizModal } from './components/ScentQuizModal';
import { PurityGuarantee } from './components/PurityGuarantee';
import { RitualGuide } from './components/RitualGuide';
import { Testimonials } from './components/Testimonials';
import { InquiryModal } from './components/InquiryModal';
import { Footer } from './components/Footer';
import { FragranceVariant } from './types';
import { FRAGRANCES } from './data/fragrances';

function MainApp() {
  const [selectedVariant, setSelectedVariant] = useState<FragranceVariant | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleOpenFlagship = () => {
    const flagship = FRAGRANCES.find(f => f.id === 'khandoba-malhar') || FRAGRANCES[0];
    setSelectedVariant(flagship);
  };

  const scrollToCatalog = () => {
    const catalogElem = document.getElementById('collection');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-slate-900 antialiased selection:bg-amber-400 selection:text-indigo-950">
      
      {/* Header Bar */}
      <Header
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreCatalog={scrollToCatalog}
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenFlagship={handleOpenFlagship}
        />

        {/* Dynamic Packaging Box Carousel */}
        <FlavourCarousel
          onSelectVariant={(variant) => setSelectedVariant(variant)}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* Flagship Khandoba Malhar Box Showcase (Focus on attached user packaging image) */}
        <PackagingSpotlight />

        {/* Sacred Temple Flower Upcycling Mission */}
        <UpcyclingStory
          onExploreCatalog={scrollToCatalog}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* Incense Sticks Showcase Catalog */}
        <FragranceCatalog
          onSelectVariant={(variant) => setSelectedVariant(variant)}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* 5 Pillars of Purity */}
        <PurityGuarantee />

        {/* Ritual Lighting & Safety Guide */}
        <RitualGuide />

        {/* Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Modals & Drawers */}
      <FragranceDetailModal
        variant={selectedVariant}
        onClose={() => setSelectedVariant(null)}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      <ScentQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectVariant={(variant) => setSelectedVariant(variant)}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

