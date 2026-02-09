"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Box, Torus } from "@react-three/drei";
import * as THREE from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  speed: number;
  shape: "sphere" | "box" | "torus";
}

function FloatingShape({ position, color, speed, shape }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {shape === "sphere" && <sphereGeometry args={[0.3, 16, 16]} />}
        {shape === "box" && <boxGeometry args={[0.4, 0.4, 0.4]} />}
        {shape === "torus" && <torusGeometry args={[0.3, 0.1, 16, 32]} />}
        <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

function GridPlane() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (!gridRef.current) return;
    gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 2;
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[30, 30, "#3b82f6", "#1e3a5f"]}
      position={[0, -3, 0]}
      rotation={[Math.PI / 2, 0, 0]}
    />
  );
}

function ParticleRing() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 3 + Math.random() * 0.5;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#3b82f6" transparent opacity={0.6} />
    </points>
  );
}

export default function ProjectScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      dpr={[1, 2]}
    >
      <FloatingShape position={[-4, 2, -2]} color="#3b82f6" speed={0.5} shape="sphere" />
      <FloatingShape position={[4, -1, -3]} color="#60a5fa" speed={0.7} shape="box" />
      <FloatingShape position={[-3, -2, -1]} color="#3b82f6" speed={0.4} shape="torus" />
      <FloatingShape position={[3, 1, -2]} color="#1d4ed8" speed={0.6} shape="sphere" />
      <FloatingShape position={[0, 3, -4]} color="#60a5fa" speed={0.3} shape="box" />
      <ParticleRing />
      <GridPlane />
    </Canvas>
  );
}
