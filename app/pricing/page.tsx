import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Basic Glam Package',
    price: '$29',
    features: [
      '1x Custom Lipstick',
      '2x Eyeshadow Samples',
      'Free Shipping'
    ]
  },
  {
    title: 'Premium Glam Package',
    price: '$49',
    features: [
      '2x Custom Lipsticks',
      '4x Eyeshadow Samples',
      '1x Skincare Sample',
      'Priority Shipping'
    ]
  },
  {
    title: 'Luxury Glam Package',
    price: '$99',
    features: [
      '3x Custom Lipsticks',
      '6x Eyeshadow Samples',
      '2x Skincare Samples',
      'Exclusive Access to New Products',
      'Free Priority Shipping'
    ]
  }
];

const FAQs = [
  {
    question: 'What is included in the GlamCS packages?',
    answer: 'Each package includes a selection of our best-selling products, tailored to enhance your natural beauty.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping typically takes 3-5 business days, while priority shipping takes 1-3 business days.'
  },
  {
    question: 'Can I return products?',
    answer: 'Yes, we offer a 30-day return policy on all unopened items for a full refund.'
  }
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 py-10 px-5">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        GlamCS Pricing
      </motion.h1>
      
      <motion.div
        className="max-w-4xl mx-auto bg-orange-100 p-6 rounded-lg shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Choose Your Glam Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingOptions.map(option => (
            <motion.div
              key={option.title}
              className="bg-white border border-orange-500 rounded-lg p-4 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-xl font-bold mb-2">{option.title}</h3>
              <p className="text-2xl font-semibold mb-4">{option.price}</p>
              <ul className="list-disc list-inside">
                {option.features.map(feature => (
                  <li key={feature} className="mb-1">{feature}</li>
                ))}
              </ul>
              <button className="mt-4 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition">
                Select Package
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="mt-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {FAQs.map((faq, index) => (
            <div key={index} className="bg-orange-100 p-4 mb-2 rounded shadow-sm">
              <h3 className="font-bold">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PricingPage;