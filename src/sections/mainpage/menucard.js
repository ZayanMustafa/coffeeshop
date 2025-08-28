"use client";

import { MenuGrid } from "@/components/mainpage/MenuGrid";
import { Button } from "@/components/ui/button";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/constant/ShortMenu";
import Link from "next/link";
import { useState } from "react";

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#3E2723", fontFamily: "Playfair Display, serif" }}
          >
            Our Artisan Creations
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#6F4E37", fontFamily: "Inter, sans-serif" }}
          >
            Handcrafted with locally sourced ingredients and passion
          </p>
        </div>

  
        {/* Menu Grid */}
          <MenuGrid activeCategory={activeCategory} />

        {/* View Full Menu Button */}
        <div className="text-center mt-16 flex items-center justify-center">
            <Button
              href="/menu"
              variant="outline"
              className="px-8 py-3 rounded-md uppercase tracking-wider border-2 hover:bg-[#875a3a] hover:text-[#6F4E37] transition-colors"
              style={{
                borderColor: "#7c4d2bff",
                color: "#6F4E37",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              View Full Menu
            </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
