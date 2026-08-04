import { FragranceVariant, UpcyclingStep, QuizQuestion } from '../types';

import boxKhandoba from '../assets/images/box_khandoba_image_1785831995965.jpg';
import boxGaondevi from '../assets/images/box_gaondevi_mangalam_1785831671892.jpg';
import boxVitthal from '../assets/images/box_vitthal_bhaktirang_1785831714405.jpg';
import boxSainath from '../assets/images/box_sainath_shraddha_1785831745472.jpg';
import boxVetal from '../assets/images/box_vetal_kshetrapal_1785831774352.jpg';
import boxEkvira from '../assets/images/box_ekvira_matrukrupa_1785831791068.jpg';

export const FRAGRANCES: FragranceVariant[] = [
  {
    id: 'khandoba-malhar',
    name: 'Khandoba Malhar',
    marathiName: 'खंडोबा मल्हार',
    tagline: 'The Fragrance Of Valor, The Experience Of Divine Strength',
    marathiTagline: 'पराक्रमाचा सुगंध, दैवी सामर्थ्याचा अनुभव',
    marathiSlogan: 'येळकोट येळकोट जय मल्हार',
    description: 'Inspired by Lord Khandoba of Jejuri. A majestic blend of sacred upcycled marigold flowers, turmeric (bhandara) essence, Mysorean sandalwood, and temple resins that evoke courage, protection, and divine energy.',
    story: 'Crafted as our flagship essence stick, Khandoba Malhar captures the vibrant spirit of Jejuri hill temple, where sacred yellow turmeric petals rain upon devotees. Every stick carries the divine aura of valor, purity, and spiritual elevation.',
    image: boxKhandoba,
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
    burnTime: '1 Hour Aromatic Burning Stick',
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
    id: 'gaondevi-mangalam',
    name: 'Gaondevi Mangalam',
    marathiName: 'गांवदेवी मंगलम्',
    tagline: 'The Fragrance Of Motherly Grace, the Experience of Auspiciousness',
    marathiTagline: 'मातृकृपेचा सुगंध, मंगलतेचा अनुभव',
    marathiSlogan: 'निर्माल्याचा सन्मान, सुगंधाचे वरदान',
    description: 'A divine pink-themed fragrance echoing the protective motherly grace of Gramdevi shrines. Blends upcycled temple rose petals, sacred lotus pollen, and sweet floral nectar.',
    story: 'Dedicated to Goddess Gaondevi, the eternal village guardian. Every stick is lovingly hand-rolled from fresh rose garlands offered at local shrines, creating an aura of warmth, joy, and family auspiciousness.',
    image: boxGaondevi,
    color: {
      primary: '#EC4899',
      accent: '#831843',
      bgGradient: 'from-pink-500/20 via-rose-950/10 to-pink-950/30',
      textDark: '#831843',
    },
    notes: {
      top: [
        { name: 'Upcycled Rose Petals', description: 'Velvety sweet morning rose nectar' },
        { name: 'Pink Lotus Pollen', description: 'Sacred aquatic floral freshness' }
      ],
      heart: [
        { name: 'Temple Mogra Blossom', description: 'Calming white jasmine accents' },
        { name: 'Geranium Leaf', description: 'Soft herbal uplifting balance' }
      ],
      base: [
        { name: 'Sweet Benzoin Resin', description: 'Warm amber-vanilla lingering base' }
      ]
    },
    burnTime: '1 Hour Aromatic Burning Stick',
    intensity: 4,
    mood: ['Motherly Grace', 'Family Peace', 'Auspiciousness', 'Soft Joy'],
    bestTime: 'Morning Worship & Family Gatherings',
    ingredients: [
      'Recycled Temple Rose & Lotus Powder',
      'Natural Essential Oils',
      'Charcoal-Free Wood Powder',
      'Plant-Based Binders',
      'DEP-Free Perfumery'
    ],
    packagingHighlight: 'Rose magenta box with brass kalash, temple diyas & 1-hour clean burn guarantee.',
    isFlagship: false,
    boxColorTheme: 'rose-pink'
  },
  {
    id: 'vitthal-bhaktirang',
    name: 'Vitthal Bhaktirang',
    marathiName: 'विठ्ठल भक्तिरंग',
    tagline: 'The Fragrance Of Devotion, the Experience of the Divine Name',
    marathiTagline: 'भक्तीचा सुगंध, हरिनामाचा अनुभव',
    marathiSlogan: 'राम कृष्ण हरी • विठू माउली',
    description: 'Echoes the joyful bliss of the Pandharpur Wari pilgrimage. Crafted with upcycled Tulsi leaves, sandalwood, and sweet temple flowers to fill your home with blissful devotion.',
    story: 'Inspired by Lord Vitthal of Pandharpur and the sacred chanting of "Ram Krishna Hari". This fragrance captures the sweet aroma of Tulsi malas and temple offerings carried across Maharashtra.',
    image: boxVitthal,
    color: {
      primary: '#0284C7',
      accent: '#0C4A6E',
      bgGradient: 'from-sky-500/20 via-blue-950/10 to-sky-950/30',
      textDark: '#0C4A6E',
    },
    notes: {
      top: [
        { name: 'Sacred Pandharpur Tulsi', description: 'Deep purifying green herbal aroma' },
        { name: 'White Champaca', description: 'Sweet serene temple blossom' }
      ],
      heart: [
        { name: 'Chandan Shavings', description: 'Cooling Mysorean sandalwood bark' },
        { name: 'Kewra Nectar', description: 'Refreshing traditional screwpine notes' }
      ],
      base: [
        { name: 'Golden Amber', description: 'Soothing lingering devotional aura' }
      ]
    },
    burnTime: '1 Hour Aromatic Burning Stick',
    intensity: 4,
    mood: ['Pure Devotion', 'Bhajan & Chanting', 'Inner Serenity', 'Sacred Joy'],
    bestTime: 'Dusk Aarti & Kirtan Gatherings',
    ingredients: [
      'Upcycled Tulsi & White Flower Petal Powder',
      'Mysore Sandalwood Dust',
      'Natural Bamboo Core',
      'Plant-Based Binders'
    ],
    packagingHighlight: 'Sky-blue & golden box featuring Lord Vitthal, veena instrument & Pandharpur temple spire.',
    isFlagship: false,
    boxColorTheme: 'sky-blue'
  },
  {
    id: 'sainath-shraddha',
    name: 'Sainath Shraddha',
    marathiName: 'साईनाथ श्रद्धा',
    tagline: 'The Fragrance Of Faith, the Experience of Patience',
    marathiTagline: 'श्रद्धेचा सुगंध, सबुरीचा अनुभव',
    marathiSlogan: 'ॐ साई • श्रद्धा आणि सबुरी',
    description: 'Recreates the peaceful, reassuring sanctuary of Shirdi Sai Baba temple. Combines warm amber, frankincense, and upcycled marigold flowers for deep mental quietude.',
    story: 'Saint Sai Baba taught the eternal values of Faith (Shraddha) and Patience (Saburi). This golden incense stick embodies his blessings, soothing restless minds and bringing unconditional peace.',
    image: boxSainath,
    color: {
      primary: '#F97316',
      accent: '#7C2D12',
      bgGradient: 'from-amber-500/20 via-orange-950/10 to-amber-950/30',
      textDark: '#7C2D12',
    },
    notes: {
      top: [
        { name: 'Golden Marigold Petals', description: 'Warm cheerful solar floral notes' },
        { name: 'Sacred Frankincense', description: 'Deep meditative temple smoke' }
      ],
      heart: [
        { name: 'Warm Amber Resin', description: 'Comforting, rich honeyed balsamic' },
        { name: 'Cinnamon Bark', description: 'Subtle cozy spice accent' }
      ],
      base: [
        { name: 'Cedarwood', description: 'Earthy grounding forest wood base' }
      ]
    },
    burnTime: '1 Hour Aromatic Burning Stick',
    intensity: 4,
    mood: ['Faith & Patience', 'Meditation', 'Stress Relief', 'Unconditional Peace'],
    bestTime: 'Evening Meditation & Thursday Sai Pooja',
    ingredients: [
      'Recycled Shirdi Temple Offerings',
      'Pure Frankincense & Amber Gums',
      'Charcoal-Free Wood Powder',
      'Natural Essential Oils'
    ],
    packagingHighlight: 'Saffron-gold box decorated with Shirdi Sai Baba Samadhi Mandir & 3D Om Sai calligraphy.',
    isFlagship: false,
    boxColorTheme: 'turmeric-gold'
  },
  {
    id: 'vetal-kshetrapal',
    name: 'Vetal Kshetrapal',
    marathiName: 'वेताळ क्षेत्रपाल',
    tagline: 'The Fragrance Of Protection, the Experience of Divine Blessings',
    marathiTagline: 'संरक्षणाचा सुगंध, आशीर्वादाचा अनुभव',
    marathiSlogan: 'क्षेत्रपाल रक्षण • अभेद्य कवच',
    description: 'A rich, grounding, charcoal-gray incense designed for atmospheric purification and aura protection. Features earthy Vetiver (Khus), Black Guggal, and ancient forest resins.',
    story: 'Kshetrapal Vetal is revered as the ancient guardian deity who protects homes and villages from negative influences. This smoky, deep incense cleanses household energies and instills confidence.',
    image: boxVetal,
    color: {
      primary: '#64748B',
      accent: '#0F172A',
      bgGradient: 'from-slate-700/30 via-slate-900/40 to-slate-950/80',
      textDark: '#0F172A',
    },
    notes: {
      top: [
        { name: 'Cool Vetiver (Khus Root)', description: 'Earthy damp roots & forest breeze' },
        { name: 'Black Guggal Resin', description: 'Ancient protective temple smoke' }
      ],
      heart: [
        { name: 'Raw Loban', description: 'Disinfecting balsamic aromatic resin' },
        { name: 'Clove Blossom', description: 'Sharp protective herbal accent' }
      ],
      base: [
        { name: 'Smoky Cedar', description: 'Deep robust wooden foundation' }
      ]
    },
    burnTime: '1 Hour Aromatic Burning Stick',
    intensity: 5,
    mood: ['Atmosphere Cleansing', 'Protection', 'Negativity Shield', 'Deep Focus'],
    bestTime: 'Friday/Tuesday Evening Cleansing & New Moon Pooja',
    ingredients: [
      'Upcycled Sacred Bark & Dried Petal Dust',
      'Black Guggal & Loban Granules',
      'Pure Vetiver Oil',
      'Bamboo Core (0% Charcoal)'
    ],
    packagingHighlight: 'Charcoal slate gray box with stone Kshetrapal temple artwork & fiery torch graphic.',
    isFlagship: false,
    boxColorTheme: 'slate-gray'
  },
  {
    id: 'ekvira-matrukrupa',
    name: 'Ekvira Matrukrupa',
    marathiName: 'एकविरा मातृकृपा',
    tagline: 'The Fragrance Of Strength, the Experience of Faith',
    marathiTagline: 'शक्तीचा सुगंध, श्रद्धेचा अनुभव',
    marathiSlogan: 'आई एकविरा उदा उदो • कल्पवृक्ष',
    description: 'An invigorating crimson incense inspired by Goddess Ekvira of Karla Caves. Blends upcycled red hibiscus, fragrant Kewra, and spicy temple masala for vibrant energy.',
    story: 'Nestled in the Karla Caves, Aai Ekvira grants strength, prosperity, and blessings to her devotees. This deep crimson box carries the invigorating fragrance of red flowers and sacred hill breezes.',
    image: boxEkvira,
    color: {
      primary: '#DC2626',
      accent: '#450A0A',
      bgGradient: 'from-red-600/20 via-rose-950/10 to-red-950/30',
      textDark: '#450A0A',
    },
    notes: {
      top: [
        { name: 'Upcycled Red Hibiscus', description: 'Vibrant sacred crimson floral scent' },
        { name: 'Kewra Water Spray', description: 'Crisp exotic island flower nectar' }
      ],
      heart: [
        { name: 'Spiced Temple Masala', description: 'Warm cardamon & clove flower blend' },
        { name: 'Red Sandalwood', description: 'Rich traditional Rakta Chandan' }
      ],
      base: [
        { name: 'Musk Botanical Resin', description: 'Long-lasting empowering foundation' }
      ]
    },
    burnTime: '1 Hour Aromatic Burning Stick',
    intensity: 5,
    mood: ['Inner Strength', 'Power & Confidence', 'Festive Chanting', 'Devotion'],
    bestTime: 'Morning Navratri & Sunday Goddess Pooja',
    ingredients: [
      'Recycled Hibiscus & Rose Garland Petals',
      'Rakta Chandan Dust',
      'Kewra Essential Extract',
      'Natural Bamboo Core'
    ],
    packagingHighlight: 'Rich crimson box featuring Karla Caves temple, waterfall backdrop & Aai Ekvira chant.',
    isFlagship: false,
    boxColorTheme: 'saffron-red'
  }
];

