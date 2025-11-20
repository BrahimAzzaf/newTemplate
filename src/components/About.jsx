import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-secondary text-white relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-pattern-luxury opacity-5 pointer-events-none"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Elegant Dining"
                                className="rounded-2xl shadow-2xl w-full object-cover h-[500px] border border-primary/30"
                            />
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 backdrop-blur-sm -z-10 hidden md:block border border-primary/30 rounded-2xl"></div>
                            <div className="absolute -top-6 -left-6 w-48 h-48 border border-primary/30 -z-10 hidden md:block rounded-2xl"></div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-primary font-display text-2xl mb-2 tracking-widest uppercase">Our Philosophy</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Evening Elegance</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed font-serif text-lg">
                            Midnight Lounge was born from a desire to create a sanctuary for the senses. As the sun sets, our space transforms into a haven of warmth and sophistication, where time seems to slow down.
                        </p>
                        <p className="text-gray-300 mb-8 leading-relaxed font-serif text-lg">
                            Our culinary team crafts dishes that are as visually stunning as they are delicious, using techniques that honor the ingredients. We invite you to unwind, indulge, and savor the magic of the night.
                        </p>
                        <button className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-secondary transition-colors duration-300 font-display font-bold tracking-wider rounded-full">
                            Read Our Story
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
