

import { CONTACT_INFO } from "@/constant/Contact";
import { motion } from "framer-motion";


export function Location() {
  return (
 <div className="grid md:grid-cols-2 gap-8 mb-16">
          {CONTACT_INFO.locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border border-[#F9F5F0]"
            >
              <h2 className="text-2xl font-bold text-[#3E2723] mb-4">{location.name}</h2>
              <div className="space-y-4 text-[#6F4E37]">
                <p>
                  <span className="font-medium text-[#3E2723]">Address:</span> {location.address}
                </p>
                <p>
                  <span className="font-medium text-[#3E2723]">Phone:</span> {location.phone}
                </p>
                <div>
                  <p className="font-medium text-[#3E2723] mb-1">Hours:</p>
                  <p>Weekdays: {location.hours.weekdays}</p>
                  <p>Weekends: {location.hours.weekends}</p>
                  <p>Holidays: {location.hours.holidays}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
  );
}