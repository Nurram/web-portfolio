
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Link as LinkIcon, Phone } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // In a real app, you would send this data to a server
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };
  
  return (
    <section id="contact" className="bg-dark-surface relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A84FF_1px,transparent_1px)] [background-size:40px_40px] opacity-5"></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-10">
            <div className="md:col-span-2 animate-slide-in">
              <h3 className="text-xl font-medium mb-4">Contact Information</h3>
              <p className="text-dark-secondary mb-6">
                Feel free to reach out to me via email or connect with me on various platforms.
                I'm open to discussing new opportunities, projects, or just having a conversation
                about technology.
              </p>
              
              <div className="space-y-5 mt-8">
                <a 
                  href="tel:+6282387087503"
                  className="flex items-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-dark-elevated flex items-center justify-center mr-4 group-hover:bg-blue-accent/20 transition-colors duration-300">
                    <Phone size={18} className="text-blue-accent" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-blue-accent transition-colors duration-300">Phone</p>
                    <p className="text-dark-secondary text-sm">(+62) 82387087503</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:febiana.nur.ramdani@gmail.com"
                  className="flex items-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-dark-elevated flex items-center justify-center mr-4 group-hover:bg-blue-accent/20 transition-colors duration-300">
                    <Mail size={18} className="text-blue-accent" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-blue-accent transition-colors duration-300">Email</p>
                    <p className="text-dark-secondary text-sm">febiana.nur.ramdani@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/febiana-nur-ramdani/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-dark-elevated flex items-center justify-center mr-4 group-hover:bg-blue-accent/20 transition-colors duration-300">
                    <Linkedin size={18} className="text-blue-accent" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-blue-accent transition-colors duration-300">LinkedIn</p>
                    <p className="text-dark-secondary text-sm">linkedin.com/in/febiana-nur-ramdani</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/Nurram" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-dark-elevated flex items-center justify-center mr-4 group-hover:bg-blue-accent/20 transition-colors duration-300">
                    <Github size={18} className="text-blue-accent" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-blue-accent transition-colors duration-300">GitHub</p>
                    <p className="text-dark-secondary text-sm">github.com/Nurram</p>
                  </div>
                </a>
                
                <a 
                  href="https://fastwork.id/user/nurram" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-dark-elevated flex items-center justify-center mr-4 group-hover:bg-blue-accent/20 transition-colors duration-300">
                    <LinkIcon size={18} className="text-blue-accent" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-blue-accent transition-colors duration-300">Fastwork</p>
                    <p className="text-dark-secondary text-sm">fastwork.id/user/nurram</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="md:col-span-3 animate-slide-in-right">
              <div className="card p-6 bg-dark-elevated/50 backdrop-blur-sm">
                <h3 className="text-xl font-medium mb-6">Send Me a Message</h3>
                
                {isSubmitted ? (
                  <div className="bg-blue-accent/20 border border-blue-accent/30 rounded-lg p-6 text-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="40" 
                      height="40" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-blue-accent mx-auto mb-3"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <h4 className="text-lg font-medium mb-2">Message Sent Successfully!</h4>
                    <p className="text-dark-secondary">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-bg border border-dark-elevated rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-bg border border-dark-elevated rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-dark-bg border border-dark-elevated rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition resize-none"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-blue-accent text-white font-medium py-3 rounded-lg transition-all hover:bg-blue-accent/90 focus:outline-none focus:ring-2 focus:ring-blue-accent/50"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
