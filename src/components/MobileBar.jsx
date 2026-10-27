import styles from './MobileBar.module.css'
import { company } from '../data/site'
import { PhoneIcon, ArrowRightIcon } from '../assets/icons'

/**
 * Fixed bottom call-to-action bar shown on small screens so the phone
 * number and quote button are always within thumb's reach.
 */
export default function MobileBar() {
  return (
    <div className={styles.bar}>
      <a className={styles.call} href={company.phoneHref}>
        <PhoneIcon size={18} />
        <span>Call Now</span>
      </a>
      <a className={styles.quote} href="#contact">
        Free Quote
        <ArrowRightIcon size={16} />
      </a>
    </div>
  )
}
