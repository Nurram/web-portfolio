
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

      const doc = new jsPDF('p', 'mm', 'a4');
      const sections = ['hero', 'about', 'experience', 'achievements', 'projects', 'skills', 'education', 'contact'];
      
      let currentYPosition = 0;
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
          
          const imgData = canvas.toDataURL('image/png');
          const imgWidth = pageWidth - 20; // 10mm margin on each side
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          
          // Check if we need a new page
          if (currentYPosition + imgHeight > pageHeight - 20 && currentYPosition > 0) {
            doc.addPage();
            currentYPosition = 10;
          }
          
          // Add section to PDF
          doc.addImage(imgData, 'PNG', 10, currentYPosition, imgWidth, imgHeight);
          currentYPosition += imgHeight + 10;
          
          // Add new page if not the last section
          if (i < sections.length - 1) {
            doc.addPage();
            currentYPosition = 0;
          }
        }
      }
      
      // Generate and download
      doc.save('portfolio-complete.pdf');
      
      toast({
        title: "PDF Generated Successfully",
        description: "Your complete portfolio PDF has been downloaded with the original web design.",
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
