


// components/about/OurTeam.jsx
'use client';

import { ABOUT_DATA } from '@/constant/About';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const TeamMember = ({ member, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-[#E5B80B] group">
        <Image 
          src={member.image}
          alt={member.name}
          width={200}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a href={member.social.twitter} className="text-white hover:text-[#E5B80B]">
            <FiTwitter className="text-xl" />
          </a>
          <a href={member.social.instagram} className="text-white hover:text-[#E5B80B]">
            <FiInstagram className="text-xl" />
          </a>
          <a href={member.social.linkedin} className="text-white hover:text-[#E5B80B]">
            <FiLinkedin className="text-xl" />
          </a>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-1 text-[#3E2723] font-serif">
        {member.name}
      </h3>
      <p className="text-lg mb-3 text-[#E5B80B] font-mono uppercase tracking-wider">
        {member.role}
      </p>
      <p className="text-lg max-w-xs text-[#6F4E37] font-sans">
        {member.bio}
      </p>
    </motion.div>
  );
};

export const OurTeam = () => {
  return (
    <section className="py-20 bg-[#F9F5F0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3E2723] font-serif">
            {ABOUT_DATA.team.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#6F4E37] font-sans">
            {ABOUT_DATA.team.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ABOUT_DATA.team.members.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

