

// components/gallery/CoffeeBeansDecoration.jsx
"use client";

import { motion } from 'framer-motion';

const CoffeeBeansDecoration = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#6F4E37] opacity-10"
          style={{
            width: `${10 + (i * 2)}px`,
            height: `${10 + (i * 2)}px`,
            left: `${(i * 8) % 90}%`,
            top: `${(i * 7) % 100}%`
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default CoffeeBeansDecoration;