import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const Scene: React.FC = () => {
  useEffect(() => {
    // Initialize 3D scene here if needed
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <motion.div 
        className="absolute top-10 text-center text-orange-600 text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        GlamCS - Elevate Your Beauty
      </motion.div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {/ Add your 3D models here, e.g., lipstick, mascara /}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
      <motion.div 
        className="absolute bottom-10 text-center w-full"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button 
          className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300"
          onClick={() => alert('Explore our collection!')}
        >
          Shop Now
        </button>
      </motion.div>
    </div>
  );
}

export default Scene;