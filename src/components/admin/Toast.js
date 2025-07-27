

// File: src/components/admin/Toast.js

// components/Toast.js
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle, FiXCircle, FiX } from 'react-icons/fi'

const toastVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  },
  exit: { 
    y: 20, 
    opacity: 0,
    transition: { ease: 'easeIn', duration: 0.3 }
  }
}

export default function Toast({ type, message, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        variants={toastVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed bottom-5 left-4 p-4 rounded-lg shadow-xl bg-amber-700 border border-amber-200 text-amber-50 flex items-center"
      >
        <span className="text-xl mr-2">
          {type === 'success' ? <FiCheckCircle /> : <FiXCircle />}
        </span>
        <span className="mr-4">{message}</span>
        <motion.button 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="ml-auto text-amber-200 hover:text-amber-50"
        >
          <FiX />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  )
}

