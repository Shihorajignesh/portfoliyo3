import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import MagneticButton from './Ui/MagneticButton'
import ResumeLink from './ResumeLink'
import { btn } from './Ui/buttonStyles'
import { viewport } from '../utils/animations'

export default function ResumeCTA() {
  return (
    <section id="resume" className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={viewport}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-ink-800 via-ink-900 to-ink-950 px-6 py-14 text-center sm:px-12 md:py-20"
      >
        <div aria-hidden="true" className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-orange/25 blur-[100px]" />
        <div aria-hidden="true" className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand-violet/25 blur-[100px]" />
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />

        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
            Let’s build something <span className="text-gradient">exceptional.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            Looking for a motivated Frontend Developer? Download my resume or take a look at my projects.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ResumeLink />
            <MagneticButton as="a" href="#projects" className={btn.ghost}>
              View Projects
            </MagneticButton>
            <MagneticButton as="a" href="#contact" className={btn.ghost}>
              <Mail size={16} aria-hidden="true" /> Contact Me
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </section>
  )
}