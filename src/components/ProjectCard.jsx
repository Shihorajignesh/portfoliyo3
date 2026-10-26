import { useState } from 'react'
import { ArrowRight, Check, Code } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import GlowCard from './GlowCard'
import LinkButton from './LinkButton'

export default function ProjectCard({ project, onOpen }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <GlowCard tilt max={6} className="conic-border flex h-full flex-col p-3 sm:p-4">
      {/* Image */}
      <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-ink-800">
        {imgFailed ? (
          <div className="grid h-full w-full place-items-center bg-linear-to-br from-brand-orange/20 via-ink-800 to-brand-violet/20">
            <Code size={40} className="text-brand-amber/70" aria-hidden="true" />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.imageAlt}
            width="800"
            height="500"
            loading="lazy"
            decoding="async"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink-950/70 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {project.type}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-1 pb-1 pt-5 sm:px-2">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300">
              {t}
            </li>
          ))}
        </ul>

        <ul className="mt-4 space-y-1.5">
          {project.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
              <Check size={14} className="mt-1 shrink-0 text-brand-orange" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <LinkButton href={project.github} icon={FaGithub}>GitHub</LinkButton>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-orange to-brand-amber px-4 py-2.5 text-sm font-semibold text-ink-950 transition-[filter] hover:brightness-110"
        >
          View Case Study <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    </GlowCard>
  )
}