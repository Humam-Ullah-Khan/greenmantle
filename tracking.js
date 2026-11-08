// Google Ads lead tracking: counts quote-form submissions and taps on the phone number.
//
// IDs come from Google Ads (account 536-810-9478):
// Goals > Conversions > All conversions > (action) > Tag setup > See event snippet.
//   ADS_ID      Google tag / conversion ID
//   FORM_LABEL  "Request quote" conversion
//   CALL_LABEL  "Click to call" conversion
// Set ADS_ID to '' to switch all tracking off.
const ADS_ID = 'AW-18542451459'
const FORM_LABEL = 'oj0lCO-5g7QdEIO23YlF'
const CALL_LABEL = 'WecNCPi6jLQdEIO23YlF'

if (ADS_ID) {
  const tag = document.createElement('script')
  tag.async = true
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ADS_ID)
  document.head.appendChild(tag)

  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', ADS_ID)

  const conversion = (label, callback) => {
    if (!label) { if (callback) callback(); return }
    window.gtag('event', 'conversion', {
      send_to: ADS_ID + '/' + label,
      value: 1.0,
      currency: 'USD',
      transport_type: 'beacon',
      event_callback: callback,
    })
  }

  // Phone taps: tel: links open the dialer, so the page stays and the beacon gets out.
  document.addEventListener('click', (e) => {
    const link = e.target.closest && e.target.closest('a[href^="tel:"]')
    if (link) conversion(CALL_LABEL)
  })

  // Quote forms: hold the submit until the conversion is sent (or 1s passes), then submit.
  document.addEventListener('submit', (e) => {
    const form = e.target
    if (!(form instanceof HTMLFormElement) || form.dataset.tracked) return
    if (!/formspree\.io/.test(form.action)) return
    e.preventDefault()
    form.dataset.tracked = '1'
    let sent = false
    const go = () => { if (!sent) { sent = true; form.submit() } }
    setTimeout(go, 1000)
    conversion(FORM_LABEL, go)
  })
}
