import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SOCIAL_MEDIA } from '@/constant/SocialMedia';

export function SocialMedia() {
  // Icon mapping
  const iconComponents = {
    FiInstagram: FiInstagram,
    FaXTwitter: FaXTwitter,
    FiFacebook: FiFacebook,
    FaTiktok: FaTiktok
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white p-6 rounded-xl shadow-md border border-[#F9F5F0]"
    >
      <h3 className="text-xl font-bold text-[#3E2723] mb-4">Connect Socially</h3>
      <div className="space-y-3">
        {Object.entries(SOCIAL_MEDIA).map(([platform, data]) => {
          const IconComponent = iconComponents[data.icon];
          return (
            <Link
              key={platform}
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#6F4E37] hover:text-[#3E2723] transition-colors group"
            >
              <span className="bg-[#E5B80B] p-2 rounded-full group-hover:bg-[#3E2723] transition-colors">
                <IconComponent className="text-white" size={18} />
              </span>
              <span>{data.handle}</span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}