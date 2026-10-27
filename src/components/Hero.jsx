import styles from './Hero.module.css'
import { hero, company } from '../data/site'
import { ArrowRightIcon, PhoneIcon, CheckIcon, AwardIcon } from '../assets/icons'
import { Reveal } from '../hooks/useReveal'

const badges = ['ARB Approved', 'NPTC Certified', '£5m Insured']

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.inner}`}>
        {/* Left: content */}
        <Reveal className={styles.content}>
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.lead}>{hero.lead}</p>

          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="#contact">
              Get a Free Quote
              <ArrowRightIcon size={16} />
            </a>
            <a className={styles.phoneCta} href={company.phoneHref}>
              <PhoneIcon size={18} />
              <span>{company.phone}</span>
            </a>
          </div>

          <ul className={styles.badges}>
            {badges.map((b) => (
              <li key={b} className={styles.badge}>
                <CheckIcon size={15} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right: image */}
        <Reveal className={styles.media}>
          <div className={styles.imageFrame}>
            <img
              src={hero.splitImage}
              alt={hero.imageAlt}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className={styles.floatCard}>
            <span className={styles.floatIcon}>
              <AwardIcon size={22} />
            </span>
            <span className={styles.floatText}>
              <strong>15+ years</strong>
              <span>caring for local trees</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
