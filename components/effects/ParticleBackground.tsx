import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const particles: THREE.Points[] = [];
    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i  3] = (Math.random() - 0.5)  10;
      positions[i  3 + 1] = (Math.random() - 0.5)  10;
      positions[i  3 + 2] = (Math.random() - 0.5)  10;

      const color = new THREE.Color(hsl(${Math.random() * 30 + 30}, 100%, 50%));
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: true, transparent: true });
    const particlesSystem = new THREE.Points(geometry, material);
    scene.add(particlesSystem);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particlesSystem.rotation.x += 0.001;
      particlesSystem.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="flex items-center justify-center h-full text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-5xl font-bold text-orange-500 hover:text-orange-600 transition duration-300">
          Welcome to GlamCS
        </h1>
        <p className="mt-4 text-lg text-white">
          Discover luxury cosmetics designed to enhance your beauty with elegance.
        </p>
      </motion.div>
    </div>
  );
};

export default ParticleBackground;