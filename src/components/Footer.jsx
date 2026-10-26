import { motion } from 'framer-motion'
import { navLinks, profile, socialLinks } from '../data/portfolioData'
import { SITE_CONFIG } from '../utils/constants'
import { linkAttrs, socialAttrs } from '../utils/links'
import { socialIcons } from '../utils/Icons'

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-white/10">
      {/* subtle animated background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 60, 0], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand-orange/20 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-brand-violet/20 blur-[100px]"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-xl font-bold text-white">{profile.name}</p>
          <p className="text-gradient mt-1 font-display font-semibold">{profile.role}</p>
          <p className="mt-4 max-w-xs text-sm text-slate-400">{profile.statement}</p>
        </div>

        <nav aria-label="Footer quick links">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-slate-400 transition-colors hover:text-brand-amber">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a {...linkAttrs(SITE_CONFIG.RESUME)} className="text-slate-400 transition-colors hover:text-brand-amber">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Connect</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.id]
              return (
                <li key={link.id}>
                  <a
                    {...socialAttrs(link)}
                    aria-label={link.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-brand-amber/50 hover:text-brand-amber"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/5 px-4 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS and Framer Motion.
      </div>
    </footer>
  )
}