// components/NotFound.jsx
'use client';

import { NOT_FOUND_DATA } from '@/constant/NotFound';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NotFoundComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const coffeeCupVariants = {
    initial: { y: -100, rotate: -10 },
    animate: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };

  return (
    <div style={{
      backgroundColor: NOT_FOUND_DATA.theme.background,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <motion.div
        style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Coffee Cup */}
        <motion.div
          variants={coffeeCupVariants}
          style={{
            width: '120px',
            height: '120px',
            margin: '0 auto 2rem',
            position: 'relative'
          }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120">
            {/* Cup */}
            <motion.path
              d="M30,40 L30,80 C30,100 50,100 50,80 L50,40"
              fill="white"
              stroke={NOT_FOUND_DATA.theme.primary}
              strokeWidth="3"
            />
            {/* Handle */}
            <motion.path
              d="M50,60 C70,60 70,40 50,40"
              fill="transparent"
              stroke={NOT_FOUND_DATA.theme.primary}
              strokeWidth="3"
            />
            {/* Spilled Coffee */}
            <motion.path
              d="M30,40 L50,40 L50,60 C50,70 30,70 30,60 Z"
              fill={NOT_FOUND_DATA.theme.secondary}
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            />
          </svg>
        </motion.div>

        <motion.h1
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: NOT_FOUND_DATA.theme.primary,
            marginBottom: '1rem',
            fontFamily: NOT_FOUND_DATA.theme.fonts.heading
          }}
          variants={itemVariants}
        >
          {NOT_FOUND_DATA.title}
        </motion.h1>

        <motion.h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 400,
            color: NOT_FOUND_DATA.theme.secondary,
            marginBottom: '1.5rem',
            fontFamily: NOT_FOUND_DATA.theme.fonts.decorative,
            fontStyle: 'italic'
          }}
          variants={itemVariants}
        >
          {NOT_FOUND_DATA.subtitle}
        </motion.h2>

        <motion.p
          style={{
            fontSize: '1.125rem',
            color: NOT_FOUND_DATA.theme.secondary,
            marginBottom: '2.5rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
            fontFamily: NOT_FOUND_DATA.theme.fonts.body
          }}
          variants={itemVariants}
        >
          {NOT_FOUND_DATA.description}
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link href={NOT_FOUND_DATA.buttonLink} passHref>
            <motion.button
              style={{
                backgroundColor: NOT_FOUND_DATA.theme.accent,
                color: NOT_FOUND_DATA.theme.primary,
                padding: '0.75rem 2rem',
                borderRadius: '50px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: NOT_FOUND_DATA.theme.fonts.body,
                boxShadow: `0 4px 15px rgba(229, 184, 11, 0.3)`
              }}
              whileHover={{
                y: -3,
                scale: 1.05,
                boxShadow: `0 6px 20px rgba(229, 184, 11, 0.4)`
              }}
              whileTap={{ scale: 0.98 }}
            >
              {NOT_FOUND_DATA.buttonText}
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundComponent;