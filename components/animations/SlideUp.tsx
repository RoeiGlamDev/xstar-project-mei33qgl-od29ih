import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  duration?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, duration = 0.5 }) => {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={slideUpVariants}
      transition={{ duration }}
      className="bg-white text-orange-600 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;