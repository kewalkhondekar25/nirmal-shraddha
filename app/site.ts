export const siteConfig = {
  name: 'Nirmal Shraddha',
  legalName: 'Nirmal Shraddha',
  tagline: 'Respect for sacred offerings, a blessing of fragrance.',
  taglineMr: 'निर्माल्याचा सन्मान, सुगंधाचे वरदान.',
  description:
    'Nirmal Shraddha premium incense sticks are made from sacred Nirmalya floral offerings. Eco-friendly, pure, sattvic agarbatti crafted with devotion in India.',
  descriptionMr:
    'निर्मल श्रद्धा प्रीमियम अगरबत्ती पवित्र निर्माल्यापासून बनवलेली पर्यावरणपूरक, शुद्ध व सात्त्विक अगरबत्ती आहे.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'https://nirmal-shraddha.vercel.app'),
  locale: 'en_IN',
  phone: '+917304071999',
  phoneDisplay: '+91 73040 71999',
  whatsapp: 'https://wa.me/917304071999',
  ogImage: '/images/nirmal-shraddha-logo-transparent.png',
  keywords: [
    'Nirmal Shraddha',
    'premium incense sticks',
    'agarbatti',
    'Nirmalya',
    'eco friendly incense',
    'sattvic incense',
    'sacred flowers incense',
    'निर्मल श्रद्धा',
    'अगरबत्ती',
    'निर्माल्य',
    'EkVira Matrukrupa',
    'Sainath Shraddha',
    'Vitthal Bhaktirang',
    'Vetal Kshetrapal',
    'Khandoba Malhar',
    'Gaondevi Mangalam',
  ],
} as const

export function absoluteUrl(path = '/') {
  const base = siteConfig.url.replace(/\/$/, '')
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized === '/' ? '' : normalized}`
}
