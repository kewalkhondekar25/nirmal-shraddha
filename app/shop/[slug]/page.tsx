import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductDetail } from '../../ui/product-detail'
import { getProduct, products, productPricing, discountPercent } from '../../ui/products'
import { JsonLd } from '../../ui/json-ld'
import { absoluteUrl, siteConfig } from '../../site'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) {
    return {
      title: 'Product not found',
    }
  }

  const title = `${product.names.English} | ${product.names.Marathi}`
  const description = `${product.tagline.English} ${product.description.English} MRP ₹${productPricing.mrp}, now ₹${productPricing.price} (${discountPercent}% off).`

  return {
    title,
    description,
    alternates: {
      canonical: `/shop/${product.slug}`,
    },
    openGraph: {
      title: `${product.names.English} | ${siteConfig.name}`,
      description: product.tagline.English,
      url: absoluteUrl(`/shop/${product.slug}`),
      type: 'website',
      images: [
        {
          url: `/images/${product.file}`,
          alt: `${product.names.English} premium incense sticks`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.names.English} | ${siteConfig.name}`,
      description: product.tagline.English,
      images: [`/images/${product.file}`],
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.names.English,
    alternateName: [product.names.Marathi, product.names.Hindi],
    description: product.description.English,
    image: [absoluteUrl(`/images/${product.file}`)],
    sku: product.slug,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    category: 'Incense Sticks',
    material: 'Sacred Nirmalya floral offerings',
    countryOfOrigin: 'IN',
    offers: {
      '@type': 'Offer',
      url: absoluteUrl(`/shop/${product.slug}`),
      priceCurrency: 'INR',
      price: productPricing.price,
      availability: 'https://schema.org/InStock',
      priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
      seller: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'MRP',
        value: `₹${productPricing.mrp}`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Discount',
        value: `${discountPercent}%`,
      },
      ...product.features.map((feature) => ({
        '@type': 'PropertyValue',
        name: 'Feature',
        value: feature.English,
      })),
    ],
  }

  return (
    <>
      <JsonLd data={productLd} />
      <ProductDetail product={product} />
    </>
  )
}
