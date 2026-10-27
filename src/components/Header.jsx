import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { company, nav } from '../data/site'
import { PhoneIcon, MenuIcon, CloseIcon, ArrowRightIcon } from '../assets/icons'

function BrandMark() {
  return (
    <svg className={styles.brandMark} viewBox="0 0 48 48" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="currentColor" />
      <path
        d="M24 8c-6.5 3.4-10 8.6-10 14.4 0 3.5 1.5 6.6 4.1 8.7-.3-2.4.3-5 2-7.2-.6 3.5.8 6.9 3.5 8.9-1.5 0-3 .3-4.3 1.1 2.1 1.8 5.2 2.4 8 1.5.7-.3 1.5-.6 2.1-1.2.6.6 1.4.9 2.1 1.2 2.8.9 5.9.3 8-1.5-1.3-.8-2.8-1.1-4.3-1.1 2.7-2 4.1-5.4 3.5-8.9 1.7 2.2 2.3 4.8 2 7.2 2.6-2.1 4.1-5.2 4.1-8.7C34 16.6 30.5 11.4 24 8Z"
        fill="#B3CDA6"
      />
      <rect x="22.6" y="30" width="2.8" height="10" rx="1.4" fill="#8a5a2b" />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href="#top" aria-label={`${company.name} home`}>
          <BrandMark />
          <span className={styles.brandText}>
            <span className={styles.brandName}>Greenmantle</span>
            <span className={styles.brandSub}>Tree Care</span>
          </span>
        </a>

        <nav className={styles.nav}>
          {nav.map((item) => (
            <a key={item.href} className={styles.navLink} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.phoneBtn} href={company.phoneHref}>
            <PhoneIcon size={18} />
            <span>{company.phone}</span>
          </a>
          <a className={styles.ctaBtn} href="#contact">
            Get a Free Quote
            <ArrowRightIcon size={16} />
          </a>
        </div>

        <button
          className={styles.toggle}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}
      >
        <nav className={styles.mobileNav}>
          {nav.map((item) => (
            <a
              key={item.href}
              className={styles.mobileNavLink}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.mobileActions}>
          <a className={styles.mobilePhone} href={company.phoneHref}>
            <PhoneIcon size={18} />
            <span>{company.phone}</span>
          </a>
          <a className={styles.ctaBtn} href="#contact" onClick={() => setOpen(false)}>
            Get a Free Quote
            <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}
