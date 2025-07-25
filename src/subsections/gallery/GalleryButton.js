
// components/gallery/ViewMoreButton.jsx
"use client";

import { motion } from 'framer-motion';
import { FiGrid } from 'react-icons/fi';

const ViewMoreButton = ({ inView }) => {
  return (
    <motion.div
      className="text-center mt-16"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 1 }}
    >
      <motion.button
        className="flex items-center justify-center mx-auto px-8 py-3 rounded-md font-semibold uppercase tracking-wider"
        style={{ 
          backgroundColor: '#E5B80B',
          color: '#3E2723',
          // fontFamily: 'Montserrat, sans-serif'
        }}
        whileHover={{ 
          scale: 1.05,
          backgroundColor: '#D4A017',
          boxShadow: '0 4px 12px rgba(229, 184, 11, 0.3)'
        }}
        whileTap={{ scale: 0.98 }}
      >
        <FiGrid className="mr-2" />
        View Full Gallery
      </motion.button>
    </motion.div>
  );
};

export default ViewMoreButton;