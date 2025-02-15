import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
            </div>

            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Live Your Dream, Celebrate Every Day
                    </h1>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    className="w-full h-24 fill-current text-white"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M0,100 C40,0 60,0 100,100 Z" />
                </svg>
            </div>
        </div>
    );
};

export default Banner;
