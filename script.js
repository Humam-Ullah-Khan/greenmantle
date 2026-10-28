document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('._header_wo1o4_1')
  const menu = document.querySelector('#mobile-menu')
  const menuToggle = document.querySelector('._toggle_wo1o4_299')

  const closeMenu = () => {
    menu?.classList.remove('_mobileMenuOpen_wo1o4_335')
    menuToggle?.setAttribute('aria-expanded', 'false')
    menuToggle?.setAttribute('aria-label', 'Open menu')
    const icon = menuToggle?.querySelector('.bi')
    icon?.classList.remove('bi-x-lg')
    icon?.classList.add('bi-list')
  }

  const updateHeader = () => {
    header?.classList.toggle('_scrolled_wo1o4_25', window.scrollY > 12)
  }

  updateHeader()
  window.addEventListener('scroll', updateHeader, { passive: true })

  menuToggle?.addEventListener('click', () => {
    const open = !menu?.classList.contains('_mobileMenuOpen_wo1o4_335')
    menu?.classList.toggle('_mobileMenuOpen_wo1o4_335', open)
    menuToggle.setAttribute('aria-expanded', String(open))
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    const icon = menuToggle.querySelector('.bi')
    icon?.classList.toggle('bi-list', !open)
    icon?.classList.toggle('bi-x-lg', open)
  })

  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu))
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeMenu()
  })

  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger')
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach((element) => element.classList.add('is-visible'))
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    revealElements.forEach((element) => observer.observe(element))
  }

  document.querySelectorAll('._media_kaw8s_99').forEach((media) => {
    const overlay = media.querySelector('._overlay_kaw8s_147')
    const divider = media.querySelector('._divider_kaw8s_233')
    const handle = media.querySelector('._handle_kaw8s_255')
    let position = 50
    let dragging = false

    const update = (nextPosition) => {
      position = Math.max(0, Math.min(100, nextPosition))
      overlay.style.clipPath = `inset(0 0 0 ${position}%)`
      divider.style.left = `${position}%`
      handle.setAttribute('aria-valuenow', String(Math.round(position)))
      handle.setAttribute(
        'aria-valuetext',
        `${Math.round(position)}% before, ${Math.round(100 - position)}% after`,
      )
    }

    const updateFromPointer = (event) => {
      const bounds = media.getBoundingClientRect()
      update(((event.clientX - bounds.left) / bounds.width) * 100)
    }

    media.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return
      dragging = true
      try {
        media.setPointerCapture(event.pointerId)
      } catch {
        // Pointer capture is optional; dragging still works without it.
      }
      updateFromPointer(event)
    })
    media.addEventListener('pointermove', (event) => {
      if (dragging) updateFromPointer(event)
    })
    media.addEventListener('pointerup', () => {
      dragging = false
    })
    media.addEventListener('pointercancel', () => {
      dragging = false
    })

    handle.addEventListener('keydown', (event) => {
      const step = event.shiftKey ? 10 : 4
      if (event.key === 'ArrowLeft') update(position - step)
      else if (event.key === 'ArrowRight') update(position + step)
      else if (event.key === 'Home') update(0)
      else if (event.key === 'End') update(100)
      else return
      event.preventDefault()
    })
  })

  const form = document.querySelector('._form_1qao7_31')
  form?.addEventListener('submit', (event) => {
    event.preventDefault()
    const card = form.closest('._formCard_1qao7_241')
    card.innerHTML = `
      <div class="_success_1qao7_469">
        <span class="_successIcon_1qao7_479">
          <i class="bi bi-check2" style="font-size:34px" aria-hidden="true"></i>
        </span>
        <h3 class="_successTitle_1qao7_501">Thank you — enquiry received!</h3>
        <p class="_successText_1qao7_511">
          We’ve got your details and one of our arborists will be in touch within one working day.
          For anything urgent, please call <a href="tel:+16128950120">+1 (612) 895-0120</a>.
        </p>
      </div>`
  })
})
