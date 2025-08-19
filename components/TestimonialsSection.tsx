import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Martinez',
    photo: '/images/sophia.jpg',
    review: 'GlamCS transformed my makeup routine! Their products are luxurious and make me feel radiant every day.',
    rating: 5,
  },
  {
    name: 'Liam Johnson',
    photo: '/images/liam.jpg',
    review: 'I love GlamCS! The quality is outstanding, and the colors are simply stunning. I get compliments all the time!',
    rating: 4,
  },
  {
    name: 'Olivia Brown',
    photo: '/images/olivia.jpg',
    review: 'The GlamCS products are a game changer. The finish is flawless, and they last all day without fading.',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-5">What Our Customers Say</h2>
        <p className="text-lg text-gray-700 mb-10">Join the GlamCS community and discover why we are the top choice for luxury cosmetics.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-orange-600">{testimonial.name}</h3>
              <div className="flex justify-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange-400">&#9733;</span>
                ))}
              </div>
              <p className="text-gray-600">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;