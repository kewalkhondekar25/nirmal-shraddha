export type Language = 'en' | 'mr' | 'hi';

export interface Translations {
  // Common
  brandName: string;
  brandTagline: string;
  bannerShloka: string;
  charcoalFree: string;
  depFree: string;
  burnTimeGuarantee: string;
  recycledFlowers: string;
  madeInIndia: string;
  inquireNow: string;
  stockistInquiry: string;
  scentFinder: string;
  scentFinderFull: string;
  sacredSound: string;
  omSound: string;
  viewArtwork: string;
  close: string;
  submit: string;

  // Header Nav
  navFlagship: string;
  navStory: string;
  navCollection: string;
  navPurity: string;
  navRitual: string;

  // Hero
  heroTagline: string;
  heroTitle1: string;
  heroTitleHighlight: string;
  heroQuote: string;
  heroDescription: string;
  heroInspectBox: string;
  heroExploreFragrances: string;
  heroChimeQuiz: string;
  flagshipBoxBadge: string;
  flagshipTitle: string;
  flagshipTagline: string;

  // Packaging Spotlight
  spotlightBadge: string;
  spotlightTitle: string;
  spotlightSub: string;
  spotlightDesc: string;

  tabFullBox: string;
  tabFront: string;
  tabBack: string;
  tabIngredients: string;
  tabUsage: string;

  // Upcycling
  upcyclingBadge: string;
  upcyclingTitle: string;
  upcyclingSub: string;
  upcyclingDesc: string;
  upcyclingQuote: string;

  // Pillars
  purityTitle: string;
  puritySub: string;

  // Ritual Guide
  ritualBadge: string;
  ritualTitle: string;
  ritualSub: string;
  ritualSafetyTitle: string;
  ritualSafetyText: string;

  // Testimonials
  testimonialsBadge: string;
  testimonialsTitle: string;
  testimonialsSub: string;

  // Inquiry
  inquiryTitle: string;
  inquirySub: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  inquiryPurpose: string;
  estimatedBoxes: string;
  additionalDetails: string;
  submitInquiry: string;
  thankYouTitle: string;
  thankYouSub: string;
  thankYouText: string;

  // Quiz
  quizTitle: string;
  stepOf: string;
  retakeQuiz: string;
  viewNotes: string;
  idealMatch: string;
  recommendedRitual: string;

  // Expanded Story & Mission Content
  heroShopNow: string;
  heroLearnStory: string;

  ourStoryTitle: string;
  ourStoryP1: string;
  ourStoryP2: string;
  ourStoryP3: string;

  ourMissionTitle: string;
  ourMissionSub: string;
  ourMissionDesc: string;

  howItWorksBadge: string;
  howItWorksTitle: string;
  howStep1Title: string;
  howStep1Desc: string;
  howStep2Title: string;
  howStep2Desc: string;
  howStep3Title: string;
  howStep3Desc: string;
  howStep4Title: string;
  howStep4Desc: string;

  whyChooseUsTitle: string;
  why1: string;
  why2: string;
  why3: string;
  why4: string;
  why5: string;
  why6: string;

  ourImpactTitle: string;
  ourImpactSub: string;
  impactItem1: string;
  impactItem2: string;
  impactItem3: string;
  impactItem4: string;
  impactItem5: string;

  ourVisionTitle: string;
  ourVisionDesc: string;

  ctaTitle: string;
  ctaSub: string;
  ctaButton: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    brandName: 'Nirmal Shraddha',
    brandTagline: 'Pure Essence • Sacred Nirmalya Incense',
    bannerShloka: '"Preventing River Pollution • 100% Sacred Nirmalya Garlands" — 100% Pure & Natural Agarbatti',
    charcoalFree: '100% Sacred Nirmalya Flowers',
    depFree: '100% Pure & Natural',
    burnTimeGuarantee: '60 Minutes Burn Time',
    recycledFlowers: 'Upcycled Sacred Nirmalya',
    madeInIndia: 'Made in India 🇮🇳',
    inquireNow: 'Contact Us',
    stockistInquiry: 'Wholesale & Orders',
    scentFinder: 'Scent Finder',
    scentFinderFull: 'Scent Finder (Quiz)',
    sacredSound: 'Sacred Sound',
    omSound: 'Om Sound',
    viewArtwork: 'View Packaging',
    close: 'Close',
    submit: 'Submit Inquiry',

    navFlagship: 'Khandoba Malhar Box',
    navStory: 'Our Sacred Story',
    navCollection: 'Essence Sticks',
    navPurity: 'Purity Standard',
    navRitual: 'Ritual Guide',

