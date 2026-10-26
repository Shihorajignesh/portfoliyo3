import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

// Mouse નજીક આવે ત્યારે button થોડું "ખેંચાય" છે. as="a" અથવા as="button" આપી શકાય.
export default function MagneticButton({ as = 'button', strength = 0.3, className = '', children, ...rest }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })
  const Component = motion[as]

  const onPointerMove = (e) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const onPointerLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <Component
      ref={ref}
      style={{ x: sx, y: sy }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      whileTap={{ scale: 0.96 }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}