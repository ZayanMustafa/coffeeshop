
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiStar, FiCoffee, FiChevronRight } from 'react-icons/fi';
import { SEASONAL_SPECIALS } from '@/constant/Special';

const SeasonalItem = ({ item, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 15px 30px rgba(111, 78, 55, 0.15)"
      }}
      style={{ border: `2px solid ${item.color}` }}
    >
      {/* Header with seasonal tag */}
      <div 
        className="h-3"
        style={{ backgroundColor: item.color }}
      />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold" style={{ color: '#3E2723', fontFamily: 'Playfair Display, serif' }}>
              {item.name}
            </h3>
            <span className="text-sm uppercase tracking-wider" style={{ color: item.color, fontFamily: 'Montserrat, sans-serif' }}>
              {item.season} Special
            </span>
          </div>
          
          {item.isNew && (
            <motion.div
              className="flex items-center bg-[#E5B80B] text-[#3E2723] px-2 py-1 rounded-full text-xs font-bold uppercase"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
            >
              <FiStar className="mr-1" /> New
            </motion.div>
          )}
        </div>
        
        <p className="text-gray-600 mb-4" style={{ color: '#6F4E37', fontFamily: 'Inter, sans-serif' }}>
          {item.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {item.ingredients.map((ingredient, i) => (
            <motion.span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-opacity-20"
              style={{ backgroundColor: `${item.color}20`, color: '#3E2723' }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.1 * i }}
            >
              {ingredient}
            </motion.span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold" style={{ color: item.color, fontFamily: 'Montserrat, sans-serif' }}>
            {item.price}
          </span>
          <motion.button
            className="flex items-center text-sm font-semibold"
            whileHover={{ x: 5 }}
            style={{ color: '#6F4E37' }}
          >
            Details <FiChevronRight className="ml-1" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const SeasonalSpecials = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section 
      ref={ref}
      className="py-20 relative"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Decorative coffee beans */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ 
              backgroundColor: '#6F4E37',
              width: `${10 + (i * 2)}px`,
              height: `${10 + (i * 2)}px`,
              left: `${(i * 10) % 90}%`,
              top: `${(i * 7) % 100}%`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, i % 2 === 0 ? 180 : -180]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
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
            Seasonal Specials
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6F4E37', fontFamily: 'Inter, sans-serif' }}>
            Limited-time creations celebrating the flavors of each season
          </p>
        </motion.div>

        {/* Specials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {SEASONAL_SPECIALS.map((item, index) => (
            <SeasonalItem key={item.id} item={item} index={index} />
          ))}
        </motion.div>

        {/* View Menu Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-3 rounded-md font-semibold uppercase tracking-wider"
            style={{ 
              backgroundColor: '#6F4E37',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#3E2723'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <FiCoffee className="mr-2" />
            View Full Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SeasonalSpecials;