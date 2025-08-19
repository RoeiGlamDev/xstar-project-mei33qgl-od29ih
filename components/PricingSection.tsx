import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Glam Starter',
    price: '$29',
    features: [
      'Basic Makeup Consultation',
      'Personalized Product Recommendations',
      '1 Hour Session',
      'Email Support'
    ]
  },
  {
    name: 'Glam Luxe',
    price: '$59',
    features: [
      'Advanced Makeup Application',
      'Custom Glam Package',
      '2 Hour Session',
      'Follow-up Support'
    ]
  },
  {
    name: 'Glam Elite',
    price: '$99',
    features: [
      'Full Makeup Experience',
      'Luxury Skincare Consultation',
      '3 Hour Session',
      'Priority Support'
    ]
  }
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">GlamCS Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-white border border-orange-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">{tier.name}</h3>
              <p className="text-xl font-bold text-gray-900 mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700">{feature}</li>
                ))}
              </ul>
              <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-500 transition duration-300">
                Choose {tier.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;