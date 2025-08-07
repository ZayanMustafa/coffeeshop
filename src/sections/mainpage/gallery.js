

// components/gallery/GalleryShowcase.jsx
"use client";

import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CoffeeBeansDecoration from '@/subsections/gallery/FloatingBeans';
import GalleryFilter from '@/subsections/gallery/GalleryFilter';
import GalleryItem from '@/subsections/gallery/GalleryItem';
import ViewMoreButton from '@/subsections/gallery/GalleryButton';
import GalleryHeader from '@/subsections/gallery/GalleryHeader';
import { COFFEE_GALLERY } from '@/constant/Home/Gallery';

const GalleryShowcase = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const filteredItems = activeFilter === 'all' 
    ? COFFEE_GALLERY 
    : COFFEE_GALLERY.filter(item => item.category === activeFilter);

  return (
    <section 
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      <CoffeeBeansDecoration />

      <div className="container mx-auto px-6 relative z-10">
        <GalleryHeader
          title="Coffee Gallery" 
          subtitle="Explore the artistry behind every cup" 
          inView={inView} 
        />

        <GalleryFilter
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredItems.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </motion.div>

        <ViewMoreButton inView={inView} />
      </div>
    </section>
  );
};

export default GalleryShowcase;