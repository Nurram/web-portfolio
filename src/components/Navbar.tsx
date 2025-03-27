
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-lg bg-dark-bg/80 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight text-white">
            <span className="text-blue-accent">F</span>ebiana
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="navbar-item"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-dark-bg/95 backdrop-blur-lg z-40 md:hidden mobile-nav ${isOpen ? 'active' : ''}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="text-2xl font-medium hover:text-blue-accent transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
