


// components/about/OurStory.jsx
'use client';

import { motion } from 'framer-motion';
import { FiCoffee, FiHome, FiAward, FiGlobe } from 'react-icons/fi';
import Image from 'next/image';
import { ABOUT_DATA } from '@/constant/About';

const TimelineItem = ({ item, index }) => {
  const icons = {
    FiCoffee: <FiCoffee className="text-3xl" />,
    FiHome: <FiHome className="text-3xl" />,
    FiAward: <FiAward className="text-3xl" />,
    FiGlobe: <FiGlobe className="text-3xl" />
  };

  return (
    <motion.div
      className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Date */}
      <div className="md:w-1/4 mb-4 md:mb-0">
        <div className="flex items-center md:flex-col md:items-start">
          <div className="w-16 h-16 rounded-full bg-[#6F4E37] text-[#C4A484] flex items-center justify-center mr-4 md:mr-0 md:mb-4">
            {icons[item.icon]}
          </div>
          <h3 className="text-xl font-bold text-[#3E2723]">{item.year}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="md:w-1/2 px-0 md:px-8">
        <h4 className="text-2xl font-bold mb-2 text-[#3E2723] font-serif">{item.title}</h4>
        <p className="text-lg text-[#6F4E37] mb-4">{item.description}</p>
      </div>

      {/* Image */}
      <div className="md:w-1/4 mt-4 md:mt-0">
        <motion.div 
          className="rounded-lg overflow-hidden shadow-md"
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={300}
            height={200}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const OurStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3E2723] font-serif">
            {ABOUT_DATA.ourStory.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#6F4E37] font-sans">
            {ABOUT_DATA.ourStory.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {ABOUT_DATA.ourStory.timeline.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

