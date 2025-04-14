
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "FlyGaruda UI Revamp",
      description: "Comprehensive redesign of Garuda Indonesia Airlines' mobile application with modern UI/UX principles to enhance user experience and engagement.",
      keyFeatures: [
        "Streamlined flight booking experience",
        "Optimized Garuda Miles rewards management"
      ],
      technology: "Flutter",
      image: "https://i.ibb.co.com/dwWz0NWY/flyga.png",
      playstoreLink: "https://play.google.com/store/apps/details?id=com.garudaindonesia.flygaruda"
    },
    {
      id: 2,
      title: "Sales Agent Monitoring",
      description: "Enterprise solution developed for Hewlett Packard's sales division to efficiently track and optimize field agent activities.",
      keyFeatures: [
        "Real-time agent check-in/checkout verification",
        "Geolocation tracking with timestamp verification"
      ],
      technology: "Flutter",
      image: "https://i.ibb.co.com/zWnZmtH2/sam.jpg",
      playstoreLink: null
    },
    {
      id: 3,
      title: "Fleet Management System",
      description: "Integrated solution facilitating aircraft crew logistics from pick-up to drop-off, comprising four specialized applications for different stakeholders.",
      keyFeatures: [
        "Quality control driver eligibility verification",
        "Crew transportation request system",
        "Dispatch coordination interface",
        "Real-time location tracking between drivers and crew"
      ],
      technology: "Flutter",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      playstoreLink: null
    },
    {
      id: 4,
      title: "Sarmini Mbokdhe",
      description: "Comprehensive e-commerce platform facilitating direct-to-consumer grocery delivery with integrated logistics and payment solutions.",
      keyFeatures: [
        "Intuitive produce and grocery ordering system",
        "Dynamic shipping cost calculator",
        "Integrated customer support messaging",
        "Secure e-wallet top-up functionality"
      ],
      technology: "Flutter (Mobile), Laravel (Web Admin)",
      image: "https://i.ibb.co.com/fz8pCZ6L/Pasar-Mini-Mbok-Dhe.jpg",
      playstoreLink: "https://play.google.com/store/apps/details?id=com.nurramware.sarminimbokdhe"
    },
    {
      id: 5,
      title: "Mentari Assessment",
      description: "Mental health assessment application providing personalized evaluations and evidence-based recommendations for users' wellbeing.",
      keyFeatures: [
        "Comprehensive mental health questionnaires",
        "Interactive assessment result visualization",
        "Multimedia learning resources with audio and video content"
      ],
      technology: "Flutter (Mobile), Firebase (NoSQL Database)",
      image: "https://i.ibb.co.com/FkXsnPcM/Mentari-Assesment.jpg",
      playstoreLink: "https://play.google.com/store/apps/details?id=com.nurramware.mentariAssessment"
    }
  ];

  return (
    <section id="projects" className="bg-dark-bg relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxQzFDMUUiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNNTAgMEgwdjUwaDUwVjB6TTAgMHYxMGgxMFYwSDB6bTEwIDIwSDB2MTBoMTBWMjB6bS0xMCAyMHYxMGgxMFY0MEgwek0yMCAwdjEwaDEwVjBIMjB6bTEwIDIwSDIwdjEwaDEwVjIwem0tMTAgMjB2MTBoMTBWNDBIMjB6TTQwIDB2MTBoMTBWMEg0MHptMTAgMjBINDB2MTBoMTBWMjB6bS0xMCAyMHYxMGgxMFY0MEg0MHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Tooltip key={project.id}>
                <TooltipTrigger asChild>
                  <Card 
                    className="bg-dark-surface/70 border border-dark-elevated hover:border-blue-accent/30 transition-all duration-300 overflow-hidden h-full cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
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
                        <div className="flex items-center space-x-2">
                          {project.playstoreLink && (
                            <a 
                              href={project.playstoreLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-blue-accent"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
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
                      <div className="mt-4 pt-4 border-t border-dark-elevated">
                        <h4 className="text-sm font-medium text-blue-accent mb-1">Technology Used:</h4>
                        <p className="text-dark-secondary text-sm">{project.technology}</p>
                      </div>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to view details</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="bg-dark-surface border-dark-elevated max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogTitle className="text-2xl font-bold text-dark-text">{selectedProject.title}</DialogTitle>
            
            <div className="mt-4 rounded-lg overflow-hidden">
              <img 
                src={`${selectedProject.image}?w=800&h=500&auto=format&fit=crop&q=90`} 
                alt={selectedProject.title}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-dark-text mb-2">Overview</h3>
              <p className="text-dark-secondary">{selectedProject.description}</p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-dark-text mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-dark-secondary space-y-2">
                {selectedProject.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-base">{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-dark-text mb-2">Technology Stack</h3>
              <p className="text-dark-secondary">{selectedProject.technology}</p>
            </div>

            {selectedProject.playstoreLink && (
              <div className="mt-6">
                <a 
                  href="https://play.google.com/store/apps/developer?id=Nurramware" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-accent hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View on Play Store</span>
                </a>
              </div>
            )}
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;
