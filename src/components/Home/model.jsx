import { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model({ onLoad, ...props }) {
  const { scene } = useGLTF(`${process.env.PUBLIC_URL}/model/compressed_steelhead.glb`);
  
  useEffect(() => {
    if (scene && onLoad) {
      onLoad();
    }
  }, [scene, onLoad]);
  
  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/model/compressed_steelhead.glb');
