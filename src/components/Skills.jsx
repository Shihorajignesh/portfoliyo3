import { motion } from 'framer-motion'
import Section from './Ui/Section'
import GlowCard from './GlowCard'
import { skills, skillsNote } from '../data/portfolioData'
import { skillIcons } from '../utils/Icons'
import { ease, fadeUp, stagger, viewport } from '../utils/animations'

function SkillCard({ skill }) {
  const { Icon, color } = skillIcons[skill.icon]
  return (
    <motion.div variants={fadeUp}>
      <GlowCard tilt max={9} className="h-full p-6">
        <span
          className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5"
          style={{ color, boxShadow: `0 0 28px -8px ${color}99` }}
        >
          <Icon size={24} aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-lg font-bold">{skill.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-400">{skill.description}</p>

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
            <span>Self-assessed</span>
            <span className="font-semibold text-slate-300">{skill.level}%</span>
          </div>
          <div
            role="progressbar"
            aria-valuenow={skill.level}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${skill.name} self-assessed comfort level`}
            className="h-1.5 overflow-hidden rounded-full bg-white/10"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease, delay: 0.2 }}
              className="h-full rounded-full bg-linear-to-r from-brand-orange to-brand-amber"
            />
          </div>
        </div>
      </GlowCard>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Tools I build with"
      subtitle="The core technologies behind my projects."
    >
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </motion.div>
      <p className="mt-8 text-sm text-slate-500">{skillsNote}</p>
    </Section>
  )
}