


// File path: src/app/menu/page.js
import { CartProvider } from "@/components/menu/CartContext";
import { CartSidebar } from "@/components/menu/CartSlider";
import { MenuCategory } from "@/components/menu/MenuCategory";
import { MENU_DATA } from "@/constant/Home/Menu";
import { Footer } from "@/sections/mainpage/footer";
import Navbar from "@/sections/mainpage/navbar";

export default function MenuPage() {
  return (
    <>
    <Navbar/>
    <CartProvider>
      <main 
        className="min-h-screen py-12 pt-32 px-6" 
        style={{ backgroundColor: MENU_DATA.theme.colors.light || '#F9F5F0' }}
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ 
                color: MENU_DATA.theme.colors.primary,
                fontFamily: MENU_DATA.theme.fonts.heading
              }}
            >
              Our Coffee Menu
            </h1>
            <p 
              className="text-lg text-[#6F4E37] max-w-2xl mx-auto"
              style={{ fontFamily: MENU_DATA.theme.fonts.body }}
            >
              Carefully crafted from bean to cup
            </p>
          </header>

          <div className="space-y-16">
            {MENU_DATA.categories.map(category => (
              <MenuCategory key={category.id} category={category} />
            ))}
          </div>
        </div>
      </main>
      <CartSidebar />
    </CartProvider>
    <Footer />
    </>
  );
}
