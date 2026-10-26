import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import Section from './Ui/Section'
import MagneticButton from './Ui/MagneticButton'
import LinkButton from './LinkButton'
import GithubLiveStats from './GithubLiveStats'
import { btn } from './Ui/buttonStyles'
import { projects } from '../data/portfolioData'
import { SITE_CONFIG } from '../utils/constants'
import { linkAttrs } from '../utils/links'
import { fadeUp, viewport } from '../utils/animations'

const COLS = 26
const ROWS = 7
const cells = Array.from({ length: COLS * ROWS }, (_, i) => i)

export default function GithubSection() {
  return (
    <Section
      id="github"
      label="GitHub"
      title="Code lives on GitHub"
      subtitle="Every project I build is meant to be readable, organised and open for review."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <p className="leading-relaxed text-slate-300">
            My repositories show how I structure components, name things and grow a project over time. Take a look at
            the code behind my work.
          </p>

          <MagneticButton as="a" {...linkAttrs(SITE_CONFIG.GITHUB)} className={`${btn.primary} mt-6`}>
            <FaGithub size={18} aria-hidden="true" /> View GitHub Profile
          </MagneticButton>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Featured repositories
          </h3>
          <ul className="mt-4 space-y-3">
            {projects.map((p) => (
              <li
                key={p.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 py-3"
              >
                <span>
                  <span className="block font-semibold text-white">{p.title}</span>
                  <span className="text-xs text-slate-500">{p.type}</span>
                </span>
                <LinkButton href={p.github} icon={FaGithub}>Repository</LinkButton>
              </li>
            ))}
          </ul>

          {/* GITHUB_USERNAME ભર્યું હોય ત્યારે real data */}
          <GithubLiveStats username={SITE_CONFIG.GITHUB_USERNAME} />
        </motion.div>

        {/* Contribution-style placeholder: ફક્ત visual, fake data નથી */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="glass rounded-3xl p-5 sm:p-6"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="font-display text-sm font-semibold text-white">Contribution activity</p>
            <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-400">
              Placeholder
            </span>
          </div>
          <div
            aria-hidden="true"
            className="grid gap-0.75"
            style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
          >
            {cells.map((i) => (
              <span
                key={i}
                className="aspect-square animate-[cell-wave_3s_ease-in-out_infinite] rounded-[3px] bg-brand-orange"
                style={{ animationDelay: `${(i % COLS) * 70}ms` }}
              />
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Visual placeholder only. Set <code className="text-slate-300">GITHUB_USERNAME</code> in constants.js to show
            real profile data on the left.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}