


'use client';
import { CONTACT_INFO } from '@/constant/Contact';
import { motion } from 'framer-motion';
import { FiMail, FiBriefcase, FiPackage, FiUser } from 'react-icons/fi';

// In your contact page component:

export const EmailContactCard = ({ contactInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white p-6 rounded-xl shadow-md border border-[#F9F5F0]"
    >
      <h3 className="text-xl font-bold text-[#3E2723] mb-4 flex items-center gap-2">
        <FiMail className="text-[#E5B80B]" />
        Email Us
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3 text-[#6F4E37]">
          <FiMail className="mt-1 flex-shrink-0 text-[#3E2723]" />
          <div>
            <p className="font-medium text-[#3E2723]">General Inquiries</p>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="hover:text-[#3E2723] transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3 text-[#6F4E37]">
          <FiBriefcase className="mt-1 flex-shrink-0 text-[#3E2723]" />
          <div>
            <p className="font-medium text-[#3E2723]">Business Partnerships</p>
            <a 
              href={`mailto:${contactInfo.businessInquiries}`}
              className="hover:text-[#3E2723] transition-colors"
            >
              {contactInfo.businessInquiries}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3 text-[#6F4E37]">
          <FiPackage className="mt-1 flex-shrink-0 text-[#3E2723]" />
          <div>
            <p className="font-medium text-[#3E2723]">Wholesale Orders</p>
            <a 
              href={`mailto:${contactInfo.wholesaleContact}`}
              className="hover:text-[#3E2723] transition-colors"
            >
              {contactInfo.wholesaleContact}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3 text-[#6F4E37]">
          <FiUser className="mt-1 flex-shrink-0 text-[#3E2723]" />
          <div>
            <p className="font-medium text-[#3E2723]">Careers</p>
            <a 
              href={`mailto:${contactInfo.careersEmail}`}
              className="hover:text-[#3E2723] transition-colors"
            >
              {contactInfo.careersEmail}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

