import { useRef } from 'react'
import { useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Mouse ની position પ્રમાણે element ને 3D tilt + mouse-follow glow આપે છે.
// Touch devices પર (pointerType !== 'mouse') કંઈ થતું નથી, એટલે mobile પર scroll બગડતું નથી.
export default function useMouseTilt({ max = 10 } = {}) {
  const ref = useRef(null)
  const px = useMotionValue(0.5) // 0 થી 1 (ડાબે → જમણે)
  const py = useMotionValue(0.5) // 0 થી 1 (ઉપર → નીચે)
  const spring = { stiffness: 220, damping: 22, mass: 0.4 }
  const sx = useSpring(px, spring)
  const sy = useSpring(py, spring)

  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const rotateX = useTransform(sy, [0, 1], [max, -max])

  const gx = useTransform(px, (v) => `${v * 100}%`)
  const gy = useTransform(py, (v) => `${v * 100}%`)
  const glow = useMotionTemplate`radial-gradient(420px circle at ${gx} ${gy}, rgba(255,122,26,0.16), transparent 65%)`

  const onPointerMove = (e) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const onPointerLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return {
    ref,
    glow,
    style: { rotateX, rotateY, transformPerspective: 1000 },
    handlers: { onPointerMove, onPointerLeave },
  }
}