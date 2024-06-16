"use client"
import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Extend OrbitControls
extend({ OrbitControls });

// Cargar texturas manualmente
const texturePaths = [
  '/TEXTURES/gltf_embedded_0.jpg', // Convertido a JPG
  '/TEXTURES/gltf_embedded_1.jpg', // Convertido a JPG
  '/TEXTURES/gltf_embedded_2.jpg', // Convertido a JPG
  '/TEXTURES/gltf_embedded_4.jpg', // Convertido a JPG
  '/TEXTURES/gltf_embedded_5.jpg', // Convertido a JPG
  '/TEXTURES/gltf_embedded_6.jpg', // Convertido a JPG
];

// Cargar texturas asíncronamente
const loadTextures = async () => {
  const loader = new THREE.TextureLoader();
  const texturePromises = texturePaths.map(path => 
    new Promise<THREE.Texture>((resolve, reject) => {
      loader.load(path, resolve, undefined, reject);
    })
  );
  return Promise.all(texturePromises);
};

interface ModelProps {
  path: string;
}

const Model: React.FC<ModelProps> = ({ path }) => {
  const { scene, animations } = useGLTF(path);
  const ref = useRef<THREE.Group>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    (async () => {
      const textures = await loadTextures();
      if (ref.current) {
        let textureIndex = 0;
        ref.current.traverse((child: THREE.Object3D) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (mesh.material) {
              const material = mesh.material as THREE.MeshStandardMaterial;
              if (textureIndex < textures.length) {
                material.map = textures[textureIndex];
                material.needsUpdate = true;
                textureIndex++;
              }
            } else {
              if (textureIndex < textures.length) {
                mesh.material = new THREE.MeshStandardMaterial({ map: textures[textureIndex] });
                textureIndex++;
              }
            }
          }
        });

        if (animations && animations.length > 0) {
          const mixer = new THREE.AnimationMixer(scene);
          animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });
          mixerRef.current = mixer;
        }
      }
    })();
  }, [scene, animations]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return <primitive ref={ref} object={scene} />;
};

const ThreeCanvas: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 60 }} className="absolute top-0 left-0 w-full h-full ">
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight position={[15, 20, 5]} angle={0.3} intensity={1.5} penumbra={1} />
      <pointLight position={[-10, -10, -10]} intensity={1} />
      <hemisphereLight intensity={0.5} />
      <group position={[0, -1, 0]} scale={[1.5, 1.5, 1]} rotation={[0, 0, 1]}>
        <Model path="/lol.glb" />
      </group>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeCanvas;
