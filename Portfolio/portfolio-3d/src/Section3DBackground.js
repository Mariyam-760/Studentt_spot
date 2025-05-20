import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Section3DBackground = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Stars radius={12} depth={40} count={1200} factor={3} saturation={0.7} fade speed={2.5} color="#b3b3ff" />
      </Canvas>
    </div>
  );
};

export default Section3DBackground; 