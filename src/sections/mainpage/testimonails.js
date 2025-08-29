"use client";

import { FiStar } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TESTIMONIALS } from '@/constant/Testimonials';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const star = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-[#C4A484]" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#3E2723', fontFamily: 'Playfair Display, serif' }}>
            What Our Guests Say
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6F4E37', fontFamily: 'Inter, sans-serif' }}>
            Experiences that warm the heart like our coffee warms your hands
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              variants={item}
              className="p-8 rounded-lg shadow-lg"
              style={{ backgroundColor: '#6F4E37' }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 25px rgba(111, 78, 55, 0.3)'
              }}
            >
              {/* Rating Stars - Animated individually */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    variants={star}
                    custom={i}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                  >
                    <FiStar 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-[#E5B80B] fill-[#E5B80B]' : 'text-[#C4A484]'}`} 
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <motion.blockquote 
                className="text-lg italic mb-6" 
                style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                &quot;{testimonial.quote}&quot;
              </motion.blockquote>
              
              {/* Author */}
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                <div className="h-10 w-10 rounded-full bg-[#C4A484] flex items-center justify-center text-[#6F4E37] font-bold mr-3">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>
                    {testimonial.author}
                  </p>
                  <p className="text-sm" style={{ color: '#C4A484', fontFamily: 'Inter, sans-serif' }}>
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <Button
            className="px-8 py-3 rounded-md font-semibold uppercase tracking-wider"
            href="/testimonials"
            style={{ 
              backgroundColor: '#E5B80B',
              color: '#3E2723',
              fontFamily: 'Montserrat, sans-serif' 
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#D4A017',
              boxShadow: '0 4px 12px rgba(229, 184, 11, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Read More Stori
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;