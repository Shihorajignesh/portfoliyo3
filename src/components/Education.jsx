import { motion } from 'framer-motion'
import { Compass, GraduationCap } from 'lucide-react'
import Section from './Ui/Section'
import { education, profile } from '../data/portfolioData'
import { fadeUp, viewport } from '../utils/animations'

export default function Education() {
  return (
    <Section
      id="education"
      label="Education"
      title="My academic foundation"
      subtitle="The base that shaped my problem-solving and my direction into frontend development."
    >
      <div className="relative max-w-4xl">
        {/* vertical timeline line */}
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-4.75 top-2 w-px bg-linear-to-b from-brand-orange via-brand-violet to-transparent"
        />

        <ol className="space-y-8">
          {education.map((item) => (
            <motion.li
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="relative pl-14"
            >
              <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-brand-orange/40 bg-ink-900 text-brand-amber shadow-[0_0_24px_-6px_rgba(255,122,26,0.7)]">
                <GraduationCap size={18} aria-hidden="true" />
              </span>

              <div className="glass rounded-3xl p-6 sm:p-8">
                <p className="text-sm font-semibold text-brand-amber">{item.duration}</p>
                <h3 className="mt-1 text-xl font-bold sm:text-2xl">{item.degree}</h3>
                <p className="mt-1 text-slate-400">{item.institution}</p>
                <p className="mt-4 leading-relaxed text-slate-300">{item.description}</p>

                <p className="mt-6 text-xs uppercase tracking-[0.16em] text-slate-500">Skills developed</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 flex items-start gap-2 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-4 text-sm text-slate-300">
                  <Compass size={18} className="mt-0.5 shrink-0 text-brand-orange" aria-hidden="true" />
                  <span>
                    <strong className="text-white">Direction:</strong> {item.direction}
                  </span>
                </p>
              </div>
            </motion.li>
          ))}

          {/* આગળનો step (કોઈ fake details નથી, તમારો goal) */}
          <motion.li
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative pl-14"
          >
            <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-dashed border-white/20 bg-ink-900 text-slate-400">
              <Compass size={18} aria-hidden="true" />
            </span>
            <div className="rounded-3xl border border-dashed border-white/15 p-6">
              <p className="text-sm font-semibold text-slate-400">Next</p>
              <p className="mt-1 text-slate-300">{profile.goal}</p>
            </div>
          </motion.li>
        </ol>
      </div>
    </Section>
  )
}