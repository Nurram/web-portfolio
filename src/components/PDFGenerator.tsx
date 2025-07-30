
import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PDFGeneratorProps {
  className?: string;
}

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ className }) => {
  const generatePDF = async () => {
    try {
      toast({
        title: "Generating PDF...",
        description: "Please wait while we capture the website layout.",
      });

      // Use landscape orientation for better visual presentation
      const doc = new jsPDF('l', 'mm', 'a4'); // landscape, millimeters, A4
      const sections = ['hero', 'about', 'experience', 'achievements', 'projects', 'skills', 'education', 'contact'];
      
      const pageHeight = doc.internal.pageSize.height;
      const pageWidth = doc.internal.pageSize.width;
      
      for (let i = 0; i < sections.length; i++) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId) || document.querySelector(`[id="${sectionId}"]`);
        
        if (element) {
          // Hide the floating PDF button temporarily
          const pdfButton = document.querySelector('.fixed.bottom-6.right-6') as HTMLElement;
          if (pdfButton) pdfButton.style.display = 'none';
          
          const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#0F0F23',
            width: element.scrollWidth,
            height: element.scrollHeight,
          });
          
          // Restore the PDF button
          if (pdfButton) pdfButton.style.display = 'block';
          
          const imgData = canvas.toDataURL('image/jpeg', 0.95); // Use JPEG for better compression
          
          // Fill entire page with no margins
          const imgWidth = pageWidth;
          const imgHeight = pageHeight;
          
          // Add new page for each section (except first)
          if (i > 0) {
            doc.addPage();
          }
          
          // Add section to PDF with no margins, filling entire page
          doc.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        }
      }
      
      // Generate and download
      doc.save('portfolio-professional.pdf');
      
      toast({
        title: "PDF Generated Successfully",
        description: "Your professional portfolio PDF has been downloaded in landscape format with seamless layout.",
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
