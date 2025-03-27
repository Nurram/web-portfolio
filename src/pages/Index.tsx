
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add smooth reveal animations when scrolling
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (!section.classList.contains('animate-fade-in')) {
        section.classList.add('opacity-0');
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg text-dark-text antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
