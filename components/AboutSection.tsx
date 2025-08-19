import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Johnson',
    role: 'Founder & CEO',
    imageUrl: '/images/sophia.jpg',
  },
  {
    name: 'Liam Brown',
    role: 'Chief Makeup Artist',
    imageUrl: '/images/liam.jpg',
  },
  {
    name: 'Emma Davis',
    role: 'Product Developer',
    imageUrl: '/images/emma.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About GlamCS
        </motion.h2>
        
        <motion.p
          className="text-lg text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At GlamCS, we believe that beauty is an expression of individuality. Founded with a passion for
          cosmetics, GlamCS aims to empower every individual to embrace their unique beauty.
          Our luxurious products are designed using the finest ingredients, ensuring that our customers
          feel confident and glamorous every day.
        </motion.p>
        
        <motion.h3
          className="text-2xl font-semibold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h3>
        
        <motion.p
          className="text-lg text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our mission at GlamCS is to redefine beauty standards by offering high-quality, innovative cosmetics
          that inspire creativity and self-expression. We are committed to sustainability, cruelty-free practices,
          and inclusivity in the beauty industry.
        </motion.p>
        
        <motion.h3
          className="text-2xl font-semibold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Meet Our Team
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
            >
              <img src={member.imageUrl} alt={member.name} className="w-full h-40 object-cover rounded-t-lg" />
              <h4 className="text-xl font-bold mt-4">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">GlamCS Values</h3>
          <p className="text-lg">
            We value creativity, inclusivity, and sustainability. Our commitment to quality and innovation drives us to
            create products that make a difference in our customers' lives.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;