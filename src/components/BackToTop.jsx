import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Mouse પાછળ soft orange glow. Touch devices અને reduced-motion માં બંધ.
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.5 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return undefined
    setEnabled(true)
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  if (!enabled) return null
  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-0 -ml-62.5 -mt-62.5 h-125 w-125 rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.12),transparent_65%)]"
    />
  )
}