    heroTagline: 'Pure Divine Fragrance • 100% Sacred Temple Nirmalya',
    heroTitle1: 'From Sacred Temple Garlands to',
    heroTitleHighlight: 'Pure Divine Natural Fragrance',
    heroQuote: '"Every day, thousands of tons of sacred Nirmalya (flowers & garlands offered to God in worship) end up in rivers and waste dumps, causing severe water pollution. Nirmal Shraddha upcycles these blessed garlands into 100% natural incense sticks—protecting our rivers while bringing pure divine fragrance into every home."',
    heroDescription: 'Instead of allowing sacred temple flower garlands to pollute our rivers, Nirmal Shraddha upcycles every petal into pure agarbatti crafted with natural herbs and 1-hour lasting fragrance.',
    heroInspectBox: 'Inspect Khandoba Malhar Box',
    heroExploreFragrances: 'Shop Now',
    heroChimeQuiz: 'Chime & Quiz',
    heroShopNow: 'Shop Now',
    heroLearnStory: 'Learn Our Story',

    flagshipBoxBadge: 'Flagship Box',
    flagshipTitle: 'Khandoba Malhar Incense Box',
    flagshipTagline: 'The Fragrance Of Valor • पराक्रमाचा सुगंध',

    spotlightBadge: 'Flagship Packaging Spotlight',
    spotlightTitle: 'Khandoba Malhar Box Showcase',
    spotlightSub: 'Khandoba Malhar — The Fragrance Of Valor, Divine Strength',
    spotlightDesc: 'Every detail of our packaging reflects Indian heritage, sacred Jejuri turmeric (bhandara) traditions, and our commitment to upcycling sacred temple Nirmalya garlands.',

    tabFullBox: 'Full Box Artwork',
    tabFront: 'Front & Shlokas',
    tabBack: 'Sacred Story & Badges',
    tabIngredients: 'Vedic Ingredients',
    tabUsage: 'How To Burn',

    upcyclingBadge: 'Sacred Nirmalya Upcycling',
    upcyclingTitle: 'Giving Holy Garlands a Fragrant New Purpose',
    upcyclingSub: 'Save sacred Nirmalya flower offerings after worship, prevent river pollution.',
    upcyclingDesc: 'Every year, thousands of tons of sacred flower garlands offered at Indian shrines are discarded into rivers, harming aquatic ecosystems. At Nirmal Shraddha, we collect these blessed Nirmalya garlands and upcycle them into pure, chemical-free agarbatti.',
    upcyclingQuote: '"Save sacred Nirmalya flower offerings after worship, protect our rivers from pollution. Nirmalya is not waste; it is God’s blessing."',

    ourStoryTitle: 'Our Story',
    ourStoryP1: 'Every day, thousands of kilograms of flower garlands are offered in temples and homes as a symbol of faith and devotion. After rituals, these sacred offerings were dumped into rivers and landfills, causing water pollution and environmental harm.',
    ourStoryP2: 'We believed these sacred offerings deserved honor instead of becoming pollution.',
    ourStoryP3: 'By collecting and carefully processing these Nirmalya garlands, we convert them into 100% natural, chemical-free incense sticks. Every stick represents devotion, river conservation, and respect for nature—turning yesterday’s prayers into tomorrow’s fragrance.',

    ourMissionTitle: 'Our Mission',
    ourMissionSub: 'Transforming Floral Pollution into Pure Incense',
    ourMissionDesc: 'Our mission is to eliminate river pollution caused by temple flower waste while creating 100% natural, chemical-free incense products that preserve the spiritual essence of every offering.',

    howItWorksBadge: 'Process',
    howItWorksTitle: 'How It Works',
    howStep1Title: '1. Nirmalya Collection',
    howStep1Desc: 'Sacred flower garlands are collected directly from temples and community poojas before reaching water bodies.',
    howStep2Title: '2. Sorting & Drying',
    howStep2Desc: 'Petals are carefully separated, cleaned, and naturally sun-dried to preserve their aroma and purity.',
    howStep3Title: '3. Pure Natural Blending',
    howStep3Desc: 'Dried Nirmalya petals are blended with natural herbs, essential oils, and organic plant-based binders.',
    howStep4Title: '4. Eco Packaging',
    howStep4Desc: 'Every product is thoughtfully packaged using eco-conscious materials and delivered with care.',

    whyChooseUsTitle: 'Why Choose Us?',
    why1: '100% Sacred Nirmalya Flowers',
    why2: '100% Pure & Natural Formula',
    why3: 'Rich, Long-Lasting 1-Hour Scent',
    why4: 'Rooted in Vedic Tradition',
    why5: 'Prevents River & Water Pollution',
    why6: 'Handmade with Devotion by Artisans',

