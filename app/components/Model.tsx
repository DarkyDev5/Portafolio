"use client"
import React from 'react';
import { useGLTF } from '@react-three/drei';

interface ModelProps {
  path: string;
}

const Model: React.FC<ModelProps> = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
};

export default Model;