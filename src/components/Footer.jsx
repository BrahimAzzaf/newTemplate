import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="container mx-auto px-4"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <motion.div variants={itemVariants}>
                        <a href="#" className="text-2xl font-serif font-bold text-primary mb-6 block">
                            Midnight<span className="text-white">Lounge</span>
                        </a>
                        <p className="text-gray-400 mb-6">
                            Experience the art of culinary excellence. Where tradition meets innovation in every dish.
                        </p>
                        <div className="flex space-x-4">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.1, backgroundColor: '#D4AF37', color: '#000' }}
                                    className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-white transition-colors duration-300"
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            {['Home', 'About Us', 'Menu', 'Testimonials', 'Contact'].map((item, index) => (
                                <motion.li key={index} whileHover={{ x: 5, color: '#D4AF37' }} className="transition-colors">
                                    <a href={`#${item.toLowerCase().replace(' ', '')}`}>{item}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Opening Hours */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-xl font-bold mb-6">Opening Hours</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span>11:00 - 23:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span>10:00 - 00:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>10:00 - 23:00</span>
                            </li>
                        </ul>
                    </motion.div>

                </div>

                <motion.div
                    variants={itemVariants}
                    className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm"
                >
                    <p>&copy; {new Date().getFullYear()} Midnight Lounge. All rights reserved.</p>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;
