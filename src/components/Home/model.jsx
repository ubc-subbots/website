import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Model() {
  const { scene } = useGLTF('/model/steelhead.glb');

  return <primitive object={scene} />;
}

useGLTF.preload('/model/steelhead.glb');
