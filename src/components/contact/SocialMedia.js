
import { FiInstagram, FiTwitter, FiFacebook, FiMusic } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '@/constant/Contact';  


export function SocialMedia() {
    return (
        <>
           {/* Social Media */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="bg-white p-6 rounded-xl shadow-md border border-[#F9F5F0]"
>
  <h3 className="text-xl font-bold text-[#3E2723] mb-4">Connect Socially</h3>
  <div className="space-y-3">
    {/* Instagram */}
    <a 
      href={CONTACT_INFO.socialMedia.instagram} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-[#6F4E37] hover:text-[#3E2723] transition-colors group"
    >
      <span className="bg-[#E5B80B] p-2 rounded-full group-hover:bg-[#3E2723] transition-colors">
        <FiInstagram className="text-white" size={18} />
      </span>
      <span>@havencoffee</span>
    </a>

    {/* Twitter */}
    <a 
      href={CONTACT_INFO.socialMedia.twitter} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-[#6F4E37] hover:text-[#3E2723] transition-colors group"
    >
      <span className="bg-[#E5B80B] p-2 rounded-full group-hover:bg-[#3E2723] transition-colors">
        <FiTwitter className="text-white" size={18} />
      </span>
      <span>@havencoffee</span>
    </a>

    {/* Facebook */}
    <a 
      href={CONTACT_INFO.socialMedia.facebook} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-[#6F4E37] hover:text-[#3E2723] transition-colors group"
    >
      <span className="bg-[#E5B80B] p-2 rounded-full group-hover:bg-[#3E2723] transition-colors">
        <FiFacebook className="text-white" size={18} />
      </span>
      <span>/havencoffee</span>
    </a>

    {/* TikTok */}
    <a 
      href="https://tiktok.com/@havencoffee" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-[#6F4E37] hover:text-[#3E2723] transition-colors group"
    >
      <span className="bg-[#E5B80B] p-2 rounded-full group-hover:bg-[#3E2723] transition-colors">
        <FiMusic className="text-white" size={18} />
      </span>
      <span>@havencoffee</span>
    </a>
  </div>
</motion.div>
        </>
    );
}   