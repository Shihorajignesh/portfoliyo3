import { motion } from 'framer-motion'
import Section from './Ui/Section'
import GlowCard from './GlowCard'
import { services } from '../data/portfolioData'
import { uiIcons } from '../utils/Icons'
import { fadeUp, stagger, viewport } from '../utils/animations'

export default function Services() {
  return (
    <Section
      id="services"
      label="Services"
      title="How I can help"
      subtitle="Frontend work for businesses, startups and teams."
    >
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => {
          const Icon = uiIcons[service.icon]
          return (
            <motion.div key={service.id} variants={fadeUp}>
              <GlowCard className="h-full p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-brand-orange/20 to-brand-violet/20 text-brand-amber">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.text}</p>
                {/* hover પર લાંબી થતી line */}
                <span className="mt-6 block h-px w-8 bg-brand-amber transition-all duration-500 group-hover:w-full" />
              </GlowCard>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}