import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme/ThemeContext';
import { motion } from 'framer-motion';
import './navbar.css'; // Import custom CSS file

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const overlay = document.getElementById('blur-overlay');
    overlay.style.display = menuOpen ? 'none' : 'block';
  };

  return (
    <>
      {/* Full-page overlay when menu is open */}
      <div id="blur-overlay" className={`blur-overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`navbar ${darkMode ? 'dark' : ''}`}
      >
        <h1 className="navbar-logo">❤️ Heart Predictor</h1>
        <div className="navbar-links desktop-only">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/predict" className="navbar-link">Predict</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/table" className="navbar-link">Table</Link>
        </div>

        {/* Mobile toggle button */}
        <div className="mobile-toggle" onClick={toggleMenu}>
          <span className="mobile-toggle-icon">&#9776;</span> {/* Hamburger icon */}
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <span className="close-btn" onClick={toggleMenu}>&times;</span> {/* Close button */}
        <Link to="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
        <Link to="/predict" className="mobile-link" onClick={toggleMenu}>Predict</Link>
        <Link to="/about" className="mobile-link" onClick={toggleMenu}>About</Link>
        <Link to="/table" className="mobile-link" onClick={toggleMenu}>Table</Link>
      </div>
    </>
  );
}
