


// File: src/components/ui/button.js
'use client';
import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  onClick, 
  variant = "primary",
  size = "medium",
  icon: Icon,
  hoverScale = 1.05,
  hoverBgColor,
  hoverTextColor,
  className = "",
  disabled = false
}) => {
  const baseStyles = "flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-300";
  
  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  const variantStyles = {
    primary: {
      base: "bg-[#E5B80B] text-[#3E2723]",
      hover: hoverBgColor ? `hover:${hoverBgColor}` : "hover:bg-[#D4A017]"
    },
    secondary: {
      base: "bg-transparent border-2 border-white text-white",
      hover: hoverBgColor ? `hover:${hoverBgColor}` : "hover:bg-white hover:bg-opacity-10"
    },
    outline: {
      base: "border-2 border-[#3E2723] text-[#3E2723]",
      hover: hoverBgColor ? `hover:${hoverBgColor}` : "hover:bg-[#F9F5F0]"
    }
  };

  return (
    <motion.button
      whileHover={{ 
        scale: disabled ? 1 : hoverScale,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`
        ${baseStyles} 
        ${sizeStyles[size]} 
        ${variantStyles[variant].base} 
        ${variantStyles[variant].hover}
        ${hoverTextColor ? `hover:${hoverTextColor}` : ''}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {Icon && <Icon className="mr-2" />}
      {children}
    </motion.button>
  );
};