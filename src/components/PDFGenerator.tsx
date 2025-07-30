
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
      const doc = new jsPDF('p', 'mm', 'a4');
      let yPosition = 20;
      const pageWidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;
      
      // Header with name and title
      doc.setFontSize(28);
      doc.setFont('helvetica', 'bold');
      doc.text('Febiana Nur Ramdani', 20, yPosition);
      
      yPosition += 12;
      doc.setFontSize(16);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 100, 200);
      doc.text('Full Stack Developer | Mobile App Specialist', 20, yPosition);
      
      yPosition += 8;
      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      doc.text('Phone: (+62) 82387087503 | Email: febiana.nur.ramdani@gmail.com', 20, yPosition);
      
      // Reset color for main content
      doc.setTextColor(0, 0, 0);
      yPosition += 15;
      
      // Professional Summary
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('PROFESSIONAL SUMMARY', 20, yPosition);
      yPosition += 8;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const summary = `Experienced Full Stack Developer with 3+ years of expertise in mobile and web development.
Specialized in Flutter mobile applications and Laravel backend systems. Proven track record of
delivering high-quality solutions for enterprise clients including Garuda Indonesia and HP.
Passionate about creating user-friendly applications with clean, maintainable code.`;
      
      const summaryLines = doc.splitTextToSize(summary, pageWidth - 40);
      doc.text(summaryLines, 20, yPosition);
      yPosition += summaryLines.length * 4 + 10;
      
      // Core Technical Skills
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('CORE TECHNICAL SKILLS', 20, yPosition);
      yPosition += 8;
      
      const skills = [
        { category: 'Mobile Development', items: 'Flutter, Dart, Android Studio, iOS Development' },
        { category: 'Backend Development', items: 'Laravel, PHP, Node.js, REST APIs' },
        { category: 'Frontend Development', items: 'React, JavaScript, HTML5, CSS3, Tailwind CSS' },
        { category: 'Database Management', items: 'MySQL, PostgreSQL, MongoDB' },
        { category: 'Cloud & DevOps', items: 'Firebase, AWS, Git, Docker' },
        { category: 'UI/UX Design', items: 'Figma, Adobe XD, Material Design, Responsive Design' }
      ];
      
      doc.setFontSize(10);
      skills.forEach(skill => {
        doc.setFont('helvetica', 'bold');
        doc.text(`• ${skill.category}:`, 25, yPosition);
        doc.setFont('helvetica', 'normal');
        doc.text(skill.items, 70, yPosition);
        yPosition += 6;
      });
      
      yPosition += 8;
      
      // Professional Experience
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('PROFESSIONAL EXPERIENCE', 20, yPosition);
      yPosition += 8;
      
      // Experience 1
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Senior Flutter Developer | Freelancer', 20, yPosition);
      yPosition += 5;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text('2022 - Present', 20, yPosition);
      yPosition += 5;
      doc.setFont('helvetica', 'normal');
      const exp1 = `• Developed and maintained 10+ mobile applications using Flutter framework
• Led UI/UX redesign for Garuda Indonesia Airlines mobile application
• Built enterprise solutions for HP sales division with real-time monitoring
• Collaborated with cross-functional teams to deliver projects on time and within budget`;
      const exp1Lines = doc.splitTextToSize(exp1, pageWidth - 40);
      doc.text(exp1Lines, 20, yPosition);
      yPosition += exp1Lines.length * 4 + 8;
      
      // Experience 2
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Full Stack Developer | PT. Tech Solutions', 20, yPosition);
      yPosition += 5;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text('2021 - 2022', 20, yPosition);
      yPosition += 5;
      doc.setFont('helvetica', 'normal');
      const exp2 = `• Built comprehensive delivery service applications using Flutter and Laravel
• Implemented secure payment systems and real-time order tracking
• Optimized database queries resulting in 40% performance improvement
• Mentored junior developers and conducted code reviews`;
      const exp2Lines = doc.splitTextToSize(exp2, pageWidth - 40);
      doc.text(exp2Lines, 20, yPosition);
      yPosition += exp2Lines.length * 4 + 10;
      
      // Key Projects
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('KEY PROJECTS', 20, yPosition);
      yPosition += 8;
      
      const projects = [
        {
          title: 'Es Teh Solo Delivery App',
          tech: 'Flutter, Laravel, MySQL',
          desc: 'Complete delivery service app with order management and real-time tracking'
        },
        {
          title: 'FlyGaruda UI Revamp',
          tech: 'Flutter, Material Design',
          desc: 'Modern redesign of Garuda Indonesia Airlines mobile application'
        },
        {
          title: 'Sales Agent Monitoring System',
          tech: 'Flutter, Firebase, Laravel',
          desc: 'Enterprise solution for HP sales division to track field agent activities'
        }
      ];
      
      projects.forEach(project => {
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text(`• ${project.title}`, 20, yPosition);
        yPosition += 4;
        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        doc.text(`Technologies: ${project.tech}`, 25, yPosition);
        yPosition += 4;
        doc.setFont('helvetica', 'normal');
        doc.text(project.desc, 25, yPosition);
        yPosition += 8;
      });
      
      // Education & Certifications
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('EDUCATION & CERTIFICATIONS', 20, yPosition);
      yPosition += 8;
      
      doc.setFontSize(11);
      doc.text('• Bachelor of Computer Science | Universitas Sebelas Maret (2021)', 20, yPosition);
      yPosition += 5;
      doc.text('• Flutter Development Certification | Google Developers', 20, yPosition);
      yPosition += 5;
      doc.text('• Laravel Professional Certification | Laravel', 20, yPosition);
      yPosition += 5;
      doc.text('• AWS Cloud Practitioner Certification', 20, yPosition);
      
      // Footer
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text('Portfolio available at: https://github.com/febianur', 20, pageHeight - 15);
      
      doc.save('Febiana-Nur-Ramdani-Resume.pdf');
      
      toast({
        title: "Professional Resume Generated!",
        description: "Your impressive resume PDF has been downloaded successfully.",
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
      Download Resume
    </Button>
  );
};

export default PDFGenerator;
