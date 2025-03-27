
import React from 'react';

const Education = () => {
  const certificates = [
    {
      title: "Android Jetpack Compose: The Comprehensive Bootcamp",
      issuer: "Udemy",
      date: "2023",
      link: "https://www.udemy.com/certificate/UC-2c88588c-fbc9-41f7-9d98-92d367e03d7d/"
    },
    {
      title: "Flutter & Dart - The Complete Guide",
      issuer: "Udemy",
      date: "2022",
      link: "https://www.udemy.com/certificate/UC-e6bc0fa6-eec8-4553-8bf1-72f08e6ea98c/"
    },
    {
      title: "Belajar Dasar Manajemen Proyek",
      issuer: "Dicoding Indonesia",
      date: "2021",
      link: "https://www.dicoding.com/certificates/81P28JJ1OPOY"
    }
  ];

  return (
    <section id="education" className="bg-dark-bg relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Education & Certificates</h2>
          
          <div className="mt-12 mb-16">
            <div className="card p-8 animate-scale-in">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-medium">Universitas Muhammadiyah Surakarta</h3>
                  <p className="text-blue-accent">Bachelor of Informatics</p>
                  <p className="text-dark-secondary">2015 - 2019</p>
                </div>
                <div className="bg-dark-elevated rounded-lg px-5 py-3 text-center">
                  <span className="text-xl font-semibold">Informatics</span>
                  <p className="text-sm text-dark-secondary">Major</p>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="h-px w-full bg-dark-elevated my-6"></div>
                <p className="text-dark-secondary">
                  Completed a bachelor's degree in Informatics with a focus on software development and computer science principles. 
                  The coursework included programming fundamentals, data structures, algorithms, database systems, 
                  and software engineering practices.
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-medium mb-8">Professional Certificates</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <a 
                key={index} 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="card p-6 hover:scale-105 transition-transform duration-300 animate-scale-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-accent/20 mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-blue-accent"
                  >
                    <rect width="18" height="14" x="3" y="5" rx="2" />
                    <path d="M21 8H8" />
                    <path d="M21 12H8" />
                    <path d="M21 16H8" />
                    <path d="M4 8h1" />
                    <path d="M4 12h1" />
                    <path d="M4 16h1" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-1 line-clamp-2">{cert.title}</h4>
                <p className="text-blue-accent text-sm">{cert.issuer}</p>
                <p className="text-dark-secondary text-sm">{cert.date}</p>
                <div className="mt-3 text-xs text-dark-secondary flex items-center gap-1">
                  <span>View Certificate</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-blue-accent"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
