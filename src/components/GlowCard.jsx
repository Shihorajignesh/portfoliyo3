import { motion } from 'framer-motion'
import useMouseTilt from '../hooks/useMouseTilt'

// Glass card + mouse-follow glow + hover elevation. tilt={true} આપો તો 3D tilt પણ થશે.
export default function GlowCard({ children, className = '', tilt = false, max = 8 }) {
  const { ref, style, glow, handlers } = useMouseTilt({ max: tilt ? max : 0 })
  return (
    <motion.div
      ref={ref}
      {...handlers}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      style={tilt ? { ...style, transformStyle: 'preserve-3d' } : undefined}
      className={`glass group relative rounded-3xl transition-colors duration-300 hover:border-brand-amber/30 ${className}`}
    >
      <motion.div
        aria-hidden="true"
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  )
}