import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Shape({ position, color, children, speed = 2, rotationIntensity = 1.4, floatIntensity = 1.6 }) {
  const group = useRef(null)

  useFrame((state) => {
    const object = group.current
    if (!object) return

    const time = state.clock.elapsedTime * speed + position[0] + position[2]
    object.position.y = position[1] + Math.sin(time) * 0.1 * floatIntensity
    object.rotation.x = Math.sin(time * 0.6) * 0.1 * rotationIntensity
    object.rotation.y = Math.cos(time * 0.5) * 0.1 * rotationIntensity
    object.rotation.z = Math.cos(time * 0.4) * 0.1 * rotationIntensity
  })

  return (
    <group ref={group} position={position}>
      <mesh>
        {children}
        <meshStandardMaterial
          color={color}
          metalness={0.6}
          roughness={0.25}
          emissive={color}
          emissiveIntensity={0.25}
        />
      </mesh>
    </group>
  )
}

export default function FloatingShapes() {
  return (
    <>
      <Shape position={[-2.6, 1.6, 0.3]} color="#ff7a1a">
        <octahedronGeometry args={[0.42]} />
      </Shape>
      <Shape position={[2.7, 1.1, -0.4]} color="#8b5cf6" speed={2.6}>
        <torusGeometry args={[0.3, 0.1, 16, 40]} />
      </Shape>
      <Shape position={[2.2, -1.9, 0.4]} color="#ffb020" speed={1.8}>
        <boxGeometry args={[0.45, 0.45, 0.45]} />
      </Shape>
      <Shape position={[-2.3, -1.7, -0.2]} color="#22d3ee" speed={2.3}>
        <icosahedronGeometry args={[0.28, 0]} />
      </Shape>
    </>
  )
}