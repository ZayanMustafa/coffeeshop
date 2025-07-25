

// components/about/sections/OurTeam.jsx
'use client';

import { motion } from 'framer-motion';
import { ABOUT_DATA } from '@/constant/About';
import Image from 'next/image';

export const OurTeam = () => {
  return (
    <section style={{ 
      padding: '80px 0',
      backgroundColor: '#F5F5F5'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: '#3E2723',
            fontFamily: "'Playfair Display', serif"
          }}>
            {ABOUT_DATA.team.title}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            maxWidth: '42rem',
            margin: '0 auto',
            color: '#6F4E37',
            fontFamily: "'Inter', sans-serif"
          }}>
            {ABOUT_DATA.team.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px'
        }}>
          {ABOUT_DATA.team.members.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ member, index }) => {
  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, delay: index * 0.15 }
      }}
    >
      <div style={{
        position: 'relative',
        width: '192px',
        height: '192px',
        borderRadius: '50%',
        overflow: 'hidden',
        marginBottom: '24px',
        border: '4px solid #E5B80B'
      }}>
        <Image 
          src={member.image}
          alt={member.name}
          width={200}
          height={200}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '4px',
        color: '#3E2723',
        fontFamily: "'Playfair Display', serif"
      }}>
        {member.name}
      </h3>
      <p style={{
        fontSize: '1.125rem',
        marginBottom: '12px',
        color: '#E5B80B',
        fontFamily: "'Montserrat', sans-serif"
      }}>
        {member.role}
      </p>
      <p style={{
        fontSize: '1.125rem',
        maxWidth: '20rem',
        color: '#6F4E37',
        fontFamily: "'Inter', sans-serif"
      }}>
        {member.bio}
      </p>
    </motion.div>
  );
};