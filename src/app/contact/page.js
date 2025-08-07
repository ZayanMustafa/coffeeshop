

'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiInstagram, 
  FiTwitter, 
  FiFacebook,
  FiMusic 
} from 'react-icons/fi';
import { CONTACT_INFO } from '@/constant/Contact';
import { subscribeToNewsletter } from '@/components/contact/subscription';
import { SocialMedia } from '@/components/contact/SocialMedia';
import { MapLocation } from '@/components/contact/MapLocation';
import { Newsletter } from '@/components/contact/NewsLetter';
import { Location } from '@/components/contact/Location';
import { EmailContactCard } from '@/components/contact/EmailOptions';
import Navbar from '@/sections/mainpage/navbar';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

 

  return (
    <>
    <Navbar />
    <div className="py-30 px-6 " style={{ backgroundColor: '#F9F5F0' }}>
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#3E2723] mb-4">Contact Us</h1>
          <p className="text-xl text-[#6F4E37] max-w-2xl mx-auto">
            We&apos;d love to hear from you! Visit our cafes or reach out digitally.
          </p>
        </motion.div>

        {/* Locations Section */}
        <Location />

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
            <EmailContactCard contactInfo={CONTACT_INFO} />


            {/* Social Media */}
            <SocialMedia />

          {/* Newsletter Subscription */}
          <Newsletter />
        </div>

        {/* Map Section */}
            <MapLocation />
      </div>
    </div>
    </>
  );
}
