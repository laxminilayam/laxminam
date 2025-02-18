import React from 'react';
import { motion } from 'framer-motion';
import swimmingPool from '../assets/four.jpg';
import totLots from '../assets/one_three.jpeg';
import multiPurposeHall from '../assets/one_two.jpeg';
import gymnasium from '../assets/sueight.jpg';
import indoorGames from '../assets/susix.jpg';
import IlluminatedCard from './IlluminatedCard';

const Amenities = () => {
    return (
        <section id="amenities" className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-100 to-purple-100 text-gray-900">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Amenities Section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-800">
                        Amenities
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-800 mx-auto mt-4 rounded-full"></div>
                    <p className="mt-4 text-gray-700 text-lg">A World of Amenities, Just for You</p>
                </motion.div>

                {/* Amenities List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-8">
                    {/* Swimming Pool */}
                    <AmenityCard
                        title="Swimming Pool"
                        description="A crystal-clear oasis for relaxation and fun."
                        image={swimmingPool}
                    />

                    {/* Tot Lots */}
                    <AmenityCard
                        title="Playground"
                        description="Safe, engaging spaces for your little ones to play and explore."
                        image={totLots}
                    />

                    {/* Multi-Purpose Halls */}
                    <AmenityCard
                        title="Multi-Purpose Halls"
                        description="Perfect for gatherings, celebrations, and events."
                        image={multiPurposeHall}
                    />

                    {/* Gymnasium */}
                    <AmenityCard
                        title="Gymnasium"
                        description="Stay fit with our fully-equipped fitness center."
                        image={gymnasium}
                    />

                    {/* Indoor Games & Billiards Table */}
                    <AmenityCard
                        title="Indoor Games & Billiards Table"
                        description="Let the fun never end with entertainment for all ages."
                        image={indoorGames}
                    />
                </div>

                {/* Built to Last Section */}
                <motion.div
                    className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 backdrop-blur-md shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 text-center">
                        Built to Last, Designed for You
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Structural Excellence",
                                icon: "🏗️",
                                items: [
                                    "R.C.C. framed structure",
                                    "Seismic load resistance",
                                    "9-inch thick external walls",
                                    "Superior insulation"
                                ]
                            },
                            {
                                title: "Premium Finishes",
                                icon: "🎨",
                                items: [
                                    "High-quality exterior paint",
                                    "Elegant interior finishes",
                                    "Designer wall textures",
                                    "Weather-resistant coating"
                                ]
                            },
                            {
                                title: "Doors & Windows",
                                icon: "🚪",
                                items: [
                                    "Teak wood main doors",
                                    "Smooth-finished internal doors",
                                    "PVC/UPVC windows",
                                    "Designer hardware fittings"
                                ]
                            },
                            {
                                title: "Flooring & Tiles",
                                icon: "✨",
                                items: [
                                    "Vitrified tiles in living areas",
                                    "Anti-skid bathroom tiles",
                                    "Acid-resistant kitchen tiles",
                                    "Premium marble in common areas"
                                ]
                            },
                            {
                                title: "Kitchen Excellence",
                                icon: "🍳",
                                items: [
                                    "Granite countertops",
                                    "Stainless steel sink",
                                    "Water purifier provision",
                                    "Modular kitchen setup"
                                ]
                            },
                            {
                                title: "Utility & Convenience",
                                icon: "🔧",
                                items: [
                                    "Washing machine area",
                                    "Dedicated wet kitchen space",
                                    "Utility balcony",
                                    "Service area provisions"
                                ]
                            }
                        ].map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <IlluminatedCard className="h-full bg-white/80 hover:bg-white/95 transition-all duration-300 rounded-xl p-6">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="space-y-4"
                                    >
                                        <div className="flex items-center space-x-3 mb-4">
                                            <span className="text-2xl">{category.icon}</span>
                                            <h3 className="text-xl font-semibold text-gray-800">
                                                {category.title}
                                            </h3>
                                        </div>

                                        <motion.ul className="space-y-3">
                                            {category.items.map((item, itemIndex) => (
                                                <motion.li
                                                    key={itemIndex}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: itemIndex * 0.1 }}
                                                    className="flex items-start space-x-2"
                                                >
                                                    <span className="text-blue-500 mt-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-gray-700 font-merriweather">{item}</span>
                                                </motion.li>
                                            ))}
                                        </motion.ul>

                                        <motion.div
                                            className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            initial={false}
                                            animate={{ scale: [0.95, 1] }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                </IlluminatedCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Discover the Joy Section */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold text-blue-700">Come, Discover the Joy of Living at Lakshmi Nilayam</h2>
                    <p className="mt-4 text-gray-600 text-lg font-merriweather">
                        Lakshmi Nilayam is more than just a place to live—it’s a place to thrive. Your dream home
                        awaits in the heart of Guntur. Make the move today and embrace a lifestyle that offers
                        nothing short of excellence.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const AmenityCard = ({ title, description, image }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
        >
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-200 font-merriweather">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Amenities;