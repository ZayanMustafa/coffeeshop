


import { motion } from 'framer-motion'

const DateTimeInput = ({ 
  id, 
  label, 
  type, 
  value, 
  onChange, 
  min, 
  required = true,
  placeholder
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="md:col-span-1"
    >
      <label 
        htmlFor={id}
        className="block text-sm font-medium mb-1 text-[#6F4E37] font-sans"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-[#E5B80B] focus:border-[#E5B80B] transition-all border-[#C4A484] text-black placeholder-black"
        min={min}
        required={required}
        placeholder={placeholder}
      />
    </motion.div>
  )
}

export default DateTimeInput