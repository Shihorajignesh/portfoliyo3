import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import FloatingShapes from './FloatingShapes'
import ParticleField from './ParticleField'

// વચ્ચેનો wireframe sphere + rings, mouse ની સાથે હળવો parallax
function Core() {
  const group = useRef()
  const rings = useRef()

  useFrame((state, delta) => {
    const g = group.current
    if (!g) return
    g.rotation.y += delta * 0.22
    g.rotation.x += delta * 0.06
    g.position.x += (state.pointer.x * 0.4 - g.position.x) * 0.05
    g.position.y += (state.pointer.y * 0.3 - g.position.y) * 0.05
    if (rings.current) rings.current.rotation.z += delta * 0.15
  })

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[2.3, 2]} />
        <meshBasicMaterial color="#ff7a1a" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.22} />
      </mesh>
      <group ref={rings} rotation={[Math.PI / 2.3, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.75, 0.012, 16, 120]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
        </mesh>
      </group>
    </group>
  )
}

// active=false હોય (screen બહાર) ત્યારે rendering પૂરેપૂરું બંધ → battery/GPU બચે
export default function HeroScene({ active = true }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 50 }}
      frameloop={active ? 'always' : 'never'}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#ffb020" />
      <pointLight position={[-4, -3, 3]} intensity={30} color="#8b5cf6" />
      <Core />
      <FloatingShapes />
      <ParticleField />
    </Canvas>
  )
}