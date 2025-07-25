


// components/gallery/GalleryItem.jsx
"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiZoomIn } from 'react-icons/fi';

const GalleryItem = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Actual image instead of placeholder */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="h-64 w-full object-cover"
      />

      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{
            scale: isHovered ? [0.8, 1.1, 1] : 1,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <FiZoomIn className="h-10 w-10 text-white" />
        </motion.div>
      </motion.div>

      {/* Caption */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent"
        initial={{ y: 50 }}
        animate={{ y: isHovered ? 0 : 50 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
          {item.title}
        </h3>
        <p className="text-[#C4A484] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default GalleryItem;


