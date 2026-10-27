import styles from './Regulatory.module.css'
import { regulatory } from '../data/site'
import { ShieldIcon, CheckIcon } from '../assets/icons'
import { Reveal } from '../hooks/useReveal'

const panelItems = [
  'Free assessment of TPO and conservation area status',
  'Complete planning applications and notifications on your behalf',
  'Full compliance with BS 3998 tree work standards',
  'Risk assessments and method statements for every job',
]

export default function Regulatory() {
  return (
    <section className={`section ${styles.regulatory}`}>
      <div className="container">
        <div className={styles.inner}>
          <Reveal className={styles.copy}>
            <span className="eyebrow">{regulatory.eyebrow}</span>
            <h2 className={styles.title}>{regulatory.title}</h2>
            <p className={styles.lead}>{regulatory.lead}</p>

            <div className={styles.points}>
              {regulatory.points.map((p) => (
                <div key={p.title} className={styles.point}>
                  <span className={styles.pointIcon}>
                    <ShieldIcon size={22} />
                  </span>
                  <div>
                    <p className={styles.pointTitle}>{p.title}</p>
                    <p className={styles.pointDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className={styles.panel}>
            <span className={styles.panelHead}>
              <ShieldIcon size={16} />
              Our promise
            </span>
            <ul className={styles.checklist}>
              {panelItems.map((item) => (
                <li key={item} className={styles.checkItem}>
                  <span className={styles.checkDot}>
                    <CheckIcon size={15} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
