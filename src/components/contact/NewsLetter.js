'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { Button } from '../ui/button';
import { AnimatePresence } from 'framer-motion';


export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  // Clear status after 3 seconds when it changes
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-md border border-[#F9F5F0]"
    >
      <h3 className="text-xl font-bold text-[#3E2723] mb-4 flex items-center gap-2">
        <FiMail className="text-[#E5B80B]" />
        Newsletter
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-[#C4A484] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B80B] disabled:opacity-70"
          />
        </div>
        
        <Button
          type="submit"
          variant="secondary"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ✓
            </motion.span>
          ) : (
            'Subscribe'
          )}
        </Button>
        
        <AnimatePresence>
          {status && (
            <motion.p
              key={status}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`text-sm mt-2 ${
                status === 'success' ? 'text-green-600' : 'text-red-500'
              }`}
            >
              {status === 'success' 
                ? 'Thanks for subscribing!' 
                : 'Something went wrong. Please try again.'}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
} 