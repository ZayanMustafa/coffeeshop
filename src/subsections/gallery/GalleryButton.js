// components/gallery/ViewMoreButton.jsx
"use client";

import { motion } from 'framer-motion';
import { FiGrid } from 'react-icons/fi';
import Link from 'next/link';

const MotionLink = motion(Link);

const ViewMoreButton = ({ inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <MotionLink
        href="/gallery"
        className="flex items-center justify-center mx-auto px-8 py-3 text-center mt-16 rounded-md font-semibold uppercase tracking-wider w-fit"
        style={{ 
          backgroundColor: '#E5B80B',
          color: '#3E2723',
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
      </MotionLink>
    </motion.div>
  );
};

export default ViewMoreButton;