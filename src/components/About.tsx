import React from 'react';
import { ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-dark-surface relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">About Me</h2>
          
          <div className="space-y-6 text-dark-secondary">
            <p className="animate-slide-in">
              I'm a Software Engineer with <span className="text-blue-accent font-medium">4 years of professional experience</span>, 
              specializing in mobile application development using Flutter. My expertise extends to native mobile 
              development with Kotlin and Java, as well as backend and web development using PHP Laravel.
            </p>
            
            <p className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              Currently working at <span className="text-white font-medium">PT. Aero Systems Indonesia</span>, 
              I've honed my skills in developing robust, scalable, and visually appealing applications across multiple platforms.
              My experience encompasses both SQL and NoSQL database systems, allowing me to create comprehensive solutions
              from frontend to backend.
            </p>
            
            <p className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
              I'm passionate about creating intuitive user experiences and solving complex problems through elegant code.
              My approach combines technical expertise with a keen eye for design, resulting in applications that are both
              functional and delightful to use.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center mb-4">
                <span className="text-blue-accent text-xl font-bold">4+</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Years Experience</h3>
              <p className="text-dark-secondary text-sm">Professional software development experience in various domains</p>
            </div>
            
            <div className="card p-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center mb-4">
                <span className="text-blue-accent text-xl font-bold">10+</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Technologies</h3>
              <p className="text-dark-secondary text-sm">Proficient in a wide range of technologies for mobile and web development</p>
            </div>
            
            <div className="card p-6 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center mb-4">
                <span className="text-blue-accent text-xl font-bold">∞</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Problem Solving</h3>
              <p className="text-dark-secondary text-sm">Dedicated to finding elegant solutions to complex programming challenges</p>
            </div>
          </div>
          
          {/* Play Store Link */}
          <div className="mt-10 flex justify-center">
            <a 
              href="https://play.google.com/store/apps/developer?id=Nurramware" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-accent/10 text-blue-accent hover:bg-blue-accent/20 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Check out my work on Play Store</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
