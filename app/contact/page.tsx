import React from 'react';
import { motion } from 'framer-motion';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-gray-800 p-8">
      <motion.h1
        className="text-4xl font-bold text-orange-500 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact GlamCS
      </motion.h1>

      <motion.p
        className="text-lg mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We’re here to help you shine! Reach out to us for any inquiries or support.
      </motion.p>

      <form className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <motion.div
          className="mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </motion.div>

        <motion.div
          className="mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            required
          />
        </motion.div>

        <motion.div
          className="mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows={4}
            placeholder="Your Message"
            required
          />
        </motion.div>

        <motion.button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send Message
        </motion.button>
      </form>

      <div className="mt-12 w-full max-w-lg">
        <motion.h2
          className="text-2xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Business Hours
        </motion.h2>
        <ul className="list-disc list-inside">
          <li>Monday - Friday: 9 AM - 6 PM</li>
          <li>Saturday: 10 AM - 4 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>

      <div className="mt-12 w-full max-w-lg">
        <motion.h2
          className="text-2xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our Location
        </motion.h2>
        <p className="mb-2">Visit us at:</p>
        <p className="font-semibold">GlamCS Headquarters</p>
        <p>123 Glam Ave, Beauty City, BC 12345</p>
      </div>
    </div>
  );
};

export default ContactPage;