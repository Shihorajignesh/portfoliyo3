import { linkAttrs } from '../utils/links'

// નાનું pill link (GitHub / Live Demo). Placeholder હોય તો disabled દેખાય છે.
export default function LinkButton({ href, icon: Icon, children, variant = 'outline', className = '' }) {
  const attrs = linkAttrs(href)
  const disabled = attrs.href === '#'
  const base =
    'inline-flex items-center justify-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition-colors sm:text-sm'
  const look = disabled
    ? 'cursor-not-allowed border border-white/5 bg-white/[0.02] text-slate-500'
    : variant === 'solid'
      ? 'bg-gradient-to-r from-brand-orange to-brand-amber text-ink-950 hover:brightness-110'
      : 'border border-white/15 text-slate-200 hover:border-brand-amber/60 hover:text-white'
  return (
    <a {...attrs} className={`${base} ${look} ${className}`}>
      {Icon && <Icon size={15} aria-hidden="true" />}
      {children}
    </a>
  )
}