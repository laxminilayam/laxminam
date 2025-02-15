import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownTrayIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const DownloadBrochure = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleDownload = () => {
        // Replace with your actual brochure PDF URL
        const brochureUrl = 'https://drive.google.com/file/d/1uf-sb_4xon3iuPmWLX_ZdmD4-BN-bYYp/view?usp=sharing';

        // Animated feedback
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3000);

        // Trigger download
        const link = document.createElement('a');
        link.href = brochureUrl;
        link.setAttribute('download', 'LaxmiNilayam-Brochure.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <motion.button
                className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-full shadow-lg group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={handleDownload}
            >
                <motion.div
                    className="relative flex items-center gap-2"
                    animate={{ gap: isHovered ? '12px' : '8px' }}
                >
                    <motion.div
                        className="relative"
                        animate={{ rotate: isHovered ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <DocumentTextIcon className="w-5 h-5" />
                    </motion.div>
                    <span className="hidden sm:inline whitespace-nowrap">Download Brochure</span>
                    <motion.div
                        animate={{
                            y: isHovered ? [0, -4, 0] : 0,
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: isHovered ? Infinity : 0,
                        }}
                    >
                        <ArrowDownTrayIcon className="w-5 h-5" />
                    </motion.div>
                </motion.div>

                {/* Hover effect */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-white opacity-0"
                    animate={{
                        opacity: isHovered ? 0.2 : 0
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.button>

            {/* Download Tooltip */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed bottom-24 right-8 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Download started!</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default DownloadBrochure;
