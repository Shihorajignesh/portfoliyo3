import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Ui/Section'
import ProjectCard from './ProjectCard'
import ProjectCaseStudy from './ProjectCaseStudy'
import { projects } from '../data/portfolioData'
import { fadeUp, stagger, viewport } from '../utils/animations'

export default function Projects() {
  // selected = જે project નો case study ખુલ્લો છે (null = બંધ)
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <Section
      id="projects"
      label="Projects"
      title="Selected work"
      subtitle="Real frontend projects where I applied React, state management and responsive design."
    >
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={fadeUp} className="h-full perspective-distant">
            <ProjectCard project={project} onOpen={() => setSelected(project)} />
          </motion.div>
        ))}
      </motion.div>

      <ProjectCaseStudy project={selected} onClose={close} />
    </Section>
  )
}