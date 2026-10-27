import styles from './Services.module.css'
import { services, emergency, company } from '../data/site'
import { serviceIcons, PhoneIcon, ArrowRightIcon } from '../assets/icons'
import { Reveal, RevealGroup } from '../hooks/useReveal'

export default function Services() {
  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow eyebrow--center">What We Do</span>
          <h2 className="section-head__title">
            Complete tree &amp; landscape care
          </h2>
          <p className="section-head__lead">
            Whatever your trees need, our qualified team has the expertise and
            equipment to do it safely — and to the highest professional standards.
          </p>
        </Reveal>

        <RevealGroup className={styles.grid}>
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <article key={service.title} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon size={30} />
                </div>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.desc}>{service.desc}</p>
              </article>
            )
          })}
        </RevealGroup>

        <Reveal className={styles.emergency}>
          <div className={styles.emergencyText}>
            <span className={styles.emergencyIcon}>
              <PhoneIcon size={24} />
            </span>
            <div>
              <p className={styles.emergencyTitle}>{emergency.title}</p>
              <p className={styles.emergencyDesc}>{emergency.desc}</p>
            </div>
          </div>
          <a className={styles.emergencyCta} href={company.phoneHref}>
            <PhoneIcon size={17} />
            <span>Call {company.phone}</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
