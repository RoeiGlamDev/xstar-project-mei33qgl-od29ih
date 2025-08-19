import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <div className="relative flex items-center justify-center h-screen bg-white">
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold">Welcome to GlamCS</h1>
                <p className="mt-4 text-lg md:text-xl">Elevate Your Beauty with Our Luxurious Cosmetics</p>
                <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:shadow-2xl transition duration-300">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

const FeaturesSection: React.FC = () => {
    return (
        <div className="py-20 bg-white">
            <h2 className="text-center text-4xl font-bold text-orange-500">Our Features</h2>
            <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    {
                        title: 'Premium Quality',
                        description: 'Only the finest ingredients to enhance your natural beauty.',
                    },
                    {
                        title: 'Cruelty-Free',
                        description: 'Ethically sourced, ensuring no harm to our furry friends.',
                    },
                    {
                        title: 'Luxury Packaging',
                        description: 'Every product comes in elegantly designed packaging for a premium feel.',
                    },
                ].map((feature) => (
                    <motion.div
                        key={feature.title}
                        className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                        initial={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-semibold text-orange-500">{feature.title}</h3>
                        <p className="mt-2 text-gray-700">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const LuxuryDesignSection: React.FC = () => {
    return (
        <div className="py-20 bg-white">
            <h2 className="text-center text-4xl font-bold text-orange-500">Experience Luxury</h2>
            <p className="mt-4 text-center text-lg">Discover our exclusive collection designed for the modern beauty enthusiast.</p>
            <div className="mt-10 flex justify-center">
                <motion.img
                    src="/images/luxury-collection.jpg"
                    alt="Luxury Collection"
                    className="w-full md:w-1/2 rounded-lg shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>
        </div>
    );
};

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <LuxuryDesignSection />
        </>
    );
};

export default HomePage;