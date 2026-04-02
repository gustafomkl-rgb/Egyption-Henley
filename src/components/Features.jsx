import { useEffect, useRef } from 'react'
import styles from './Features.module.css'

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12s1.5 2 4 2 4-2 4-2"/>
        <path d="M9 9h.01M15 9h.01"/>
      </svg>
    ),
    title: 'Cloud-Soft Fabric',
    body: 'Woven from 100% combed Egyptian cotton — the same fiber used in five-star hotel linens. Softer with every wash.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H7v10c0 1.1.9 2 2 2h6a2 2 0 002-2V10h3.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"/>
      </svg>
    ),
    title: 'Flattering Silhouette',
    body: 'Cut slightly longer through the torso with a subtle taper at the hem. Equally stunning tucked or worn loose.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'All-Day Comfort',
    body: 'Four-way stretch fabric and flat seams ensure you move freely — from morning meetings to evening outings.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Enduring Quality',
    body: 'Colorfast dyes and reinforced stitching at every stress point. Designed to look impeccable season after season.',
  },
]

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('is-visible'), i * 110)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className="section-label fade-up">Craftsmanship</span>
          <h2 className={`${styles.title} fade-up`}>Why Women Choose <em className={styles.em}>Henley</em></h2>
        </header>

        <div className={styles.grid}>
          {FEATURES.map((f, i) => (
            <div key={f.title} className={`${styles.card} fade-up`}>
              <div className={styles.iconWrap}>{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureBody}>{f.body}</p>
              <span className={styles.featureNum}>0{i + 1}</span>
              {/* Etmsk-style bottom gradient border that appears on hover */}
              <div className={styles.borderGlow} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
