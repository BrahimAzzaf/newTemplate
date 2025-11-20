import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Food Critic",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        text: "The best dining experience I've had in years. The attention to detail in every dish is simply remarkable."
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Regular Customer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        text: "A hidden gem! The atmosphere is perfect for a romantic dinner, and the staff makes you feel like royalty."
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Chef",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        text: "As a chef myself, I appreciate the technique and passion that goes into their menu. Truly inspiring."
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-20 bg-[#111] text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-serif text-2xl mb-2">Testimonials</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">What People Say</h3>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative h-[400px] md:h-[300px]">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute w-full flex flex-col items-center text-center"
                            >
                                <FaQuoteLeft className="text-4xl text-primary mb-6 opacity-50" />
                                <p className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                                    />
                                    <div className="text-left">
                                        <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h4>
                                        <p className="text-primary text-sm">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>

                                <div className="flex gap-1 mt-4 text-primary">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-6' : 'bg-gray-600 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
