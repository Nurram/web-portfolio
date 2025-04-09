
import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Mobile Development",
      items: ["Flutter", "Jetpack Compose", "Kotlin", "Java", "Android SDK", "iOS Development"]
    },
    {
      category: "Web Development",
      items: ["PHP", "Laravel", "HTML", "CSS", "JavaScript"]
    },
    {
      category: "Database",
      items: ["SQL", "NoSQL", "Firebase", "MySQL", "MongoDB"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "RESTful APIs", "Firebase", "Agile/Scrum", "UI/UX Design"]
    }
  ];

  return (
    <section id="skills" className="bg-dark-surface relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-accent/10 rounded-full filter blur-[80px] animate-float"></div>
      <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-blue-accent/5 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Skills & Expertise</h2>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="card p-6 animate-scale-in" 
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h3 className="text-xl font-medium mb-4 text-blue-accent">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-medium mb-6 text-center">Technical Proficiency</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium">Flutter</span>
                    <span className="text-sm text-dark-secondary">95%</span>
                  </div>
                  <div className="h-2 w-full bg-dark-elevated rounded-full overflow-hidden">
                    <div className="h-full bg-blue-accent rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium">Kotlin/Java</span>
                    <span className="text-sm text-dark-secondary">85%</span>
                  </div>
                  <div className="h-2 w-full bg-dark-elevated rounded-full overflow-hidden">
                    <div className="h-full bg-blue-accent rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium">PHP/Laravel</span>
                    <span className="text-sm text-dark-secondary">80%</span>
                  </div>
                  <div className="h-2 w-full bg-dark-elevated rounded-full overflow-hidden">
                    <div className="h-full bg-blue-accent rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium">HTML/CSS/JavaScript</span>
                    <span className="text-sm text-dark-secondary">75%</span>
                  </div>
                  <div className="h-2 w-full bg-dark-elevated rounded-full overflow-hidden">
                    <div className="h-full bg-blue-accent rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium">SQL Databases</span>
                    <span className="text-sm text-dark-secondary">85%</span>
                  </div>
                  <div className="h-2 w-full bg-dark-elevated rounded-full overflow-hidden">
                    <div className="h-full bg-blue-accent rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium">NoSQL/Firebase</span>
                    <span className="text-sm text-dark-secondary">90%</span>
                  </div>
                  <div className="h-2 w-full bg-dark-elevated rounded-full overflow-hidden">
                    <div className="h-full bg-blue-accent rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
