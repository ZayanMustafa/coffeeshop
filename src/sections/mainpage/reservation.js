


// src/sections/mainpage/reservation.js
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InputField from "@/components/ui/input";
import DateTimeInput from "@/components/reservation/DateTimeInput";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/reservation/FeatureCard";
import { RESERVATION_DATA } from "@/constant/Reservation";

const ReservationCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
  });

  const [minDate, setMinDate] = useState("");
  const [minTime, setMinTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    setMinDate(today);

    if (formData.date === today) {
      const currentHour = now.getHours();
      const nextHour = currentHour + 1;
      const minTimeValue = `${nextHour.toString().padStart(2, "0")}:00`;
      setMinTime(minTimeValue);
    } else {
      setMinTime("00:00");
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Backend API endpoint (commented for now)
  /*
    MongoDB Schema would look like:
    
    const reservationSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true },
      date: { type: Date, required: true },
      time: { type: String, required: true },
      guests: { type: Number, required: true, min: 1, max: 12 },
      createdAt: { type: Date, default: Date.now }
    });
    
    API Route: /api/reservations
    Methods: POST for creating new reservations
  */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call to backend (replace with actual fetch when backend is ready)
      console.log("Reservation data to be saved:", formData);

      // This would be the actual API call when backend is implemented:
      /*
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit reservation');
      }
      
      const result = await response.json();
      */

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes - in real app, this would be the response from backend
      const success = Math.random() > 0.2; // 80% success rate for demo

      if (success) {
        setSubmitStatus("success");
        // Reset form on successful submission
        setFormData({
          name: "",
          email: "",
          date: "",
          time: "",
          guests: 2,
        });

        // In a real app, you might redirect or show a confirmation modal
        console.log("Reservation submitted successfully (simulated)");
      } else {
        throw new Error("Simulated server error");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      // Clear status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-[#F5F5F5]" id="reserve">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-12"
        >
          {/* Form Section */}
          <div className="lg:w-1/2">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-md border border-[#C4A484]"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-2 text-[#3E2723] font-playfair"
              >
                {RESERVATION_DATA.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg mb-6 text-[#6F4E37] font-sans"
              >
                {RESERVATION_DATA.subtitle}
              </motion.p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    id="name"
                    label="Full Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />

                  <InputField
                    id="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />

                  <DateTimeInput
                    id="date"
                    label="Date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={minDate}
                    placeholder="Select a date"
                  />

                  <DateTimeInput
                    id="time"
                    label="Time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    min={formData.date === minDate ? minTime : undefined}
                    required
                  />

                  <InputField
                    id="guests"
                    label="Number of Guests"
                    type="number"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    max="12"
                    required
                    placeholder="Enter number of guests"
                  />
                </div>

                <div className="mt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting
                      ? "Processing..."
                      : RESERVATION_DATA.form.submitText}
                  </Button>

                  {submitStatus && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 text-sm ${
                        submitStatus === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {submitStatus === "success"
                        ? "Reservation submitted successfully! We will confirm shortly."
                        : "Failed to submit reservation. Please try again."}
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>

          {/* Features Section */}
          <div className="lg:w-1/2">
            <div className="h-full flex flex-col justify-center">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold mb-6 text-[#3E2723] font-playfair"
              >
                Why Reserve With Us
              </motion.h3>

              <div className="space-y-6">
                {RESERVATION_DATA.features.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} index={index} />
                ))}
              </div>

              {/* Special Occasion Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 p-6 rounded-lg bg-[#6F4E37] text-white"
              >
                <h4 className="text-xl font-semibold mb-3 font-playfair">
                  Special Occasions?
                </h4>
                <p className="mb-4 font-sans">
                  Let us know if you&apos;re celebrating something special -
                  we&apos;ll make it memorable!
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-4 py-2 text-sm rounded-md border font-medium border-[#E5B80B] text-[#E5B80B] font-montserrat"
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationCTA;
