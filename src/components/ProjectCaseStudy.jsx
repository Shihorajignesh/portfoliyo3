import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import LinkButton from './LinkButton'

function Block({ title, children }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/3 p-5">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-amber">{title}</h4>
      {children}
    </section>
  )
}

function List({ items }) {
  return (
    <ul className="space-y-2 text-sm text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
          {item}
        </li>
      ))}
    </ul>
  )
}

// project = null → modal બંધ. project object → modal ખુલ્લું.
export default function ProjectCaseStudy({ project, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return undefined
    const previous = document.body.style.overflow
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden' // પાછળનું page scroll ન થાય
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="case-study"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-90 flex items-end justify-center bg-ink-950/80 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()} // panel ની અંદર click થી બંધ ન થાય
            className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-900 p-5 shadow-2xl sm:rounded-3xl sm:p-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-brand-amber">Case Study · {project.type}</p>
                <h3 id="case-study-title" className="mt-1 text-2xl font-bold sm:text-3xl">
                  {project.title}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <p className="mt-5 leading-relaxed text-slate-300">{project.caseStudy.overview}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Block title="Problem">
                <p className="text-sm leading-relaxed text-slate-300">{project.caseStudy.problem}</p>
              </Block>
              <Block title="Solution">
                <p className="text-sm leading-relaxed text-slate-300">{project.caseStudy.solution}</p>
              </Block>
              <Block title="Main Features">
                <List items={project.caseStudy.features} />
              </Block>
              <Block title="UI Decisions">
                <List items={project.caseStudy.uiDecisions} />
              </Block>
              <Block title="Challenges">
                <List items={project.caseStudy.challenges} />
              </Block>
              <Block title="Technology Stack">
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                      {t}
                    </li>
                  ))}
                </ul>
              </Block>
            </div>

            <div className="mt-4">
              <Block title="Outcome">
                <p className="text-sm leading-relaxed text-slate-300">{project.caseStudy.outcome}</p>
              </Block>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton href={project.github} icon={FaGithub} variant="solid">GitHub</LinkButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}