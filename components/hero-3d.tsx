"use client"

import { JSX, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import * as THREE from "three"

// Simple IoT device representation instead of loading a model
// Removed unnecessary import of JSX

function IoTDevice(props: JSX.IntrinsicElements['group']) {
  const meshRef = useRef<THREE.Mesh | null>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <group {...props}>
      {/* Base of the device */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[1, 0.2, 1]} />
        <meshStandardMaterial color="#3291FF" />
      </mesh>

      {/* Circuit board details */}
      <mesh position={[0, 0.15, 0]} castShadow>
        <boxGeometry args={[0.8, 0.05, 0.8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Components */}
      <mesh position={[-0.25, 0.2, -0.25]} castShadow>
        <boxGeometry args={[0.2, 0.1, 0.2]} />
        <meshStandardMaterial color="#555555" />
      </mesh>

      <mesh position={[0.25, 0.2, -0.25]} castShadow>
        <boxGeometry args={[0.15, 0.15, 0.15]} />
        <meshStandardMaterial color="#444444" />
      </mesh>

      <mesh position={[0, 0.2, 0.25]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* LED light */}
      <mesh position={[-0.3, 0.25, 0.3]} castShadow>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#ff3333" emissive="#ff0000" emissiveIntensity={2} />
      </mesh>
    </group>
  )
}

function Nodes({ count = 20, radius = 4 }) {
  const points = useRef<THREE.Vector3[]>([])
  const lineRef = useRef<THREE.Line | null>(null)

  // Generate random points on a sphere
  if (points.current.length === 0) {
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      points.current.push(new THREE.Vector3(x, y, z))
    }
  }

  useFrame(() => {
    if (lineRef.current) {
      const positions = lineRef.current.geometry.attributes.position.array

      for (let i = 0; i < points.current.length; i++) {
        const point = points.current[i]
        // Add subtle movement
        point.x += Math.sin(Date.now() * 0.001 + i) * 0.01
        point.y += Math.cos(Date.now() * 0.001 + i) * 0.01
        point.z += Math.sin(Date.now() * 0.002 + i) * 0.01

        positions[i * 3] = point.x
        positions[i * 3 + 1] = point.y
        positions[i * 3 + 2] = point.z
      }

      lineRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  // Create a buffer geometry for the points
  const pointsGeometry = new THREE.BufferGeometry()
  const positions = new Float32Array(points.current.length * 3)

  for (let i = 0; i < points.current.length; i++) {
    positions[i * 3] = points.current[i].x
    positions[i * 3 + 1] = points.current[i].y
    positions[i * 3 + 2] = points.current[i].z
  }

  pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

  return (
    <group>
      {points.current.map((position, i) => (
        <mesh key={i} position={[position.x, position.y, position.z]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#3291FF" emissive="#3291FF" emissiveIntensity={0.5} />
        </mesh>
      ))}
      <primitive object={new THREE.Line(pointsGeometry, new THREE.LineBasicMaterial({ color: "#3291FF", opacity: 0.4, transparent: true }))} ref={lineRef} />
    </group>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <IoTDevice position={[0, 0, 0]} scale={1.5} />
        </Float>

        <Nodes count={30} radius={5} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
