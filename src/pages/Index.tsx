
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PDFGenerator from '../components/PDFGenerator';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-bg text-dark-text antialiased">
      <Navbar />
      <main>
        <Hero />
        <div className="fixed bottom-6 right-6 z-50">
          <PDFGenerator />
        </div>
        <About />
        <Experience />
        <Achievements />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
