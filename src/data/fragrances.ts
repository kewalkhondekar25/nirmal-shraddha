import { FragranceVariant, UpcyclingStep, QuizQuestion } from '../types';

export const FRAGRANCES: FragranceVariant[] = [
  {
    id: 'khandoba-malhar',
    name: 'Khandoba Malhar',
    marathiName: 'खंडोबा मल्हार',
    tagline: 'The Fragrance Of Valor, The Experience Of Divine Strength',
    marathiTagline: 'पराक्रमाचा सुगंध, दैवी सामर्थ्याचा अनुभव',
    description: 'Inspired by Lord Khandoba of Jejuri. A majestic blend of sacred upcycled marigold flowers, turmeric (bhandara) essence, Mysorean sandalwood, and temple resins that evoke courage, protection, and divine energy.',
    story: 'Crafted as our flagship essence stick, Khandoba Malhar captures the vibrant spirit of Jejuri hill temple, where sacred yellow turmeric petals rain upon devotees. Every stick carries the divine aura of valor, purity, and spiritual elevation.',
    color: {
      primary: '#EAB308',
      accent: '#1E1B4E',
      bgGradient: 'from-amber-500/20 via-yellow-500/10 to-indigo-950/30',
      textDark: '#451A03',
    },
    notes: {
      top: [
        { name: 'Bhandara Turmeric Petals', description: 'Sacred warm yellow floral notes infused with sun-dried marigold' },
        { name: 'Golden Citrus Spark', description: 'Uplifting hint of temple orange peel' }
      ],
      heart: [
        { name: 'Sacred Temple Resin', description: 'Traditional Guggul & Benzoin upcycled flower binders' },
        { name: 'Sacred Tulsi Leaf', description: 'Purifying green herbal aroma' }
      ],
      base: [
        { name: 'Royal Sandalwood', description: 'Rich deep Mysorean chandan wood' },
        { name: 'Golden Amber', description: 'Warm lingering devotional aura' }
      ]
    },
    burnTime: '60 Minutes (1 Full Hour)',
    intensity: 5,
    mood: ['Divine Valor', 'Morning Worship', 'Protection', 'Energy Purification'],
    bestTime: 'Sunrise Pooja & Evening Aarti',
    ingredients: [
      'Recycled Temple Flower Powder (Marigold & Champa)',
      'Natural Wood Powder',
      'Bamboo Stick',
      'Rice Powder',
      'Natural Gum Resins',
      'Plant-Based Binders',
      'Bhandara & Sandalwood Fragrance Oils',
      'Selected Aromatic Herbs (DEP Free)'
    ],
    packagingHighlight: 'Gold foil accents with Lord Khandoba Jejuri Fort artwork & authentic Marathi shlokas.',
    isFlagship: true,
    boxColorTheme: 'turmeric-gold'
  },
  {
    id: 'chandan-royale',
    name: 'Chandan Royale',
    marathiName: 'शाही चंदन',
    tagline: 'Pure Mysorean Sandalwood & Sacred Bark',
    marathiTagline: 'पवित्र मैसूर चंदन आणि शांततेचा अनुभव',
    description: 'An timeless, soothing incense crafted from upcycled white temple lotus and royal sandalwood bark. Radiates deep peace, mental clarity, and meditative stillness.',
    story: 'Sandalwood has been used in Indian Vedic rituals for millennia to calm the chitter-chatter of the mind. Combined with upcycled temple lotus, Chandan Royale creates a sanctuary of inner stillness.',
    color: {
      primary: '#D97706',
      accent: '#292524',
      bgGradient: 'from-amber-700/20 via-orange-950/10 to-stone-900/30',
      textDark: '#451A03',
    },
    notes: {
      top: [
        { name: 'Mysore Sandalwood Shavings', description: 'Warm woody balsamic top note' },
        { name: 'Temple Lotus Dust', description: 'Subtle sweet aquatic floral breeze' }
      ],
      heart: [
        { name: 'Cedar Bark', description: 'Earthy grounding forest woodiness' },
        { name: 'Sacred Vetiver (Khus)', description: 'Cooling traditional Indian grass root' }
      ],
      base: [
        { name: 'White Amber', description: 'Silky smooth long-lasting resinous trail' }
      ]
    },
    burnTime: '60 Minutes',
    intensity: 4,
    mood: ['Meditation', 'Deep Peace', 'Stress Relief', 'Yoga Practice'],
    bestTime: 'Dawn & Dusk Meditation',
    ingredients: [
      'Recycled White Flower Powder',
      'Mysore Sandalwood Dust',
      'Natural Tree Resins',
      'Bamboo Core',
      'DEP-Free Oils'
    ],
    isFlagship: false,
    boxColorTheme: 'royal-indigo'
  },
  {
    id: 'temple-mogra',
    name: 'Temple Mogra',
    marathiName: 'पवित्र मोगरा',
    tagline: 'Fresh Night-Blooming Jasmine & Temple Flora',
    marathiTagline: 'निर्मल मोगरा आणि भक्तिभाव',
    description: 'Captures the intoxicating freshness of freshly picked morning jasmine (Mogra) offered at ancient South & West Indian shrines. Brightens your home with joyful spiritual energy.',
    story: 'Mogra flowers are revered as the symbol of pure love and devotion. Upcycled from daily temple garlands, this fragrance preserves the delicate nectar of midnight-blooming petals.',
    color: {
      primary: '#10B981',
      accent: '#064E3B',
      bgGradient: 'from-emerald-500/20 via-teal-950/10 to-emerald-950/30',
      textDark: '#064E3B',
    },
    notes: {
      top: [
        { name: 'Fresh Mogra Blossom', description: 'Intense sweet heady jasmine floral' },
        { name: 'Green Leaves', description: 'Crisp morning dew accord' }
      ],
      heart: [
        { name: 'Tuberose (Rajnigandha)', description: 'Rich sensual white floral warmth' },
        { name: 'Temple Tulsi', description: 'Subtle herbal sacred balance' }
      ],
      base: [
        { name: 'Natural Gum Benzoin', description: 'Sweet vanilla-like resin base' }
      ]
    },
    burnTime: '60 Minutes',
    intensity: 4,
    mood: ['Joy', 'Morning Devotion', 'Positive Vibe', 'Welcome Aura'],
    bestTime: 'Morning Pooja & Living Room Refresh',
    ingredients: [
      'Upcycled Jasmine & Marigold Petals',
      'Rajnigandha Extracts',
      'Natural Bamboo Stick',
      'Plant Binders'
    ],
    isFlagship: false,
    boxColorTheme: 'emerald-green'
  },
  {
    id: 'kasturi-divine',
    name: 'Kasturi Divine',
    marathiName: 'कस्तूरी नवरस',
    tagline: 'Sacred Herbal Musk & Ancient Spices',
    marathiTagline: 'दिव्य कस्तूरी आणि सकारात्मक ऊर्जा',
    description: 'A rich, mysterious, and uplifting herbal incense that purifies negative vibrations. Made with 100% cruelty-free plant-based Kasturi herbs and recycled floral powder.',
    story: 'Ancient texts describe Kasturi as the fragrance that resides within—encouraging self-realization and spiritual awakening. Our plant-based Kasturi uses cruelty-free botanical resins.',
    color: {
      primary: '#8B5CF6',
      accent: '#2E1065',
      bgGradient: 'from-purple-500/20 via-indigo-950/10 to-violet-950/30',
      textDark: '#2E1065',
    },
    notes: {
      top: [
        { name: 'Herbal Botanical Musk', description: 'Warm sensual cruelty-free aromatic spice' },
        { name: 'Cardamom Pod', description: 'Warm spicy citrus undertone' }
      ],
      heart: [
        { name: 'Sacred Frankincense', description: 'Ancient temple smoke resin' },
        { name: 'Clove Blossom', description: 'Protective spicy note' }
      ],
      base: [
        { name: 'Earthy Patchouli', description: 'Deep grounding root notes' }
      ]
    },
    burnTime: '60 Minutes',
    intensity: 5,
    mood: ['Aura Protection', 'Spiritual Awakening', 'Evening Calm'],
    bestTime: 'Evening Sunset Aarti',
    ingredients: [
      'Recycled Sacred Flowers',
      'Plant Kasturi Spice Blend',
      'Frankincense Gum',
      'Charcoal-Free Wood Powder'
    ],
    isFlagship: false,
    boxColorTheme: 'royal-indigo'
  },
  {
    id: 'sambrani-benzoin',
    name: 'Sambrani Benzoin',
    marathiName: 'धूप संब्राणी',
    tagline: 'Ancient Temple Resin & Disinfecting Smoke',
    marathiTagline: 'नैसर्गिक संब्राणी धूप आणि शुद्ध वातावरण',
    description: 'Recreates the traditional Havanhiti & Sambrani Dhoop experience. Cleanses the indoor atmosphere, repels harmful microbes, and fills the space with sacred temple smoke.',
    story: 'In Indian households, burning Sambrani on Friday evenings is a sacred tradition for driving away negativity and inviting Goddess Lakshmi into the home.',
    color: {
      primary: '#F97316',
      accent: '#431407',
      bgGradient: 'from-orange-500/20 via-amber-950/10 to-orange-950/30',
      textDark: '#431407',
    },
    notes: {
      top: [
        { name: 'Raw Loban & Benzoin', description: 'Dense rich aromatic balsamic resin' },
        { name: 'Camphor Essence', description: 'Cooling purifying breeze' }
      ],
      heart: [
        { name: 'Guggul Dhoop', description: 'Sacred fire offering resin' },
        { name: 'Cinnamon Bark', description: 'Comforting warm spice' }
      ],
      base: [
        { name: 'Dry Cedar & Teak Wood', description: 'Robust traditional temple wood' }
      ]
    },
    burnTime: '60 Minutes',
    intensity: 5,
    mood: ['Atmosphere Disinfection', 'Havan Vibes', 'Negativity Shield'],
    bestTime: 'Friday Pooja & Monsoon Home Cleansing',
    ingredients: [
      'Pure Sambrani Benzoin Granules',
      'Recycled Marigold & Rose Powder',
      'Camphor Extract',
      'Organic Tree Binders'
    ],
    isFlagship: false,
    boxColorTheme: 'saffron-red'
  },
  {
    id: 'gulab-mystique',
    name: 'Gulab Mystique',
    marathiName: 'राजस्थानी गुलाब',
    tagline: 'Pure Damask Rose & Vedic Essential Oils',
    marathiTagline: 'गुलाबाचा राजेशाही सुगंध आणि प्रसन्नता',
    description: 'Crafted from thousands of upcycled red and pink rose garlands collected from sacred shrines. Soft, romantic, soothing, and deeply relaxing.',
    story: 'Roses offered during divine shringar (adornment) carry immense love and prayers. We gently sun-dry these sacred petals to capture the timeless essence of Rajasthani Damask Rose.',
    color: {
      primary: '#EC4899',
      accent: '#831843',
      bgGradient: 'from-pink-500/20 via-rose-950/10 to-pink-950/30',
      textDark: '#831843',
    },
    notes: {
      top: [
        { name: 'Upcycled Damask Rose Petals', description: 'Rich velvet sweet floral fragrance' }
      ],
      heart: [
        { name: 'Geranium Oil', description: 'Fresh herbal rose nuances' },
        { name: 'Kewra Flower', description: 'Traditional Indian screwpine nectar' }
      ],
      base: [
        { name: 'Soft Sandalwood', description: 'Creamy subtle base' }
      ]
    },
    burnTime: '60 Minutes',
    intensity: 3,
    mood: ['Heart Opening', 'Serenity', 'Bedtime Calm', 'Relaxation'],
    bestTime: 'Evening Unwinding & Reading',
    ingredients: [
      'Recycled Sacred Rose Petal Powder',
      'Natural Essential Rose Oils',
      'Wood Powder',
      'Plant-Based Gum'
    ],
    isFlagship: false,
    boxColorTheme: 'rose-pink'
  },
  {
    id: 'panchamrut-sacred',
    name: 'Panchamrut Sacred',
    marathiName: 'पंचामृत सुगंध',
    tagline: 'Honey, Milk, Ghee & Divine Temple Flowers',
    marathiTagline: 'पंचामृताचे पावित्र्य आणि सणांचा आनंद',
    description: 'A rich ceremonial blend echoing the 5 holy nectars of Panchamrut. Warm, sweet, auspicious, and perfect for Diwali, Satyanarayan Pooja, and festive celebrations.',
    story: 'Panchamrut represents the sweet blessings of the Almighty. This unique fragrance harmonizes sweet vanilla resin, lotus pollen, and sacred honeyed blossom notes.',
    color: {
      primary: '#EAB308',
      accent: '#713F12',
      bgGradient: 'from-amber-400/20 via-yellow-950/10 to-amber-950/30',
      textDark: '#713F12',
    },
    notes: {
      top: [
        { name: 'Golden Honey Nectar', description: 'Sweet rich festive top note' },
        { name: 'Lotus Pollen', description: 'Sacred floral sweetness' }
      ],
      heart: [
        { name: 'Cardamom & Milk Cream', description: 'Warm soothing gourmand accent' },
        { name: 'Saffron Threads', description: 'Royal Kesar aroma' }
      ],
      base: [
        { name: 'Vanilla Benzoin Resin', description: 'Comforting warm amber glow' }
      ]
    },
    burnTime: '60 Minutes',
    intensity: 4,
    mood: ['Festive Celebration', 'Auspicious Start', 'Abundance'],
    bestTime: 'Festivals, Housewarming & Special Pooja',
    ingredients: [
      'Recycled Temple Floral Powder',
      'Kesar & Honey Aromatic Extract',
      'Natural Wood Powder',
      'DEP-Free Binders'
    ],
    isFlagship: false,
    boxColorTheme: 'turmeric-gold'
  }
];

