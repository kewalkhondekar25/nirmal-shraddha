'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from './language'
import { products } from './products'
import { ProductPrice } from './product-price'

export function ShopPage() {
  const { lang, t } = useLanguage()
  const heading =
    lang === 'Marathi'
      ? 'प्रत्येक भक्तीसाठी सुगंध.'
      : lang === 'Hindi'
        ? 'प्रत्येक भक्ति के लिए सुगंध।'
        : 'Fragrance for every devotion.'
  const view =
    lang === 'Marathi'
      ? 'तपशील पहा'
      : lang === 'Hindi'
        ? 'विवरण देखें'
        : 'View details'

  return (
    <main className="shop-page">
      <section className="shop-intro shell">
        <p className="section-kicker">{t.collection}</p>
        <h1>{heading}</h1>
        <p>{t.collectionText}</p>
      </section>
      <section className="shell products-grid">
        {products.map((product) => {
          const name = product.names[lang]
          return (
            <article className="product-card" key={product.slug}>
              <Link href={`/shop/${product.slug}`} className="product-card-link">
                <div className="product-image">
                  <Image
                    src={`/images/${product.file}`}
                    alt={`${name} premium incense sticks`}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                </div>
                <div className="product-copy">
                  <h2>{name}</h2>
                  <p>{product.tagline[lang]}</p>
                  <ProductPrice />
                  <span>100% Pure &amp; Sattvic</span>
                  <span className="inline-link">
                    {view}
                    <b>↗</b>
                  </span>
                </div>
              </Link>
            </article>
          )
        })}
      </section>
    </main>
  )
}
