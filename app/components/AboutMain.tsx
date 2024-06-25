"use client";
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';

// Configuración de los loaders
const dracoLoader = new DRACOLoader().setDecoderPath('/draco/');
const ktx2Loader = new KTX2Loader().setTranscoderPath('/basic/');
const gltfLoader = new GLTFLoader().setDRACOLoader(dracoLoader).setKTX2Loader(ktx2Loader.detectSupport(new THREE.WebGLRenderer()));

// Hook personalizado para cargar modelos GLTF
const useDracoGLTF = (path: string) => {
  const [gltf, setGltf] = React.useState<THREE.Group | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    gltfLoader.load(path, (gltf) => {
      console.log(`Loaded model: ${path}`, gltf.scene);
      setGltf(gltf.scene);
    }, undefined, (err) => {
      console.error(`Failed to load model: ${path}`, err);
      setError(`Failed to load model: ${path}`);
    });
  }, [path]);

  return { gltf, error };
};

// Props para el componente de modelo
interface ModelProps {
  path: string;
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: [number, number, number];
}

const Model: React.FC<ModelProps> = ({ path, scale, position, rotation }) => {
  const { gltf, error } = useDracoGLTF(path);
  const ref = React.useRef<THREE.Group>(null);
  const mixerRef = React.useRef<THREE.AnimationMixer | null>(null);

  React.useEffect(() => {
    if (gltf && ref.current) {
      ref.current.scale.set(...scale);
      ref.current.position.set(...position);
      if (rotation) {
        ref.current.rotation.set(...rotation);
      }
      const animations = gltf.animations || [];
      if (animations.length > 0) {
        const mixer = new THREE.AnimationMixer(gltf);
        mixer.clipAction(animations[0]).play();
        mixerRef.current = mixer;
      }
    }
  }, [gltf, scale, position, rotation]);

  useFrame((state, delta) => {
    mixerRef.current?.update(delta);
    if (ref.current) {
      if (path === "/earth3.glb") {
        // Rotación de la Tierra sobre su propio eje
        ref.current.rotation.y += delta * 0.1;
      } else if (path === "/moon.glb") {
        // Animación de la Luna orbitando alrededor de la Tierra con rotación de 45 grados
        const earthPosition = new THREE.Vector3(4, 0, 0); // Posición de la Tierra
        const moonOrbitRadius = 2;
        const moonOrbitSpeed = 0.5; // Velocidad de órbita de la Luna
        ref.current.position.x = earthPosition.x + moonOrbitRadius * Math.cos(state.clock.elapsedTime * moonOrbitSpeed);
        ref.current.position.z = earthPosition.z + moonOrbitRadius * Math.sin(state.clock.elapsedTime * moonOrbitSpeed);
        ref.current.rotation.y += delta * 0.5; // Rotación en su propio eje
        ref.current.rotation.z = THREE.MathUtils.degToRad(80); // Rotación en 80 grados en el eje Z
      } else {
        // Animación general de subir y bajar
        ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
      }
    }
  });

  if (error) {
    return <div>Error: {error}</div>;
  }

  return gltf ? <primitive ref={ref} object={gltf} /> : null;
};

const SceneCanvas: React.FC = () => (
  <Canvas camera={{ position: [0, 3, 7], fov: 60 }} className="absolute top-0 left-0 w-full h-full">
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <Model path="/astro1.glb" position={[-5, 0, 0]} scale={[1, 1, 1]} />
    <Model path="/earth3.glb" position={[4.3, 1.5, 0]} scale={[0.1, 0.1, 0.1]} />
    <Model path="/moon.glb" position={[-1.5, 1, 0]} scale={[0.04, 0.04, 0.04]} rotation={[THREE.MathUtils.degToRad(3), THREE.MathUtils.degToRad(2), THREE.MathUtils.degToRad(20)]} />
  </Canvas>
);

const AboutMain: React.FC = () => (
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <SceneCanvas />
  </div>
);

export default AboutMain;