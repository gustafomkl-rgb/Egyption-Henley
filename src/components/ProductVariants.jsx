import styles from './ProductVariants.module.css'

const VARIANTS = [
  {
    name: 'Noir Black',
    hex: '#1a1a1a',
    secondaryHex: '#2d2d2d',
    sizes: ['XS', 'S', 'M', 'L'],
    tag: 'Best Seller',
    tagStyle: 'gold',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4d7b?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Ivory Cream',
    hex: '#e8e0d0',
    secondaryHex: '#f5f0e8',
    sizes: ['S', 'M', 'L', 'XL'],
    tag: 'New',
    tagStyle: 'silver',
    image: 'https://images.unsplash.com/photo-1485518882345-15568b007407?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Deep Navy',
    hex: '#1b2840',
    secondaryHex: '#253352',
    sizes: ['XS', 'S', 'M'],
    tag: 'Limited',
    tagStyle: 'blue',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Dusty Rose',
    hex: '#c4a09a',
    secondaryHex: '#d4b0aa',
    sizes: ['S', 'M', 'L'],
    tag: 'Trending',
    tagStyle: 'rose',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80&auto=format&fit=crop',
  },
]

const TAG_COLORS = {
  gold: { bg: 'rgba(201,168,76,0.12)', border: 'rgba(201,168,76,0.3)', text: '#c9a84c' },
  silver: { bg: 'rgba(200,194,184,0.1)', border: 'rgba(200,194,184,0.25)', text: '#c8c2b8' },
  blue: { bg: 'rgba(80,120,180,0.1)', border: 'rgba(80,120,180,0.25)', text: '#7aabdf' },
  rose: { bg: 'rgba(196,160,154,0.1)', border: 'rgba(196,160,154,0.25)', text: '#d4b0aa' },
}

export default function ProductVariants({ selectedColor, onSelectColor }) {
  return (
    <section id="variants" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className="section-label">The Collection</span>
          <h2 className={styles.title}>Available Colors</h2>
          <p className={styles.subtitle}>
            Each shade is individually dyed for depth, richness, and lasting vibrancy.
          </p>
        </header>

        <div className={styles.grid}>
          {VARIANTS.map((variant) => {
            const isSelected = selectedColor === variant.name
            const tag = TAG_COLORS[variant.tagStyle]
            return (
              <button
                key={variant.name}
                className={`${styles.card} ${isSelected ? styles.cardSelected : ''}`}
                onClick={() => onSelectColor(variant.name)}
                aria-pressed={isSelected}
              >
                {/* Image */}
                <div className={styles.imageArea}>
                  <img
                    src={variant.image}
                    alt={`Henley in ${variant.name}`}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay} />

                  {/* Color dot overlay */}
                  <div
                    className={styles.colorDot}
                    style={{
                      background: `radial-gradient(circle at 35% 35%, ${variant.secondaryHex}, ${variant.hex})`,
                    }}
                  />

                  {/* Tag */}
                  <div
                    className={styles.tag}
                    style={{
                      background: tag.bg,
                      border: `1px solid ${tag.border}`,
                    }}
                  >
                    <span style={{ color: tag.text }}>{variant.tag}</span>
                  </div>

                  {/* Selected ring */}
                  {isSelected && <div className={styles.selectedRing} />}
                </div>

                {/* Info */}
                <div className={styles.info}>
                  <div className={styles.colorName}>{variant.name}</div>
                  <div className={styles.sizePills}>
                    {variant.sizes.map((s) => (
                      <span key={s} className={styles.sizePill}>{s}</span>
                    ))}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
