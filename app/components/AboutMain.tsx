"use client";
import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';

// Extend OrbitControls
extend({ OrbitControls });

interface ModelProps {
  path: string;
}

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/'); // Ensure Draco files are located at public/draco/

const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath('/basic/'); // Update to the correct path for the transcoder

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);
gltfLoader.setKTX2Loader(ktx2Loader.detectSupport(new THREE.WebGLRenderer()));

const useDracoGLTF = (path: string) => {
  const [gltf, setGltf] = React.useState<THREE.Group | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    gltfLoader.load(
      path,
      (gltf) => {
        setGltf(gltf.scene as THREE.Group); // Cast gltf.scene to THREE.Group
        console.log(`Model loaded: ${path}`, gltf);
      },
      undefined,
      (err) => {
        console.error(`Failed to load model: ${path}`, err);
        setError(`Failed to load model: ${path}`);
      }
    );
  }, [path]);

  return { gltf, error };
};

const Model: React.FC<ModelProps> = ({ path }) => {
  const { gltf, error } = useDracoGLTF(path);
  const ref = useRef<THREE.Group>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (!gltf) return;

    if (ref.current) {
      ref.current.scale.set(0.1, 0.1, 0.1);
      ref.current.position.set(0, 0, 0);

      const animations = gltf.animations || [];
      if (animations.length > 0) {
        const mixer = new THREE.AnimationMixer(gltf);
        const defaultAction = mixer.clipAction(animations[0]);
        defaultAction.play();
        mixerRef.current = mixer;
      }
    }
  }, [gltf]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }

    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;

      if (path === "/UFO5.glb") {
        ref.current.position.x = Math.cos(state.clock.elapsedTime) * 0.2;
        ref.current.position.z = Math.sin(state.clock.elapsedTime) * 0.1;
      }

      if (path === "/Nave3.glb") {
        ref.current.position.z = Math.sin(state.clock.elapsedTime) * 3;
      }
    }
  });

  if (error) {
    return <div>Error: {error}</div>;
  }

  return gltf ? <primitive ref={ref} object={gltf} /> : null;
};


const NaveCanvas: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 3, 7], fov: 60 }}
      className="absolute top-0 left-0 w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <group position={[-10, 1, 0]} scale={[0.04, 0.04, 0.04]} rotation={[0, -0.7, 0]}>
        <Model path="/Nave3.glb" />
      </group>
      <OrbitControls />
    </Canvas>
  );
};

const AstroCanvas: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 3, 10], fov: 80 }}
      className="absolute top-0 left-0 w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <group position={[0, -5, 0]} scale={[40, 40, 40]} rotation={[0, 0, 0.7]}>
        <Model path="/astro4.glb" />
      </group>
      <OrbitControls />
    </Canvas>
  );
};

const UfoCanvas: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 3, 7], fov: 60 }}
      className="absolute top-0 left-0 w-full h-full"
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <group position={[16, -0.6, 0]} scale={[7, 7, 7]} rotation={[1, -1.7, 0.6]}>
        <Model path="/UFO5.glb" />
      </group>
      <OrbitControls />
    </Canvas>
  );
};

export { NaveCanvas, AstroCanvas, UfoCanvas };