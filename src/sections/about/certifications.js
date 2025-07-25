


// components/about/Certifications.jsx
'use client';

import { ABOUT_DATA } from '@/constant/About';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Certifications = () => {
  return (
    <section className="py-16 bg-[#F9F5F0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3E2723] font-serif">
            {ABOUT_DATA.certifications.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#6F4E37] font-sans">
            {ABOUT_DATA.certifications.subtitle}
          </p>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {ABOUT_DATA.certifications.logos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

