"use client";

import { useState, useEffect } from 'react';
import * as Icons from 'react-icons/fi';
import { motion } from 'framer-motion';
import { NAV_CONFIG, NAV_ITEMS } from '@/constant/Navbar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic icon component rendering
  const Icon = ({ name, ...props }) => {
    const IconComponent = Icons[name];
    return <IconComponent {...props} />;
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-lg' : 'py-4'}`}
      style={{ backgroundColor: scrolled ? NAV_CONFIG.colors.dark : '#6c4b34' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Icon 
              name={NAV_CONFIG.logo.icon} 
              className="h-8 w-8" 
              style={{ color: NAV_CONFIG.colors.accent }} 
            />
            <span className="ml-2 text-2xl font-bold text-white font-playfair">
              {NAV_CONFIG.logo.text.split(NAV_CONFIG.logo.accentText)[0]}
              <span style={{ color: NAV_CONFIG.colors.accent }}>
                {NAV_CONFIG.logo.accentText}
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAV_ITEMS.filter(item => !item.cta).map((item) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  className="relative group text-white hover:text-[#E5B80B] px-3 py-2 rounded-md text-sm font-medium font-montserrat transition-colors"
                  style={{ color: NAV_CONFIG.colors.secondary }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 origin-left"
                    style={{ backgroundColor: NAV_CONFIG.colors.accent }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </motion.a>
              ))}
              {/* Fixed CTA Button with Link */}
              <motion.a
                href={NAV_CONFIG.ctaButton.path}
                className="ml-4 px-4 py-2 rounded-md text-sm font-semibold uppercase font-montserrat tracking-wider transition-colors"
                style={{
                  backgroundColor: NAV_CONFIG.colors.accent,
                  color: NAV_CONFIG.colors.dark
                }}
                whileHover={{ 
                  y: -2, 
                  backgroundColor: NAV_CONFIG.colors.darkAccent,
                  boxShadow: `0 4px 8px rgba(229, 184, 11, 0.3)`
                }}
                whileTap={{ scale: 0.95 }}
              >
                {NAV_CONFIG.ctaButton.text}
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#E5B80B] focus:outline-none"
              style={{ color: NAV_CONFIG.colors.secondary }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <Icon name="FiX" className="h-6 w-6" />
              ) : (
                <Icon name="FiMenu" className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: NAV_CONFIG.colors.dark }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.name}
                href={item.path}
                className="flex items-center text-white hover:bg-[#6F4E37] hover:text-[#E5B80B] px-3 py-2 rounded-md text-base font-medium"
                style={{ color: NAV_CONFIG.colors.secondary }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
              >
                <Icon name={item.icon} className="mr-2" />
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;