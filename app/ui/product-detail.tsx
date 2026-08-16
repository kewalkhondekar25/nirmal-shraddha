'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from './language'
import { products, type Product } from './products'
import { ProductPrice } from './product-price'

const featureIcons = [
  // 1 hour burn — clock
  <svg key="clock" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="7.25" />
    <path d="M12 8.2v4.1l2.6 1.6" />
  </svg>,
  // Clean fragrance — sparkles
  <svg key="clean" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4.5l.85 3.35L16.2 8.7l-3.35.85L12 12.9l-.85-3.35L7.8 8.7l3.35-.85L12 4.5z" />
    <path d="M18.2 12.4l.55 2.1 2.1.55-2.1.55-.55 2.1-.55-2.1-2.1-.55 2.1-.55.55-2.1z" />
    <path d="M6.3 13.6l.45 1.7 1.7.45-1.7.45-.45 1.7-.45-1.7-1.7-.45 1.7-.45.45-1.7z" />
  </svg>,
  // Sustainable choice — recycle arrows
  <svg key="sustain" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.2 8.4 9.6 6.2l.1 2.4" />
    <path d="M9.5 6.4c2.1-1.3 4.8-1.5 7.1-.2 1.5.9 2.5 2.3 2.9 3.9" />
    <path d="M16.8 15.6l2.4 2.2-.1-2.4" />
    <path d="M19.1 15.6c-1.1 2.3-3.3 3.9-5.9 4.2-1.7.2-3.4-.3-4.7-1.3" />
    <path d="M8.2 16.8 5.2 15.4l2.2-1.2" />
    <path d="M5.6 15.2c-.3-2.5.8-5 3-6.4 1.4-.9 3.1-1.2 4.7-.9" />
  </svg>,
  // Made with devotion — diya / lamp
  <svg key="devotion" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4.8c1.4 1.5 1.7 3.1.5 4.1-1.1.9-2.3.2-2.7-1.1-.4-1.3.6-2.5 2.2-3z" />
    <path d="M5.5 15.2c1.4-2.1 3.7-3.4 6.5-3.4s5.1 1.3 6.5 3.4" />
    <path d="M5 16.8h14c0 2.2-3.1 3.7-7 3.7s-7-1.5-7-3.7z" />
  </svg>,
]


