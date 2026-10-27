import { useState } from 'react'
import styles from './Contact.module.css'
import { company } from '../data/site'
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckIcon,
} from '../assets/icons'
import { Reveal } from '../hooks/useReveal'

const servicesOptions = [
  'Tree Pruning & Crown Work',
  'Tree Felling & Removal',
  'Stump Grinding',
  'Hedge & Shrub Care',
  'Planting & Soil Care',
  'Pest & Disease Management',
  'Emergency Storm Response',
  'Something else',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo-only: no backend. Confirm the enquiry locally.
    setSubmitted(true)
  }

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.inner}>
          {/* ---- Left: contact details ---- */}
          <Reveal>
            <span className="eyebrow">Get In Touch</span>
            <h2 className={styles.title}>Book your free, no-obligation quote</h2>
            <p className={styles.lead}>
              Tell us a little about your trees and we’ll get back to you within one
              working day. Prefer to talk? Give us a call — we’re friendly and
              happy to help.
            </p>

            <div className={styles.detailList}>
              <div className={styles.detail}>
                <span className={styles.detailIcon}>
                  <PhoneIcon size={22} />
                </span>
                <div>
                  <div className={styles.detailLabel}>Phone</div>
                  <div className={styles.detailValue}>
                    <a href={company.phoneHref}>{company.phone}</a>
                  </div>
                  <div className={styles.detailSub}>{company.hours}</div>
                </div>
              </div>

              <div className={styles.detail}>
                <span className={styles.detailIcon}>
                  <MailIcon size={22} />
                </span>
                <div>
                  <div className={styles.detailLabel}>Email</div>
                  <div className={styles.detailValue}>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                </div>
              </div>

              <div className={styles.detail}>
                <span className={styles.detailIcon}>
                  <PinIcon size={22} />
                </span>
                <div>
                  <div className={styles.detailLabel}>Yard &amp; Office</div>
                  <div className={styles.detailValue}>{company.address}</div>
                </div>
              </div>

              <div className={styles.detail}>
                <span className={styles.detailIcon}>
                  <ClockIcon size={22} />
                </span>
                <div>
                  <div className={styles.detailLabel}>Opening Hours</div>
                  <div className={styles.detailValue}>{company.hours}</div>
                </div>
              </div>
            </div>

            <div className={styles.areas}>
              <div className={styles.areasLabel}>Proudly serving</div>
              <div className={styles.areasList}>
                {company.serviceAreas.map((area) => (
                  <span key={area} className={styles.areaTag}>
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ---- Right: enquiry form ---- */}
          <Reveal className={styles.formCard}>
            {submitted ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>
                  <CheckIcon size={34} />
                </span>
                <h3 className={styles.successTitle}>Thank you — enquiry received!</h3>
                <p className={styles.successText}>
                  We’ve got your details and one of our arborists will be in touch
                  within one working day. For anything urgent, please call{' '}
                  <a href={company.phoneHref}>{company.phone}</a>.
                </p>
              </div>
            ) : (
              <>
                <h3 className={styles.formTitle}>Request a callback</h3>
                <p className={styles.formSub}>
                  Fill in the form below and we’ll be in touch shortly.
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="name">
                        Full name <span className={styles.req}>*</span>
                      </label>
                      <input
                        className={styles.input}
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        autoComplete="name"
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="phone">
                        Phone <span className={styles.req}>*</span>
                      </label>
                      <input
                        className={styles.input}
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="07700 900000"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="email">
                        Email <span className={styles.req}>*</span>
                      </label>
                      <input
                        className={styles.input}
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@example.co.uk"
                        autoComplete="email"
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="postcode">
                        Postcode <span className={styles.req}>*</span>
                      </label>
                      <input
                        className={styles.input}
                        id="postcode"
                        name="postcode"
                        type="text"
                        required
                        placeholder="SL7 1AB"
                        autoComplete="postal-code"
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="service">
                      How can we help?
                    </label>
                    <select
                      className={styles.select}
                      id="service"
                      name="service"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choose a service…
                      </option>
                      {servicesOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="message">
                      Tell us about your trees
                    </label>
                    <textarea
                      className={styles.textarea}
                      id="message"
                      name="message"
                      placeholder="e.g. We have a large oak near the garage that needs a crown reduction…"
                    />
                  </div>

                  <button className={styles.submit} type="submit">
                    Request my free quote
                    <ArrowRightIcon size={17} />
                  </button>

                  <p className={styles.formNote}>
                    We’ll never share your details. See our{' '}
                    <a href="#">privacy policy</a>.
                  </p>
                </form>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
