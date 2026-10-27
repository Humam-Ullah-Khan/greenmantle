import styles from './SplitPromo.module.css'
import { splitPromo } from '../data/site'
import { ArrowRightIcon } from '../assets/icons'
import { RevealGroup } from '../hooks/useReveal'

export default function SplitPromo() {
  return (
    <section className={`section ${styles.split}`}>
      <div className="container">
        <RevealGroup className={styles.grid}>
          {splitPromo.map((p) => (
            <article key={p.kind} className={styles.promo}>
              <div className={styles.promoImg}>
                <img src={p.image} alt={p.alt} loading="lazy" decoding="async" />
              </div>
              <div className={styles.promoOverlay} aria-hidden="true" />
              <div className={styles.promoBody}>
                <span className={styles.promoEyebrow}>{p.eyebrow}</span>
                <h3 className={styles.promoTitle}>{p.title}</h3>
                <p className={styles.promoDesc}>{p.desc}</p>
                <a className={styles.promoCta} href="#contact">
                  {p.cta}
                  <ArrowRightIcon size={16} />
                </a>
              </div>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
