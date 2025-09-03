"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiPackage, FiSettings, FiCoffee, FiFeather } from 'react-icons/fi';
import { BREWING_STEPS } from '@/constant/Process';
import Link from 'next/link';

const BrewingStep = ({ step, index, controls }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.2
          }
        }
      }}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="h-20 w-20 rounded-full flex items-center justify-center mb-4 text-3xl"
        style={{ backgroundColor: step.color, color: '#FFFFFF' }}
        whileHover={{ 
          scale: 1.1,
          rotate: 10,
          transition: { type: 'spring', stiffness: 300 }
        }}
      >
        {step.icon === 'FiPackage' && <FiPackage />}
        {step.icon === 'FiSettings' && <FiSettings />}
        {step.icon === 'FiCoffee' && <FiCoffee />}
        {step.icon === 'FiFeather' && <FiFeather />}
      </motion.div>
      
      <motion.h3 
        className="text-xl font-bold mb-2"
        style={{ color: '#3E2723', fontFamily: 'Playfair Display, serif' }}
        whileHover={{ color: '#6F4E37' }}
      >
        {step.title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600"
        style={{ color: '#6F4E37', fontFamily: 'Inter, sans-serif' }}
      >
        {step.description}
      </motion.p>
    </motion.div>
  );
};

const BrewingProcess = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section 
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
      style={{ backgroundColor: '#F9F7F5' }}
    >
      {/* Decorative coffee steam elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#C4A484] rounded-full"
            style={{
              width: `${100 + i * 20}px`,
              height: `${150 + i * 30}px`,
              left: `${10 + i * 10}%`,
              top: `${10 + i * 5}%`,
              opacity: 0.1
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scaleX: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: 'Playfair Display, serif' }}>
            Our Craft Process
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6F4E37', fontFamily: 'Inter, sans-serif' }}>
            The meticulous care we put into every cup
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {BREWING_STEPS.map((step, index) => (
            <BrewingStep 
              key={step.id} 
              step={step} 
              index={index} 
              controls={controls} 
            />
          ))}
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          className="mt-20 mx-auto h-1 rounded-full"
          style={{ backgroundColor: '#E5B80B', maxWidth: '200px' }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 1, duration: 1, type: 'spring' }}
        />

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            className="px-8 py-3 rounded-md font-semibold uppercase tracking-wider"
            style={{ 
              backgroundColor: '#6F4E37',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#3E2723',
              boxShadow: '0 4px 12px rgba(111, 78, 55, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/workshops/brewing"
            >
              Book a Brewing Workshop
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BrewingProcess;