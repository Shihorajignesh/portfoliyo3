import { lazy, Suspense, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import MagneticButton from './Ui/MagneticButton'
import ResumeLink from './ResumeLink'
import ProfilePhoto from './Profilephoto'
import SceneBoundary from './3d/SceneBoundary'
import { btn } from './Ui/buttonStyles'
import useMediaQuery from '../hooks/UseMediaQuery'
import { profile } from '../data/portfolioData'
import { fadeUp, stagger } from '../utils/animations'

// 3D code અલગ chunk માં, ફક્ત જરૂર પડે ત્યારે load થાય (lazy loading)
const HeroScene = lazy(() => import('./3d/HeroScene'))

// Mobile / loading / error માટે હલકું CSS-only background
function SceneFallback() {
  return (
    <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
      <div className="absolute h-[92%] w-[92%] animate-spin-slow rounded-full border border-dashed border-brand-orange/30" />
      <div className="absolute h-[76%] w-[76%] rounded-full border border-brand-violet/30" />
      <div className="absolute h-[62%] w-[62%] rounded-full bg-brand-orange/10 blur-3xl" />
    </div>
  )
}

const chips = [
  { label: 'React.js', pos: 'left-0 top-[10%]', delay: 0 },
  { label: 'Tailwind CSS', pos: 'right-0 top-[26%]', delay: 1 },
  { label: 'BCA Graduate', pos: 'bottom-[8%] left-[4%]', delay: 2 },
]

export default function Hero() {
  const sceneRef = useRef(null)
  const inView = useInView(sceneRef)
  const reduce = useReducedMotion()
  const isDesktop = useMediaQuery('(min-width: 768px)')
  // 3D ફક્ત tablet/desktop પર અને reduced-motion બંધ હોય ત્યારે
  const show3D = isDesktop && !reduce

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pb-20 pt-28 sm:px-6 lg:px-8"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* ---------- Left: text ---------- */}
        <motion.div variants={stagger(0.12)} initial="hidden" animate="show" className="order-2 lg:order-1">
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Frontend Developer opportunities
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="wrap-break-word text-4xl font-bold leading-[1.05] sm:text-6xl xl:text-7xl"
          >
            {profile.name}
            <span className="text-gradient mt-2 block">{profile.role}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-sm font-medium uppercase tracking-[0.14em] text-brand-amber sm:text-base"
          >
            {profile.tagline}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.statement}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <MagneticButton as="a" href="#projects" className={btn.primary}>
              View My Work <ArrowRight size={16} aria-hidden="true" />
            </MagneticButton>
            <ResumeLink variant="ghost" />
            <MagneticButton as="a" href="#contact" className={btn.ghost}>
              <Mail size={16} aria-hidden="true" /> Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* ---------- Right: 3D scene + photo ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <div
            ref={sceneRef}
            className="relative mx-auto aspect-square w-full max-w-75 sm:max-w-105 lg:max-w-125"
          >
            {show3D ? (
              <SceneBoundary fallback={<SceneFallback />}>
                <Suspense fallback={<SceneFallback />}>
                  <div className="absolute inset-0">
                    <HeroScene active={inView} />
                  </div>
                </Suspense>
              </SceneBoundary>
            ) : (
              <SceneFallback />
            )}

            <ProfilePhoto className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2" />

            {chips.map((chip) => (
              <motion.span
                key={chip.label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: chip.delay }}
                className={`glass absolute z-20 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg ${chip.pos}`}
              >
                {chip.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-brand-amber sm:flex"
      >
        Scroll
        <span className="flex h-9 w-5 justify-center rounded-full border border-current pt-1.5">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-current"
          />
        </span>
      </a>
    </section>
  )
}