import styles from './Footer.module.css'
import { company, footer } from '../data/site'
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from '../assets/icons'

function SocialIcon({ path }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

const socialPaths = {
  facebook:
    'M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3 0-1.3-.13-2.45-.13-2.4 0-4.05 1.47-4.05 4.17V9.9H7.5V13h2.7v8h3.3Z',
  instagram:
    'M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.05A6.75 6.75 0 1 0 18.75 12 6.75 6.75 0 0 0 12 5.25Zm0 11.13A4.38 4.38 0 1 1 16.38 12 4.38 4.38 0 0 1 12 16.38Zm6.99-11.4a1.58 1.58 0 1 1-1.58-1.57 1.58 1.58 0 0 1 1.58 1.57Z',
  linkedin:
    'M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.4h3.3V21H3.3V8.4Zm5.5 0h3.16v1.72h.05c.44-.83 1.5-1.72 3.1-1.72 3.32 0 3.93 2.18 3.93 5.02V21h-3.3v-5.63c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21H8.8V8.4Z',
  x: 'M17.53 3h3.05l-6.66 7.61L21.75 21h-6.13l-4.8-6.28L5.3 21H2.24l7.12-8.14L2 3h6.29l4.34 5.74L17.53 3Zm-1.07 16.13h1.69L7.62 4.78H5.8l10.66 14.35Z',
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <svg className={styles.brandMark} viewBox="0 0 48 48" aria-hidden="true">
                <rect width="48" height="48" rx="12" fill="currentColor" opacity="0.12" />
                <path
                  d="M24 8c-6.5 3.4-10 8.6-10 14.4 0 3.5 1.5 6.6 4.1 8.7-.3-2.4.3-5 2-7.2-.6 3.5.8 6.9 3.5 8.9-1.5 0-3 .3-4.3 1.1 2.1 1.8 5.2 2.4 8 1.5.7-.3 1.5-.6 2.1-1.2.6.6 1.4.9 2.1 1.2 2.8.9 5.9.3 8-1.5-1.3-.8-2.8-1.1-4.3-1.1 2.7-2 4.1-5.4 3.5-8.9 1.7 2.2 2.3 4.8 2 7.2 2.6-2.1 4.1-5.2 4.1-8.7C34 16.6 30.5 11.4 24 8Z"
                  fill="currentColor"
                />
                <rect x="22.6" y="30" width="2.8" height="10" rx="1.4" fill="#8a5a2b" />
              </svg>
              <span>
                <span className={styles.brandName}>Greenmantle</span>
                <span className={styles.brandSub}>Tree Care</span>
              </span>
            </div>
            <p className={styles.blurb}>{footer.blurb}</p>

            <div className={styles.social}>
              {Object.entries(company.social).map(([name, href]) => (
                <a
                  key={name}
                  className={styles.socialLink}
                  href={href}
                  aria-label={name}
                >
                  <SocialIcon path={socialPaths[name]} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.links}>
              {footer.quickLinks.map((l) => (
                <li key={l.label}>
                  <a className={styles.link} href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={styles.colTitle}>Get In Touch</h3>

            <a className={styles.footerPhone} href={company.phoneHref}>
              <PhoneIcon size={20} />
              <span>{company.phone}</span>
            </a>

            <div className={styles.contactItem} style={{ marginTop: '1.1rem' }}>
              <MailIcon size={17} />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>

            <div className={styles.contactItem}>
              <PinIcon size={17} />
              <span>{company.address}</span>
            </div>

            <div className={styles.contactItem}>
              <ClockIcon size={17} />
              <span>{company.hours}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>
            © {year} {company.name}. All rights reserved.
          </span>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
