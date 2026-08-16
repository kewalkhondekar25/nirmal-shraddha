import type { Lang } from './language'

export type LocalizedText = Record<Lang, string>

export const productPricing = {
  mrp: 130,
  price: 90,
} as const

export const discountPercent = Math.round(
  ((productPricing.mrp - productPricing.price) / productPricing.mrp) * 100
)

export type Product = {
  slug: string
  file: string
  brand: string
  brandMark: LocalizedText
  productType: LocalizedText
  names: LocalizedText
  chant?: LocalizedText
  tagline: LocalizedText
  packagingLine: LocalizedText
  packagingStory: LocalizedText
  features: LocalizedText[]
  imagery: LocalizedText[]
  origin: LocalizedText
  description: LocalizedText
  essence: LocalizedText
  devotion: LocalizedText
}

export const products: Product[] = [
  {
    slug: 'ekvira-matrukrupa',
    file: 'WhatsApp Image 2026-08-04 at 07.34.37.jpeg',
    brand: 'Nirmal Shraddha®',
    brandMark: {
      English: 'Respect for sacred offerings, a legacy of fragrance.',
      Marathi: 'निर्माल्य सन्मान, सुगंधाचा वसा',
      Hindi: 'निर्माल्य का सम्मान, सुगंध की विरासत।',
    },
    productType: {
      English: 'Premium Incense Sticks',
      Marathi: 'प्रीमियम अगरबत्ती',
      Hindi: 'प्रीमियम अगरबत्ती',
    },
    names: {
      English: 'EkVira Matrukrupa',
      Marathi: 'एकवीरा मातृकृपा',
      Hindi: 'एकवीरा मातृकृपा',
    },
    chant: {
      English: 'Aai Ekvira Udo Udo',
      Marathi: 'आई एकवीरा उदो उदो',
      Hindi: 'आई एकवीरा उदो उदो',
    },
    tagline: {
      English: 'The Fragrance Of Strength, the Experience of Faith.',
      Marathi: 'शक्तीचा सुगंध, श्रद्धेचा अनुभव.',
      Hindi: 'शक्ति की सुगंध, आस्था का अनुभव।',
    },
    packagingLine: {
      English: 'Premium incense sticks made from sacred floral offerings.',
      Marathi: 'प्रीमियम अगरबत्ती — पवित्र फुलांच्या अर्पणापासून.',
      Hindi: 'प्रीमियम अगरबत्ती — पवित्र पुष्प अर्पणों से।',
    },
    packagingStory: {
      English:
        'By respectfully recycling sacred flowers offered at the feet of the Divine, we create eco-friendly incense. Every stick is an unforgettable experience of faith, purity, fragrance, and care for nature.',
      Marathi:
        'देवाचरणी अर्पण झालेल्या पवित्र फुलांचे सन्मानपूर्वक पुनर्वापर करून आम्ही पर्यावरणपूरक अगरबत्ती तयार करतो. प्रत्येक अगरबत्ती ही श्रद्धा, शुद्धता, सुगंध आणि निसर्गसंवर्धनाची अविस्मरणीय अनुभूती आहे.',
      Hindi:
        'देव चरणों में अर्पित पवित्र फूलों का सम्मानपूर्वक पुनर्चक्रण कर हम पर्यावरण-अनुकूल अगरबत्ती बनाते हैं। प्रत्येक अगरबत्ती आस्था, शुद्धता, सुगंध और प्रकृति संरक्षण का अविस्मरणीय अनुभव है।',
    },
    features: [
      {
        English: '1 hour of aromatic burning',
        Marathi: '१ तास सुगंधी ज्वलन',
        Hindi: '१ घंटे की सुगंधी जलन',
      },
      {
        English: 'Clean Fragrance',
        Marathi: 'स्वच्छ सुगंध',
        Hindi: 'स्वच्छ सुगंध',
      },
      {
        English: 'Sustainable Choice',
        Marathi: 'शाश्वत पर्याय',
        Hindi: 'टिकाऊ विकल्प',
      },
      {
        English: 'Made with Devotion',
        Marathi: 'भक्तीने तयार',
        Hindi: 'भक्ति से निर्मित',
      },
    ],
    imagery: [
      {
        English: 'Ekvira Devi Temple near Karla',
        Marathi: 'कार्ला जवळील एकवीरा देवी मंदिर',
        Hindi: 'कार्ला के निकट एकवीरा देवी मंदिर',
      },
      {
        English: 'Diyas, coconut, hibiscus and turmeric offerings',
        Marathi: 'दिवे, नारळ, जास्वंद व हळद-कुंकू अर्पण',
        Hindi: 'दीये, नारियल, गुड़हल और हल्दी-कुमकुम अर्पण',
      },
      {
        English: 'Rooster motif associated with the deity',
        Marathi: 'देवीशी संबंधित कोंबडा चिन्ह',
        Hindi: 'देवी से जुड़ा मुर्गा प्रतीक',
      },
    ],
    origin: {
      English: 'Made in India',
      Marathi: 'भारत निर्मित',
      Hindi: 'भारत में निर्मित',
    },
    description: {
      English:
        'EkVira Matrukrupa is dedicated to Goddess Ekvira — a fragrance of maternal strength and steadfast faith. Crafted from sacred Nirmalya, it is suited to morning aarti, family worship, and prayer for protective grace.',
      Marathi:
        'एकवीरा मातृकृपा देवी एकवीरांना समर्पित आहे — मातृशक्ती व अढळ श्रद्धेचा सुगंध. पवित्र निर्माल्यापासून बनवलेली ही अगरबत्ती सकाळची आरती, कौटुंबिक उपासना आणि रक्षक कृपेच्या प्रार्थनेसाठी योग्य आहे.',
      Hindi:
        'एकवीरा मातृकृपा देवी एकवीरा को समर्पित है — मातृशक्ति और अटल आस्था की सुगंध। पवित्र निर्माल्य से बनी यह अगरबत्ती सुबह की आरती, पारिवारिक पूजा और रक्षक कृपा की प्रार्थना के लिए उपयुक्त है।',
    },
    essence: {
      English: 'Warm floral strength with a sacred, grounding finish.',
      Marathi: 'उबदार फुलांची शक्ती आणि पवित्र, स्थिर शेवट.',
      Hindi: 'उष्ण पुष्प शक्ति और पवित्र, स्थिर समापन।',
    },
    devotion: {
      English: 'Best for morning aarti, home shrines, and prayers for protection.',
      Marathi: 'सकाळची आरती, घरच्या देवघरात आणि संरक्षणाच्या प्रार्थनेसाठी उत्तम.',
      Hindi: 'सुबह की आरती, घर के मंदिर और सुरक्षा की प्रार्थना के लिए उत्तम।',
    },
  },
  {
    slug: 'sainath-shraddha',
    file: 'WhatsApp Image 2026-08-04 at 07.34.36.jpeg',
    brand: 'Nirmal Shraddha®',
    brandMark: {
      English: 'Respect for sacred offerings, a boon of fragrance.',
      Marathi: 'निर्मल्याचा सन्मान, सुगंधाचे वरदान',
      Hindi: 'निर्माल्य का सम्मान, सुगंध का वरदान।',
    },
    productType: {
      English: 'Premium Incense Sticks',
      Marathi: 'प्रीमियम अगरबत्ती',
      Hindi: 'प्रीमियम अगरबत्ती',
    },
    names: {
      English: 'Sainath Shraddha',
      Marathi: 'साईनाथ श्रद्धा',
      Hindi: 'साईनाथ श्रद्धा',
    },
    chant: {
      English: 'Om Sai',
      Marathi: 'ॐ साई',
      Hindi: 'ॐ साई',
    },
    tagline: {
      English: 'The Fragrance Of Faith, the Experience of Patience.',
      Marathi: 'श्रद्धेचा सुगंध, सबुरीचा अनुभव.',
      Hindi: 'आस्था की सुगंध, सबूरी का अनुभव।',
    },
    packagingLine: {
      English: 'Premium Incense Sticks',
      Marathi: 'प्रीमियम अगरबत्ती',
      Hindi: 'प्रीमियम अगरबत्ती',
    },
    packagingStory: {
      English:
        'By respectfully recycling sacred flowers offered at the feet of God, we create eco-friendly incense sticks. Every incense stick is an unforgettable experience of faith, purity, fragrance, and nature conservation.',
      Marathi:
        'देवाचरणी अर्पण झालेल्या पवित्र फुलांचे सन्मानपूर्वक पुनर्वापर करून आम्ही पर्यावरणपूरक अगरबत्ती तयार करतो. प्रत्येक अगरबत्ती ही श्रद्धा, शुद्धता, सुगंध आणि निसर्गसंवर्धनाची अविस्मरणीय अनुभूती आहे.',
      Hindi:
        'देव चरणों में अर्पित पवित्र फूलों का सम्मानपूर्वक पुनर्चक्रण कर हम पर्यावरण-अनुकूल अगरबत्ती बनाते हैं। प्रत्येक अगरबत्ती आस्था, शुद्धता, सुगंध और प्रकृति संरक्षण का अविस्मरणीय अनुभव है।',
    },
    features: [
      {
        English: '1 hour of aromatic burning',
        Marathi: '१ तास सुगंधी ज्वलन',
        Hindi: '१ घंटे की सुगंधी जलन',
      },
      {
        English: 'Clean Fragrance',
        Marathi: 'स्वच्छ सुगंध',
        Hindi: 'स्वच्छ सुगंध',
      },
      {
        English: 'Sustainable Choice',
        Marathi: 'शाश्वत पर्याय',
        Hindi: 'टिकाऊ विकल्प',
      },
      {
        English: 'Made with Devotion',
        Marathi: 'भक्तीने तयार',
        Hindi: 'भक्ति से निर्मित',
      },
    ],
    imagery: [
      {
        English: 'Shirdi Sai Baba temple and Dwarakamai',
        Marathi: 'शिर्डी साईबाबा मंदिर व द्वारकामाई',
        Hindi: 'शिरडी साई बाबा मंदिर और द्वारकामाई',
      },
      {
        English: 'Om Sai calligraphy, diyas and hanging lamps',
        Marathi: 'ॐ साई अक्षरकला, दिवे व झुलते दिवे',
        Hindi: 'ॐ साई अक्षरकला, दीये और लटकते दीपक',
      },
      {
        English: 'Hibiscus, marigold and puja offerings',
        Marathi: 'जास्वंद, झेंडू व पूजा अर्पण',
        Hindi: 'गुड़हल, गेंदा और पूजा अर्पण',
      },
    ],
    origin: {
      English: 'Made in India',
      Marathi: 'भारत निर्मित',
      Hindi: 'भारत में निर्मित',
    },
    description: {
      English:
        'Sainath Shraddha evokes the quiet devotion of Sai — simple faith, surrender, and saburi (patience). Light it during evening prayer, meditation, or whenever you want your space to feel centered and compassionate.',
      Marathi:
        'साईनाथ श्रद्धा साईबाबांची शांत भक्ती जागवते — साधी श्रद्धा, समर्पण आणि सबुरी. संध्याकाळच्या प्रार्थनेत, ध्यानासाठी किंवा जागा स्थिर व करुणामय वाटायची असेल तेव्हा ही अगरबत्ती पेटवा.',
      Hindi:
        'साईनाथ श्रद्धा साई की शांत भक्ति जगाती है — सरल आस्था, समर्पण और सबूरी। संध्या प्रार्थना, ध्यान या जब स्थान स्थिर और करुणामय लगे, तब इसे जलाएँ।',
    },
    essence: {
      English: 'Balanced fragrance with soft wood and floral devotion.',
      Marathi: 'मृदू लाकूड व फुलांच्या भक्तीने संतुलित सुगंध.',
      Hindi: 'कोमल काष्ठ व पुष्प भक्ति से संतुलित सुगंध।',
    },
    devotion: {
      English: 'Ideal for Thursday worship, meditation, and quiet evenings.',
      Marathi: 'गुरुवारी उपासना, ध्यान आणि शांत संध्याकाळी उत्तम.',
      Hindi: 'गुरुवार की पूजा, ध्यान और शांत संध्या के लिए आदर्श।',
    },
  },
  {
    slug: 'vitthal-bhaktirang',
    file: 'WhatsApp Image 2026-08-04 at 05.42.32.jpeg',
    brand: 'Nirmal Shraddha®',
    brandMark: {
      English: 'Respect for sacred offerings, a blessing of fragrance.',
      Marathi: 'निर्माल्याचा सन्मान, सुगंधाचे वरदान',
      Hindi: 'निर्माल्य का सम्मान, सुगंध का वरदान।',
    },
    productType: {
      English: 'Premium Incense Sticks',
      Marathi: 'प्रीमियम अगरबत्ती',
      Hindi: 'प्रीमियम अगरबत्ती',
    },
    names: {
      English: 'Vitthal Bhaktirang',
      Marathi: 'विठ्ठल भक्तिरंग',
      Hindi: 'विट्ठल भक्तिरंग',
    },
    chant: {
      English: 'Ram Krishna Hari',
      Marathi: 'राम कृष्ण हरी',
      Hindi: 'राम कृष्ण हरी',
    },
    tagline: {
      English: 'The Fragrance Of Devotion, the Experience of the Divine Name.',
      Marathi: 'भक्तीचा सुगंध, हरिनामाचा अनुभव.',
      Hindi: 'भक्ति की सुगंध, हरिनाम का अनुभव।',
    },
    packagingLine: {
      English: 'Premium Incense Sticks',
      Marathi: 'प्रीमियम अगरबत्ती',
      Hindi: 'प्रीमियम अगरबत्ती',
    },
    packagingStory: {
      English:
        'Inspired by Warkari devotion, Vitthal Bhaktirang carries the colour of bhakti into everyday prayer — made by respectfully transforming sacred floral offerings into eco-conscious incense.',
      Marathi:
        'वारकरी भक्तीतून प्रेरणा घेत, विठ्ठल भक्तिरंग रोजच्या उपासनेत भक्तीचा रंग आणतो — पवित्र फुलांच्या अर्पणाचे सन्मानपूर्वक पर्यावरणपूरक अगरबत्तीत रूपांतर करून.',
      Hindi:
        'वारकरी भक्ति से प्रेरित, विट्ठल भक्तिरंग दैनिक पूजा में भक्ति का रंग लाता है — पवित्र पुष्प अर्पणों का सम्मानपूर्वक पर्यावरण-अनुकूल अगरबत्ती में रूपांतर कर।',
    },
    features: [
      {
        English: '1 hour of aromatic burning',
        Marathi: '१ तास सुगंधी ज्वलन',
        Hindi: '१ घंटे की सुगंधी जलन',
      },
      {
        English: 'Clean Fragrance',
        Marathi: 'स्वच्छ सुगंध',
        Hindi: 'स्वच्छ सुगंध',
      },
      {
        English: 'Sustainable Choice',
        Marathi: 'शाश्वत पर्याय',
        Hindi: 'टिकाऊ विकल्प',
      },
      {
        English: 'Made with Devotion',
        Marathi: 'भक्तीने तयार',
        Hindi: 'भक्ति से निर्मित',
      },
    ],
    imagery: [
      {
        English: 'Lord Vitthal silhouette and Pandharpur temple',
        Marathi: 'विठ्ठल मूर्ती छायाचित्र व पंढरपूर मंदिर',
        Hindi: 'विट्ठल छायाकृति और पंढरपुर मंदिर',
      },
      {
        English: 'Warkari devotee, paduka and veena',
        Marathi: 'वारकरी भक्त, पादुका व वीणा',
        Hindi: 'वारकरी भक्त, पादुका और वीणा',
      },
      {
        English: 'Jasmine, lotus, rudraksha and saffron flags',
        Marathi: 'मोगरा, कमळ, रुद्राक्ष व भगवे झेंडे',
        Hindi: 'मोगरा, कमल, रुद्राक्ष और भगवे झंडे',
      },
    ],
    origin: {
      English: 'Made in India',
      Marathi: 'भारत निर्मित',
      Hindi: 'भारत में निर्मित',
    },
    description: {
      English:
        'Vitthal Bhaktirang brings a bright, uplifting fragrance for Warkari-inspired devotion. It suits abhang singing, kirtan, and any ritual where joy and bhakti come together.',
      Marathi:
        'विठ्ठल भक्तिरंग वारकरी प्रेरणेने उजळ व उत्साही सुगंध देतो. अभंगगान, कीर्तन आणि जिथे आनंद व भक्ती एकत्र येतात अशा प्रत्येक विधीसाठी योग्य.',
      Hindi:
        'विट्ठल भक्तिरंग वारकरी प्रेरणा से उज्ज्वल और उत्साहवर्धक सुगंध लाता है। अभंग गायन, कीर्तन और जहाँ आनंद व भक्ति मिलते हों, वहाँ उपयुक्त।',
    },
    essence: {
      English: 'Bright floral lift with a joyful sacred trail.',
      Marathi: 'उजळ फुलांचा सुगंध आणि आनंदी पवित्र शेवट.',
      Hindi: 'उज्ज्वल पुष्प सुगंध और आनंदमय पवित्र अनुगूँज।',
    },
    devotion: {
      English: 'Perfect for Vitthal puja, kirtan, and festive gatherings.',
      Marathi: 'विठ्ठल पूजा, कीर्तन आणि सणासुदीच्या एकत्रित उपासनेसाठी परिपूर्ण.',
      Hindi: 'विट्ठल पूजा, कीर्तन और उत्सव सभाओं के लिए परिपूर्ण।',
    },
  },
  {
    slug: 'vetal-kshetrapal',
    file: 'WhatsApp Image 2026-08-04 at 07.34.37 (1).jpeg',
    brand: 'Nirmal Shraddha®',
    brandMark: {
      English: 'Respect for sacred offerings, a gift of fragrance.',
      Marathi: 'निर्मल्याचा सन्मान, सुगंधाचे वरदान',
      Hindi: 'निर्माल्य का सम्मान, सुगंध का वरदान।',
    },
    productType: {
      English: 'Premium Incense Sticks',
      Marathi: 'प्रीमियम अगरबत्ती',
      Hindi: 'प्रीमियम अगरबत्ती',
    },
    names: {
      English: 'Vetal Kshetrapal',
      Marathi: 'वेताळ क्षेत्रपाळ',
      Hindi: 'वेताल क्षेत्रपाल',
    },
    tagline: {
      English: 'The Fragrance Of Protection, the Experience of Divine Blessings.',
      Marathi: 'संरक्षणाचा सुगंध, आशीर्वादाचा अनुभव.',
      Hindi: 'सुरक्षा की सुगंध, दिव्य आशीर्वाद का अनुभव।',
    },
    packagingLine: {
      English: 'Premium Incense Sticks',
      Marathi: 'प्रीमियम अगरबत्ती',
      Hindi: 'प्रीमियम अगरबत्ती',
    },
    packagingStory: {
      English:
        'Dedicated to the guardian spirit of place, Vetal Kshetrapal is crafted from sacred Nirmalya — transforming offerings into a protective fragrance for home and threshold.',
      Marathi:
        'स्थानाच्या रक्षक भावाला समर्पित, वेताळ क्षेत्रपाळ पवित्र निर्माल्यापासून तयार होते — अर्पणाचे घर व उंबऱ्यासाठी संरक्षक सुगंधात रूपांतर.',
      Hindi:
        'स्थान के रक्षक भाव को समर्पित, वेताल क्षेत्रपाल पवित्र निर्माल्य से बनता है — अर्पण को घर और देहली के लिए संरक्षक सुगंध में बदलकर।',
    },
    features: [
      {
        English: '1 hour of aromatic burning',
        Marathi: '१ तास सुगंधी ज्वलन',
        Hindi: '१ घंटे की सुगंधी जलन',
      },
      {
        English: 'Clean Fragrance',
        Marathi: 'स्वच्छ सुगंध',
        Hindi: 'स्वच्छ सुगंध',
      },
      {
        English: 'Sustainable Choice',
        Marathi: 'शाश्वत पर्याय',
        Hindi: 'टिकाऊ विकल्प',
      },
      {
        English: 'Made with Devotion',
        Marathi: 'भक्तीने तयार',
        Hindi: 'भक्ति से निर्मित',
      },
    ],
    imagery: [
      {
        English: 'Stone temple shrine beneath a banyan tree',
        Marathi: 'वडाच्या झाडाखालील दगडी मंदिर / क्षेत्रपाल स्थान',
        Hindi: 'बरगद के नीचे पत्थर का मंदिर / क्षेत्रपाल स्थान',
      },
      {
        English: 'Lit torch, hibiscus and marigold offerings',
        Marathi: 'प्रज्वलित मशाल, जास्वंद व झेंडू अर्पण',
        Hindi: 'प्रज्वलित मशाल, गुड़हल और गेंदा अर्पण',
      },
      {
        English: 'Brass diya and sacred fire atmosphere',
        Marathi: 'पितळी दिवा व पवित्र अग्नीचा भाव',
        Hindi: 'पीतल दीया और पवित्र अग्नि का भाव',
      },
    ],
    origin: {
      English: 'Made in India',
      Marathi: 'भारत निर्मित',
      Hindi: 'भारत में निर्मित',
    },
    description: {
      English:
        'Vetal Kshetrapal is a deeper, protective incense for purifying entryways, marking dusk prayer, and creating watchful calm around the home.',
      Marathi:
        'वेताळ क्षेत्रपाळ ही उंबरे शुद्ध करण्यासाठी, संध्यकाळच्या प्रार्थनेसाठी आणि घरात जागरूक शांती निर्माण करण्यासाठी खोल व संरक्षक अगरबत्ती आहे.',
      Hindi:
        'वेताल क्षेत्रपाल देहली शुद्ध करने, संध्या प्रार्थना और घर में जागरूक शांति बनाने के लिए एक गहरी संरक्षक अगरबत्ती है।',
    },
    essence: {
      English: 'Earthy depth with a clean, protective edge.',
      Marathi: 'मातीचा खोल सुगंध आणि स्वच्छ, रक्षक भाव.',
      Hindi: 'मिट्टी जैसी गहराई के साथ स्वच्छ, रक्षक प्रभाव।',
    },
    devotion: {
      English: 'Suited to threshold rituals, dusk prayer, and home protection.',
      Marathi: 'उंबरेविधी, संध्यकाळची प्रार्थना आणि घरसंरक्षणासाठी योग्य.',
      Hindi: 'देहली अनुष्ठान, संध्या प्रार्थना और घर सुरक्षा के लिए उपयुक्त।',
    },
  },
  {
    slug: 'khandoba-malhar',
    file: 'WhatsApp Image 2026-08-04 at 05.42.32 (1).jpeg',
    brand: 'Nirmal Shraddha®',
    brandMark: {
      English: 'Respect for sacred offerings, the bliss of fragrance.',
      Marathi: 'निर्माल्याचा सन्मान, सुगंधाची सदानंद',
      Hindi: 'निर्माल्य का सम्मान, सुगंध का सदानंद।',
    },
    productType: {
      English: 'Premium Incense Sticks',
      Marathi: 'प्रीमियम अगरबत्ती',
      Hindi: 'प्रीमियम अगरबत्ती',
    },
    names: {
      English: 'Khandoba Malhar',
      Marathi: 'खंडोबा मल्हार',
      Hindi: 'खंडोबा मल्हार',
    },
    chant: {
      English: 'Yelkot Yelkot Jai Malhar',
      Marathi: 'येळकोट येळकोट जय मल्हार',
      Hindi: 'येळकोट येळकोट जय मल्हार',
    },
    tagline: {
      English: 'The Fragrance Of Valor, the Experience of Divine Strength.',
      Marathi: 'पराक्रमाचा सुगंध, दैवी सामर्थ्याचा अनुभव.',
      Hindi: 'पराक्रम की सुगंध, दैवी सामर्थ्य का अनुभव।',
    },
    packagingLine: {
      English: 'Premium Incense Sticks',
      Marathi: 'प्रीमियम अगरबत्ती',
      Hindi: 'प्रीमियम अगरबत्ती',
    },
    packagingStory: {
      English:
        'Inspired by the warrior-devotee energy of Khandoba, this incense transforms sacred floral offerings into a radiant fragrance of courage, strength, and festive devotion.',
      Marathi:
        'खंडोबांच्या योद्धा-भक्त ऊर्जेतून प्रेरणा घेत, ही अगरबत्ती पवित्र फुलांच्या अर्पणाचे धैर्य, सामर्थ्य व उत्सवी भक्तीच्या तेजस्वी सुगंधात रूपांतर करते.',
      Hindi:
        'खंडोबा की योद्धा-भक्त ऊर्जा से प्रेरित, यह अगरबत्ती पवित्र पुष्प अर्पणों को साहस, सामर्थ्य और उत्सवी भक्ति की तेजस्वी सुगंध में बदलती है।',
    },
    features: [
      {
        English: '1 hour of aromatic burning',
        Marathi: '१ तास सुगंधी ज्वलन',
        Hindi: '१ घंटे की सुगंधी जलन',
      },
      {
        English: 'Clean Fragrance',
        Marathi: 'स्वच्छ सुगंध',
        Hindi: 'स्वच्छ सुगंध',
      },
      {
        English: 'Sustainable Choice',
        Marathi: 'शाश्वत पर्याय',
        Hindi: 'टिकाऊ विकल्प',
      },
      {
        English: 'Made with Devotion',
        Marathi: 'भक्तीने तयार',
        Hindi: 'भक्ति से निर्मित',
      },
    ],
    imagery: [
      {
        English: 'Jejuri temple complex',
        Marathi: 'जेजुरी मंदिर परिसर',
        Hindi: 'जेजुरी मंदिर परिसर',
      },
      {
        English: 'Black horse, shield and Malhar iconography',
        Marathi: 'काळा घोडा, ढाल व मल्हार चिन्हे',
        Hindi: 'काला घोड़ा, ढाल और मल्हार प्रतीक',
      },
      {
        English: 'Marigold flowers and sacred bhandara turmeric',
        Marathi: 'झेंडू फुले व पवित्र भंडारा (हळद)',
        Hindi: 'गेंदा फूल और पवित्र भंडारा (हल्दी)',
      },
    ],
    origin: {
      English: 'Made in India',
      Marathi: 'भारत निर्मित',
      Hindi: 'भारत में निर्मित',
    },
    description: {
      English:
        'Khandoba Malhar offers a bold, clarifying fragrance for important beginnings, festivals of strength, and rituals that call for resolve and radiance.',
      Marathi:
        'खंडोबा मल्हार महत्त्वाच्या सुरुवाती, शक्तीच्या सण आणि निर्धार व तेज हव्या असलेल्या उपासनेसाठी ठसठशीत व स्पष्ट करणारा सुगंध देते.',
      Hindi:
        'खंडोबा मल्हार महत्वपूर्ण आरंभ, शक्ति के उत्सव और संकल्प व तेज चाहने वाले अनुष्ठानों के लिए प्रबल और स्पष्ट करने वाली सुगंध देता है।',
    },
    essence: {
      English: 'Spiced warmth with a radiant, assertive trail.',
      Marathi: 'मसालेदार उबदारपणा आणि तेजस्वी, ठसठशीत शेवट.',
      Hindi: 'मसालेदार उष्णता और तेजस्वी, प्रभावशाली अनुगूँज।',
    },
    devotion: {
      English: 'Best for Sunday worship, vows, and energetic aarti.',
      Marathi: 'रविवारी उपासना, नवस आणि उत्साही आरतीसाठी उत्तम.',
      Hindi: 'रविवार की पूजा, मनौती और उत्साही आरती के लिए उत्तम।',
    },
  },
  {
    slug: 'gaondevi-mangalam',
    file: 'WhatsApp Image 2026-08-04 at 05.42.31.jpeg',
    brand: 'Nirmal Shraddha®',
    brandMark: {
      English: 'Respect for sacred offerings, a blessing of fragrance.',
      Marathi: 'निर्माल्याचा सन्मान, सुगंधाचे वरदान',
      Hindi: 'निर्माल्य का सम्मान, सुगंध का वरदान।',
    },
    productType: {
      English: 'Premium Incense Sticks',
      Marathi: 'प्रीमियम अगरबत्ती',
      Hindi: 'प्रीमियम अगरबत्ती',
    },
    names: {
      English: 'Gaondevi Mangalam',
      Marathi: 'गावदेवी मंगलम्',
      Hindi: 'गाँवदेवी मंगलम्',
    },
    tagline: {
      English: 'The Fragrance Of Motherly Grace, the Experience of Auspiciousness.',
      Marathi: 'मातृकृपेचा सुगंध, मंगलतेचा अनुभव.',
      Hindi: 'मातृकृपा की सुगंध, मंगलता का अनुभव।',
    },
    packagingLine: {
      English: 'Premium Incense Sticks',
      Marathi: 'प्रीमियम अगरबत्ती',
      Hindi: 'प्रीमियम अगरबत्ती',
    },
    packagingStory: {
      English:
        'Gaondevi Mangalam honours the village goddess — community blessing and everyday auspiciousness — made by respectfully giving sacred floral offerings a second life as eco-friendly incense.',
      Marathi:
        'गावदेवी मंगलम् ग्रामदेवतेचा सन्मान करते — सामुदायिक आशीर्वाद व रोजची मंगलत — पवित्र फुलांच्या अर्पणाचे सन्मानपूर्वक पर्यावरणपूरक अगरबत्तीत दुसरे आयुष्य देऊन.',
      Hindi:
        'गाँवदेवी मंगलम् ग्रामदेवी का सम्मान करती है — सामुदायिक आशीर्वाद और दैनिक मंगलता — पवित्र पुष्प अर्पणों को सम्मानपूर्वक पर्यावरण-अनुकूल अगरबत्ती में नया जीवन देकर।',
    },
    features: [
      {
        English: '1 hour of aromatic burning',
        Marathi: '१ तास सुगंधी ज्वलन',
        Hindi: '१ घंटे की सुगंधी जलन',
      },
      {
        English: 'Clean Fragrance',
        Marathi: 'स्वच्छ सुगंध',
        Hindi: 'स्वच्छ सुगंध',
      },
      {
        English: 'Sustainable Choice',
        Marathi: 'शाश्वत पर्याय',
        Hindi: 'टिकाऊ विकल्प',
      },
      {
        English: 'Made with Devotion',
        Marathi: 'भक्तीने तयार',
        Hindi: 'भक्ति से निर्मित',
      },
    ],
    imagery: [
      {
        English: 'Golden-domed temple with sacred flag',
        Marathi: 'सुवर्ण कळसाचे मंदिर व ध्वज',
        Hindi: 'स्वर्ण गुंबद मंदिर और ध्वज',
      },
      {
        English: 'Deepstambh, kalash with coconut and mango leaves',
        Marathi: 'दीपस्तंभ, नारळ-पल्लव असलेला कलश',
        Hindi: 'दीपस्तंभ, नारियल-पल्लव युक्त कलश',
      },
      {
        English: 'Hibiscus, white flowers and lit incense',
        Marathi: 'जास्वंद, पांढरी फुले व प्रज्वलित अगरबत्ती',
        Hindi: 'गुड़हल, सफेद फूल और प्रज्वलित अगरबत्ती',
      },
    ],
    origin: {
      English: 'Made in India',
      Marathi: 'भारत निर्मित',
      Hindi: 'भारत में निर्मित',
    },
    description: {
      English:
        'A gentle, welcoming incense for household celebrations, new homes, and prayers for collective wellbeing — carrying the blessing of Gaondevi into everyday ritual.',
      Marathi:
        'घरच्या उत्सवांसाठी, नवीन घरासाठी आणि सामूहिक कल्याणाच्या प्रार्थनेसाठी मृदू व स्वागतशील अगरबत्ती — गावदेवीचा आशीर्वाद रोजच्या उपासनेत आणणारी.',
      Hindi:
        'घर के उत्सवों, नए घर और सामूहिक कल्याण की प्रार्थना के लिए कोमल व स्वागतशील अगरबत्ती — गाँवदेवी का आशीर्वाद दैनिक पूजा में लाने वाली।',
    },
    essence: {
      English: 'Soft auspicious florals with a welcoming glow.',
      Marathi: 'मृदू मंगल फुलांचा सुगंध आणि स्वागतशील तेज.',
      Hindi: 'कोमल मंगल पुष्प सुगंध और स्वागतशील आभा।',
    },
    devotion: {
      English: 'Lovely for housewarming, family gatherings, and village-style puja.',
      Marathi: 'गृहप्रवेश, कौटुंबिक मेळावे आणि ग्रामपूजेसाठी सुंदर.',
      Hindi: 'गृहप्रवेश, पारिवारिक सभा और ग्राम पूजा के लिए सुंदर।',
    },
  },
]

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}
