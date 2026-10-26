import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Seeded random: દર વખતે સરખા particles (pure, lint-friendly)
function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

export default function ParticleField({ count = 260 }) {
  const ref = useRef()

  const positions = useMemo(() => {
    const rand = seeded(42)
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.8 + rand() * 2.6 // sphere shell
      const theta = rand() * Math.PI * 2
      const phi = Math.acos(2 * rand() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#ffb020" transparent opacity={0.8} sizeAttenuation depthWrite={false} />
    </points>
  )
}