import styles from './SizeSelector.module.css'

const SIZES = [
  { label: 'XS', desc: '0–2' },
  { label: 'S',  desc: '4–6' },
  { label: 'M',  desc: '8–10' },
  { label: 'L',  desc: '12–14' },
  { label: 'XL', desc: '16–18' },
]

export default function SizeSelector({ selectedSize, onSelectSize }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className="section-label">Sizing</span>
            <h2 className={styles.title}>Select Your Size</h2>
            <p className={styles.hint}>
              Our Henley is cut for a relaxed, flattering fit. If between sizes,
              we recommend sizing down for a tailored look.
            </p>
            <a className={styles.guide} href="#size-guide">
              View full size guide →
            </a>
          </div>

          <div className={styles.right}>
            <div className={styles.sizeGrid}>
              {SIZES.map((size) => {
                const isSelected = selectedSize === size.label
                return (
                  <button
                    key={size.label}
                    className={`${styles.sizeBtn} ${isSelected ? styles.sizeBtnSelected : ''}`}
                    onClick={() => onSelectSize(size.label)}
                    aria-pressed={isSelected}
                  >
                    <span className={styles.sizeLabel}>{size.label}</span>
                    <span className={styles.sizeDesc}>{size.desc}</span>
                  </button>
                )
              })}
            </div>

            <p className={styles.stockNote}>
              <span className={styles.stockDot} />
              Most sizes currently in stock — ships within 2 business days
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
