// Reusable Framer Motion variants shared by portfolio sections.
export const ease = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
}

// parent પર વાપરો, children એક પછી એક (stagger) આવશે
export const stagger = (gap = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap } },
})

export const viewport = { once: true, margin: '-80px' }