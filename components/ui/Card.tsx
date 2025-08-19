import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  onAddToCart: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price, onAddToCart }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg p-4 shadow-lg transition-transform duration-500 hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <img src={imageUrl} alt={title} className="rounded-lg mb-4 w-full h-48 object-cover" />
      <h2 className="text-orange-500 text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-orange-500 text-lg font-semibold mb-4">{price}</p>
      <button
        className="bg-orange-500 text-white rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-orange-600"
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
    </motion.div>
  );
};

export default Card;