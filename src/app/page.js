import { Footer } from "@/sections/mainpage/footer";
import GalleryShowcase from "@/sections/mainpage/gallery";
import Hero from "@/sections/mainpage/hero";
import MenuPreview from "@/sections/mainpage/menucard";
import Navbar from "@/sections/mainpage/navbar";
import BrewingProcess from "@/sections/mainpage/process";
import ReservationCTA from "@/sections/mainpage/reservation";
import SeasonalSpecials from "@/sections/mainpage/special";
import StatsCounter from "@/sections/mainpage/stateCounter";
import Testimonials from "@/sections/mainpage/testimonails";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MenuPreview />
      <Testimonials />
      <StatsCounter/>
      <ReservationCTA />
      <BrewingProcess/>
      <GalleryShowcase />
      <SeasonalSpecials />
      <Footer />
    </>
  );
} 
