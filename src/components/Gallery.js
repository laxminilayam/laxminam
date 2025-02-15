import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/four.jpg';
import five from '../assets/five.jpg';
import six from '../assets/six.webp';
import seven from '../assets/seven.jpg';
import eight from '../assets/eight.jpeg';
import nine from '../assets/nine.jpg';
import ten from '../assets/ten.jpg';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredItems, setFilteredItems] = useState([]);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'exterior', label: 'Exterior' },
        { id: 'interior', label: 'Interior' },
        { id: 'amenities', label: 'Amenities' },
        { id: 'construction', label: 'Construction' }
    ];

    const galleryItems = [
        {
            id: 1,
            image: one,
            title: "Modern Facade",
            description: "Contemporary architectural design with premium finishes",
            category: "exterior",
            size: "large",
            aspectRatio: "square" // Added aspect ratio property
        },
        {
            id: 2,
            image: two,
            title: "Luxurious Living Room",
            description: "Spacious living area with premium interiors",
            category: "interior",
            size: "medium",
            aspectRatio: "square"
        },
        {
            id: 3,
            image: three,
            title: "Bedroom",
            description: "Modern modular Bedroom with premium fittings",
            category: "interior",
            size: "medium",
            aspectRatio: "square"
        },
        {
            id: 4,
            image: four,
            title: "Swimming Pool",
            description: "Spacious Swimming Pool with premium finishes",
            category: "amenities",
            size: "vertical", // Changed size for vertical images
            aspectRatio: "portrait"
        },
        {
            id: 5,
            image: five,
            title: "Premium Rooms",
            description: "Luxury House with modern fittings",
            category: "",
            size: "small"
        },
        {
            id: 6,
            image: six,
            title: "Building Exterior",
            description: "Magnificent architecture with modern design",
            category: "exterior",
            size: "vertical",
            aspectRatio: "portrait"
        },
        {
            id: 7,
            image: seven,
            title: "Community Area",
            description: "Spacious community spaces for residents",
            category: "interior",
            size: "medium"
        },
        {
            id: 8,
            image: eight,
            title: "Construction Progress",
            description: "Latest construction updates",
            category: "construction",
            size: "vertical",
            aspectRatio: "portrait"
        },
        {
            id: 9,
            image: nine,
            title: "Hall",
            description: "Beautifully designed hall with modern interiors",
            category: "interior",
            size: "medium"
        },
        {
            id: 10,
            image: ten,
            title: "Master BedRoom",
            description: "Master BedRoom property",
            category: "interior",
            size: "large"
        }
    ];

    useEffect(() => {
        setFilteredItems(
            selectedCategory === 'all'
                ? galleryItems
                : galleryItems.filter(item => item.category === selectedCategory)
        );
    }, [selectedCategory]);

    return (
        <section id="gallery" className="relative min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white">
            {/* Fancy Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-full h-full">
                    <motion.div
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                            opacity: [0.3, 0.1]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
                            backgroundSize: '100% 100%'
                        }}
                    />
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
                {/* Enhanced Header with Category Filters */}
                <motion.div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl font-bold text-gray-900 mb-8"
                    >
                        Our Gallery
                    </motion.h2>


                </motion.div>

                {/* Updated Traditional Row-based Layout */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
                >
                    <AnimatePresence mode="wait">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                className="relative group cursor-pointer"
                                onClick={() => setSelectedImage(item)}
                            >
                                <div className="relative w-full overflow-hidden rounded-lg aspect-[4/3]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 
                                                 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                                                  opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-6 
                                                      group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="inline-block px-2 py-1 mb-1 text-xs font-semibold 
                                                         bg-white/20 text-white rounded-full">
                                                {item.category}
                                            </span>
                                            <h3 className="text-white text-base font-bold mb-1">{item.title}</h3>
                                            <p className="text-white/80 text-sm line-clamp-2">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Updated Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                transition={{ type: "spring", bounce: 0.3 }}
                                className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
                                onClick={e => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    className="w-full h-auto max-h-[80vh] object-contain"
                                />
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent"
                                >
                                    <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
                                    <p className="text-white/90">{selectedImage.description}</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;