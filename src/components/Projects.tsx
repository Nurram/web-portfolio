
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "FlyGaruda UI Revamp",
      description: "Revamp the UI of Garuda Indonesia Airlines' FlyGaruda Mobile application using a new UI/UX",
      keyFeatures: ["Show and Book Garuda Indonesia tickets", "Exchange garuda miles"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    },
    {
      id: 2,
      title: "Sales Agent Monitoring",
      description: "Sales agent monitoring for use by Hewlett Packard's (HP) sales",
      keyFeatures: ["Sales Check in and Checkout", "Record check in and checkout location"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 3,
      title: "Fleet Management System",
      description: "Developed to facilitate flight crew management from pick up to drop off, consist of 4 apps (QC, Dispatcher, Aircrew, and Driver)",
      keyFeatures: ["Check driver eligibity by QC", "Aircrew request pick up", "Dispatch driver to pick up aircrew", "Show driver and aircrew location to be picked up"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <section id="projects" className="bg-dark-bg relative">
      {/* Background effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxQzFDMUUiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNNTAgMEgwdjUwaDUwVjB6TTAgMHYxMGgxMFYwSDB6bTEwIDIwSDB2MTBoMTBWMjB6bS0xMCAyMHYxMGgxMFY0MEgwek0yMCAwdjEwaDEwVjBIMjB6bTEwIDIwSDIwdjEwaDEwVjIwem0tMTAgMjB2MTBoMTBWNDBIMjB6TTQwIDB2MTBoMTBWMEg0MHptMTAgMjBINDB2MTBoMTBWMjB6bS0xMCAyMHYxMGgxMFY0MEg0MHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="bg-dark-surface/70 border border-dark-elevated hover:border-blue-accent/30 transition-all duration-300 overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`${project.image}?w=600&h=400&auto=format&fit=crop&q=80`} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-4 h-4 text-blue-accent" />
                  </CardTitle>
                  <CardDescription className="text-dark-secondary">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="text-sm font-medium text-blue-accent mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-dark-secondary space-y-1 text-sm">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
