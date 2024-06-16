"use client";
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Extend OrbitControls
extend({ OrbitControls });

interface ModelProps {
  path: string;
}

const Model: React.FC<ModelProps> = ({ path }) => {
  const { scene, animations } = useGLTF(path);
  const ref = useRef<THREE.Group>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scale.set(0.01, 0.01, 0.01); // Significantly reduce scale to avoid clipping
      ref.current.position.set(-31, -4, -5); // Ensure the model is centered
    }

    if (ref.current && animations.length > 0) {
      const mixer = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => mixer.clipAction(clip).play());
      mixerRef.current = mixer;
    }
  }, [scene, animations]);

  useFrame((state, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);

    // Simulate levitation animation
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1; // Adjust amplitude as needed
    }
  });

  return <primitive ref={ref} object={scene.clone(true)} />;
};

const NaveCanvas: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 5, 15], fov: 75 }} // Adjusted camera position to better fit model
      className="absolute top-0 left-0 w-full h-full z-10"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight position={[15, 20, 5]} angle={0.3} intensity={1} penumbra={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <hemisphereLight intensity={0.5} />
      <Model path="/Nave2.glb" />
      <OrbitControls />
    </Canvas>
  );
};

export default NaveCanvas;