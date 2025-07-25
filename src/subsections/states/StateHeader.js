

// components/stats/StatsHeader.jsx
"use client";

import { motion } from 'framer-motion';

const   StatsHeader = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: 'Playfair Display, serif' }}>
        {title}
      </h2>
      <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6F4E37', fontFamily: 'Inter, sans-serif' }}>
        {subtitle}
      </p>
    </motion.div>
  );
};

export default StatsHeader;

