import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-12 mt-10 shadow-lg">
      {/* Moving Animated Border */}
      <div className="absolute inset-0 border-2 border-blue-500 rounded-lg animate-border"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10">
        {/* Left - Logo */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl font-bold text-blue-500 hover:text-blue-400 transition duration-300">
            Elearn Platform
          </h1>
          <p className="text-gray-400 text-sm mt-2">Empowering learning through technology.</p>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex flex-wrap gap-6 text-lg">
          <Link to="/home" className="text-gray-300 hover:text-blue-400 transition-all duration-300">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-all duration-300">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-all duration-300">Contact</Link>
          <Link to="/privacy" className="text-gray-300 hover:text-blue-400 transition-all duration-300">Privacy</Link>
          <Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-all duration-300">Terms</Link>
        </div>

        {/* Right - Social Media Links */}
        <div className="flex gap-6 mt-6 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-2xl text-gray-400 hover:text-blue-500 transition-all duration-300"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-2xl text-gray-400 hover:text-blue-500 transition-all duration-300"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-2xl text-gray-400 hover:text-blue-500 transition-all duration-300"></i>
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-gray-500 text-lg mt-8">
        &copy; {new Date().getFullYear()} Elearn Platform. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
