'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { useCart } from './CartContext';
import { FiChevronDown, FiChevronUp, FiInfo } from 'react-icons/fi';

export const MenuCard = ({ item }) => {
  const [selectedOption, setSelectedOption] = useState(item.options[0]);
  const [expanded, setExpanded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({ 
      ...item, 
      selectedOption,
      id: `${item.id}-${selectedOption.name.replace(/\s+/g, '-').toLowerCase()}`,
      quantity: 1
    });
    
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-[#F9F5F0]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Item Header */}
      <div className="p-6">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#3E2723]">{item.name}</h3>
            {item.featured && (
              <span className="inline-block bg-[#E5B80B] text-[#3E2723] text-xs font-bold px-2 py-1 rounded-full mt-1">
                Featured
              </span>
            )}
            <p className="mt-2 text-[#6F4E37]">{item.description}</p>
          </div>
          <span className="font-bold text-[#E5B80B] text-xl whitespace-nowrap">
            ${selectedOption.price.toFixed(2)}
          </span>
        </div>

        {/* Options Selector */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {item.options.map(option => (
              <motion.button
                key={option.name}
                onClick={() => setSelectedOption(option)}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                  selectedOption.name === option.name
                    ? 'bg-[#3E2723] text-white'
                    : 'bg-[#F9F5F0] text-[#3E2723] hover:bg-[#E5E0DB]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option.name}
                {option.price !== item.price && (
                  <span className="ml-1 text-xs opacity-80">
                    (+${(option.price - item.price).toFixed(2)})
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Add to Cart Button */}
          <motion.div whileTap={isAdding ? {} : { scale: 0.95 }}>
            <Button
              variant={isAdding ? "primary" : "secondary"}
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 relative overflow-hidden h-12"
              disabled={isAdding}
            >
              {isAdding ? (
                <>
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute"
                  >
                    Added!
                  </motion.span>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-white"
                  >
                    ✓
                  </motion.span>
                </>
              ) : (
                <>
                  <span>Add to Cart</span>
                  <span>+</span>
                </>
              )}
            </Button>
          </motion.div>

          {/* Details Toggle */}
          <button 
            onClick={() => setExpanded(!expanded)}
            className="w-full mt-3 text-center text-sm text-[#6F4E37] hover:text-[#3E2723] transition-colors flex items-center justify-center gap-1"
          >
            {expanded ? (
              <>
                <FiChevronUp size={14} />
                <span>Hide details</span>
              </>
            ) : (
              <>
                <FiInfo size={14} />
                <span>Show details</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-[#F9F5F0]">
              {/* Selected Option Details */}
              <div className="mb-4">
                <h4 className="font-medium text-[#3E2723] mb-2">
                  {selectedOption.name} Details:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(selectedOption.details || {}).map(([key, value]) => (
                    <div key={key} className="bg-[#F9F5F0] p-2 rounded-lg">
                      <p className="text-xs text-[#6F4E37] capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </p>
                      <p className="text-sm font-medium text-[#3E2723]">
                        {Array.isArray(value) ? value.join(', ') : value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Item Details */}
              <div>
                <h4 className="font-medium text-[#3E2723] mb-2">
                  About This Coffee:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(item.details || {}).map(([key, value]) => (
                    <div key={key} className="bg-[#F9F5F0] p-2 rounded-lg">
                      <p className="text-xs text-[#6F4E37] capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </p>
                      <p className="text-sm font-medium text-[#3E2723]">
                        {Array.isArray(value) ? value.join(', ') : value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};