export const UPCYCLING_STEPS: UpcyclingStep[] = [
  {
    step: 1,
    title: 'Sacred Floral Collection (निर्माल्याचे संकलन)',
    marathiTitle: 'मंदिर व नद्यांमधून निर्माल्याचे संकलन',
    description: 'We respectfully collect holy floral offerings (marigolds, roses, lotus, jasmine) from famous temples and rivers, preventing water pollution and flower degradation.',
    icon: 'Flower2',
    metric: '10,000+ kg Flowers Upcycled Monthly'
  },
  {
    step: 2,
    title: 'Hand-Sorting & Sun-Drying',
    marathiTitle: 'हाताने निवड व सूर्यप्रकाशात वाळवणे',
    description: 'Local women artisans carefully separate pristine petals from stems and dry them under warm sunlight to retain their natural aroma and sacred purity.',
    icon: 'Sun',
    metric: '100% Solar Dried'
  },
  {
    step: 3,
    title: 'Infusion with Vedic Herbs & Resins',
    marathiTitle: 'वेदिक वनौषधी व डिंक मिश्रण',
    description: 'Powdered petals are blended with natural Mysorean sandalwood, Guggul, Benzoin gum resins, and pure essential oils. Zero charcoal or synthetic toxic DEP is added.',
    icon: 'Sparkles',
    metric: '0% Charcoal & DEP Free'
  },
  {
    step: 4,
    title: 'Hand-Rolling into Eco-Sticks',
    marathiTitle: 'पर्यावरणपूरक अगरबत्तीची हाताने निर्मिती',
    description: 'Artisans roll the aromatic dough onto raw bamboo sticks. Each stick guarantees a clean 60-minute burn time that purifies your home.',
    icon: 'Clock',
    metric: '60 Mins Burn Time per Stick'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is your primary intention today?',
    marathiQuestion: 'आज तुमची मुख्य भावना किंवा संकल्प काय आहे?',
    options: [
      {
        label: 'Divine Worship & Morning Pooja',
        marathiLabel: 'दैवी पूजा व सकाळची आरती',
        subtitle: 'Seeking spiritual strength, valor & sacred temple blessings',
        value: 'pooja',
        recommendedId: 'khandoba-malhar'
      },
      {
        label: 'Meditation & Peace of Mind',
        marathiLabel: 'ध्यान व मनःशांती',
        subtitle: 'Calming stress, finding inner silence & focus',
        value: 'meditation',
        recommendedId: 'chandan-royale'
      },
      {
        label: 'Cleansing Home Aura & Negative Vibes',
        marathiLabel: 'घर व वातावरणाची शुद्धी',
        subtitle: 'Driving away bad energy with authentic temple smoke',
        value: 'cleansing',
        recommendedId: 'sambrani-benzoin'
      },
      {
        label: 'Fresh Joy & Sweet Morning Aura',
        marathiLabel: 'ताजेतवाने मोगरा वातावरण',
        subtitle: 'Brightening room fragrance with fresh jasmine flowers',
        value: 'freshness',
        recommendedId: 'temple-mogra'
      }
    ]
  },
  {
    id: 2,
    question: 'Which scent profile calls to your soul?',
    marathiQuestion: 'कोणता सुगंध तुमच्या मनाला सर्वाधिक आकर्षित करतो?',
    options: [
      {
        label: 'Warm Turmeric, Saffron & Sandalwood',
        marathiLabel: 'हळद, केशर व देवदार चंदन',
        subtitle: 'Vibrant, majestic, rich, and devotional',
        value: 'saffron',
        recommendedId: 'khandoba-malhar'
      },
      {
        label: 'Earthy Sandalwood & Cedar Bark',
        marathiLabel: 'शाही चंदन आणि लाकडी सुगंध',
        subtitle: 'Warm, woody, soothing, and timeless',
        value: 'woody',
        recommendedId: 'chandan-royale'
      },
      {
        label: 'Sweet Damask Rose & Essential Oils',
        marathiLabel: 'गुलाबाचा मधुर व राजेशाही सुगंध',
        subtitle: 'Floral, delicate, soothing, and uplifting',
        value: 'rose',
        recommendedId: 'gulab-mystique'
      },
      {
        label: 'Mystic Herbal Spices & Plant Musk',
        marathiLabel: 'जडीबुटी आणि दिव्य कस्तूरी',
        subtitle: 'Spicy, deep, exotic, and protective',
        value: 'musk',
        recommendedId: 'kasturi-divine'
      }
    ]
  }
];

