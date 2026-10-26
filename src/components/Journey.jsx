import { motion } from 'framer-motion'
import Section from './Ui/Section'
import { journey } from '../data/portfolioData'
import { ease, viewport } from '../utils/animations'

export default function Journey() {
  return (
    <Section
      id="journey"
      label="My Journey"
      title="From first line of HTML to frontend developer"
      subtitle="I am a fresher, so here is my real learning path instead of a made-up job history."
    >
      <div className="relative">
        {/* centre line: mobile પર ડાબી બાજુ, md+ પર વચ્ચે */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-3.75 top-0 w-px bg-linear-to-b from-brand-orange via-brand-violet to-transparent md:left-1/2"
        />

        <ol className="pl-10 md:pl-0">
          {journey.map((step, i) => {
            const left = i % 2 === 0 // even → ડાબી બાજુ (md+)
            return (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, x: left ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease }}
                className={`relative mb-10 last:mb-0 md:w-1/2 ${
                  left ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-6 h-3.5 w-3.5 rounded-full border-2 border-brand-amber bg-ink-950 shadow-[0_0_14px_rgba(255,176,32,0.8)] -left-8 ${
                    left ? 'md:left-auto md:-right-1.75' : 'md:-left-1.75'
                  }`}
                />
                <div className="glass rounded-3xl p-5 sm:p-6">
                  <p className="font-display text-sm font-semibold text-brand-orange">
                    Step {String(step.id).padStart(2, '0')}
                  </p>
                  <h3 className="mt-1 text-lg font-bold sm:text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.text}</p>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}