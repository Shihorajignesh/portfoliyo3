import { navLinks, profile } from '../data/portfolioData'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4 sm:px-6 lg:px-8"
      >
        <a href="#home" className="shrink-0 font-display text-lg font-bold text-white">
          {profile.name}
        </a>
        <ul className="ml-auto flex min-w-0 items-center gap-5 overflow-x-auto text-sm text-slate-400">
          {navLinks
            .filter((link) => link.id !== 'home')
            .map((link) => (
              <li key={link.id} className="shrink-0">
                <a className="transition-colors hover:text-brand-amber" href={`#${link.id}`}>
                  {link.label}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  )
}
