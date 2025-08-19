import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Premium Quality',
    description: 'At GlamCS, we use only the finest ingredients to ensure your beauty products are luxurious and effective.',
    icon: <i className="fas fa-crown text-orange-500"></i>,
  },
  {
    title: 'Cruelty-Free',
    description: 'Our commitment to ethical practices means all GlamCS products are 100% cruelty-free.',
    icon: <i className="fas fa-paw text-orange-500"></i>,
  },
  {
    title: 'Innovative Formulations',
    description: 'We pride ourselves on creating cutting-edge formulas that meet the needs of modern beauty enthusiasts.',
    icon: <i className="fas fa-flask text-orange-500"></i>,
  },
  {
    title: 'Luxurious Packaging',
    description: 'Experience elegance with every GlamCS product, beautifully packaged to reflect the high-end nature of our brand.',
    icon: <i className="fas fa-gift text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold text-orange-600 mb-8" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Discover GlamCS Features
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 mb-12" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7 }}
        >
          Elevate your beauty routine with our exclusive range of products designed for the modern individual.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105" 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;