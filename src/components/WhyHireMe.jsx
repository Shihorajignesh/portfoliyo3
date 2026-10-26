import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Section from './Ui/Section'
import GlowCard from './GlowCard'
import { profile, whyHire } from '../data/portfolioData'
import { fadeUp, stagger, viewport } from '../utils/animations'

export default function WhyHireMe() {
  return (
    <Section
      id="why-hire-me"
      label="Why Hire Me"
      title="What you get with me"
      subtitle="Honest strengths of a motivated fresher who learns by building."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl border border-brand-orange/20 bg-linear-to-br from-brand-orange/10 via-transparent to-brand-violet/10 p-6 sm:p-8">
            <p className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">{profile.goal}</p>
            <p className="mt-4 text-sm text-slate-400">
              {profile.level}. Ready to contribute, learn quickly and grow with a team.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-4 sm:grid-cols-2"
        >
          {whyHire.map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <GlowCard className="h-full p-5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-orange/15 text-brand-amber">
                  <Check size={16} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-bold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}