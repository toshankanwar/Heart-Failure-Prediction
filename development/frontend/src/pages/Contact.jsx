import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div className="p-6 max-w-3xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p>For inquiries or suggestions, email us at: <a href="mailto:health@predictor.com" className="text-blue-500 underline">health@predictor.com</a></p>
    </motion.div>
  );
}
