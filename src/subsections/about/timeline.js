// components/about/sections/TimelineItem.jsx
'use client';

import { motion } from 'framer-motion';
import { FiCoffee, FiHome, FiAward, FiGlobe } from 'react-icons/fi';

const iconMap = {
  FiCoffee,
  FiHome,
  FiAward,
  FiGlobe,
};

export const TimelineItem = ({ item, index }) => {
  // Safe icon lookup – defaults to FiGlobe if key is missing/invalid
  const Icon =
    iconMap[item?.icon] || FiGlobe;

  return (
    <motion.div
      style={{
        display: 'flex',
        marginBottom: '64px',
        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.15 },
      }}
    >
      <div
        style={{
          display: 'none',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#6F4E37',
            color: '#C4A484',
          }}
        >
          <Icon style={{ fontSize: '1.75rem' }} />
        </div>
        <div
          style={{
            width: '1px',
            height: '100%',
            backgroundColor: '#6F4E37',
            opacity: 0.3,
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          textAlign: index % 2 === 0 ? 'right' : 'left',
        }}
      >
        <p
          style={{
            color: '#E5B80B',
            fontWeight: 'bold',
            marginBottom: '4px',
          }}
        >
          {item?.year}
        </p>
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '8px',
            color: '#3E2723',
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {item?.title}
        </h3>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#6F4E37',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {item?.description}
        </p>
      </div>
    </motion.div>
  );
};