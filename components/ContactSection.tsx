import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'General Inquiry',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit form logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Contact GlamCS</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-orange-500" htmlFor="name">Name</label>
          <input
            className={border-2 rounded-md p-2 w-full ${errors.name ? 'border-red-500' : 'border-orange-300'}}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-orange-500" htmlFor="email">Email</label>
          <input
            className={border-2 rounded-md p-2 w-full ${errors.email ? 'border-red-500' : 'border-orange-300'}}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-orange-500" htmlFor="reason">Reason for Contact</label>
          <select
            className="border-2 rounded-md p-2 w-full border-orange-300"
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Product Information">Product Information</option>
            <option value="Feedback">Feedback</option>
            <option value="Collaboration">Collaboration</option>
          </select>
        </div>
        <div>
          <label className="block text-orange-500" htmlFor="message">Message</label>
          <textarea
            className={border-2 rounded-md p-2 w-full h-32 ${errors.message ? 'border-red-500' : 'border-orange-300'}}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <motion.button
          className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
          type="submit"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-orange-500">Business Information</h3>
        <p className="mt-2">GlamCS</p>
        <p>123 Glam Ave, Beauty City, BC 12345</p>
        <p>Email: contact@glamcs.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Business Hours: Mon-Fri 9:00 AM - 6:00 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;