


// components/stats/StatsCounter.jsx
"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { BREW_STATS } from '@/constant/State';
import CoffeeBeansDecorationState from '@/subsections/states/CoffeeBeans';
import StatsHeader from '@/subsections/states/StateHeader';
import StatItem from '@/subsections/states/StateItem';


const StatsCounter = () => {
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
      className="py-20 bg-white relative overflow-hidden"
    >
      <CoffeeBeansDecorationState />

      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <StatsHeader 
          title="Our Brew in Numbers" 
          subtitle="The passion we pour into every cup" 
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BREW_STATS.map(stat => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsCounter;