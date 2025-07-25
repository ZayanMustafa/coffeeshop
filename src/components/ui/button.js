
// File path: src/components/ui/button.js
'use client';
import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  onClick, 
  variant = "primary",
  className = "",
  disabled = false
}) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all";
  
  const variants = {
    primary: `bg-[#3E2723] text-white hover:bg-[#6F4E37]`,
    secondary: `bg-[#E5B80B] text-[#3E2723] hover:bg-[#D4A017]`,
    outline: `border border-[#3E2723] text-[#3E2723] hover:bg-[#F9F5F0]`
  };

  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      whileHover={disabled ? {} : { scale: 1.03 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