export const UPCYCLING_STEPS: UpcyclingStep[] = [
  {
    step: 1,
    title: 'Sacred Floral Collection (निर्माल्याचे संकलन)',
    marathiTitle: 'मंदिर व नद्यांमधून निर्माल्याचे संकलन',
    description: 'We respectfully collect holy floral offerings (marigolds, roses, lotus, jasmine) from famous temples and rivers, preventing water pollution and flower degradation.',
    icon: 'Flower2',
    metric: '10,000+ kg Flowers Saved Monthly'
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
        label: 'Valor, Courage & Morning Pooja',
        marathiLabel: 'पराक्रम, शौर्य व सकाळची आरती',
        subtitle: 'Khandoba Jejuri blessings for courage and divine energy',
        value: 'pooja',
        recommendedId: 'khandoba-malhar'
      },
      {
        label: 'Auspiciousness & Family Well-being',
        marathiLabel: 'मातृकृपा, मंगलता व कौटुंबिक शांती',
        subtitle: 'Gaondevi blessings with soft rose & lotus blossom',
        value: 'auspicious',
        recommendedId: 'gaondevi-mangalam'
      },
      {
        label: 'Pure Devotion & Chanting (Ram Krishna Hari)',
        marathiLabel: 'भक्ती, नामस्मरण व विठू माऊली आशीर्वाद',
        subtitle: 'Pandharpur Wari vibes with sacred Tulsi & Chandan',
        value: 'devotion',
        recommendedId: 'vitthal-bhaktirang'
      },
      {
        label: 'Faith, Patience & Mental Serenity',
        marathiLabel: 'श्रद्धा, सबुरी व मनःशांती',
        subtitle: 'Shirdi Sai Baba blessings with golden amber & frankincense',
        value: 'faith',
        recommendedId: 'sainath-shraddha'
      }
    ]
  },
  {
    id: 2,
    question: 'Which sacred aura or fragrance profile speaks to you?',
    marathiQuestion: 'कोणता दैवी सुगंध किंवा ऊर्जा तुम्हाला हवी आहे?',
    options: [
      {
        label: 'Earthy Protection & Atmospheric Cleansing',
        marathiLabel: 'क्षेत्रपाल रक्षण व ऋणात्मक ऊर्जा निर्मूलन',
        subtitle: 'Kshetrapal Vetal with Vetiver (Khus) & Black Guggal',
        value: 'protection',
        recommendedId: 'vetal-kshetrapal'
      },
      {
        label: 'Inner Strength & Goddess Shakti',
        marathiLabel: 'देवी एकविरा शक्ती व उत्साह',
        subtitle: 'Aai Ekvira with Red Hibiscus & Temple Kewra',
        value: 'strength',
        recommendedId: 'ekvira-matrukrupa'
      },
      {
        label: 'Bhandara Turmeric & Mysorean Sandalwood',
        marathiLabel: 'भंडारा हळद व मैसूर चंदन',
        subtitle: 'Regal Jejuri temple turmeric aura',
        value: 'saffron',
        recommendedId: 'khandoba-malhar'
      },
      {
        label: 'Sacred Tulsi & Pandharpur Lotus',
        marathiLabel: 'पवित्र तुळस व पांढरा कमळ',
        subtitle: 'Calm, meditative, pure devotion',
        value: 'tulsi',
        recommendedId: 'vitthal-bhaktirang'
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
    q: 'What are the 6 authentic fragrance variants in the Nirmal Shraddha collection?',
    a: 'Our collection includes: 1) Khandoba Malhar (Valor & Strength), 2) Gaondevi Mangalam (Motherly Grace & Auspiciousness), 3) Vitthal Bhaktirang (Devotion & Tulsi), 4) Sainath Shraddha (Faith & Patience), 5) Vetal Kshetrapal (Protection & Vetiver), and 6) Ekvira Matrukrupa (Strength & Hibiscus).'
  },
  {
    q: 'Is Nirmal Shraddha an e-commerce store with Add to Cart?',
    a: 'No, this website serves as the official brand showcase for Nirmal Shraddha. We partner directly with temples, retail stockists, spiritual distributors, and bulk ritual buyers. You can submit an inquiry form directly on our site.'
  },
  {
    q: 'How long does one stick burn?',
    a: 'Each Nirmal Shraddha stick is carefully rolled to guarantee a minimum burn time of 1 full hour (60 minutes) of uninterrupted aromatic bliss.'
  }
];
