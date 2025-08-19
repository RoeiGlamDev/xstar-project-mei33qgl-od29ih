import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyInfo: {
    address: string;
    phone: string;
    email: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}

const Footer: React.FC<FooterProps> = ({ companyInfo, socialLinks }) => {
  return (
    <footer className="bg-white text-orange-600 py-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">GlamCS</h2>
            <p className="text-lg">Elevate your beauty with GlamCS cosmetics.</p>
            <p>{companyInfo.address}</p>
            <p>{companyInfo.phone}</p>
            <p>{companyInfo.email}</p>
          </div>

          <div className="flex flex-col md:flex-row">
            <motion.a 
              href={socialLinks.facebook} 
              className="text-orange-600 hover:text-orange-800 transition duration-300 mr-4 mb-4 md:mb-0"
              whileHover={{ scale: 1.1 }}
            >
              Facebook
            </motion.a>
            <motion.a 
              href={socialLinks.instagram} 
              className="text-orange-600 hover:text-orange-800 transition duration-300 mr-4 mb-4 md:mb-0"
              whileHover={{ scale: 1.1 }}
            >
              Instagram
            </motion.a>
            <motion.a 
              href={socialLinks.twitter} 
              className="text-orange-600 hover:text-orange-800 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Twitter
            </motion.a>
          </div>
        </motion.div>
        <div className="mt-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} GlamCS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;