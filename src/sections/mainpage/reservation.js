"use client";

import { useState, useEffect } from 'react';
import { FiClock, FiUsers, FiCoffee } from 'react-icons/fi';
import Link from 'next/link';
import { RESERVATION_DATA } from '@/constant/Reservation';

const ReservationCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 2
  });

  const [minDate, setMinDate] = useState('');
  const [minTime, setMinTime] = useState('');

  // Set minimum date/time on component mount
  useEffect(() => {
    const now = new Date();
    
    // Set minimum date (today)
    const today = now.toISOString().split('T')[0];
    setMinDate(today);
    
    // If selected date is today, set minimum time (current time + 1 hour)
    if (formData.date === today) {
      const currentHour = now.getHours();
      const nextHour = currentHour + 1;
      const minTimeValue = `${nextHour.toString().padStart(2, '0')}:00`;
      setMinTime(minTimeValue);
    } else {
      setMinTime('00:00');
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation submitted:', formData);
    // In a real app, you would send this data to your backend
  };

  // Helper to get current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-20 bg-[#F5F5F5]" id="reserve">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md" style={{ border: '1px solid #C4A484' }}>
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#3E2723', fontFamily: 'Playfair Display, serif' }}>
                {RESERVATION_DATA.title}
              </h2>
              <p className="text-lg mb-6" style={{ color: '#6F4E37', fontFamily: 'Inter, sans-serif' }}>
                {RESERVATION_DATA.subtitle}
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {RESERVATION_DATA.form.fields.map(field => (
                    <div 
                      key={field.id}
                      className={field.id === 'guests' || field.id === 'date' || field.id === 'time' ? 'md:col-span-1' : 'md:col-span-2'}
                    >
                      <label 
                        htmlFor={field.id}
                        className="block text-sm font-medium mb-1"
                        style={{ color: '#6F4E37', fontFamily: 'Inter, sans-serif' }}
                      >
                        {field.label}
                      </label>
                      {field.id === 'date' ? (
                        <input
                          type="date"
                          id="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-[#E5B80B] focus:border-[#E5B80B] transition-all"
                          style={{ borderColor: '#C4A484' }}
                          min={minDate}
                          required
                        />
                      ) : field.id === 'time' ? (
                        <input
                          type="time"
                          id="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-[#E5B80B] focus:border-[#E5B80B] transition-all"
                          style={{ borderColor: '#C4A484' }}
                          min={formData.date === minDate ? minTime : undefined}
                          required
                        />
                      ) : (
                        <input
                          type={field.type}
                          id={field.id}
                          value={formData[field.id]}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-[#E5B80B] focus:border-[#E5B80B] transition-all"
                          style={{ borderColor: '#C4A484' }}
                          placeholder={field.placeholder}
                          min={field.min}
                          max={field.max}
                          required
                        />
                      )}
                    </div>
                  ))}
                </div>
                
                <button
                  type="submit"
                  className="w-full mt-8 px-6 py-3 rounded-md font-semibold uppercase tracking-wider transition-colors"
                  style={{ 
                    backgroundColor: '#E5B80B',
                    color: '#3E2723',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#D4A017'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#E5B80B'}
                >
                  {RESERVATION_DATA.form.submitText}
                </button>
              </form>
            </div>
          </div>

          {/* Features Section */}
          <div className="lg:w-1/2">
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#3E2723', fontFamily: 'Playfair Display, serif' }}>
                Why Reserve With Us
              </h3>
              
              <div className="space-y-6">
                {RESERVATION_DATA.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 p-3 rounded-full mr-4" style={{ backgroundColor: '#6F4E37', color: '#E5B80B' }}>
                      {feature.icon === 'FiClock' && <FiClock className="h-5 w-5" />}
                      {feature.icon === 'FiUsers' && <FiUsers className="h-5 w-5" />}
                      {feature.icon === 'FiCoffee' && <FiCoffee className="h-5 w-5" />}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold" style={{ color: '#3E2723', fontFamily: 'Montserrat, sans-serif' }}>
                        {feature.title}
                      </h4>
                      <p className="text-gray-600" style={{ color: '#6F4E37', fontFamily: 'Inter, sans-serif' }}>
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: '#6F4E37', color: '#FFFFFF' }}>
                <h4 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Special Occasions?
                </h4>
                <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Let us know if you're celebrating something special - we'll make it memorable!
                </p>
                <Link href="/contact" passHref className="inline-block px-4 py-2 text-sm rounded-md border font-medium"
                    style={{ borderColor: '#E5B80B', color: '#E5B80B', fontFamily: 'Montserrat, sans-serif' }}
                >
                    Contact Us
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationCTA;