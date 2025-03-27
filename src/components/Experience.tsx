
import React, { useEffect } from 'react';

const Experience = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      item.classList.add('opacity-0');
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="experience" className="bg-dark-bg relative">
      {/* Background effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxQzFDMUUiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJWMGgtNHYzNGgtMS45OVYwaC00djM0SDIyVjBoLTR2MzQuMDFIMTZWNTRoMnYtM2E0IDQgMCAwIDEgNC00aDEyYTQgNCAwIDAgMSA0IDR2My4wMWgyVjBIMzZWMzR6TTIgMGg0djRIMnptMCA2aDR2NEgyek00NiAwaDR2NEg0NnptMCA2aDR2NEg0NnptMC00aDR2NEg0NnptNiA0aDR2NEg1MnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Work Experience</h2>
          
          <div className="mt-12">
            {/* Experience 1 */}
            <div className="timeline-item">
              <div className="mb-4">
                <h3 className="text-xl font-medium">Software Engineer</h3>
                <p className="text-blue-accent font-medium">PT. Aero Systems Indonesia</p>
                <p className="text-dark-secondary text-sm">Jan 2022 - Present</p>
              </div>
              <div className="glass-panel p-5 rounded-xl space-y-3">
                <p className="text-dark-secondary">
                  Working as a Software Engineer focusing on mobile application development and backend services.
                </p>
                <ul className="list-disc list-inside text-dark-secondary space-y-1.5">
                  <li>Developed and maintained mobile applications using Flutter</li>
                  <li>Implemented native features using Kotlin and Java when needed</li>
                  <li>Created RESTful APIs with PHP Laravel for backend services</li>
                  <li>Optimized database queries in both SQL and NoSQL environments</li>
                  <li>Collaborated with design teams to create intuitive user interfaces</li>
                </ul>
              </div>
            </div>
            
            {/* Experience 2 */}
            <div className="timeline-item">
              <div className="mb-4">
                <h3 className="text-xl font-medium">Developer Development Program (DEEP)</h3>
                <p className="text-blue-accent font-medium">PT. Aero Systems Indonesia</p>
                <p className="text-dark-secondary text-sm">Nov 2020 - Dec 2021</p>
              </div>
              <div className="glass-panel p-5 rounded-xl space-y-3">
                <p className="text-dark-secondary">
                  Participated in an accelerated development program focusing on software engineering skills.
                </p>
                <ul className="list-disc list-inside text-dark-secondary space-y-1.5">
                  <li>Trained in mobile app development and web technologies</li>
                  <li>Completed numerous project-based learning assignments</li>
                  <li>Collaborated with senior developers on real-world projects</li>
                  <li>Gained hands-on experience with Flutter for cross-platform development</li>
                  <li>Learned best practices for software architecture and design patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
