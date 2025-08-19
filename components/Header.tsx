import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold text-orange-500">GlamCS</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-orange-500 transition">About Us</a>
          <a href="#products" className="text-gray-700 hover:text-orange-500 transition">Products</a>
          <a href="#services" className="text-gray-700 hover:text-orange-500 transition">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-orange-500 transition">Contact</a>
        </nav>
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: 'auto' }} 
          exit={{ opacity: 0, height: 0 }} 
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col p-5 space-y-3">
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition">About Us</a>
            <a href="#products" className="text-gray-700 hover:text-orange-500 transition">Products</a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition">Contact</a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;