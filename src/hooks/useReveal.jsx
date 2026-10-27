import { useEffect, useRef, useState } from 'react'

/**
 * Adds `is-visible` class to an element when it scrolls into view.
 * Usage: const ref = useReveal(); <div ref={ref} className="reveal">...</div>
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced-motion: show immediately.
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

/**
 * Variant that applies the class names directly for convenience.
 * Returns a className string to spread onto the target element.
 */
export function Reveal({ children, as: Tag = 'div', className = '', ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function RevealGroup({ children, as: Tag = 'div', className = '' }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal-stagger ${visible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}
