import styles from './FooterCTA.module.css'

export default function FooterCTA() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bgGlow} />

      <div className={styles.container}>
        {/* Main CTA block */}
        <div className={styles.ctaBlock}>
          <span className="section-label" style={{ textAlign: 'center' }}>
            Limited Availability
          </span>
          <h2 className={styles.headline}>
            Your next wardrobe
            <br />
            <em>essential awaits.</em>
          </h2>
          <p className={styles.subtext}>
            Join thousands of women who have made the Henley their everyday uniform.
            <br />
            Elegance is not a luxury — it is a choice.
          </p>

          <div className={styles.ctaRow}>
            <button className={`btn-gold ${styles.btnPrimaryPadding}`}>
              Shop Henley — $98
              <span className={styles.arrow}>→</span>
            </button>
            <span className={styles.ctaMeta}>Free shipping · Easy returns · Secure checkout</span>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.dividerLine} />

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.brand}>
            <span className={styles.brandName}>HENLEY</span>
            <span className={styles.brandTagline}>Premium Women's Collection</span>
          </div>

          <nav className={styles.links}>
            {['About', 'Sustainability', 'Size Guide', 'Contact'].map((l) => (
              <a key={l} href="#" className={styles.link}>{l}</a>
            ))}
          </nav>

          <p className={styles.legal}>
            © 2026 Henley. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