    ourImpactTitle: 'Our Impact',
    ourImpactSub: 'Every incense stick you light helps:',
    impactItem1: 'Upcycle sacred Nirmalya garlands into pure incense',
    impactItem2: 'Prevent temple flowers from polluting rivers and landfills',
    impactItem3: 'Ensure pure, fragrant air in homes',
    impactItem4: 'Promote sustainable green living & river conservation',
    impactItem5: 'Preserve the sanctity of sacred offerings',

    ourVisionTitle: 'Vision',
    ourVisionDesc: 'We envision a future where no sacred garland becomes water pollution. By combining tradition with innovation, we strive to create pure, natural products that honor faith while caring for our rivers.',

    ctaTitle: 'Every Sacred Garland Deserves a Beautiful Second Life.',
    ctaSub: 'Join us in transforming temple flower waste into pure, natural incense. Protect our rivers while enriching your daily prayers.',
    ctaButton: 'Join Our Mission & Shop Collection',

    purityTitle: '5 Pillars of Uncompromising Purity',
    puritySub: 'Symbol of Purity, Nature Conservation and Devotion',

    ritualBadge: 'Printed Packaging Guide',
    ritualTitle: 'How to Light & Perform the Ritual',
    ritualSub: 'Incense lighting ritual and safety instructions',
    ritualSafetyTitle: 'Packaging Warning & Safety Instructions',
    ritualSafetyText: '"The incense is coated with natural herbs, which may fall off during burning. Keep the incense away from children, pets, and flammable materials. Always burn in a well-ventilated space on a non-flammable ceramic stand."',

    testimonialsBadge: 'Devotee Reverence',
    testimonialsTitle: 'Voices of Faith & Purity',
    testimonialsSub: 'Customer experiences and spiritual feedback',

    inquiryTitle: 'Partner with Nirmal Shraddha',
    inquirySub: 'Distributor & Wholesale Inquiry',
    fullName: 'Full Name',
    phone: 'Phone / WhatsApp',
    email: 'Email Address',
    city: 'City / District',
    inquiryPurpose: 'Inquiry Purpose',
    estimatedBoxes: 'Estimated Quantity (Boxes)',
    additionalDetails: 'Additional Details / Product Interest',
    submitInquiry: 'Submit Wholesale Inquiry',
    thankYouTitle: 'Dhanyawaad! (Thank You)',
    thankYouSub: 'Your inquiry has been successfully received.',
    thankYouText: 'Thank you for reaching out to Nirmal Shraddha. Our representative will contact you via WhatsApp or Email within 24 hours with product catalogs and wholesale pricing.',

