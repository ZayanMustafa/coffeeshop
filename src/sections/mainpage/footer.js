// components/Footer.jsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FiCoffee, 
  FiClock, 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiInstagram, 
  FiTwitter, 
  FiFacebook 
} from 'react-icons/fi';
import { FOOTER_DATA } from '@/constant/Footer';
// import { FOOTER_DATA } from '@/constants/footer';

const iconComponents = {
  FiInstagram,
  FiTwitter,
  FiFacebook
};

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-[#3E2723] text-white pt-16 pb-8">
      {/* Coffee beans divider */}
      <motion.div 
        className="relative h-12 w-full mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image 
          src="/images/coffee-divider.png"
          alt="Coffee beans divider"
          fill
          className="object-contain"
        />
      </motion.div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-4">
              <FiCoffee className="h-8 w-8 text-coffee-500 mr-2" />
              <span className="text-2xl font-bold font-serif">
                Brew<span className="text-coffee-500">Haven</span>
              </span>
            </div>
            <p className="mb-4 text-coffee-300 font-sans">
              {FOOTER_DATA.brand.tagline}
            </p>
            
            <div className="flex space-x-4">
              {FOOTER_DATA.brand.social.map((social, index) => {
                const Icon = iconComponents[social.icon];
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link 
                      href={social.url} 
                      className="text-white hover:text-coffee-500 transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Link Columns */}
          {FOOTER_DATA.links.map((column, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider font-mono">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-coffee-300 hover:text-coffee-500 transition-colors font-sans"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider font-mono">
              Contact
            </h3>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <FiMapPin className="flex-shrink-0 h-5 w-5 mt-0.5 text-coffee-500 mr-3" />
                <span className="text-coffee-300 font-sans">
                  {FOOTER_DATA.contact.address}
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <FiClock className="flex-shrink-0 h-5 w-5 text-coffee-500 mr-3" />
                <span className="text-coffee-300 font-sans">
                  {FOOTER_DATA.contact.hours.weekdays}<br />
                  {FOOTER_DATA.contact.hours.weekends}
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <FiPhone className="flex-shrink-0 h-5 w-5 text-coffee-500 mr-3" />
                <span className="text-coffee-300 font-sans">
                  {FOOTER_DATA.contact.phone}
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <FiMail className="flex-shrink-0 h-5 w-5 text-coffee-500 mr-3" />
                <span className="text-coffee-300 font-sans">
                  {FOOTER_DATA.contact.email}
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="mt-16 pt-8 border-t border-coffee-700 text-center text-coffee-300 text-sm relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div 
            className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <Image 
              src="/images/coffee-bean-icon.png"
              alt="Coffee bean"
              width={24}
              height={24}
            />
          </motion.div>
          <p className="font-sans">{FOOTER_DATA.copyright.text}</p>
          <p className="mt-1 font-sans">{FOOTER_DATA.copyright.tagline}</p>
        </motion.div>
      </div>
    </footer>
  );
};

