import { useEffect, useRef } from 'react'
import styles from './Reviews.module.css'

const REVIEWS = [
  {
    name: 'Layla Al-Rashid',
    title: 'Fashion Editor, Cairo',
    avatar: 'L',
    rating: 5,
    date: 'March 2026',
    review: 'I own eight Henley shirts across different colors and this one has genuinely replaced everything else in my wardrobe rotation. The fabric feels like a second skin — and it photographs beautifully.',
    verified: true,
  },
  {
    name: 'Nour Khalil',
    title: 'Creative Director',
    avatar: 'N',
    rating: 5,
    date: 'February 2026',
    review: 'The cut is incredibly flattering. It is the rare piece that works styled up with wide-leg trousers or tucked into a midi skirt. Worth every penny — and the packaging was a beautiful touch.',
    verified: true,
  },
  {
    name: 'Sara Mansour',
    title: 'Interior Architect',
    avatar: 'S',
    rating: 5,
    date: 'January 2026',
    review: 'Third purchase and counting. I travel a great deal and this Henley packs beautifully, does not wrinkle, and always looks intentional. Ivory Cream is my favorite — it is that perfect off-white.',
    verified: true,
  },
]

function Stars({ count }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? styles.starFilled : styles.starEmpty} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('is-visible'), i * 130)
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
          <span className="section-label fade-up">Customer Stories</span>
          <h2 className={`${styles.title} fade-up`}>What Our <em className={styles.em}>Clients Say</em></h2>
          <div className={`${styles.aggregate} fade-up`}>
            <Stars count={5} />
            <span className={styles.aggregateText}>4.9 out of 5 — 284 verified reviews</span>
          </div>
        </header>

        <div className={styles.grid}>
          {REVIEWS.map((r) => (
            <article key={r.name} className={`${styles.card} fade-up`}>
              {/* Large decorative quote mark — Etmsk style */}
              <span className={styles.decorQuote} aria-hidden="true">"</span>

              <div className={styles.cardTop}>
                <Stars count={r.rating} />
                {r.verified && <span className={styles.verified}>Verified</span>}
              </div>

              <blockquote className={styles.quote}>"{r.review}"</blockquote>

              <footer className={styles.footer}>
                <div className={styles.avatar}>{r.avatar}</div>
                <div className={styles.meta}>
                  <span className={styles.reviewerName}>{r.name}</span>
                  <span className={styles.reviewerTitle}>{r.title}</span>
                </div>
                <span className={styles.date}>{r.date}</span>
              </footer>

              <div className={styles.borderGlow} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
