import styles from './TaglineStrip.module.css'

const ITEMS = [
  'Egyptian Cotton',
  'Luxury Fit',
  'Timeless Style',
  'Handcrafted Quality',
  'Effortless Elegance',
  'Sustainably Made',
  'Wear the Difference',
  'Egyptian Cotton',
  'Luxury Fit',
  'Timeless Style',
  'Handcrafted Quality',
  'Effortless Elegance',
  'Sustainably Made',
  'Wear the Difference',
]

export default function TaglineStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        {ITEMS.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot}>✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
