export interface ScentNote {
  name: string;
  description: string;
  icon?: string;
}

export interface FragranceVariant {
  id: string;
  name: string;
  marathiName: string;
  tagline: string;
  marathiTagline: string;
  description: string;
  story: string;
  color: {
    primary: string;
    accent: string;
    bgGradient: string;
    textDark: string;
  };
  notes: {
    top: ScentNote[];
    heart: ScentNote[];
    base: ScentNote[];
  };
  burnTime: string; // e.g. "60 Minutes (1 Hour)"
  intensity: number; // 1-5
  mood: string[]; // e.g. ["Devotion", "Meditation", "Purification"]
  bestTime: string; // e.g. "Early Morning Pooja"
  ingredients: string[];
  packagingHighlight?: string;
  isFlagship?: boolean;
  boxColorTheme: 'turmeric-gold' | 'royal-indigo' | 'saffron-red' | 'emerald-green' | 'rose-pink';
}

export interface UpcyclingStep {
  step: number;
  title: string;
  marathiTitle: string;
  description: string;
  icon: string;
  metric?: string;
}

export interface QuizOption {
  label: string;
  marathiLabel: string;
  subtitle: string;
  value: string;
  recommendedId: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  marathiQuestion: string;
  options: QuizOption[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: 'distributor' | 'bulk_pooja' | 'temple_supply' | 'gifting' | 'general';
  city: string;
  estimatedBoxes: string;
  message: string;
}
