import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-secondary text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/3 space-y-8"
                    >
                        <div>
                            <h2 className="text-primary font-serif text-2xl mb-2">Contact Us</h2>
                            <h3 className="text-4xl font-bold mb-6">Get in Touch</h3>
                            <p className="text-gray-400 mb-8">
                                Have a question or want to make a reservation? We'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#222] rounded-full text-primary">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Phone</h4>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#222] rounded-full text-primary">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Email</h4>
                                    <p className="text-gray-400">reservations@midnightlounge.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#222] rounded-full text-primary">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Location</h4>
                                    <p className="text-gray-400">123 Culinary Ave, Food City, FC 90210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#222] rounded-full text-primary">
                                    <FaClock />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Opening Hours</h4>
                                    <p className="text-gray-400">Mon-Sun: 11:00 AM - 11:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Reservation Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-2/3 bg-[#222] p-8 md:p-12 rounded-3xl"
                    >
                        <h3 className="text-3xl font-bold mb-8 text-center">Make a Reservation</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 mb-2 text-sm">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-secondary border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-2 text-sm">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-secondary border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 mb-2 text-sm">Date</label>
                                    <input
                                        type="date"
                                        className="w-full bg-secondary border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-2 text-sm">Time</label>
                                    <input
                                        type="time"
                                        className="w-full bg-secondary border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 mb-2 text-sm">Guests</label>
                                    <select className="w-full bg-secondary border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors">
                                        <option>2 People</option>
                                        <option>3 People</option>
                                        <option>4 People</option>
                                        <option>5+ People</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-2 text-sm">Occasion</label>
                                    <select className="w-full bg-secondary border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors">
                                        <option>Casual Dining</option>
                                        <option>Birthday</option>
                                        <option>Anniversary</option>
                                        <option>Business Meal</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Special Requests</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-secondary border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                    placeholder="Allergies, seating preference, etc."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-secondary font-bold py-4 rounded-full hover:bg-white transition-colors duration-300 text-lg"
                            >
                                Book Table
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
