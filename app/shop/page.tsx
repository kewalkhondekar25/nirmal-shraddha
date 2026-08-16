import type { Metadata } from 'next'
import { ShopPage } from '../ui/shop-page'
import { absoluteUrl, siteConfig } from '../site'

export const metadata: Metadata = {
  title: 'Shop Premium Incense Sticks',
  description:
    'Explore Nirmal Shraddha premium incense sticks — EkVira Matrukrupa, Sainath Shraddha, Vitthal Bhaktirang, Vetal Kshetrapal, Khandoba Malhar, and Gaondevi Mangalam. Made from sacred Nirmalya.',
  alternates: {
    canonical: '/shop',
  },
  openGraph: {
    title: `Shop Premium Incense Sticks | ${siteConfig.name}`,
    description:
      'Six premium incense expressions crafted from sacred floral offerings. Pure, sattvic, and eco-conscious.',
    url: absoluteUrl('/shop'),
    images: [siteConfig.ogImage],
  },
}

export default function Page() {
  return <ShopPage />
}
