import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Ui/Section'
// data ની `process` નું નામ global `process` સાથે ટકરાય નહીં એટલે steps તરીકે import
import { process as steps } from '../data/portfolioData'
import { ease, viewport } from '../utils/animations'

export default function Process() {
  const ref = useRef(null)
  // Scroll સાથે line ભરાય છે
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 65%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <Section
      id="process"
      label="Development Process"
      title="How I build"
      subtitle="A simple, repeatable flow from idea to deployed website."
    >
      <div ref={ref} className="relative mx-auto max-w-4xl">
        <div aria-hidden="true" className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-1/2" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY }}
          className="absolute left-5 top-0 h-full w-px origin-top bg-linear-to-b from-brand-orange to-brand-violet md:left-1/2"
        />

        <ol className="space-y-8">
          {steps.map((item, i) => {
            const left = i % 2 === 0
            return (
              <motion.li
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease }}
                className={`relative pl-14 md:w-1/2 ${
                  left ? 'md:pl-0 md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'
                }`}
              >
                <span
                  className={`absolute left-0 top-2 grid h-10 w-10 place-items-center rounded-full border border-brand-orange/50 bg-ink-950 font-display text-xs font-bold text-brand-amber shadow-[0_0_20px_-4px_rgba(255,122,26,0.8)] ${
                    left ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:-translate-x-1/2'
                  }`}
                >
                  {item.step}
                </span>
                <div className="glass rounded-2xl p-5">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}