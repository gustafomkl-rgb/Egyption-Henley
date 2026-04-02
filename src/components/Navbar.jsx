import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Products',   href: '#variants' },
  { label: 'About Us',   href: '#about' },
]

function scrollTo(id) {
  document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'variants', 'about']
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveLink(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const handleNav = (href) => {
    scrollTo(href)
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <button className={styles.logo} onClick={() => handleNav('#home')} aria-label="Go to top">
          <span className={styles.logoMark}>H</span>
          <span className={styles.logoText}>ENLEY</span>
        </button>

        {/* Desktop links */}
        <ul className={styles.links} role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '')
            return (
              <li key={label}>
                <button
                  className={`${styles.link} ${activeLink === id ? styles.linkActive : ''}`}
                  onClick={() => handleNav(href)}
                >
                  {label}
                  <span className={styles.linkUnderline} />
                </button>
              </li>
            )
          })}
        </ul>

        {/* Contact CTA */}
        <div className={styles.actions}>
          <button className={styles.contactBtn} onClick={() => handleNav('#contact')}>
            <span className={styles.contactBtnInner}>Contact Us</span>
          </button>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`} aria-hidden={!menuOpen}>
        <ul className={styles.drawerLinks} role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <button className={styles.drawerLink} onClick={() => handleNav(href)}>
                {label}
              </button>
            </li>
          ))}
          <li>
            <button className={styles.drawerContact} onClick={() => handleNav('#contact')}>
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
