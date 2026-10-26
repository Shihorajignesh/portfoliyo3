import { motion } from 'framer-motion'

// Props: id (navigation માટે), label (નાનું tag), title, subtitle, children
export default function Section({ id, label, title, subtitle, className = '', children }) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 ${className}`}
    >
      {(label || title) && (
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-3xl md:mb-16"
        >
          {label && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              {label}
            </span>
          )}
          {title && (
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{title}</h2>
          )}
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{subtitle}</p>
          )}
        </motion.header>
      )}
      {children}
    </section>
  )
}