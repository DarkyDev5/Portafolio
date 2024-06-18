"use client";
import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

// Extend OrbitControls
extend({ OrbitControls });

// Cargar texturas manualmente
const texturePaths = [
  '/TEXTURES/gltf_embedded_0.webp', 
  '/TEXTURES/gltf_embedded_1.webp', 
  '/TEXTURES/gltf_embedded_2.webp', 
  '/TEXTURES/gltf_embedded_4.webp', 
  '/TEXTURES/gltf_embedded_5.webp', 
  '/TEXTURES/gltf_embedded_6.webp', 
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

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/'); // Cambia a la ruta correcta de tu Draco

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

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

        if (gltf.animations && gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(gltf.scene);
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });
          mixerRef.current = mixer;
        }
      }
    })();
  }, [gltf]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return gltf ? <primitive ref={ref} object={gltf.scene} /> : null;
};

const ThreeCanvas: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 60 }} className="absolute top-0 left-0 w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <group position={[0, -1, 0]} scale={[1.5, 1.5, 1]}>
        <Model path="/lolDRACOwebp.glb" />
      </group>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeCanvas;