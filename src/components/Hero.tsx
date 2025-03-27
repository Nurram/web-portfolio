
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const phrases = ["Mobile Developer", "Software Engineer", "Flutter Expert", "Backend Developer"];
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseEnd = 1500;

    const type = () => {
      const subtitle = subtitleRef.current;
      if (!subtitle) return;

      const phrase = phrases[currentPhrase];
      
      if (isDeleting) {
        subtitle.textContent = phrase.substring(0, currentChar - 1);
        currentChar--;
        typingSpeed = 50; // Faster when deleting
      } else {
        subtitle.textContent = phrase.substring(0, currentChar + 1);
        currentChar++;
        typingSpeed = 150; // Slower when typing
      }

      // Handle transition to next phrase
      if (!isDeleting && currentChar === phrase.length) {
        isDeleting = true;
        typingSpeed = pauseEnd; // Pause at the end of the phrase
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background blur circles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-accent/20 rounded-full filter blur-[100px] animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-accent/10 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-blue-accent mb-3 font-medium tracking-widest text-sm animate-fade-in">WELCOME TO MY PORTFOLIO</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 animate-blur-in">
            Febiana Nur Ramdani
          </h1>
          <div className="h-8">
            <p ref={subtitleRef} className="text-xl md:text-2xl text-dark-secondary font-medium">Mobile Developer</p>
          </div>
          <p className="max-w-2xl mt-6 text-dark-secondary animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Software engineer with 4 years of professional experience specializing in mobile app development. 
            Skilled in creating beautiful and functional applications with Flutter and native technologies.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-accent text-white rounded-full font-medium transition-all hover:bg-blue-accent/90 hover:scale-105 shadow-lg shadow-blue-accent/20"
            >
              Contact Me
            </a>
            <a 
              href="#experience" 
              className="px-8 py-3 bg-dark-elevated text-white rounded-full font-medium transition-all hover:bg-dark-elevated/80 hover:scale-105"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-dark-secondary flex justify-center pt-2">
          <div className="w-1 h-2 bg-dark-secondary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
