import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "GlamCS", 
  subtitle = "Elevate your beauty with our premium cosmetics, crafted for the modern individual.", 
  ctaText = "Shop Now", 
  ctaLink = "/shop" 
}) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white text-white">
      <motion.h1 
        className="text-6xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Welcome to <span className="text-orange-600">GlamCS</span>
      </motion.h1>
      <motion.p 
        className="text-xl mb-8 max-w-2xl text-center"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Discover a luxurious range of cosmetics that empower you to express your unique beauty.
      </motion.p>
      <motion.a 
        href={ctaLink} 
        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        initial={{ scale: 1 }} 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
      >
        {ctaText}
      </motion.a>
      <div className="mt-10 space-x-4">
        <span className="text-sm text-gray-600">Trusted by beauty enthusiasts worldwide</span>
      </div>
    </section>
  );
};

export default HeroSection;