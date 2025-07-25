

// components/about/sections/ValueCard.jsx
'use client';

import { motion } from 'framer-motion';
import { FiStar, FiUsers, FiZap } from 'react-icons/fi';

export const ValueCard = ({ value, index }) => {
  const icons = {
    // FiLeaf: <FiLeaf style={{ fontSize: '2rem' }} />,
    FiStar: <FiStar style={{ fontSize: '2rem' }} />,
    FiUsers: <FiUsers style={{ fontSize: '2rem' }} />,
    FiZap: <FiZap style={{ fontSize: '2rem' }} />
  };

  return (
    <motion.div
      style={{
        backgroundColor: '#FFFFFF',
        padding: '32px',
        borderRadius: '12px',
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.6, delay: index * 0.15 }
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: '#6F4E37',
          color: '#C4A484',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {icons[value.icon]}
        </div>
      </div>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '12px',
        color: '#3E2723',
        fontFamily: "'Playfair Display', serif"
      }}>
        {value.title}
      </h3>
      <p style={{
        fontSize: '1.125rem',
        color: '#6F4E37',
        fontFamily: "'Inter', sans-serif"
      }}>
        {value.description}
      </p>
    </motion.div>
  );
};