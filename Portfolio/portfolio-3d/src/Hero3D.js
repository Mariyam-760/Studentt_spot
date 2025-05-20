import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

function AnimatedSphere() {
  return (
    <mesh position={[0, 0, 0]} castShadow receiveShadow>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color={'#6C63FF'} metalness={0.7} roughness={0.2} />
    </mesh>
  );
}

const Hero3D = () => {
  // Use a visible color for stars in both themes
  const starColor = '#888888';
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <AnimatedSphere />
        <Stars radius={10} depth={50} count={2000} factor={4} saturation={0.5} fade speed={1} color={starColor} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default Hero3D; 