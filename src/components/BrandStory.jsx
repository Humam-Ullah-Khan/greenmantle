import styles from './BrandStory.module.css'
import { brandStory } from '../data/site'
import { LeafIcon } from '../assets/icons'
import { Reveal } from '../hooks/useReveal'

const stats = [
  { num: '15+', label: 'Years caring' },
  { num: '8,000+', label: 'Trees tended' },
  { num: '100%', label: 'Certified team' },
]

export default function BrandStory() {
  return (
    <section className={`section ${styles.story}`}>
      <div className={styles.bg}>
        <img src={brandStory.image} alt={brandStory.alt} loading="lazy" decoding="async" />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className="container">
        <Reveal className={styles.inner}>
          <LeafIcon size={44} className={styles.leafDivider} />
          <h2 className={styles.title}>{brandStory.title}</h2>
          <p className={styles.body}>{brandStory.body}</p>

          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
