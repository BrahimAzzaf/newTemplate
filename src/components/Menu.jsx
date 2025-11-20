import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
    {
        id: 1,
        name: "Filet Mignon",
        description: "Truffle butter, roasted garlic mash, red wine reduction",
        price: "$45",
        category: "Mains",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Seared Foie Gras",
        description: "Fig jam, toasted brioche, balsamic glaze",
        price: "$32",
        category: "Starters",
        image: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Lobster Thermidor",
        description: "Cognac cream sauce, gruyère cheese, herb crust",
        price: "$52",
        category: "Mains",
        image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Dark Chocolate Soufflé",
        description: "Warm center, crème anglaise, fresh berries",
        price: "$18",
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Oysters Rockefeller",
        description: "Spinach, pernod, parmesan, breadcrumbs",
        price: "$28",
        category: "Starters",
        image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Crème Brûlée",
        description: "Vanilla bean custard, caramelized sugar crust",
        price: "$16",
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

const categories = ["All", "Starters", "Mains", "Desserts"];

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <section id="menu" className="py-20 bg-secondary/95 text-white relative">
            <div className="absolute inset-0 bg-pattern-luxury opacity-5 pointer-events-none"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-display text-2xl mb-2 tracking-widest uppercase">Exquisite Tastes</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold">Signature Menu</h3>
                </div>

                {/* Categories */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 border transition-all duration-300 font-display tracking-wider rounded-full ${activeCategory === category
                                ? 'bg-primary border-primary text-secondary font-bold'
                                : 'border-primary/30 text-gray-400 hover:border-primary hover:text-primary'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item.id}
                                className="bg-[#121212] border border-primary/10 hover:border-primary/50 transition-colors duration-300 group rounded-2xl overflow-hidden"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>
                                <div className="p-6 text-center">
                                    <h4 className="text-xl font-bold font-display mb-2 text-white">{item.name}</h4>
                                    <p className="text-gray-400 text-sm font-serif italic mb-4">{item.description}</p>
                                    <span className="text-primary font-bold text-xl font-display">{item.price}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Menu;
