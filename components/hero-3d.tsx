"use client"

import { Environment, Float, OrbitControls, Stars } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Bloom, DepthOfField, EffectComposer, Noise } from "@react-three/postprocessing"
import { JSX, useMemo, useRef, useState } from "react"
import * as THREE from "three"

const GlassMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color("#00ffff"),
  roughness: 0,
  metalness: 0.2,
  transmission: 1,
  thickness: 0.5,
  emissive: new THREE.Color("#00ffff"),
  emissiveIntensity: 1.5,
  clearcoat: 1,
})

function IoTDevice(props: JSX.IntrinsicElements["group"]) {
  const [hovered, setHovered] = useState(false)
  const baseRef = useRef<THREE.Mesh | null>(null)
  const pulseRef = useRef<THREE.Mesh | null>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (baseRef.current) {
      baseRef.current.rotation.y = t * 0.4
    }
    if (pulseRef.current) {
      const scale = 1 + Math.sin(t * 4) * 0.08
      pulseRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <group {...props}>
      <mesh ref={baseRef} castShadow receiveShadow>
        <boxGeometry args={[1.4, 0.2, 1.4]} />
        <meshStandardMaterial color={hovered ? "#0088FF" : "#0071C5"} metalness={0.5} roughness={0.4} />
      </mesh>

      <mesh position={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[1.2, 0.05, 1.2]} />
        <meshStandardMaterial color="#111" />
      </mesh>

      {[-0.4, 0, 0.4].map((x, i) =>
        [-0.4, -0.2, 0, 0.2, 0.4].map((z) => (
          <mesh key={`${i}-${z}`} position={[x, 0.3, z]}>
            <boxGeometry args={[0.05, 0.2, 0.05]} />
            <meshStandardMaterial color="#333" />
          </mesh>
        ))
      )}

      <mesh
        ref={pulseRef}
        position={[0.5, 0.35, 0.5]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#00ff99" emissive="#00ff99" emissiveIntensity={3} />
      </mesh>

      <mesh position={[-0.5, 0.35, -0.5]}>
        <cylinderGeometry args={[0.02, 0.02, 0.4, 16]} />
        <meshStandardMaterial color="#aaa" />
      </mesh>

      <mesh position={[0, 0.3, 0]} material={GlassMaterial}>
        <cylinderGeometry args={[0.2, 0.2, 0.12, 32]} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.015, 16, 100]} />
        <meshStandardMaterial color="#00B2FF" emissive="#00B2FF" emissiveIntensity={0.5} transparent opacity={0.6} />
      </mesh>
      
    </group>
  )
}

function Nodes({ count = 40, radius = 6 }) {
  const points = useMemo(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      arr.push(new THREE.Vector3(x, y, z))
    }
    return arr
  }, [count, radius])

  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    groupRef.current?.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh
      const base = points[i]
      mesh.position.x = base.x + Math.sin(t + i) * 0.12
      mesh.position.y = base.y + Math.cos(t + i) * 0.12
      mesh.position.z = base.z + Math.sin(t * 0.5 + i) * 0.12
    })
  })

  return (
    <group ref={groupRef}>
      {points.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#00B2FF" emissive="#00B2FF" emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-90">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} shadows gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}>
        <fog attach="fog" args={["#000", 10, 30]} />

        <ambientLight intensity={0.2} />
        <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={1.4} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.6} color="#00ffff" />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.9}>
          <IoTDevice position={[0, -0.6, 0]} scale={1.7} />
        </Float>

        <Nodes />
        <Stars radius={80} depth={50} count={1200} factor={6} fade speed={1.2} />

        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />

        <EffectComposer>
          <Bloom intensity={0.8} luminanceThreshold={0} luminanceSmoothing={0.2} />
          <Noise opacity={0.02} />
          <DepthOfField focusDistance={0.005} focalLength={0.02} bokehScale={2} height={480} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
