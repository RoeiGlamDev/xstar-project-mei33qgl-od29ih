import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title: string;
  subtitle: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title, subtitle }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email submission (e.g., send to an API or email service)
    setIsSubmitted(true);
  };

  return (
    <section className="bg-white py-12 px-6">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-orange-500">{title}</h2>
        <p className="mt-4 text-lg text-gray-700">{subtitle}</p>

        {isSubmitted ? (
          <motion.div
            className="mt-6 p-4 border border-orange-500 bg-orange-100 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-orange-600 font-semibold">Thank you for subscribing to GlamCS! Stay tuned for the latest updates and exclusive offers.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 transition duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.button
              type="submit"
              className="mt-4 md:mt-0 md:ml-4 p-3 bg-orange-500 text-white font-semibold rounded-md transition duration-300 hover:bg-orange-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default NewsletterSection;