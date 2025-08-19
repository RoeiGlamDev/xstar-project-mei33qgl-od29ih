import React from 'react';
import { motion } from 'framer-motion';

interface StatsData {
  title: string;
  count: number;
}

const stats: StatsData[] = [
  { title: 'Products Launched', count: 120 },
  { title: 'Happy Customers', count: 35000 },
  { title: 'Awards Won', count: 15 },
  { title: 'Countries Shipped To', count: 25 },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-10">GlamCS Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <motion.div
              key={stat.title}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h3 className="text-3xl font-semibold text-orange-500 mb-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
              >
                {stat.count}
              </motion.span>
              </motion.h3>
              <p className="text-gray-700">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;