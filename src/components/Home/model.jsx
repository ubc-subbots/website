import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Model() {
  const { scene } = useGLTF(`${process.env.PUBLIC_URL}/model/steelhead.glb`);
  return <primitive object={scene} />;
}

useGLTF.preload('/model/steelhead.glb');