export function ProductDetail({ product }: { product: Product }) {
  const { lang } = useLanguage()
  const name = product.names[lang]
  const ui =
    lang === 'Marathi'
      ? {
          back: 'उत्पादनाकडे परत',
          brand: 'ब्रँड',
          productName: 'उत्पादन नाव',
          tagline: 'टॅगलाइन',
          type: 'उत्पादन प्रकार',
          story: 'पॅकेजिंगवरील वर्णन',
          features: 'वैशिष्ट्ये',
          imagery: 'पॅकेजिंगवरील प्रतिमा',
          origin: 'उत्पत्ती',
          essence: 'सुगंध सार',
          devotion: 'उपासनेसाठी',
          enquire: 'खरेदीसाठी संपर्क करा',
          more: 'अन्य सुगंध',
          alsoAs: 'इंग्रजी नाव',
        }
      : lang === 'Hindi'
        ? {
            back: 'उत्पादों पर वापस',
            brand: 'ब्रांड',
            productName: 'उत्पाद नाम',
            tagline: 'टैगलाइन',
            type: 'उत्पाद प्रकार',
            story: 'पैकेजिंग पर विवरण',
            features: 'विशेषताएँ',
            imagery: 'पैकेजिंग की छवियाँ',
            origin: 'उत्पत्ति',
            essence: 'सुगंध सार',
            devotion: 'पूजा के लिए',
            enquire: 'खरीद के लिए संपर्क करें',
            more: 'अन्य सुगंध',
            alsoAs: 'अंग्रेज़ी नाम',
          }
        : {
            back: 'Back to shop',
            brand: 'Brand',
            productName: 'Product name',
            tagline: 'Tagline',
            type: 'Product type',
            story: 'From the packaging',
            features: 'Claims & features',
            imagery: 'Religious imagery',
            origin: 'Origin',
            essence: 'Fragrance essence',
            devotion: 'Best for',
            enquire: 'Enquire to buy',
            more: 'More fragrances',
            alsoAs: 'Also shown as',
          }

  const others = products.filter((item) => item.slug !== product.slug).slice(0, 3)

  return (
    <main className="product-detail">
      <div className="shell product-detail-nav">
        <Link href="/shop" className="inline-link">
          ← {ui.back}
        </Link>
      </div>

      <section className="shell product-hero">
        <div className="product-hero-media">
          <Image
            src={`/images/${product.file}`}
            alt={name}
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            priority
          />
        </div>
        <div className="product-hero-copy">
          <p className="section-kicker">{product.brand}</p>
          {product.chant ? <p className="product-chant">{product.chant[lang]}</p> : null}
          <h1>{name}</h1>
          {lang !== 'English' ? (
            <p className="product-also">
              {ui.alsoAs}: <span>{product.names.English}</span>
            </p>
          ) : (
            <p className="product-also">
              {ui.alsoAs}: <span>{product.names.Marathi}</span>
            </p>
          )}
          <p className="product-tagline">“{product.tagline[lang]}”</p>
          <p className="product-type-label">{product.productType[lang]}</p>
          <ProductPrice size="detail" />
          <p className="product-description">{product.description[lang]}</p>
          <Link href="/contact" className="button dark-button">
            {ui.enquire}
            <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="product-pack">
        <div className="shell product-pack-grid">
          <article>
            <p className="section-kicker">{ui.brand}</p>
            <h2>{product.brand}</h2>
            <p>{product.brandMark[lang]}</p>
          </article>
          <article>
            <p className="section-kicker">{ui.tagline}</p>
            <h2>“{product.tagline[lang]}”</h2>
            {lang === 'English' ? <p>{product.tagline.Marathi}</p> : <p>{product.tagline.English}</p>}
          </article>
          <article>
            <p className="section-kicker">{ui.type}</p>
            <h2>{product.productType[lang]}</h2>
            <p>{product.packagingLine[lang]}</p>
          </article>
          <article>
            <p className="section-kicker">{ui.origin}</p>
            <h2>{product.origin[lang]}</h2>
            <p>{product.brandMark.English}</p>
          </article>
        </div>
      </section>

      <section className="shell product-story">
        <p className="section-kicker">{ui.story}</p>
        <blockquote>{product.packagingStory[lang]}</blockquote>
        {lang !== 'Marathi' ? (
          <p className="product-story-native">{product.packagingStory.Marathi}</p>
        ) : (
          <p className="product-story-native">{product.packagingStory.English}</p>
        )}
      </section>

      <section className="product-features">
        <div className="shell">
          <p className="section-kicker">{ui.features}</p>
          <div className="product-feature-row">
            {product.features.map((feature, index) => (
              <div className="product-feature-item" key={feature.English}>
                <span className="product-feature-index">0{index + 1}</span>
                <span className="product-feature-icon">{featureIcons[index]}</span>
                <strong>{feature[lang]}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell product-meta-grid product-detail-meta">
        <article>
          <p className="section-kicker">{ui.essence}</p>
          <h2>{product.essence[lang]}</h2>
        </article>
        <article>
          <p className="section-kicker">{ui.devotion}</p>
          <h2>{product.devotion[lang]}</h2>
        </article>
      </section>

      <section className="shell product-notes">
        <p className="section-kicker">{ui.imagery}</p>
        <ul>
          {product.imagery.map((item) => (
            <li key={item.English}>{item[lang]}</li>
          ))}
        </ul>
      </section>

      <section className="shell product-more">
        <div className="product-more-head">
          <p className="section-kicker">{ui.more}</p>
        </div>
        <div className="product-more-grid">
          {others.map((item) => (
            <Link href={`/shop/${item.slug}`} className="product-more-card" key={item.slug}>
              <div className="product-more-image">
                <Image
                  src={`/images/${item.file}`}
                  alt={item.names[lang]}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </div>
              <strong>{item.names[lang]}</strong>
              <span>{item.tagline[lang]}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
