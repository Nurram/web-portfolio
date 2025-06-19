
import React from 'react';
import jsPDF from 'jspdf';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PDFGeneratorProps {
  className?: string;
}

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ className }) => {
  const generatePDF = () => {
    try {
      const doc = new jsPDF();
      
      // Add title
      doc.setFontSize(20);
      doc.text('Portfolio Summary', 20, 30);
      
      // Add personal info
      doc.setFontSize(12);
      doc.text('Full Stack Developer Portfolio', 20, 50);
      doc.text('Specializing in Flutter Mobile Development and Laravel Backend', 20, 60);
      
      // Add projects section
      doc.setFontSize(16);
      doc.text('Featured Projects:', 20, 80);
      
      doc.setFontSize(10);
      let yPosition = 95;
      
      // Add project details
      const projects = [
        {
          title: 'Es Teh Solo Delivery',
          description: 'Comprehensive delivery service app for traditional Indonesian tea beverages',
          tech: 'Flutter, Laravel, MySQL'
        },
        {
          title: 'FlyGaruda UI Revamp',
          description: 'Modern redesign of Garuda Indonesia Airlines mobile application',
          tech: 'Flutter'
        },
        {
          title: 'Sales Agent Monitoring',
          description: 'Enterprise solution for HP sales division to track field agent activities',
          tech: 'Flutter'
        }
      ];
      
      projects.forEach((project) => {
        doc.setFontSize(12);
        doc.text(`• ${project.title}`, 25, yPosition);
        doc.setFontSize(10);
        doc.text(`  ${project.description}`, 25, yPosition + 8);
        doc.text(`  Technology: ${project.tech}`, 25, yPosition + 16);
        yPosition += 30;
      });
      
      // Add skills section
      doc.setFontSize(16);
      doc.text('Technical Skills:', 20, yPosition + 10);
      
      doc.setFontSize(10);
      const skills = 'Flutter, Dart, Laravel, PHP, MySQL, JavaScript, React, Node.js, Git, REST APIs';
      doc.text(skills, 20, yPosition + 25);
      
      // Generate and download
      doc.save('portfolio-summary.pdf');
      
      toast({
        title: "PDF Generated Successfully",
        description: "Your portfolio PDF has been downloaded.",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button 
      onClick={generatePDF}
      className={`flex items-center gap-2 ${className}`}
      variant="outline"
    >
      <Download className="w-4 h-4" />
      Download PDF
    </Button>
  );
};

export default PDFGenerator;
