import { motion } from 'framer-motion'
import { Atom, BookOpen, Boxes, GraduationCap, Layers, LayoutDashboard, Puzzle, Smartphone, Sparkles } from 'lucide-react'
import Section from './Ui/Section'
import GlowCard from './GlowCard'
import { profile, stats } from '../data/portfolioData'
import { fadeUp, stagger, viewport } from '../utils/animations'

const statIcons = [GraduationCap, Atom, Smartphone, Layers]

const focus = [
  { icon: GraduationCap, label: 'BCA education' },
  { icon: Atom, label: 'React.js focus' },
  { icon: Smartphone, label: 'Responsive websites' },
  { icon: LayoutDashboard, label: 'UI implementation' },
  { icon: Boxes, label: 'Reusable components' },
  { icon: Sparkles, label: 'Clean code' },
  { icon: Puzzle, label: 'Problem solving' },
  { icon: BookOpen, label: 'Continuous learning' },
]

export default function About() {
  return (
    <Section
      id="about"
      label="About Me"
      title="Turning ideas into clean, responsive interfaces"
      subtitle={profile.goal}
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="space-y-5"
        >
          {/* map(): about ના દરેક paragraph માટે એક <p> */}
          {profile.about.map((text) => (
            <motion.p key={text.slice(0, 24)} variants={fadeUp} className="text-base leading-relaxed text-slate-300 sm:text-lg">
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => {
            const Icon = statIcons[i]
            return (
              <motion.div key={stat.label} variants={fadeUp}>
                <GlowCard className="h-full p-5">
                  <Icon size={22} className="text-brand-amber" aria-hidden="true" />
                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">{stat.label}</p>
                  <p className="text-gradient mt-1 font-display text-lg font-bold sm:text-xl">{stat.value}</p>
                </GlowCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <motion.ul
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
      >
        {focus.map(({ icon: Icon, label }) => (
          <motion.li
            key={label}
            variants={fadeUp}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-slate-300 transition-colors hover:border-brand-amber/30 hover:text-white"
          >
            <Icon size={18} className="shrink-0 text-brand-orange" aria-hidden="true" />
            {label}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}