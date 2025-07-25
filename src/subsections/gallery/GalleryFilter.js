

// components/gallery/GalleryFilter.jsx
"use client";

import { motion } from 'framer-motion';
import { FiGrid } from 'react-icons/fi';

const GalleryFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = ['all', 'espresso', 'equipment', 'beans', 'space', 'drinks', 'process'];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-colors ${
            activeFilter === filter 
              ? 'bg-[#6F4E37] text-white' 
              : 'bg-white text-[#3E2723] hover:bg-[#E5B80B] hover:text-[#3E2723]'
          }`}
          // style={{ fontFamily: 'Montserrat, sans-serif' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter === 'all' ? 'All' : filter}
        </motion.button>
      ))}
    </div>
  );
};

export default GalleryFilter;