    quizTitle: 'Discover Your Sacred Scent',
    stepOf: 'Step',
    retakeQuiz: 'Retake Quiz',
    viewNotes: 'View Notes',
    idealMatch: 'Your Ideal Nirmal Shraddha Match',
    recommendedRitual: 'Recommended Ritual',
  },

  mr: {
    brandName: 'निर्मल श्रद्धा',
    brandTagline: 'शुद्ध सुगंध • पवित्र मंदिर निर्माल्य अगरबत्ती',
    bannerShloka: '"नद्यांचे प्रदूषण रोखा • पवित्र मंदिर निर्माल्य" — १००% शुद्ध व सात्विक अगरबत्ती',
    charcoalFree: '१००% पवित्र मंदिर निर्माल्य',
    depFree: '१००% शुद्ध व नैसर्गिक',
    burnTimeGuarantee: '६० मिनिटे सतत जळणारी',
    recycledFlowers: 'पवित्र निर्माल्याचा पुनर्ववापर',
    madeInIndia: 'भारतात निर्मित 🇮🇳',
    inquireNow: 'संपर्क साधा',
    stockistInquiry: 'घाऊक व वितरण चौकशी',
    scentFinder: 'सुगंध शोधक',
    scentFinderFull: 'सुगंध शोधक (Scent Quiz)',
    sacredSound: 'पवित्र ध्वनी',
    omSound: 'ॐ ध्वनी',
    viewArtwork: 'बॉक्स पॅकेजिंग पाहा',
    close: 'बंद करा',
    submit: 'चौकशी पाठवा',

    navFlagship: 'खंडोबा मल्हार बॉक्स',
    navStory: 'आमची पवित्र कथा',
    navCollection: 'अगरबत्ती प्रकार',
    navPurity: 'शुद्धतेचा दर्जा',
    navRitual: 'आरती पद्धत',

    heroTagline: '१००% शुद्ध व सात्विक • १००% पवित्र मंदिर निर्माल्य',
    heroTitle1: 'देवाचरणीच्या पवित्र निर्माल्यापासून',
    heroTitleHighlight: '१००% शुद्ध व सात्विक सुगंध',
    heroQuote: '"देवघर व मंदिरांत अर्पण केलेले निर्माल्य (फुले व हार) नद्यांमध्ये कचरा बनून जलप्रदूषण निर्माण करते. निर्मल श्रद्धा या पवित्र निर्माल्याचा पुनर्चक्रण करून १००% नैसर्गिक सुगंधी अगरबत्ती तयार करते, ज्यामुळे नद्यांचे रक्षण होते व घरात शांती नांदते."',
    heroDescription: 'नद्यांमध्ये जलप्रदूषण करणाऱ्या पवित्र निर्माल्याचे पुनर्चक्रण करून आम्ही १००% शुद्ध व सात्विक सुगंधी अगरबत्ती बनवतो.',
    heroInspectBox: 'खंडोबा मल्हार बॉक्स पाहा',
    heroExploreFragrances: 'अगरबत्ती खरेदी करा',
    heroChimeQuiz: 'घंटी वाजवा व क्विझ',
    heroShopNow: 'अगरबत्ती खरेदी करा',
    heroLearnStory: 'आमची कथा जाणून घ्या',

    flagshipBoxBadge: 'मुख्य वैशिष्ट्यपूर्ण बॉक्स',
    flagshipTitle: 'खंडोबा मल्हार अगरबत्ती बॉक्स',
    flagshipTagline: 'पराक्रमाचा सुगंध, दैवी सामर्थ्याचा अनुभव',

    spotlightBadge: 'पॅकेजिंग विशेष प्रदर्शन',
    spotlightTitle: 'खंडोबा मल्हार बॉक्स डिझाइन',
    spotlightSub: 'खंडोबा मल्हार — पराक्रमाचा सुगंध, दैवी सामर्थ्याचा अनुभव',
    spotlightDesc: 'आमच्या पॅकेजिंगचा प्रत्येक भाग भारतीय संस्कृती, जेजुरीचे भांडारा (हळद) आणि निर्माल्याच्या पुनर्चक्रणाचा सन्मान करतो.',

    tabFullBox: 'संपूर्ण बॉक्स आर्टवर्क',
    tabFront: 'पुढील बाजू व श्लोक',
    tabBack: 'पवित्र कथा व बॅजेस',
    tabIngredients: 'वेदिक घटक',
    tabUsage: 'वापरण्याची पद्धत',

    upcyclingBadge: 'पवित्र निर्माल्याचा पुनर्ववापर',
    upcyclingTitle: 'पवित्र निर्माल्याला सुगंधी नवे आयुष्य',
    upcyclingSub: 'पुजनानंतरचे निर्माल्य वाचवा, नद्यांचे प्रदूषण रोखा.',
    upcyclingDesc: 'दरवर्षी भारतातील मंदिरांमध्ये अर्पण केलेली लाखो टन फुले नद्यांमध्ये विसर्जित केल्यामुळे जलप्रदूषण होते. निर्मल श्रद्धा या पवित्र निर्माल्याचे पुनर्चक्रण करून १००% शुद्ध व केमिकल-मुक्त अगरबत्ती तयार करते.',
    upcyclingQuote: '"पुजनानंतरचे निर्माल्य वाचवा, नद्यांचे प्रदूषण रोखा. निर्माल्य हा देवाचा आशीर्वाद आहे."',

    ourStoryTitle: 'आमची कथा',
    ourStoryP1: 'दररोज मंदिरांमध्ये आणि घरांमध्ये श्रद्धेचे प्रतीक म्हणून हजारो किलोग्रॅम फुलांचे हार देवाला अर्पण केले जातात. पूजेनंतर हे निर्माल्य नद्यांमध्ये फेकून दिले जाते, ज्यामुळे नद्यांचे गंभीर प्रदूषण होते.',
    ourStoryP2: 'या पवित्र निर्माल्याचे प्रदूषण होण्याऐवजी त्याला सन्मान मिळायला हवा, यावर आमचा विश्वास होता.',
    ourStoryP3: 'ही फुले व हार गोळा करून आम्ही त्यांचे १००% शुद्ध आणि केमिकल-मुक्त सुगंधी अगरबत्तीमध्ये रूपांतर करतो. प्रत्येक अगरबत्ती श्रद्धा, नदीसंवर्धन आणि निसर्गाचा आदर दर्शवते.',

    ourMissionTitle: 'आमचे ध्येय (Mission)',
    ourMissionSub: 'निर्माल्याचे प्रदूषण रोखून सुगंधी अगरबत्ती निर्मिती',
    ourMissionDesc: 'मंदिर निर्माल्यामुळे होणारे जलप्रदूषण रोखणे आणि १००% शुद्ध व केमिकल-मुक्त पर्यावरणपूरक अगरबत्ती तयार करणे हे आमचे ध्येय आहे.',

    howItWorksBadge: 'प्रक्रिया',
    howItWorksTitle: 'काम कसे चालते? (How It Works)',
    howStep1Title: '१. निर्माल्य संकलन (Collection)',
    howStep1Desc: 'नद्यांत प्रदूषण होण्यापूर्वी मंदिरे आणि पूजांमधून ताजे फुलांचे हार गोळा केले जातात.',
    howStep2Title: '२. वर्गीकरण व वाळवणे (Sorting & Drying)',
    howStep2Desc: 'पाकळ्यांची वर्गवारी करून नैसर्गिक सूर्यप्रकाशात वाळवले जाते.',
    howStep3Title: '३. शुद्ध नैसर्गिक निर्मिती (Blending)',
    howStep3Desc: 'वाळलेल्या निर्माल्यामध्ये नैसर्गिक जडीबुटी मिसळून १००% शुद्ध सुगंधी अगरबत्ती तयार केली जाते.',
    howStep4Title: '४. पॅकेजिंग (Packaging)',
    howStep4Desc: 'पर्यावरणपूरक घटकांचा वापर करून प्रत्येक उत्पादनाचे सुंदर पॅकेजिंग केले जाते.',

    whyChooseUsTitle: 'आम्हालाच का निवडावे? (Why Choose Us?)',
    why1: '१००% पवित्र मंदिर निर्माल्य',
    why2: '१००% शुद्ध आणि नैसर्गिक घटक',
    why3: 'दीर्घकाळ १ तास टिकणारा समृद्ध सुगंध',
    why4: 'वेदिक परंपरेवर आधारित',
    why5: 'नद्यांचे व पाण्याचे प्रदूषण रोखण्यास मदत',
    why6: 'स्थानिक महिलांद्वारे हस्तनिर्मित',

    ourImpactTitle: 'आमचा प्रभाव (Our Impact)',
    ourImpactSub: 'तुम्ही पेटवलेली प्रत्येक अगरबत्ती मदत करते:',
    impactItem1: 'मंदिर निर्माल्याचा पुनर्चक्रण करून अगरबत्ती बनवण्यास',
    impactItem2: 'फुले नद्यांमध्ये साचून जलप्रदूषण होण्यापासून रोखण्यास',
    impactItem3: 'घरांमध्ये प्रसन्न व पवित्र वातावरण ठेवण्यास',
    impactItem4: 'शास्तीत नदी संवर्धनाला पाठिंबा देण्यास',
    impactItem5: 'पवित्र निर्माल्याची पवित्रता जपण्यास',

    ourVisionTitle: 'दृष्टी (Vision)',
    ourVisionDesc: 'कुठलेही पवित्र निर्माल्य नद्यांचे प्रदूषण करणार नाही अशा भविष्याची आम्ही कल्पना करतो.',

    ctaTitle: 'प्रत्येक पवित्र निर्माल्याला सुगंधी नवे आयुष्य मिळायला हवे.',
    ctaSub: 'नद्यांचे प्रदूषण रोखण्याच्या आमच्या मोहिमेत सामील व्हा. १००% शुद्ध व सात्विक अगरबत्ती निवडा.',
    ctaButton: 'अगरबत्ती संग्रह पाहा',

    purityTitle: 'शुद्धतेचे ५ मुख्य स्तंभ',
    puritySub: 'शुद्धता, निसर्ग संवर्धन आणि भक्तिभावाचे प्रतीक',

    ritualBadge: 'पॅकेजिंगवर छापलेली मार्गदर्शिका',
    ritualTitle: 'अगरबत्ती कशी पेटवावी व पूजा करावी',
    ritualSub: 'अगरबत्ती लावण्याची पद्धत आणि सुरक्षितता',
    ritualSafetyTitle: 'पॅकेजिंग सूचना व सुरक्षेचा इशारा',
    ritualSafetyText: '"अगरबत्तीवर नैसर्गिक वनौषधींचा लेप असल्याने पेटवताना काही कण गळू शकतात. लहान मुले, पाळीव प्राणी व ज्वलनशील पदार्थांपासून दूर ठेवा. हवेशीर जागेत स्टैंडवरच लावावी."',

    testimonialsBadge: 'भक्तांचे अनुभव',
    testimonialsTitle: 'श्रद्धा व शुद्धतेचा अनुभव',
    testimonialsSub: 'ग्राहकांचे मनोगत व अभिप्राय',

    inquiryTitle: 'निर्मल श्रद्धा सोबत भागीदार व्हा',
    inquirySub: 'वितरक व घाऊक खरेदी चौकशी',
    fullName: 'पूर्ण नाव',
    phone: 'फोन / व्हॉट्सॲप नंबर',
    email: 'ईमेल पत्ता',
    city: 'शहर / जिल्हा',
    inquiryPurpose: 'चौकशीचा हेतू',
    estimatedBoxes: 'अंदाजे प्रमाण (बॉक्स)',
    additionalDetails: 'अतिरिक्त माहिती / उत्पादनाची आवड',
    submitInquiry: 'घाऊक चौकशी सबमिट करा',
    thankYouTitle: 'धन्यवाद!',
    thankYouSub: 'तुमची चौकशी यशस्वीपणे प्राप्त झाली आहे.',
    thankYouText: 'निर्मल श्रद्धा सोबत संपर्क साधल्याबद्दल धन्यवाद. आमचे प्रतिनिधी २४ तासांच्या आत व्हॉट्सॲप किंवा ईमेलद्वारे तुमच्याशी संपर्क साधतील.',

    quizTitle: 'तुमचा आवडता सुगंध शोधा',
    stepOf: 'टप्पा',
    retakeQuiz: 'पुन्हा क्विझ द्या',
    viewNotes: 'सुगंध घटक पाहा',
    idealMatch: 'तुमच्यासाठी योग्य निर्मल श्रद्धा अगरबत्ती',
    recommendedRitual: 'शिफारस केलेली वेळ',
  },

  hi: {
    brandName: 'निर्मल श्रद्धा',
    brandTagline: 'शुद्ध सुगंध • पवित्र मंदिर निर्माल्य अगरबत्ती',
    bannerShloka: '"नदी प्रदूषण रोकें • 100% पवित्र मंदिर निर्माल्य" — 100% शुद्ध एवं सात्विक अगरबत्ती',
    charcoalFree: '100% पवित्र मंदिर निर्माल्य',
    depFree: '100% शुद्ध एवं प्राकृतिक',
    burnTimeGuarantee: '60 मिनट निरंतर जलने वाली',
    recycledFlowers: 'मंदिर निर्माल्या का पुनर्चक्रण',
    madeInIndia: 'भारत में निर्मित 🇮🇳',
    inquireNow: 'संपर्क करें',
    stockistInquiry: 'थोक व वितरक पूछताछ',
    scentFinder: 'सुगंध खोजक',
    scentFinderFull: 'सुगंध खोजक (Scent Quiz)',
    sacredSound: 'पवित्र ध्वनि',
    omSound: 'ॐ ध्वनि',
    viewArtwork: 'बॉक्स पैकेजिंग देखें',
    close: 'बंद करें',
    submit: 'पूछताछ भेजें',

    navFlagship: 'खंडोबा मल्हार बॉक्स',
    navStory: 'हमारी पवित्र कथा',
    navCollection: 'अगरबत्ती संग्रह',
    navPurity: 'पवित्रता का मानक',
    navRitual: 'आरती विधि',

    heroTagline: '100% शुद्ध एवं पवित्र • 100% पवित्र मंदिर निर्माल्य',
    heroTitle1: 'मंदिर के पवित्र निर्माल्य से',
    heroTitleHighlight: '100% शुद्ध एवं सात्विक सुगंध',
    heroQuote: '"मंदिरों में अर्पित निर्माल्य (फूल व मालाएं) नदियों में प्रवाहित होकर जल प्रदूषण फैलाते हैं। निर्मल श्रद्धा इन पवित्र मालाओं को एकत्र कर 100% प्राकृतिक अगरबत्ती में बदलती है, जिससे जल प्रदूषण रुकता है और घर में पवित्र सुगंध फैलती है।"',
    heroDescription: 'नदियों को प्रदूषित करने वाले मंदिर के पवित्र निर्माल्य से हम 100% शुद्ध एवं सात्विक अगरबत्ती बनाते हैं।',
    heroInspectBox: 'खंडोबा मल्हार बॉक्स देखें',
    heroExploreFragrances: 'खरीदारी करें',
    heroChimeQuiz: 'घंटी बजाएं व क्विज़ लें',
    heroShopNow: 'खरीदारी करें',
    heroLearnStory: 'हमारी कहानी जानें',

    flagshipBoxBadge: 'मुख्य फ्लैगशिप बॉक्स',
    flagshipTitle: 'खंडोबा मल्हार अगरबत्ती बॉक्स',
    flagshipTagline: 'पराक्रमाचा सुगंध, दैवी सामर्थ्याचा अनुभव',

    spotlightBadge: 'पैकेजिंग विशेष प्रदर्शन',
    spotlightTitle: 'खंडोबा मल्हार बॉक्स डिजाइन',
    spotlightSub: 'खंडोबा मल्हार — पराक्रमाचा सुगंध, दैवी सामर्थ्याचा अनुभव',
    spotlightDesc: 'हमारी पैकेजिंग का हर विवरण भारतीय संस्कृति, जेजुरी के भण्डारा (हल्दी) और पुष्प पुनर्चक्रण का सम्मान करता है।',

    tabFullBox: 'संपूर्ण बॉक्स आर्टवर्क',
    tabFront: 'आगे का भाग व श्लोक',
    tabBack: 'पवित्र कथा व बैज',
    tabIngredients: 'वैदिक सामग्री',
    tabUsage: 'उपयोग विधि',

    upcyclingBadge: 'पवित्र निर्माल्य का पुनर्चक्रण',
    upcyclingTitle: 'पवित्र निर्माल्य को नया सुगंधी जीवन',
    upcyclingSub: 'पूजन के पश्चात निर्माल्य का सम्मान करें, नदी प्रदूषण रोकें।',
    upcyclingDesc: 'प्रतिवर्ष भारत के मंदिरों में अर्पित लाखों टन पुष्प मालाएं नदियों में विसर्जित कर जल प्रदूषण बढ़ाती हैं। निर्मल श्रद्धा इन पवित्र पुष्प मालाओं का पुनर्चक्रण कर 100% शुद्ध एवं सात्विक अगरबत्ती बनाती है।',
    upcyclingQuote: '"पूजन के पश्चात निर्माल्य का सम्मान करें, नदियों को प्रदूषण से बचाएं। निर्माल्य केवल कचरा नहीं, ईश्वर का आशीर्वाद है। "',

    ourStoryTitle: 'हमारी कहानी',
    ourStoryP1: 'हर दिन मंदिरों और घरों में श्रद्धा के प्रतीक के रूप में हजारों किलोग्राम फूल-मालाएं अर्पित की जाती हैं। पूजा के बाद यह निर्माल्य नदियों में बहा दिया जाता था, जिससे जल प्रदूषण होता था।',
    ourStoryP2: 'हमारा मानना था कि इन पवित्र पुष्पों को प्रदूषण बनने के बजाय सम्मान मिलना चाहिए।',
    ourStoryP3: 'इन पुष्प मालाओं को एकत्र करके हम उन्हें 100% शुद्ध एवं सात्विक अगरबत्ती में बदलते हैं।',

    ourMissionTitle: 'हमारा उद्देश्य (Our Mission)',
    ourMissionSub: 'जल प्रदूषण रोककर सुगंधी अगरबत्ती निर्माण',
    ourMissionDesc: 'मंदिर निर्माल्य से होने वाले जल प्रदूषण को समाप्त करना और 100% शुद्ध एवं सात्विक अगरबत्ती बनाना हमारा उद्देश्य है।',

    howItWorksBadge: 'प्रक्रिया',
    howItWorksTitle: 'यह कैसे काम करता है? (How It Works)',
    howStep1Title: '1. निर्माल्य संकलन (Collection)',
    howStep1Desc: 'नदियों में जाने से पहले मंदिरों से पवित्र फूल-मालाएं एकत्र की जाती हैं।',
    howStep2Title: '2. छँटाई व सुखाना (Sorting & Drying)',
    howStep2Desc: 'पंखुड़ियों की छँटाई कर उन्हें प्राकृतिक धूप में सुखाया जाता है।',
    howStep3Title: '3. शुद्ध प्राकृतिक निर्माण (Blending)',
    howStep3Desc: 'सूखे निर्माल्य में प्राकृतिक जड़ी-बूटियां मिलाकर 100% शुद्ध एवं सात्विक अगरबत्ती बनाई जाती है।',
    howStep4Title: '4. इको पैकेजिंग (Packaging)',
    howStep4Desc: 'पर्यावरण-अनुकूल सामग्री का उपयोग करके प्रत्येक उत्पाद को पैक किया जाता है।',

    whyChooseUsTitle: 'हमें क्यों चुनें? (Why Choose Us?)',
    why1: '100% पवित्र मंदिर निर्माल्य',
    why2: '100% शुद्ध एवं प्राकृतिक फॉर्मूला',
    why3: 'समृद्ध, 1 घंटे तक रहने वाली सुगंध',
    why4: 'वैदिक परंपरा से प्रेरित',
    why5: 'पुष्प कचरा व नदी प्रदूषण रोकता है',
    why6: 'महिलाओं द्वारा प्रेम से हस्तनिर्मित',

    ourImpactTitle: 'हमारा प्रभाव (Our Impact)',
    ourImpactSub: 'आपके द्वारा जलाई गई हर अगरबत्ती मदद करती है:',
    impactItem1: 'मंदिर के पवित्र निर्माल्य को शुद्ध अगरबत्ती में बदलने में',
    impactItem2: 'फूलों को नदियों में जाकर जल प्रदूषण फैलाने से रोकने में',
    impactItem3: 'घरों में पवित्र एवं सुगंधित हवा बनाए रखने में',
    impactItem4: 'टिकाऊ नदी संरक्षण को बढ़ावा देने में',
    impactItem5: 'पवित्र अर्पण की पवित्रता को बनाए रखने में',

    ourVisionTitle: 'दृष्टि (Vision)',
    ourVisionDesc: 'हम एक ऐसे भविष्य की कल्पना करते हैं जहां कोई भी पवित्र निर्माल्य जल प्रदूषण न फैलाए।',

    ctaTitle: 'हर पवित्र निर्माल्य को एक सुंदर नया जीवन मिलना चाहिए।',
    ctaSub: 'नदी प्रदूषण रोकने के हमारे मिशन में शामिल हों। 100% शुद्ध एवं सात्विक अगरबत्ती चुनें।',
    ctaButton: 'अगरबत्ती संग्रह देखें',

    purityTitle: 'शुद्धता के 5 मुख्य स्तंभ',
    puritySub: 'शुद्धता, प्रकृति संरक्षण और भक्तिभाव का प्रतीक',

    ritualBadge: 'पैकेजिंग पर छपी मार्गदर्शिका',
    ritualTitle: 'अगरबत्ती जलाने व पूजा करने की विधि',
    ritualSub: 'अगरबत्ती जलाने की विधि एवं सुरक्षा निर्देश',
    ritualSafetyTitle: 'पैकेजिंग चेतावनी व सुरक्षा निर्देश',
    ritualSafetyText: '"अगरबत्ती पर प्राकृतिक जड़ी-बूटियों का लेप होने के कारण जलते समय कुछ कण गिर सकते हैं। बच्चों, पालतू पशुओं व ज्वलनशील वस्तुओं से दूर रखें। हवादार स्थान पर स्टैंड पर ही जलाएं।"',

    testimonialsBadge: 'भक्तों के अनुभव',
    testimonialsTitle: 'श्रद्धा व शुद्धता का अनुभव',
    testimonialsSub: 'ग्राहकों के विचार व प्रतिक्रियाएं',

    inquiryTitle: 'निर्मल श्रद्धा के साथ भागीदार बनें',
    inquirySub: 'वितरक व थोक पूछताछ',
    fullName: 'पूरा नाम',
    phone: 'फोन / व्हाट्सएप नंबर',
    email: 'ईमेल पता',
    city: 'शहर / जिला',
    inquiryPurpose: 'पूछताछ का उद्देश्य',
    estimatedBoxes: 'अनुमानित मात्रा (बॉक्स)',
    additionalDetails: 'अतिरिक्त विवरण / उत्पाद में रुचि',
    submitInquiry: 'थोक पूछताछ जमा करें',
    thankYouTitle: 'धन्यवाद! (Thank You)',
    thankYouSub: 'आपकी पूछताछ सफलतापूर्वक प्राप्त हो गई है।',
    thankYouText: 'निर्मल श्रद्धा से संपर्क करने के लिए धन्यवाद। हमारे प्रतिनिधि 24 घंटे के भीतर व्हाट्सएप या ईमेल द्वारा आपसे संपर्क करेंगे।',

    quizTitle: 'अपनी मनपसंद सुगंध खोजें',
    stepOf: 'चरण',
    retakeQuiz: 'पुनः क्विज़ दें',
    viewNotes: 'सुगंध सामग्री देखें',
    idealMatch: 'आपके लिए उत्तम निर्मल श्रद्धा अगरबत्ती',
    recommendedRitual: 'अनुशंसित समय',
  }
};
