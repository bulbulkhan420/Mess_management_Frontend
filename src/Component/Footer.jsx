import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-6">
        
        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300 text-2xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors duration-300 text-2xl"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Footer Info */}
        <div className="text-center md:text-left space-y-2 text-sm md:text-base">
          <p>© 2024 Your Company. All rights reserved.</p>
          <p>1234 Address St, City, State, 12345</p>
          <p>Email: info@yourcompany.com | Phone: (123) 456-7890</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
