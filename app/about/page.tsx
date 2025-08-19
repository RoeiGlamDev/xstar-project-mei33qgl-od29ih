import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Turner',
    role: 'Founder & CEO',
    image: '/images/team/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    role: 'Lead Cosmetic Chemist',
    image: '/images/team/liam.jpg',
  },
  {
    name: 'Olivia Brown',
    role: 'Marketing Director',
    image: '/images/team/olivia.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.section
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">About GlamCS</h1>
        <p className="text-lg">
          At GlamCS, we believe that beauty is a form of art. Our mission is to craft luxurious cosmetics that empower individuals to express their unique beauty.
        </p>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our History</h2>
        <p className="text-lg">
          Founded in 2021, GlamCS emerged from a passion for high-quality cosmetics. Our journey began with a single lipstick line, and today, we offer a wide range of products that blend innovation with luxury.
        </p>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Quality: We prioritize premium ingredients for exceptional results.</li>
          <li>Inclusivity: GlamCS celebrates diversity and promotes beauty for all.</li>
          <li>Sustainability: We are committed to eco-friendly practices in our production.</li>
        </ul>
      </motion.section>

      <motion.section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="p-4 bg-orange-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full mb-4 w-24 h-24 object-cover mx-auto"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-md">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;