import { useEffect, useRef } from 'react'
import styles from './HowToWear.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Pick Your Shade',
    body: 'Choose from our curated palette of four seasonless colors — each individually dyed for depth and lasting vibrancy.',
  },
  {
    num: '02',
    title: 'Find Your Fit',
    body: 'Select your size using our precise guide. Designed for a relaxed, flattering silhouette — true to size across all cuts.',
  },
  {
    num: '03',
    title: 'Style Effortlessly',
    body: 'Tuck it, layer it, or wear it loose. The Henley transitions from morning to evening without missing a beat.',
  },
]

export default function HowToWear() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('is-visible'), i * 140)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className="section-label fade-up">How It Works</span>
          <h2 className={`${styles.title} fade-up`}>
            Three Steps to <em className={styles.em}>Your Look</em>
          </h2>
          <p className={`${styles.subtitle} fade-up`}>
            Effortless from selection to styling — designed for the woman who values her time.
          </p>
        </header>

        <div className={styles.stepsRow}>
          {STEPS.map((step, i) => (
            <div key={step.num} className={`${styles.step} fade-up`}>
              {/* Connector line (hidden on last) */}
              {i < STEPS.length - 1 && <div className={styles.connector} aria-hidden="true" />}

              <div className={styles.circle}>
                <span className={styles.circleNum}>{step.num}</span>
                <div className={styles.circleRing} />
              </div>

              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
