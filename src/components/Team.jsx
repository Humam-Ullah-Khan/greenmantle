import styles from './Team.module.css'
import { team } from '../data/site'
import { CheckIcon, LeafIcon } from '../assets/icons'
import { Reveal, RevealGroup } from '../hooks/useReveal'

export default function Team() {
  return (
    <section className={`section ${styles.team}`} id="team">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow eyebrow--center">Meet The Team</span>
          <h2 className="section-head__title">
            Qualified arborists who care
          </h2>
          <p className="section-head__lead">
            Every job is carried out by certified, insured professionals who treat
            your trees — and your property — with genuine respect.
          </p>
        </Reveal>

        <RevealGroup className={styles.grid}>
          {team.map((m) => (
            <article key={m.name} className={styles.member}>
              <div className={styles.photo}>
                <img
                  src={m.img}
                  alt={`${m.name}, ${m.role}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={styles.body}>
                <h3 className={styles.name}>{m.name}</h3>
                <p className={styles.role}>{m.role}</p>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <CheckIcon size={16} />
                    {m.certs}
                  </span>
                  <span className={styles.metaItem}>
                    <LeafIcon size={16} />
                    {m.focus}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
