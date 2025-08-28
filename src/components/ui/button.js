// File: src/components/ui/button.js
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Button = ({ 
  children, 
  onClick, 
  href,
  variant = "primary",
  size = "medium",
  icon: Icon,
  hoverScale = 1.05,
  hoverBgColor,
  hoverTextColor,
  className = "",
  disabled = false,
  // Add Framer Motion props
  whileHover,
  whileTap,
  style,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-300 text-center";
  
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

  const buttonContent = (
    <>
      {Icon && <Icon className="mr-2" />}
      {children}
    </>
  );

  const buttonClass = `
    ${baseStyles} 
    ${sizeStyles[size]} 
    ${variantStyles[variant].base} 
    ${variantStyles[variant].hover}
    ${hoverTextColor ? `hover:${hoverTextColor}` : ''}
    ${className}
  `;

  const motionProps = {
    whileHover: whileHover || { scale: disabled ? 1 : hoverScale },
    whileTap: whileTap || { scale: disabled ? 1 : 0.95 },
    className: buttonClass,
    style: { fontFamily: 'Montserrat, sans-serif', ...style }
  };

  // If href is provided, use Link
  if (href && !disabled) {
    return (
      <Link href={href} {...props}>
        <motion.span {...motionProps} role="button" tabIndex={0}>
          {buttonContent}
        </motion.span>
      </Link>
    );
  }

  // Otherwise, use regular button
  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};