'use client'
import Link from 'next/link'
import { useLanguage } from './language'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()
  const links = [
    [t.home, '/'],
    [t.shop, '/shop'],
    [t.contact, '/contact'],
  ] as const

  return (
    <footer>
      <div className="footer-brand">
        <div className="footer-logo">
          NIRMAL <em>SHRADDHA</em>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {links.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <p>{t.tag}</p>
      <span className="footer-copy">
        © {year} Nirmal Shraddha, All rights reserved
      </span>
    </footer>
  )
}
