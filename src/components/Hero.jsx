import styles from './Hero.module.css'

const TRUST_BADGES = [
  { icon: '✦', label: 'Free Shipping Over $120' },
  { icon: '◈', label: 'Easy Returns' },
  { icon: '❋', label: 'Sustainably Made' },
]

const COLOR_IMAGES = {
  'Noir Black':  'https://images.unsplash.com/photo-1594938298603-c8148c4b4d7b?w=700&q=85&auto=format&fit=crop',
  'Ivory Cream': 'https://images.unsplash.com/photo-1485518882345-15568b007407?w=700&q=85&auto=format&fit=crop',
  'Deep Navy':   'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=700&q=85&auto=format&fit=crop',
  'Dusty Rose':  'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=700&q=85&auto=format&fit=crop',
}

function scrollToVariants() {
  document.getElementById('variants')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero({ selectedColor, selectedSize }) {
  const heroImage = COLOR_IMAGES[selectedColor] ?? COLOR_IMAGES['Noir Black']

  return (
    <section className={styles.hero}>
      {/* Rotating rays — Etmsk-inspired */}
      <div className={styles.rays} aria-hidden="true" />
      <div className={styles.bgGradient} />

      <div className={styles.container}>
        {/* Left — Copy */}
        <div className={styles.copy}>
          <span className="section-label">New Arrival — SS 2026</span>

          <h1 className={styles.headline}>
            The Henley
            <span className={styles.headlineGold}>Redefined</span>
          </h1>

          <p className={styles.description}>
            Crafted from ultra-soft Egyptian cotton, our signature Henley drapes
            effortlessly — blending a timeless silhouette with modern comfort.
            A quiet luxury staple for the woman who moves through the world with intention.
          </p>

          <div className={styles.priceRow}>
            <span className={styles.price}>$98</span>
            <span className={styles.priceNote}>Free express shipping</span>
          </div>

          <div className={styles.ctaGroup}>
            <button className={`btn-gold ${styles.btnPrimaryPadding}`}>
              Shop Now
              <span className={styles.btnArrow}>→</span>
            </button>
            <button className={styles.btnSecondary} onClick={scrollToVariants}>
              View Colors
            </button>
          </div>

          <div className={styles.badges}>
            {TRUST_BADGES.map((b) => (
              <div key={b.label} className={styles.badge}>
                <span className={styles.badgeIcon} aria-hidden="true">{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Product Visual */}
        <div className={styles.visual}>
          <div className={styles.spotlight} aria-hidden="true" />
          <div className={styles.productFrame}>
            <div className={styles.productImageWrapper}>
              <img
                src={heroImage}
                alt={`Henley Shirt — ${selectedColor}`}
                className={styles.productImage}
                fetchpriority="high"
              />
              <div className={styles.imageOverlay} />
            </div>

            <div className={styles.productBadge}>
              <span className={styles.productBadgeText}>Best Seller</span>
            </div>

            <div className={styles.productInfo}>
              <span className={styles.productInfoColor}>{selectedColor}</span>
              <span className={styles.productInfoSize}>Size {selectedSize}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
