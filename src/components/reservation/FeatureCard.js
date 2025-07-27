// components/reservation/FeatureCard.js
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FiClock, FiUsers, FiCoffee } from 'react-icons/fi'

const iconComponents = {
  FiClock,
  FiUsers,
  FiCoffee
}

const FeatureCard = ({ feature, index }) => {
  const Icon = iconComponents[feature.icon]
  
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex items-start"
    >
      <Button
        variant="secondary"
        size="small"
        icon={Icon}
        className="!p-2 !rounded-full !mr-4 bg-[#6F4E37] text-[#E5B80B] border-none"
        hoverScale={1.1}
        hoverBgColor="bg-[#5A3D2C]"
        disabled
      />
      <div>
        <h4 className="text-lg font-semibold text-[#3E2723] font-montserrat">
          {feature.title}
        </h4>
        <p className="text-[#6F4E37] font-sans">
          {feature.text}
        </p>
      </div>
    </motion.div>
  )
}

export default FeatureCard