import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"; // ✅ Import Icons

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-12 mt-10 shadow-lg">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left - Logo */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl font-bold text-blue-500 hover:text-blue-400 transition duration-300">
            Elearn Platform
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Empowering learning through technology.
          </p>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex flex-wrap gap-6 text-lg">
          <Link to="/home" className="text-gray-300 hover:text-blue-400 transition-all duration-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-all duration-300">
            About
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-all duration-300">
            Contact
          </Link>
          <Link to="/privacy" className="text-gray-300 hover:text-blue-400 transition-all duration-300">
            Privacy
          </Link>
          <Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-all duration-300">
            Terms
          </Link>
        </div>

        {/* Right - Social Media Links */}
        <div className="flex gap-6 mt-6 md:mt-0">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={28} className="text-gray-400 hover:text-red-500 transition-all duration-300" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={28} className="text-gray-400 hover:text-blue-500 transition-all duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={28} className="text-gray-400 hover:text-blue-500 transition-all duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={28} className="text-gray-400 hover:text-blue-500 transition-all duration-300" />
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
