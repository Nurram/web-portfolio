import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
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
      title: "SoCo Giving - Volunteer Registration Platform",
      description: "A comprehensive volunteer registration and management platform for Social Connect, enabling organizations to coordinate volunteer activities and connect volunteers with meaningful opportunities. The platform features real-time registration, event management, and volunteer tracking.",
      keyFeatures: [
        "User-friendly volunteer registration interface",
        "Voluntrips event listing and management system",
        "Real-time event availability and schedule tracking",
        "Admin dashboard built with Filament for content management",
        "Responsive design optimized for both desktop and mobile devices",
        "Data privacy compliance with dedicated privacy policy and data policy pages"
      ],
      technology: "Laravel (Backend), Filament (Admin Panel), Livewire (Interactive Components)",
      image: "/lovable-uploads/soco-giving-hero.png",
      playstoreLink: null,
      websiteUrl: "http://voluntrips.socialconnect.id/",
      role: "Full Stack Developer"
    },
    {
      id: 2,
      title: "Es Teh Solo Delivery",
      description: "A comprehensive delivery service application designed specifically for Es Teh Solo merchant, featuring complete order management, real-time tracking, and cash-on-delivery support for traditional Indonesian tea beverages.",
      keyFeatures: [
        "User-friendly mobile app for customers to browse and order beverages",
        "Real-time order tracking with delivery status updates",
        "Cash on delivery and takeaway order management",
        "Administrative dashboard for order management and analytics",
        "Inventory management system for stock control"
      ],
      technology: "Flutter (Mobile), Laravel (Frontend & Backend), MySQL (Database)",
      image: "/lovable-uploads/3d5cb927-eef8-48fd-ac10-ed35db432956.png",
      playstoreLink: null,
      role: "Full Stack Developer - Solo Development"
    },
    {
      id: 3,
      title: "FlyGaruda UI Revamp",
      description: "Comprehensive redesign of Garuda Indonesia Airlines' mobile application with modern UI/UX principles to enhance user experience and engagement.",
      keyFeatures: [
        "Streamlined flight booking experience",
        "Optimized Garuda Miles rewards management"
      ],
      technology: "Flutter",
      image: "https://i.ibb.co.com/dwWz0NWY/flyga.png",
      playstoreLink: null
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
      playstoreLink: null
    },
    {
      id: 7,
      title: "Mentari Assessment",
      description: "Mental health assessment application providing personalized evaluations and evidence-based recommendations for users' wellbeing.",
      keyFeatures: [
        "Comprehensive mental health questionnaires",
        "Interactive assessment result visualization",
        "Multimedia learning resources with audio and video content"
      ],
      technology: "Flutter (Mobile), Firebase (NoSQL Database)",
      image: "https://i.ibb.co.com/FkXsnPcM/Mentari-Assesment.jpg",
      playstoreLink: null
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
                        <span>{project.title}</span>
                        {project.websiteUrl && (
                          <ExternalLink className="h-4 w-4 text-blue-accent" />
                        )}
                      </CardTitle>
                      <CardDescription className="text-dark-secondary">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-sm font-medium text-blue-accent mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-dark-secondary space-y-1 text-sm">
                        {project.keyFeatures.slice(0, 3).map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                        {project.keyFeatures.length > 3 && (
                          <li className="text-blue-accent">And {project.keyFeatures.length - 3} more...</li>
                        )}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-dark-elevated">
                        <h4 className="text-sm font-medium text-blue-accent mb-1">Technology Used:</h4>
                        <p className="text-dark-secondary text-sm">{project.technology}</p>
                        {project.role && (
                          <>
                            <h4 className="text-sm font-medium text-blue-accent mb-1 mt-2">Role:</h4>
                            <p className="text-dark-secondary text-sm">{project.role}</p>
                          </>
                        )}
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
            <DialogTitle className="text-2xl font-bold text-dark-text flex items-center justify-between">
              <span>{selectedProject.title}</span>
              {selectedProject.websiteUrl && (
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  className="ml-4"
                >
                  <a 
                    href={selectedProject.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Visit Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </DialogTitle>
            
            <div className="mt-4 rounded-lg overflow-hidden">
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.images.map((img, idx) => (
                    <img 
                      key={idx}
                      src={`${img}?w=800&h=500&auto=format&fit=crop&q=90`} 
                      alt={`${selectedProject.title} - ${idx + 1}`}
                      className="w-full h-auto object-cover rounded"
                    />
                  ))}
                </div>
              ) : (
                <img 
                  src={`${selectedProject.image}?w=800&h=500&auto=format&fit=crop&q=90`} 
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover"
                />
              )}
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

            {selectedProject.role && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-dark-text mb-2">My Role</h3>
                <p className="text-dark-secondary">{selectedProject.role}</p>
              </div>
            )}
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;
