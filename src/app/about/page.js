// components/about/AboutPage.jsx
'use client';

import { AboutHero } from "@/sections/about/aboutHero";
import { Certifications } from "@/sections/about/certifications";
import { OurStory } from "@/sections/about/ourStory";
import { OurTeam } from "@/sections/about/ourTeam";
import { OurValues } from "@/sections/about/ourValue";
import { Footer } from "@/sections/mainpage/footer";
import Navbar from "@/sections/mainpage/navbar";




export default function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <OurStory />
      <OurTeam />
      <OurValues />
      <Certifications />
      <Footer />
    </>
  );
};
