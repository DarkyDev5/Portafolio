"use client";
import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';

// Extend OrbitControls
extend({ OrbitControls });

// Cargar texturas manualmente


// Cargar texturas asíncronamente

interface ModelProps {
  path: string;
}

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/'); // Cambia a la ruta correcta de tu Draco

const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath('/basic/'); // Cambia a la ruta correcta del transcoder

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);
gltfLoader.setKTX2Loader(ktx2Loader.detectSupport(new THREE.WebGLRenderer()));

const useDracoGLTF = (path: string) => {
  const [gltf, setGltf] = React.useState<GLTF | null>(null);

  useEffect(() => {
    gltfLoader.load(path, (gltf) => {
      setGltf(gltf);
    });
  }, [path]);

  return gltf;
};

const Model: React.FC<ModelProps> = ({ path }) => {
  const gltf = useDracoGLTF(path);
  const ref = useRef<THREE.Group>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (!gltf) return;

    if (ref.current) {
      ref.current.scale.set(0.01, 0.01, 0.01); // Significantly reduce scale to avoid clipping
      ref.current.position.set(-31, -4, -5); // Ensure the model is centered

      if (gltf.animations && gltf.animations.length > 0) {
        const mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        mixerRef.current = mixer;
      }
    }
  }, [gltf]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }

    // Simulate levitation animation
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1; // Adjust amplitude as needed
    }
  });

  return gltf ? <primitive ref={ref} object={gltf.scene} /> : null;
};

const AstroCanvas: React.FC = () => {
  const rotationInRadians = 90 * (Math.PI / 180); // Convert 45 degrees to radians

  return (
    <Canvas 
    camera={{ position: [2.5, 2.5, 6], fov: 80 }} 
    className=""
  >
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 10]} intensity={1} />
    <group position={[-3, -3, 7]} scale={[2, 2, 2]} rotation={[-6.6, 0.8, 6]}>
      <Model path="/astro3.glb" />
    </group>
    <OrbitControls />
  </Canvas>
  );
};

export default AstroCanvas;