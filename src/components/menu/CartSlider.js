


// File path: src/components/menu/CartContext.js

'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingBag, FiX, FiPlus, FiMinus } from 'react-icons/fi';
import { Button } from '../ui/button';
import { useCart } from './CartContext';

export const CartSidebar = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
    notification
  } = useCart();

  return (
    <>
      {/* Cart Toggle */}
      <motion.button
        className="fixed top-1/2 right-0 bg-[#3E2723] text-white p-3 rounded-l-lg shadow-xl z-40"
        onClick={() => setIsCartOpen(true)}
        whileHover={{ x: -3 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: notification ? [1, 1.1, 1] : 1
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <FiShoppingBag size={20} />
          {totalItems > 0 && (
            <motion.span
              className="absolute -top-2 -right-2 bg-[#E5B80B] text-[#3E2723] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              key={totalItems}
            >
              {totalItems}
            </motion.span>
          )}
        </div>
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="p-6 border-b border-[#F9F5F0] flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#3E2723] flex items-center gap-2">
                  <FiShoppingBag />
                  Your Cart ({totalItems})
                </h2>
                <button onClick={() => setIsCartOpen(false)}>
                  <FiX size={20} className="text-[#6F4E37]" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <motion.div 
                    className="h-full flex flex-col items-center justify-center text-center text-[#6F4E37]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <FiShoppingBag size={40} className="mb-4" />
                    <p>Your cart is empty</p>
                    <p className="text-sm mt-1">Add some delicious coffee!</p>
                  </motion.div>
                ) : (
                  <ul className="space-y-4">
                    <AnimatePresence>
                      {cart.map((item) => (
                        <motion.li 
                          key={`${item.id}-${item.selectedOption.name}`}
                          className="flex justify-between items-start border-b border-[#F9F5F0] pb-4"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          layout
                        >
                          <div>
                            <h3 className="font-medium text-[#3E2723]">{item.name}</h3>
                            <p className="text-sm text-[#6F4E37]">
                              {item.selectedOption.name} • ${item.selectedOption.price.toFixed(2)}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 rounded-full bg-[#F9F5F0] flex items-center justify-center"
                              >
                                <FiMinus size={12} />
                              </button>
                              <motion.span
                                key={`quantity-${item.quantity}`}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                              >
                                {item.quantity}
                              </motion.span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 rounded-full bg-[#F9F5F0] flex items-center justify-center"
                              >
                                <FiPlus size={12} />
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-[#3E2723]">
                              ${(item.selectedOption.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="block mt-1 text-xs text-red-500"
                            >
                              Remove
                            </button>
                          </div>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                )}
              </div>

              {cart.length > 0 && (
                <motion.div 
                  className="p-6 border-t border-[#F9F5F0]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex justify-between mb-4">
                    <span className="font-bold text-[#3E2723]">Subtotal:</span>
                    <span className="font-bold text-[#3E2723]">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-[#6F4E37]">Tax (10%):</span>
                    <span className="text-[#6F4E37]">${(totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-6 text-lg">
                    <span className="font-bold text-[#3E2723]">Total:</span>
                    <span className="font-bold text-[#3E2723]">${(totalPrice * 1.1).toFixed(2)}</span>
                  </div>
                  <Button
                    href="/checkout"
                    variant="primary" 
                    className="w-full py-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Proceed to Checkout
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

