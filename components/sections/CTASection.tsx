import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Elevate Your Beauty with GlamCS",
  subtitle = "Discover our luxury cosmetics tailored for the modern you.",
  buttonLabel = "Shop Now",
  buttonLink = "/shop"
}) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <motion.a
          href={buttonLink}
          className="inline-block bg-orange-500 text-white py-3 px-6 rounded-full text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          {buttonLabel}
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;