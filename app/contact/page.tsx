import type { Metadata } from 'next'
import { ContactPage } from '../ui/contact-page'
import { absoluteUrl, siteConfig } from '../site'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact Nirmal Shraddha for product enquiries, retail opportunities, or WhatsApp us at ${siteConfig.phoneDisplay}.`,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: `Reach Nirmal Shraddha for incense enquiries on WhatsApp ${siteConfig.phoneDisplay}.`,
    url: absoluteUrl('/contact'),
    images: [siteConfig.ogImage],
  },
}

export default function Page() {
  return <ContactPage />
}
