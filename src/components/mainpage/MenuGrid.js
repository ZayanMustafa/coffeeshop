'use client'

import { MENU_ITEMS } from "@/constant/ShortMenu";
import { useState } from "react";
import { FiChevronRight, FiCoffee } from "react-icons/fi";
import { Button } from "../ui/button";

export const MenuGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Get all unique categories from menu items
  const categories = ["all", ...new Set(MENU_ITEMS.map(item => item.category))];
  
  const filteredItems = activeCategory === "all" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-8">
    
    
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === category
                ? "bg-[#E5B80B] text-[#3E2723]"
                : "bg-[#F9F5F0] text-[#6F4E37] hover:bg-[#E5B80B] hover:text-[#3E2723]"
            }`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            style={{ border: "1px solid #C4A484" }}
          >
            {/* Item Image */}
            <div className="h-48 bg-[#F3E9E1] flex items-center justify-center overflow-hidden">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <FiCoffee className="h-16 w-16" style={{ color: "#6F4E37" }} />
              )}
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
                  ${item.price}
                </span>
              </div>
              
              <p
                className="text-gray-600 mb-4 line-clamp-2"
                style={{ color: "#6F4E37", fontFamily: "Inter, sans-serif" }}
              >
                {item.description}
              </p>
              
              {/* Category Badge */}
              <div className="mb-4">
                <span
                  className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                  style={{ 
                    backgroundColor: "#F9F5F0", 
                    color: "#6F4E37",
                    fontFamily: "Montserrat, sans-serif"
                  }}
                >
                  {item.category}
                </span>
              </div>

              <button
                className="flex items-center text-sm font-semibold uppercase tracking-wider hover:text-[#E5B80B] transition-colors duration-300"
                style={{ color: "#6F4E37" }}
                onClick={() => console.log("View details for:", item.name)}
              >
                View Details <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Items Message */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <FiCoffee className="h-16 w-16 mx-auto mb-4" style={{ color: "#6F4E37" }} />
          <h3 className="text-xl font-bold" style={{ color: "#3E2723", fontFamily: "Playfair Display, serif" }}>
            No items found in this category
          </h3>
          <p style={{ color: "#6F4E37", fontFamily: "Inter, sans-serif" }}>
            Try selecting a different category or check back later for new items.
          </p>
        </div>
      )}
    </div>
  );
};