

// components/stats/CoffeeBeansDecorationState.jsx
"use client";

import { motion } from 'framer-motion';

const CoffeeBeansDecorationState = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full opacity-11 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#6F4E37]"
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 30 + 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default CoffeeBeansDecorationState;

