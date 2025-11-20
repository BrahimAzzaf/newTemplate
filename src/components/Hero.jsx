import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")', // Dark Restaurant Interior
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-4"
                >
                    <span className="text-primary text-xl md:text-2xl font-display tracking-[0.2em] uppercase">Welcome to</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
                >
                    Midnight <span className="text-primary">Lounge</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-serif italic"
                >
                    An intimate dining experience under the stars.
                    Elegant flavors, serene atmosphere.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 justify-center"
                >
                    <a
                        href="#menu"
                        className="px-8 py-3 bg-primary text-secondary font-display font-bold tracking-wider hover:bg-white transition-colors duration-300 rounded-full"
                    >
                        View Menu
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-white text-white font-display font-bold tracking-wider hover:bg-white hover:text-secondary transition-colors duration-300 rounded-full"
                    >
                        Reservations
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <a href="#about" className="text-white text-2xl">
                    ↓
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
