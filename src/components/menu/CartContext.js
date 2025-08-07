
// File path: src/components/menu/CartContext.js

'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_DATA } from '@/constant/Home/Menu';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [cartPulse, setCartPulse] = useState(false);

  // Show notification when item is added
const showNotification = (itemName) => {
  const randomMessage = MENU_DATA.cartMessages[
    Math.floor(Math.random() * MENU_DATA.cartMessages.length)
  ];
  
  // Clear any existing notification first
  setNotification(null);
  
  // Set new notification with unique ID
  const notificationId = Date.now();
  setNotification({
    message: randomMessage,
    item: itemName,
    id: notificationId
  });
  
  // Clear this specific notification after duration
  setTimeout(() => {
    setNotification(prev => {
      // Only clear if it's the same notification
      return prev?.id === notificationId ? null : prev;
    });
  }, MENU_DATA.notifications.duration);
};



  const addToCart = (product) => {
    const existingItem = cart.find(item => 
      item.id === product.id && 
      item.selectedOption.name === product.selectedOption.name
    );

    if (existingItem) {
      updateQuantity(existingItem.id, existingItem.quantity + 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    showNotification(product.name);
    setCartPulse(true);
    setTimeout(() => setCartPulse(false), 500);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart(cart.map(item => 
      item.id === productId ? {...item, quantity: newQuantity} : item
    ));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.selectedOption.price * item.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        notification
      }}
    >
      {children}
      
      {/* Notification Toast - Top Center */}
      <div className="fixed bottom-5 left-0 right-0 flex justify-center z-50 pointer-events-none">
        <AnimatePresence>
          {notification && (
            <motion.div
              className="bg-[#3E2723] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-5 max-w-md"
              initial={MENU_DATA.notifications.animation.enter}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { type: 'spring', damping: 20 }
              }}
              exit={MENU_DATA.notifications.animation.exit}
              transition={{ duration: 0.3 }}
              key={notification.id}
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-[#E5B80B]"
              >
                ✓
              </motion.span>
              <div>
                <p className="font-medium">{notification.message}</p>
                <p className="text-sm opacity-90">{notification.item}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </CartContext.Provider>
  );
}



export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


