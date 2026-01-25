import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface PDFGeneratorProps {
  className?: string;
}

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ className }) => {
  const handleClick = () => {
    window.open('https://drive.google.com/file/d/1OXy-qeccHivzDnUjIYWeB_nVdlnzKqlz/view?usp=sharing', '_blank');
  };

  return (
    <Button 
      onClick={handleClick}
      className={`flex items-center gap-2 ${className}`}
      variant="outline"
    >
      <Download className="w-4 h-4" />
      Download Resume
    </Button>
  );
};

export default PDFGenerator;
