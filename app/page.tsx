import type { Metadata } from 'next'
import { HomePage } from './ui/home-page'
import { JsonLd } from './ui/json-ld'
import { absoluteUrl, siteConfig } from './site'
import { products } from './ui/products'

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Premium Incense from Sacred Nirmalya`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteConfig.name} | Premium Incense from Sacred Nirmalya`,
    description: siteConfig.description,
    url: absoluteUrl('/'),
    images: [siteConfig.ogImage],
  },
}

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${siteConfig.name} Collection`,
  itemListElement: products.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: absoluteUrl(`/shop/${product.slug}`),
    name: product.names.English,
  })),
}

export default function Page() {
  return (
    <>
      <JsonLd data={itemListLd} />
      <HomePage />
    </>
  )
}
