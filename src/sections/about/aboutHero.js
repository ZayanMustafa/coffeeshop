

// components/about/AboutHero.jsx
'use client';

import { ABOUT_DATA } from '@/constant/About';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCoffee, FiMapPin, FiUsers } from 'react-icons/fi';

export const AboutHero = () => {
  const stats = [
    { icon: <FiMapPin />, ...ABOUT_DATA.hero.stats[0] },
    { icon: <FiUsers />, ...ABOUT_DATA.hero.stats[1] },
    { icon: <FiCoffee />, ...ABOUT_DATA.hero.stats[2] }
  ];

  return (
    <section className="relative py-30 bg-[#F9F5F0] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-[#6F4E37]"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Content */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#3E2723] font-serif">
            {ABOUT_DATA.hero.title}
          </h1>
          <p className="text-xl mb-8 text-[#6F4E37] font-sans">
            {ABOUT_DATA.hero.subtitle}
          </p>
          <p className="text-lg mb-12 text-[#3E2723] font-sans leading-relaxed">
            {ABOUT_DATA.hero.description}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white p-4 rounded-lg shadow-sm text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <div className="text-2xl mb-2 text-[#6F4E37]">
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-[#E5B80B]">{stat.value}+</p>
                <p className="text-sm text-[#3E2723]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={ABOUT_DATA.hero.image}
            alt="Coffee brewing"
            width={800}
            height={600}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};


