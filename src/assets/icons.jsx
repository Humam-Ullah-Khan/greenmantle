/* ==========================================================================
   Icon set - Bootstrap Icons (consistent, professional vector icons)
   Loaded via CDN in index.html. Icons inherit currentColor so they can be
   tinted through CSS on the parent or the icon itself.
   ========================================================================== */

/**
 * Renders a Bootstrap Icons glyph. `size` maps to font-size (px).
 * Optional `className` is forwarded so icons can be styled/positioned.
 */
function Bi({ name, size = 20, className = '', style }) {
  return (
    <i
      className={`bi bi-${name} ${className}`.trim()}
      style={{ fontSize: `${size}px`, ...style }}
      aria-hidden="true"
    />
  )
}

/* ---- Service icons ---- */

export const PruneIcon = (p) => <Bi name="scissors" {...p} />
export const FellIcon = (p) => <Bi name="tree" {...p} />
export const StumpIcon = (p) => <Bi name="dash-circle" {...p} />
export const HedgeIcon = (p) => <Bi name="flower2" {...p} />
export const PlantIcon = (p) => <Bi name="droplet-half" {...p} />
export const ShieldIcon = (p) => <Bi name="shield-check" {...p} />
export const LeafIcon = (p) => <Bi name="leaf" {...p} />
export const BugIcon = (p) => <Bi name="bug" {...p} />

/* ---- UI / utility icons ---- */

export const PhoneIcon = (p) => <Bi name="telephone-fill" {...p} />
export const MailIcon = (p) => <Bi name="envelope-fill" {...p} />
export const PinIcon = (p) => <Bi name="geo-alt-fill" {...p} />
export const ClockIcon = (p) => <Bi name="clock-fill" {...p} />
export const SearchIcon = (p) => <Bi name="search" {...p} />
export const StarIcon = (p) => <Bi name="star-fill" {...p} />
export const CheckIcon = (p) => <Bi name="check2" {...p} />
export const MenuIcon = (p) => <Bi name="list" {...p} />
export const CloseIcon = (p) => <Bi name="x-lg" {...p} />
export const ArrowRightIcon = (p) => <Bi name="arrow-right" {...p} />
export const QuoteIcon = (p) => <Bi name="quote" {...p} />
export const AwardIcon = (p) => <Bi name="award-fill" {...p} />

/**
 * Two chevrons pointing outward — used on the before/after slider handle.
 * `className` should carry the CSS-module class that applies flex layout + gap.
 */
export const CompareIcon = ({ size = 16, className = '' }) => (
  <span
    className={`compareArrows ${className}`.trim()}
    style={{ fontSize: `${size}px` }}
    aria-hidden="true"
  >
    <i className="bi bi-chevron-left" />
    <i className="bi bi-chevron-right" />
  </span>
)

/* ---- Map service icon names to components ---- */

export const serviceIcons = {
  prune: PruneIcon,
  fell: FellIcon,
  stump: StumpIcon,
  hedge: HedgeIcon,
  plant: PlantIcon,
  shield: ShieldIcon,
  bug: BugIcon,
}
