"use client";

import { Button } from "@/components/ui/button";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/constant/ShortMenu";
import Link from "next/link";
import { useState } from "react";
import { FiCoffee, FiChevronRight } from "react-icons/fi";

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

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-colors ${
                activeCategory === category.id
                  ? "bg-[#6F4E37] text-white"
                  : "bg-[#F5F5F5] text-[#3E2723] hover:bg-[#E5E5E5]"
              }`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              style={{ border: "1px solid #C4A484" }}
            >
              {/* Item Image Placeholder */}
              <div className="h-48 bg-[#F3E9E1] flex items-center justify-center">
                <FiCoffee className="h-16 w-16" style={{ color: "#6F4E37" }} />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className="text-xl font-bold"
                    style={{
                      color: "#3E2723",
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    {item.name}
                  </h3>
                  <span
                    className="text-lg font-semibold"
                    style={{
                      color: "#E5B80B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#6F4E37", fontFamily: "Inter, sans-serif" }}
                >
                  {item.description}
                </p>
                <button
                  className="flex items-center text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "#6F4E37" }}
                >
                  View Details <FiChevronRight className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-16 flex items-center justify-center">
          <Link href="/menu">
            <Button
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
