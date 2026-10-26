import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Section from './Ui/Section'
import { expertise } from '../data/portfolioData'
import { uiIcons } from '../utils/Icons'

export default function Expertise() {
  // active = હાલમાં પસંદ કરેલી category નો id
  const [active, setActive] = useState(expertise[0].id)
  const current = expertise.find((item) => item.id === active)
  const CurrentIcon = uiIcons[current.icon]

  return (
    <Section
      id="expertise"
      label="Frontend Expertise"
      title="What I can work with"
      subtitle="Choose a category to see what I am comfortable building."
    >
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        {/* Tabs: mobile પર આડા scroll થાય, desktop પર ઊભા */}
        <div
          role="tablist"
          aria-label="Expertise categories"
          className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
        >
          {expertise.map((item) => {
            const Icon = uiIcons[item.icon]
            const isActive = item.id === active
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={isActive}
                aria-controls="expertise-panel"
                onClick={() => setActive(item.id)}
                className={`flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-brand-orange/40 bg-brand-orange/10 text-white'
                    : 'border-white/10 bg-white/3 text-slate-400 hover:text-white'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-brand-amber' : ''} aria-hidden="true" />
                <span className="whitespace-nowrap">{item.title}</span>
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            role="tabpanel"
            id="expertise-panel"
            aria-labelledby={`tab-${current.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-3xl p-6 sm:p-8"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br from-brand-orange/20 to-brand-violet/20 text-brand-amber">
              <CurrentIcon size={26} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-2xl font-bold">{current.title}</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {current.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/3 p-4 text-sm text-slate-300"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-brand-orange" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}