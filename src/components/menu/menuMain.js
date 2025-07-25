

// File path: src/components/menu/menuMain.js
'use client';

import { MENU_DATA } from '@/constant/Menu';
import { motion } from 'framer-motion';
import { MenuCategory } from './Category';
import { CartProvider } from './CartContext';
import { CartSidebar } from './CartSlider';

export const MenuPage = () => {
  return (
    <>
    
 <CartProvider>
      <div className="py-16 px-6" style={{ backgroundColor: MENU_DATA.theme.background }}>
        <div className="container mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Coffee Menu
          </h1>
          <p className="text-xl text-[#6F4E37] max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Carefully crafted beverages made with specialty grade beans from around the world
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-20">
          {MENU_DATA.categories.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </div>

        {/* Extras Section */}
        <motion.section
          className="mt-20 bg-white rounded-xl shadow-md p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-[#3E2723] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Add Extras
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {MENU_DATA.extras.map((extra, index) => (
              <motion.div
                key={extra.name}
                className="bg-[#F9F5F0] p-4 rounded-lg text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-medium text-[#3E2723]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {extra.name}
                </h3>
                <p className="text-[#6F4E37]">+${extra.price.toFixed(2)}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
    <CartSidebar />
      </CartProvider>
    </>
  );
};


