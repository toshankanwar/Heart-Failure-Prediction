import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a> | 
          <a href="/terms" className="footer-link">Terms of Use</a>
        </p>
        <p className="footer-credit">
          © {new Date().getFullYear()} ❤️ Designed & Developed by <a href="https://toshankanwar.website/" target="_blank" rel="noopener noreferrer" className="dev-link">Toshan kanwar</a>
        </p>
      </div>
    </footer>
  );
}
