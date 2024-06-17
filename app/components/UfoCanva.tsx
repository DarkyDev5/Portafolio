"use client"
import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Extend OrbitControls
extend({ OrbitControls });

interface ModelProps {
  path: string;
}

const Model: React.FC<ModelProps> = ({ path }) => {
  const { scene } = useGLTF(path);
  const ref = useRef<THREE.Group>(null);

  // Custom UFO animation
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta; // Rotate continuously
      ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.5; // Hover effect
    }
  });

  return <primitive ref={ref} object={scene} />;
};

const UfoCanvas: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 60 }} className="absolute top-0 left-0 w-full h-full">
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <group position={[10, -1, 0]} scale={[0.5, 0.5, 0.5]}>
        <Model path="/ufo4.glb" />
      </group>
      <OrbitControls />
    </Canvas>
  );
};

export default UfoCanvas;