export const FAQS = [
  {
    q: 'What makes Nirmal Shraddha incense sticks unique?',
    a: 'Unlike conventional incense made with toxic coal powder or synthetic chemicals, Nirmal Shraddha upcycles sacred temple flower offerings (Nirmalya) into 100% Charcoal-Free, DEP-free, non-toxic aromatic sticks. Each stick burns cleanly for 60 minutes while helping protect India’s rivers.'
  },
  {
    q: 'Why is Charcoal-Free agarbatti healthier for your home?',
    a: 'Charcoal incense creates thick black carbon soot and CO emissions that irritate eyes and lungs. Our sticks use natural wood powder, flower petals, and plant binders, producing clean, smooth, therapeutic fragrance smoke.'
  },
  {
    q: 'Is Nirmal Shraddha an e-commerce store with Add to Cart?',
    a: 'No, this website serves as the official brand showcase for Nirmal Shraddha. We partner directly with temples, retail stockists, spiritual distributors, and bulk ritual buyers. You can submit an inquiry form directly on our site.'
  },
  {
    q: 'What is the significance of Khandoba Malhar variant?',
    a: 'Khandoba Malhar is our flagship formulation inspired by Lord Khandoba of Jejuri. It blends sacred turmeric (Bhandara) petal extracts, sandalwood, and temple resins to recreate the majestic, courage-filled atmosphere of Jejuri shrines.'
  },
  {
    q: 'How long does one stick burn?',
    a: 'Each Nirmal Shraddha stick is carefully rolled to guarantee a minimum burn time of 60 minutes (1 hour) of uninterrupted aromatic bliss.'
  }
];
