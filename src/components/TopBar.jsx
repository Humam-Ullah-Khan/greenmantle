import styles from './TopBar.module.css'
import { company, topbar } from '../data/site'
import { CheckIcon, PhoneIcon, MailIcon } from '../assets/icons'

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={`container ${styles.inner}`}>
        <ul className={styles.credentials}>
          {topbar.credentials.map((cred) => (
            <li key={cred} className={styles.cred}>
              <CheckIcon size={14} />
              <span>{cred}</span>
            </li>
          ))}
        </ul>

        <div className={styles.contact}>
          <a className={`${styles.link} ${styles.email}`} href={`mailto:${company.email}`}>
            <MailIcon size={15} />
            <span>{company.email}</span>
          </a>
          <a className={styles.link} href={company.phoneHref}>
            <PhoneIcon size={15} />
            <span>{company.phone}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
