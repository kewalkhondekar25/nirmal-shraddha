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
    brandTagline: 'Pure Essence • Sacred Upcycled Incense',
    bannerShloka: '"Honoring Sacred Flowers, Blessed with Divine Fragrance" — Sacred Temple Flower Agarbatti',
    charcoalFree: '100% Charcoal-Free',
    depFree: '0% DEP & Chemicals',
    burnTimeGuarantee: '60 Minutes Burn Time',
    recycledFlowers: 'Upcycled Temple Petals',
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

    heroTagline: '100% Upcycled Sacred Temple Flowers',
    heroTitle1: 'From Sacred Flowers to',
    heroTitleHighlight: 'Lasting Fragrance',
    heroQuote: '"We transform flowers offered in temples and during poojas into premium handcrafted incense sticks, giving every offering a meaningful second life. Instead of ending up as waste, these sacred flowers are recycled into natural fragrances that bring peace, positivity, and sustainability into every home."',
    heroDescription: 'We transform flowers offered in temples and during poojas into premium handcrafted incense sticks, giving every offering a meaningful second life. Instead of ending up as waste, these sacred flowers are recycled into natural fragrances that bring peace, positivity, and sustainability into every home.',
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
    spotlightDesc: 'Every detail of our packaging reflects Indian heritage, sacred Jejuri turmeric (bhandara) traditions, and our commitment to upcycling sacred temple flowers.',

    tabFullBox: 'Full Box Artwork',
    tabFront: 'Front & Shlokas',
    tabBack: 'Sacred Story & Badges',
    tabIngredients: 'Vedic Ingredients',
    tabUsage: 'How To Burn',

    upcyclingBadge: 'Sacred Flower Upcycling',
    upcyclingTitle: 'Giving Holy Flowers a Fragrant New Life',
    upcyclingSub: 'Save sacred Nirmalya offerings after worship, save nature.',
    upcyclingDesc: 'Every year, thousands of tons of sacred flowers offered at Indian shrines are discarded into rivers. At Nirmal Shraddha, we collect these blessed flowers and upcycle them into pure, eco-friendly agarbatti.',
    upcyclingQuote: '"Save sacred flower offerings after worship, protect nature. Nirmalya is not waste; it is God’s blessing."',

    ourStoryTitle: 'Our Story',
    ourStoryP1: 'Every day, thousands of kilograms of flowers are offered in temples and homes as a symbol of faith and devotion. After the rituals, many of these flowers are discarded, creating unnecessary waste and environmental pollution.',
    ourStoryP2: 'We believed these sacred offerings deserved better.',
    ourStoryP3: 'By collecting and carefully processing these flowers, we convert them into beautifully fragrant incense sticks. Every stick represents devotion, sustainability, and respect for nature—turning yesterday’s prayers into tomorrow’s fragrance.',

    ourMissionTitle: 'Our Mission',
    ourMissionSub: 'Giving Sacred Offerings a Second Life',
    ourMissionDesc: 'Our mission is to reduce floral waste while creating eco-friendly incense products that preserve the spiritual essence of every offering. Through innovation and sustainable practices, we aim to protect the environment without compromising tradition.',

    howItWorksBadge: 'Process',
    howItWorksTitle: 'How It Works',
    howStep1Title: '1. Collection',
    howStep1Desc: 'Fresh flowers are collected from temples and community poojas before they become waste.',
    howStep2Title: '2. Sorting & Drying',
    howStep2Desc: 'Flowers are carefully sorted, cleaned, and naturally dried to preserve their aroma and quality.',
    howStep3Title: '3. Crafting',
    howStep3Desc: 'The dried petals are blended with natural herbs, essential oils, and plant-based binders to create premium incense sticks.',
    howStep4Title: '4. Packaging',
    howStep4Desc: 'Every product is thoughtfully packaged using eco-conscious materials and delivered with care.',

    whyChooseUsTitle: 'Why Choose Us?',
    why1: 'Recycled Temple Flowers',
    why2: 'Eco-Friendly & Sustainable',
    why3: 'Rich, Long-Lasting Fragrance',
    why4: 'Inspired by Tradition',
    why5: 'Reduces Floral Waste',
    why6: 'Handmade with Care',

    ourImpactTitle: 'Our Impact',
    ourImpactSub: 'Every incense stick you light helps:',
    impactItem1: 'Reduce temple flower waste',
    impactItem2: 'Prevent flowers from polluting rivers and landfills',
    impactItem3: 'Support a circular eco-friendly economy',
    impactItem4: 'Promote sustainable green living',
    impactItem5: 'Preserve the sanctity of sacred offerings',

    ourVisionTitle: 'Vision',
    ourVisionDesc: 'We envision a future where no sacred flower becomes waste. By combining tradition with innovation, we strive to create products that honor faith while caring for our planet.',

    ctaTitle: 'Every Prayer Deserves a Beautiful Second Life.',
    ctaSub: 'Join us in transforming devotion into sustainability. Choose incense that carries both fragrance and purpose.',
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
    brandTagline: 'शुद्ध सुगंध • मंदिर निर्माल्याची अगरबत्ती',
    bannerShloka: '"निर्माल्याचा सन्मान, सुगंधीचे वरदान" — पवित्र मंदिर निर्माल्यापासून बनवलेली अगरबत्ती',
    charcoalFree: '१००% कोळसामुक्त',
    depFree: '०% विषारी केमिकल्स',
    burnTimeGuarantee: '६० मिनिटे सतत जळणारी',
    recycledFlowers: 'मंदिर निर्माल्याचा पुनर्ववापर',
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

    heroTagline: '१००% मंदिर निर्माल्यापासून बनवलेली पर्यावरणपूरक अगरबत्ती',
    heroTitle1: 'देवाचरणीच्या पवित्र फुलांपासून',
    heroTitleHighlight: 'दीर्घकाळ टिकणारा सुवास',
    heroQuote: '"आम्ही मंदिरांमध्ये आणि पूजेदरम्यान अर्पण केलेल्या फुलांचे सुगंधी अगरबत्तीमध्ये रूपांतर करतो. कचरा होण्याऐवजी, या पवित्र फुलांचे पुनर्चक्रण करून नैसर्गिक सुगंध तयार केला जातो जो प्रत्येक घरात शांती आणि समृद्धी आणतो."',
    heroDescription: 'आम्ही मंदिरांमध्ये आणि पूजेदरम्यान अर्पण केलेल्या फुलांचे सुगंधी अगरबत्तीमध्ये रूपांतर करतो. कचरा होण्याऐवजी, या पवित्र फुलांचे पुनर्चक्रण करून नैसर्गिक सुगंध तयार केला जातो जो प्रत्येक घरात शांती आणि समृद्धी आणतो.',
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
    upcyclingTitle: 'पवित्र फुलांना सुगंधी नवे आयुष्य',
    upcyclingSub: 'पुजनानंतरचे निर्माल्य वाचवा, निसर्ग वाचवा.',
    upcyclingDesc: 'दरवर्षी भारतातील मंदिरांमध्ये अर्पण केलेली लाखो टन फुले नद्यांमध्ये विसर्जित केली जातात. निर्मल श्रद्धा या पवित्र फुलांचे पुनर्चक्रण करून पर्यावरणपूरक अगरबत्ती तयार करते.',
    upcyclingQuote: '"पुजनानंतरचे निर्माल्य वाचवा, निसर्ग वाचवा. निर्माल्य हा देवाचा आशीर्वाद आहे."',

    ourStoryTitle: 'आमची कथा',
    ourStoryP1: 'दररोज मंदिरांमध्ये आणि घरांमध्ये श्रद्धेचे प्रतीक म्हणून हजारो किलोग्रॅम फुले देवाला अर्पण केली जातात. पूजेनंतर ही अनेक फुले फेकून दिली जातात, ज्यामुळे अनावश्यक कचरा आणि पर्यावरणीय प्रदूषण निर्माण होते.',
    ourStoryP2: 'या पवित्र निर्माल्याला अधिक चांगला सन्मान मिळायला हवा, यावर आमचा विश्वास होता.',
    ourStoryP3: 'ही फुले गोळा करून आणि त्यांची काळजीपूर्वक प्रक्रिया करून आम्ही त्यांचे सुगंधी अगरबत्तीमध्ये रूपांतर करतो. प्रत्येक अगरबत्ती श्रद्धा, निसर्गसंवर्धन आणि पर्यावरणाचा आदर दर्शवते — कालच्या प्रार्थनांचे आजच्या सुगंधात रूपांतर करते.',

    ourMissionTitle: 'आमचे ध्येय (Mission)',
    ourMissionSub: 'पवित्र निर्माल्याला सुगंधी नवे आयुष्य देणे',
    ourMissionDesc: 'प्रत्येक पूजेचा आध्यात्मिक आत्मा जपत पर्यावरणपूरक अगरबत्ती तयार करणे आणि मंदिर निर्माल्याचा कचरा कमी करणे हे आमचे ध्येय आहे. नवनिर्मिती आणि शाश्वत उपक्रमांद्वारे आम्ही परंपरेशी तडजोड न करता पर्यावरणाचे रक्षण करण्याचे उद्दिष्ट ठेवतो.',

    howItWorksBadge: 'प्रक्रिया',
    howItWorksTitle: 'काम कसे चालते? (How It Works)',
    howStep1Title: '१. संकलन (Collection)',
    howStep1Desc: 'मंदिरे आणि सार्वजनिक पूजांमधून ताजी फुले कचरा होण्यापूर्वी गोळा केली जातात.',
    howStep2Title: '२. वर्गीकरण व वाळवणे (Sorting & Drying)',
    howStep2Desc: 'फुलांचा नैसर्गिक सुगंध टिकवून ठेवण्यासाठी त्यांची नीट वर्गवारी, स्वच्छता आणि नैसर्गिक वाळवण केली जाते.',
    howStep3Title: '३. निर्मिती (Crafting)',
    howStep3Desc: 'वाळलेल्या पाकळ्यांमध्ये नैसर्गिक जडीबुटी, सुगंधी तेले आणि वनस्पतीजन्य बायंडर्स मिसळून उत्तम अगरबत्ती तयार केली जाते.',
    howStep4Title: '४. पॅकेजिंग (Packaging)',
    howStep4Desc: 'पर्यावरणपूरक घटकांचा वापर करून प्रत्येक उत्पादनाचे सुंदर पॅकेजिंग केले जाते.',

    whyChooseUsTitle: 'आम्हालाच का निवडावे? (Why Choose Us?)',
    why1: 'मंदिर निर्माल्याचा पुनर्ववापर',
    why2: 'पर्यावरणपूरक व शाश्वत',
    why3: 'दीर्घकाळ टिकणारा समृद्ध सुगंध',
    why4: 'वेदिक परंपरेवर आधारित',
    why5: 'नद्यांचे प्रदूषण रोखण्यास मदत',
    why6: 'स्थानिक महिलांद्वारे हस्तनिर्मित',

    ourImpactTitle: 'आमचा प्रभाव (Our Impact)',
    ourImpactSub: 'तुम्ही पेटवलेली प्रत्येक अगरबत्ती मदत करते:',
    impactItem1: 'मंदिर निर्माल्याचा कचरा कमी करण्यास',
    impactItem2: 'फुले नद्यांमध्ये आणि लँडफिलमध्ये साचण्यापासून रोखण्यास',
    impactItem3: 'पर्यावरणपूरक चक्राला (Circular Economy) पाठिंबा देण्यास',
    impactItem4: 'शाश्वत आणि हरित जीवनशैलीला प्रोत्साहन देण्यास',
    impactItem5: 'पवित्र निर्माल्याची पवित्रता जपण्यास',

    ourVisionTitle: 'दृष्टी (Vision)',
    ourVisionDesc: 'कुठलेही पवित्र निर्माल्य कचरा होणार नाही अशा भविष्याची आम्ही कल्पना करतो. परंपरेची आणि आधुनिक तंत्रज्ञानाची सांगड घालून आम्ही निसर्गाची काळजी घेणारी उत्पादने तयार करतो.',

    ctaTitle: 'प्रत्येक प्रार्थनेला सुगंधी नवे आयुष्य मिळायला हवे.',
    ctaSub: 'भक्तीचे पर्यावरणात रूपांतर करण्याच्या आमच्या मोहिमेत सामील व्हा. असा सुगंध निवडा ज्यामध्ये भक्ती आणि उद्देश दोन्ही आहे.',
    ctaButton: 'अगरबत्ती संग्रह पाहा',

    purityTitle: 'शुद्धतेचे ५ मुख्य स्तंभ',
    puritySub: 'शुद्धता, निसर्ग संवर्धन आणि भक्तिभावाचे प्रतीक',

    ritualBadge: 'पॅकेजिंगवर छापलेली मार्गदर्शिका',
    ritualTitle: 'अगरबत्ती कशी पेटवावी व पूजा करावी',
    ritualSub: 'अगरबत्ती लावण्याची पद्धत आणि सुरक्षितता',
    ritualSafetyTitle: 'पॅकेजिंग सूचना व सुरक्षेचा इशारा',
    ritualSafetyText: '"अगरबत्तीवर नैसर्गिक वनौषधींचा लेप असल्याने पेटवताना काही कण गळू शकतात. लहान मुले, पाळीव प्राणी व ज्वलनशील पदार्थांपासून दूर ठेवा. हवेशीर जागेत चिकणमातीच्या/मेटलच्या स्टैंडवरच लावावी."',

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
    brandTagline: 'शुद्ध सुगंध • मंदिर पुष्प से निर्मित अगरबत्ती',
    bannerShloka: '"निर्माल्याचा सन्मान, सुगंध का वरदान" — पवित्र मंदिर पुष्पों से निर्मित पर्यावरण-अनुकूल अगरबत्ती',
    charcoalFree: '100% कोयला-मुक्त (Charcoal Free)',
    depFree: '0% विषैले रसायन व DEP',
    burnTimeGuarantee: '60 मिनट निरंतर जलने वाली',
    recycledFlowers: 'मंदिर पुष्पों का पुनर्चक्रण',
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

    heroTagline: '100% पवित्र मंदिर पुष्पों से निर्मित अगरबत्ती',
    heroTitle1: 'मंदिर के पवित्र पुष्पों से',
    heroTitleHighlight: 'दीर्घकालिक सुगंध',
    heroQuote: '"हम मंदिरों और पूजा के दौरान अर्पित किए गए फूलों को प्रीमियम हस्तनिर्मित अगरबत्तियों में बदलते हैं, जिससे हर अर्पण को एक अर्थपूर्ण नया जीवन मिलता है। कचरा बनने के बजाय, इन पवित्र फूलों का पुनर्चक्रण प्राकृतिक सुगंधों में किया जाता है जो हर घर में शांति, सकारात्मकता और पर्यावरण-अनुकूलता लाते हैं।"',
    heroDescription: 'हम मंदिरों और पूजा के दौरान अर्पित किए गए फूलों को प्रीमियम हस्तनिर्मित अगरबत्तियों में बदलते हैं, जिससे हर अर्पण को एक अर्थपूर्ण नया जीवन मिलता है। कचरा बनने के बजाय, इन पवित्र फूलों का पुनर्चक्रण प्राकृतिक सुगंधों में किया जाता है जो हर घर में शांति, सकारात्मकता और पर्यावरण-अनुकूलता लाते हैं।',
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

    upcyclingBadge: 'पवित्र पुष्पों का पुनर्चक्रण',
    upcyclingTitle: 'पवित्र पुष्पों को नया सुगंधी जीवन',
    upcyclingSub: 'पूजन के पश्चात पुष्पों का सम्मान करें, प्रकृति बचाएं।',
    upcyclingDesc: 'प्रतिवर्ष भारत के मंदिरों में अर्पित लाखों टन पुष्प नदियों में प्रवाहित कर दिए जाते हैं। निर्मल श्रद्धा इन पवित्र पुष्पों का पुनर्चक्रण कर शुद्ध, पर्यावरण-अनुकूल अगरबत्ती बनाती है।',
    upcyclingQuote: '"पूजन के पश्चात पुष्पों का सम्मान करें, प्रकृति बचाएं। निर्माल्य केवल कचरा नहीं, ईश्वर का आशीर्वाद है। "',

    ourStoryTitle: 'हमारी कहानी',
    ourStoryP1: 'हर दिन मंदिरों और घरों में श्रद्धा के प्रतीक के रूप में हजारों किलोग्राम फूल अर्पित किए जाते हैं। पूजा-अर्चना के बाद इनमें से कई फूल फेंक दिए जाते हैं, जिससे अनावश्यक कचरा और पर्यावरणीय प्रदूषण होता है।',
    ourStoryP2: 'हमारा मानना था कि इन पवित्र पुष्पों को बेहतर सम्मान मिलना चाहिए।',
    ourStoryP3: 'इन फूलों को एकत्र करके और सावधानीपूर्वक संसाधित करके, हम उन्हें सुगंधित अगरबत्ती में परिवर्तित करते हैं। प्रत्येक अगरबत्ती भक्ति, पर्यावरण संरक्षण और प्रकृति के प्रति सम्मान का प्रतीक है — कल की प्रार्थनाओं को आज की सुगंध में बदलती है।',

    ourMissionTitle: 'हमारा उद्देश्य (Our Mission)',
    ourMissionSub: 'पवित्र पुष्पों को नया सुगंधी जीवन देना',
    ourMissionDesc: 'हमारा उद्देश्य मंदिर के फूलों के कचरे को कम करना और पर्यावरण-अनुकूल अगरबत्ती बनाना है जो हर अर्पण की आध्यात्मिक आत्मा को बनाए रखे। नवाचार और टिकाऊ प्रथाओं के माध्यम से, हम परंपरा से समझौता किए बिना पर्यावरण की रक्षा करना चाहते हैं।',

    howItWorksBadge: 'प्रक्रिया',
    howItWorksTitle: 'यह कैसे काम करता है? (How It Works)',
    howStep1Title: '1. संकलन (Collection)',
    howStep1Desc: 'ताजे फूल कचरा बनने से पहले मंदिरों और पूजा स्थलों से एकत्र किए जाते हैं।',
    howStep2Title: '2. छँटाई व सुखाना (Sorting & Drying)',
    howStep2Desc: 'फूलों की सुगंध और गुणवत्ता बनाए रखने के लिए उन्हें ध्यान से छांटा, साफ किया और सुखाया जाता है।',
    howStep3Title: '3. निर्माण (Crafting)',
    howStep3Desc: 'सूखी पंखुड़ियों को प्राकृतिक जड़ी-बूटियों, आवश्यक तेलों और पौधे-आधारित बाइंडरों के साथ मिलाकर प्रीमियम अगरबत्ती बनाई जाती है।',
    howStep4Title: '4. पैकेजिंग (Packaging)',
    howStep4Desc: 'पर्यावरण-अनुकूल सामग्री का उपयोग करके प्रत्येक उत्पाद को सोच-समझकर पैक किया जाता है।',

    whyChooseUsTitle: 'हमें क्यों चुनें? (Why Choose Us?)',
    why1: 'पुनर्चक्रित मंदिर पुष्प (Recycled Flowers)',
    why2: 'पर्यावरण-अनुकूल व टिकाऊ',
    why3: 'समृद्ध, लंबे समय तक रहने वाली सुगंध',
    why4: 'वैदिक परंपरा से प्रेरित',
    why5: 'पुष्प कचरा व नदी प्रदूषण कम करता है',
    why6: 'महिलाओं द्वारा प्रेम से हस्तनिर्मित',

    ourImpactTitle: 'हमारा प्रभाव (Our Impact)',
    ourImpactSub: 'आपके द्वारा जलाई गई हर अगरबत्ती मदद करती है:',
    impactItem1: 'मंदिर के फूलों के कचरे को कम करने में',
    impactItem2: 'फूलों को नदियों और कचरे के ढेरों को प्रदूषित करने से रोकने में',
    impactItem3: 'पर्यावरण-अनुकूल चक्रीय अर्थव्यवस्था का समर्थन करने में',
    impactItem4: 'टिकाऊ और हरित जीवन शैली को बढ़ावा देने में',
    impactItem5: 'पवित्र अर्पण की पवित्रता को बनाए रखने में',

    ourVisionTitle: 'दृष्टि (Vision)',
    ourVisionDesc: 'हम एक ऐसे भविष्य की कल्पना करते हैं जहां कोई भी पवित्र फूल कचरा न बने। परंपरा और नवाचार को मिलाकर, हम ऐसे उत्पाद बनाने का प्रयास करते हैं जो हमारी धरती की देखभाल करते हुए आस्था का सम्मान करते हैं।',

    ctaTitle: 'हर प्रार्थना को एक सुंदर नया जीवन मिलना चाहिए।',
    ctaSub: 'भक्ति को स्थिरता में बदलने में हमारे साथ जुड़ें। ऐसी अगरबत्ती चुनें जिसमें सुगंध और उद्देश्य दोनों हों।',
    ctaButton: 'अगरबत्ती संग्रह देखें',

    purityTitle: 'शुद्धता के 5 मुख्य स्तंभ',
    puritySub: 'शुद्धता, प्रकृति संरक्षण और भक्तिभाव का प्रतीक',

    ritualBadge: 'पैकेजिंग पर छपी मार्गदर्शिका',
    ritualTitle: 'अगरबत्ती जलाने व पूजा करने की विधि',
    ritualSub: 'अगरबत्ती जलाने की विधि एवं सुरक्षा निर्देश',
    ritualSafetyTitle: 'पैकेजिंग चेतावनी व सुरक्षा निर्देश',
    ritualSafetyText: '"अगरबत्ती पर प्राकृतिक जड़ी-बूटियों का लेप होने के कारण जलते समय कुछ कण गिर सकते हैं। बच्चों, पालतू पशुओं व ज्वलनशील वस्तुओं से दूर रखें। हवादार स्थान पर स्टैंड पर ही जलाएं। "',

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
