'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useLanguage } from './language'
import { products } from './products'

export function ProductCarousel() {
  const [active, setActive] = useState(0)
  const { t, lang } = useLanguage()

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % products.length), 5200)
    return () => clearInterval(id)
  }, [])

  const title = products[active].names[lang]

  return (
    <section className="carousel-section">
      <div className="shell carousel-heading">
        <div>
          <p className="section-kicker">{t.collection}</p>
          <h2>{t.collectionTitle}</h2>
        </div>
        <p>{t.collectionText}</p>
      </div>
      <div className="carousel shell">
        <div className="carousel-frame">
          <div className="slide-track" style={{ transform: `translateX(-${active * 100}%)` }}>
            {products.map((product) => (
              <div className="slide" key={product.file}>
                <Image
                  src={`/images/${product.file}`}
                  alt={`${product.names[lang]} incense sticks`}
                  fill
                  sizes="(max-width: 760px) 100vw, 1180px"
                  priority
                />
              </div>
            ))}
          </div>
          <div className="carousel-caption">
            <span>0{active + 1} / 06</span>
            <strong>{title}</strong>
          </div>
        </div>
        <div className="carousel-controls">
          <button onClick={() => setActive((i) => (i + products.length - 1) % products.length)}>←</button>
          <div>
            {products.map((product, i) => (
              <button
                onClick={() => setActive(i)}
                className={i === active ? 'dot selected-dot' : 'dot'}
                key={product.file}
              />
            ))}
          </div>
          <button onClick={() => setActive((i) => (i + 1) % products.length)}>→</button>
        </div>
      </div>
    </section>
  )
}
