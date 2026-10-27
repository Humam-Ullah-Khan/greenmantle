import { useRef, useState } from 'react'
import styles from './BeforeAfter.module.css'
import { beforeAfter } from '../data/site'
import { CompareIcon } from '../assets/icons'
import { Reveal } from '../hooks/useReveal'

/** One draggable before/after comparison card. */
function ComparisonCard({ item }) {
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)
  const mediaRef = useRef(null)

  const setFromClientX = (clientX) => {
    const rect = mediaRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, pct)))
  }

  const handlePointerDown = (e) => {
    // Only respond to the primary button / touch
    if (e.button !== 0 && e.pointerType === 'mouse') return
    setDragging(true)
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      /* pointer capture is a nice-to-have; drag still works without it */
    }
    setFromClientX(e.clientX)
  }

  const handlePointerMove = (e) => {
    if (!dragging) return
    setFromClientX(e.clientX)
  }

  const handlePointerEnd = () => setDragging(false)

  const handleKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 4
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setPos((p) => Math.max(0, p - step))
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      setPos((p) => Math.min(100, p + step))
    } else if (e.key === 'Home') {
      e.preventDefault()
      setPos(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setPos(100)
    }
  }

  return (
    <figure className={styles.card}>
      {/* Comparison area — the drag zone */}
      <div
        className={styles.media}
        ref={mediaRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        {/* Base: BEFORE fills the frame */}
        <img
          className={styles.baseImg}
          src={item.before}
          alt={`Before: ${item.title}`}
          loading="lazy"
          decoding="async"
        />

        {/* Overlay: AFTER, clipped to the right of the divider */}
        <div
          className={styles.overlay}
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          aria-hidden="true"
        >
          <img
            className={styles.overlayImg}
            src={item.after}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>

        <span className={`${styles.tag} ${styles.tagBefore}`}>Before</span>
        <span className={`${styles.tag} ${styles.tagAfter}`}>After</span>

        {/* Draggable divider + handle */}
        <div className={styles.divider} style={{ left: `${pos}%` }}>
          <button
            type="button"
            className={styles.handle}
            role="slider"
            aria-label={`Compare before and after for ${item.title}. Use the left and right arrow keys.`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            aria-valuetext={`${Math.round(pos)}% before, ${Math.round(100 - pos)}% after`}
            aria-orientation="horizontal"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            <CompareIcon size={20} className={styles.arrows} />
          </button>
        </div>
      </div>

      {/* Caption — a proper footer below the image, never crossed by the divider */}
      <figcaption className={styles.caption}>
        <span className={styles.captionTitle}>{item.title}</span>
        <span className={styles.captionLoc}>{item.location}</span>
      </figcaption>
    </figure>
  )
}

export default function BeforeAfter() {
  return (
    <section className={styles.section} id="work">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className={styles.eyebrow}>{beforeAfter.eyebrow}</span>
          <h2 className={`${styles.title} section-head__title`}>
            {beforeAfter.title}
          </h2>
          <p className={`${styles.lead} section-head__lead`}>{beforeAfter.lead}</p>
        </Reveal>

        <Reveal className={styles.grid}>
          {beforeAfter.items.map((item) => (
            <ComparisonCard key={item.title} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
