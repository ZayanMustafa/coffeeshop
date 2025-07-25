
import { motion } from 'framer-motion';


export function  MapLocation() {
  return (
       <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-xl shadow-md border border-[#F9F5F0]"
        >
          <h3 className="text-xl font-bold text-[#3E2723] mb-4">Find Us</h3>
          <div className="h-64 bg-[#C4A484] rounded-lg flex items-center justify-center text-[#3E2723]">
            {/* In a real app, this would be a Google Maps component */}
            <p>Map would display here</p>
          </div>
        </motion.div>
  );
}