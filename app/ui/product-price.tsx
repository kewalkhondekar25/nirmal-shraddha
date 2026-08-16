'use client'
import { useLanguage } from './language'
import { discountPercent, productPricing } from './products'

export function ProductPrice({ size = 'card' }: { size?: 'card' | 'detail' }) {
  const { lang } = useLanguage()
  const mrpLabel = lang === 'Marathi' ? 'मूळ किंमत' : lang === 'Hindi' ? 'मूल्य' : 'MRP'
  const offLabel = lang === 'Marathi' ? 'सूट' : lang === 'Hindi' ? 'छूट' : 'OFF'

  return (
    <div className={`product-price product-price-${size}`}>
      <div className="product-price-values">
        <strong>₹&nbsp;{productPricing.price}</strong>
        <div className="product-price-mrp">
          <span>{mrpLabel}</span>
          <s>₹&nbsp;{productPricing.mrp}</s>
        </div>
      </div>
      <span className="product-price-off">
        {discountPercent}% {offLabel}
      </span>
    </div>
  )
}
