
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-bg py-10 border-t border-dark-elevated">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold tracking-tight text-white">
              <span className="text-blue-accent">F</span>ebiana
            </a>
            <p className="text-dark-secondary text-sm mt-2">Mobile Developer & Software Engineer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-dark-secondary hover:text-blue-accent transition-colors duration-200">
              About
            </a>
            <a href="#experience" className="text-dark-secondary hover:text-blue-accent transition-colors duration-200">
              Experience
            </a>
            <a href="#skills" className="text-dark-secondary hover:text-blue-accent transition-colors duration-200">
              Skills
            </a>
            <a href="#education" className="text-dark-secondary hover:text-blue-accent transition-colors duration-200">
              Education
            </a>
            <a href="#contact" className="text-dark-secondary hover:text-blue-accent transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
        
        <div className="h-px w-full bg-dark-elevated my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-secondary text-sm mb-4 md:mb-0">
            © {currentYear} Febiana Nur Ramdani. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:febiana.nur.ramdani@gmail.com" 
              className="text-dark-secondary hover:text-blue-accent transition-colors duration-200"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/febiana-nur-ramdani/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-secondary hover:text-blue-accent transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Nurram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-secondary hover:text-blue-accent transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
