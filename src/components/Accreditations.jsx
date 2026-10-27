import styles from './Accreditations.module.css'
import { accreditations } from '../data/site'
import { Reveal, RevealGroup } from '../hooks/useReveal'

export default function Accreditations() {
  return (
    <section className={styles.accreditations} id="accreditations">
      <div className="container">
        <Reveal className={styles.head}>
          <h2 className={styles.headTitle}>
            Accredited, certified &amp; fully insured
          </h2>
          <p className={styles.headLead}>
            You can rest easy knowing every job is carried out by qualified
            professionals to the highest industry standards.
          </p>
        </Reveal>

        <RevealGroup className={styles.row}>
          {accreditations.map((a) => (
            <div key={a.abbr} className={styles.badge}>
              <div className={styles.badgeAbbr}>{a.abbr}</div>
              <div className={styles.badgeLabel}>{a.label}</div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
