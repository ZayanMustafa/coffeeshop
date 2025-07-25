

// components/about/OurValues.jsx
'use client';

import { ABOUT_DATA } from '@/constant/About';
import { motion } from 'framer-motion';
import { FiStar, FiUsers, FiZap } from 'react-icons/fi';

const ValueCard = ({ value, index }) => {
  const icons = {
    // FiLeaf: <FiLeaf className="text-4xl" />,
    FiStar: <FiStar className="text-4xl" />,
    FiUsers: <FiUsers className="text-4xl" />,
    FiZap: <FiZap className="text-4xl" />
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 15px 30px -10px rgba(62, 39, 35, 0.2)"
      }}
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-[#6F4E37] text-[#C4A484] flex items-center justify-center">
          {icons[value.icon]}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-center text-[#3E2723] font-serif">
        {value.title}
      </h3>
      <p className="text-lg mb-6 text-center text-[#6F4E37] font-sans">
        {value.description}
      </p>
      <ul className="space-y-2">
        {value.details.map((detail, i) => (
          <li key={i} className="flex items-start">
            <span className="text-[#E5B80B] mr-2">•</span>
            <span className="text-[#3E2723]">{detail}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const OurValues = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3E2723] font-serif">
            {ABOUT_DATA.values.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#6F4E37] font-sans">
            {ABOUT_DATA.values.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ABOUT_DATA.values.items.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

