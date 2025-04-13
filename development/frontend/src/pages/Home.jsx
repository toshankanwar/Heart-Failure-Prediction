import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="home-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="overlay">
        <div className="home-content-centered">
          <h1 className="home-title">❤️ Heart Disease Risk Predictor</h1>
          <p className="home-subtitle">
            Quickly estimate your risk of heart failure based on clinical metrics.
          </p>
          <p className="home-description">
            Built with advanced deep learning models and real-world health data. Empower yourself with knowledge to protect your heart.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
