import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  useEffect(() => {
    // Optional: any setup for three.js can go here
  }, []);

  return (
    <div className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden">
      <motion.h1
        className="text-5xl font-bold text-orange-500 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to GlamCS
      </motion.h1>
      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <OrbitControls enableZoom={false} />
        {/ Add your 3D models here /}
        <motion.mesh
          position={[-2, 0, 0]}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#FFA500" />
        </motion.mesh>
        <motion.mesh
          position={[2, 0, 0]}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <sphereGeometry args={[0.75, 32, 32]} />
          <meshStandardMaterial color="#FFA500" />
        </motion.mesh>
      </Canvas>
      <div className="absolute bottom-10 text-center">
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Experience the luxury of modern cosmetics with GlamCS.
        </motion.p>
      </div>
    </div>
  );
};

export default FloatingElements;