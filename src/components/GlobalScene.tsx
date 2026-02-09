"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingOrb({ position, size, color, speed }: { 
  position: [number, number, number]; 
  size: number; 
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[size, 0]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
    </mesh>
  );
}

function FloatingRing({ position, size, color, speed }: { 
  position: [number, number, number]; 
  size: number; 
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[size, size * 0.1, 16, 32]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.12} />
    </mesh>
  );
}

function FloatingCube({ position, size, color, speed }: { 
  position: [number, number, number]; 
  size: number; 
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 2) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.1} />
    </mesh>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 300;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#3b82f6" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function MovingGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (!gridRef.current) return;
    gridRef.current.position.z = (state.clock.elapsedTime * 0.3) % 2;
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[60, 60, "#1e40af", "#1e3a8a"]}
      position={[0, -8, 0]}
      rotation={[Math.PI / 2, 0, 0]}
    />
  );
}

function Scene() {
  return (
    <>
      <ParticleField />
      <MovingGrid />
      
      {/* Floating orbs */}
      <FloatingOrb position={[-8, 3, -5]} size={1.5} color="#3b82f6" speed={0.4} />
      <FloatingOrb position={[10, -2, -8]} size={2} color="#60a5fa" speed={0.3} />
      <FloatingOrb position={[-5, -5, -3]} size={1} color="#1d4ed8" speed={0.5} />
      <FloatingOrb position={[7, 5, -6]} size={1.2} color="#3b82f6" speed={0.35} />
      
      {/* Floating rings */}
      <FloatingRing position={[12, 0, -10]} size={2} color="#3b82f6" speed={0.2} />
      <FloatingRing position={[-10, 4, -7]} size={1.5} color="#60a5fa" speed={0.25} />
      <FloatingRing position={[0, -6, -5]} size={1.8} color="#1d4ed8" speed={0.15} />
      
      {/* Floating cubes */}
      <FloatingCube position={[-12, -3, -6]} size={1.2} color="#3b82f6" speed={0.3} />
      <FloatingCube position={[8, 6, -8]} size={0.8} color="#60a5fa" speed={0.4} />
      <FloatingCube position={[15, -4, -12]} size={1.5} color="#1d4ed8" speed={0.2} />
      <FloatingCube position={[-6, 7, -9]} size={1} color="#3b82f6" speed={0.35} />
    </>
  );
}

export default function GlobalScene() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
