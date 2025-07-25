// components/about/sections/AboutHero.jsx
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ABOUT_DATA } from '@/constant/About';

export const AboutHero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section 
      ref={ref}
      style={{ 
        position: 'relative',
        padding: '80px 0',
        overflow: 'hidden',
        backgroundColor: '#F5F5F5'
      }}
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{
        visible: { 
          opacity: 1,
          transition: { duration: 0.8 }
        }
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <motion.div 
          style={{
            width: '100%',
            marginBottom: '48px',
            paddingRight: '0'
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.8 }
            }
          }}
        >
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: '#3E2723',
            fontFamily: "'Playfair Display', serif"
          }}>
            {ABOUT_DATA.hero.title}
          </h1>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '24px',
            color: '#6F4E37',
            fontFamily: "'Inter', sans-serif"
          }}>
            {ABOUT_DATA.hero.subtitle}
          </p>
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '32px',
            color: '#3E2723',
            fontFamily: "'Inter', sans-serif"
          }}>
            {ABOUT_DATA.hero.description}
          </p>
        </motion.div>

        <motion.div 
          style={{
            width: '100%',
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.8, delay: 0.2 }
            }
          }}
        >
          <div style={{ aspectRatio: '16/9' }}>
            <Image 
              src={ABOUT_DATA.hero.image}
              alt="Coffee brewing"
              width={800}
              height={600}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

