

// components/stats/StatItem.jsx
"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiCoffee, FiPackage, FiHeart, FiAward } from 'react-icons/fi';

const StatItem = ({ stat }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      const duration = 2;
      const start = 0;
      const end = stat.value;
      const increment = end / (duration * 60); // 60fps

      let current = start;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, stat.value, controls]);

  // Icon mapping
  const icons = {
    FiCoffee: <FiCoffee className="text-4xl mx-auto" style={{ color: '#6F4E37' }} />,
    FiPackage: <FiPackage className="text-4xl mx-auto" style={{ color: '#6F4E37' }} />,
    FiHeart: <FiHeart className="text-4xl mx-auto" style={{ color: '#6F4E37' }} />,
    FiAward: <FiAward className="text-4xl mx-auto" style={{ color: '#6F4E37' }} />
  };

  return (
    <motion.div
      ref={ref}
      className="text-center p-6"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6 }
        }
      }}
    >
      {/* Floating Icon */}
      <motion.div
        className="relative mb-4"
        animate={{
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {icons[stat.icon]}
      </motion.div>

      {/* Counter */}
      <motion.p 
        className="text-5xl md:text-6xl font-bold mb-2"
        style={{ color: '#E5B80B' }}
      >
        {count}{stat.suffix || "+"}
      </motion.p>

      <p className="text-lg" style={{ color: '#3E2723' }}>
        {stat.label}
      </p>
    </motion.div>
  );
};

export default StatItem;

