


// File: src/sections/mainpage/hero.js

"use client";
import { Button } from "@/components/ui/button";
import { HERO_CONTENT } from "@/constant/Home/Hero";
import { FiCalendar, FiCoffee } from "react-icons/fi";
import { useMemo } from "react";

const Hero = ({ content }) => {


  // Use useMemo to generate random coffee beans positions and sizes
  const beans = useMemo(() => 
    Array(20).fill().map(() => ({
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 10 + 5}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
  , []);

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-[#6F4E37] overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Static coffee beans background */}
      <div className="absolute inset-0 opacity-10">
        {beans.map((style, i) => (
          <div key={i} className="absolute rounded-full bg-[#C4A484]" style={style} />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{
                color: "#FFFFFF",
                fontFamily: "Playfair Display, serif",
              }}
            >
              {HERO_CONTENT.title}
            </h1>

            <p
              className="text-xl md:text-2xl mb-8 max-w-lg mx-auto lg:mx-0"
              style={{ color: "#C4A484", fontFamily: "Inter, sans-serif" }}
            >
              {HERO_CONTENT.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="large"
                icon={FiCalendar}
                hoverScale={1.1}
                hoverBgColor="bg-[#C4A484]"
                hoverTextColor="text-white"
                onClick={() => console.log("Book table clicked")}
                className="shadow-lg hover:shadow-xl"
              >
                {HERO_CONTENT.ctaButton.primary.text}
              </Button>

              <Button
                variant="secondary"
                size="large"
                icon={FiCoffee}
                hoverScale={1.1}
                hoverBgColor="bg-dark-200"
                hoverTextColor="text-yellow-500"
                onClick={() => console.log("View menu clicked")}
                className="shadow-lg hover:shadow-xl"
              >
                {HERO_CONTENT.ctaButton.secondary.text}
              </Button>
            </div>
          </div>

          {/* Stats and coffee cup graphic */}
          <div className="lg:w-1/2 relative">
            {/* Static coffee cup */}
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-[#3E2723] rounded-full"></div>
              <div className="absolute inset-4 bg-[#6F4E37] rounded-full"></div>
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#C4A484] rounded-t-full"></div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {HERO_CONTENT.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{
                      color: "#E5B80B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-white font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
