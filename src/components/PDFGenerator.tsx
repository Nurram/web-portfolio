
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
      const pageWidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;
      const margin = 20;
      const lineHeight = 5;
      let yPosition = margin;

      // Helper function to check if we need a new page
      const checkNewPage = (neededSpace = 20) => {
        if (yPosition + neededSpace > pageHeight - margin) {
          doc.addPage();
          yPosition = margin;
        }
      };

      // PAGE 1: HEADER & PROFESSIONAL SUMMARY
      // Header with name and title
      doc.setFontSize(28);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Febiana Nur Ramdani', margin, yPosition);
      yPosition += 12;

      doc.setFontSize(16);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 100, 200);
      doc.text('Software Engineer | Mobile App Developer', margin, yPosition);
      yPosition += 8;

      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      doc.text('Phone: (+62) 82387087503 | Email: febiana.nur.ramdani@gmail.com', margin, yPosition);
      doc.text('Portfolio: https://play.google.com/store/apps/developer?id=Nurramware', margin, yPosition + 4);
      yPosition += 15;

      // Professional Summary
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('PROFESSIONAL SUMMARY', margin, yPosition);
      yPosition += 10;

      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      const aboutText = `I'm a Software Engineer with 4+ years of professional experience, specializing in mobile application development using Flutter. My expertise extends to native mobile development with Kotlin and Java, as well as backend and web development using PHP Laravel.

Currently working at PT. Aero Systems Indonesia, I've honed my skills in developing robust, scalable, and visually appealing applications across multiple platforms. My experience encompasses both SQL and NoSQL database systems, allowing me to create comprehensive solutions from frontend to backend.

I'm passionate about creating intuitive user experiences and solving complex problems through elegant code. My approach combines technical expertise with a keen eye for design, resulting in applications that are both functional and delightful to use.`;

      const aboutLines = doc.splitTextToSize(aboutText, pageWidth - 2 * margin);
      doc.text(aboutLines, margin, yPosition);
      yPosition += aboutLines.length * 4 + 15;

      // Core Competencies
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('CORE COMPETENCIES', margin, yPosition);
      yPosition += 10;

      const competencies = [
        '• 4+ Years Professional Experience in Software Development',
        '• Expert in Flutter & Mobile App Development',
        '• Full Stack Development (Frontend & Backend)',
        '• Native Android Development (Kotlin/Java)',
        '• Backend Development with PHP Laravel',
        '• Database Design & Management (SQL & NoSQL)',
        '• UI/UX Design & User Experience Optimization',
        '• Cross-platform Development Solutions',
        '• Agile/Scrum Development Methodologies',
        '• Problem Solving & Technical Leadership'
      ];

      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      competencies.forEach(comp => {
        checkNewPage(8);
        doc.text(comp, margin, yPosition);
        yPosition += lineHeight + 1;
      });

      // PAGE 2: TECHNICAL SKILLS
      checkNewPage(50);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('TECHNICAL SKILLS & EXPERTISE', margin, yPosition);
      yPosition += 12;

      // Skills from website data
      const skillCategories = [
        {
          category: 'Mobile Development',
          skills: ['Flutter (95%)', 'Jetpack Compose', 'Kotlin (85%)', 'Java', 'Android SDK', 'iOS Development'],
          proficiency: 'Expert Level'
        },
        {
          category: 'Web Development', 
          skills: ['PHP/Laravel (80%)', 'HTML/CSS/JavaScript (75%)', 'RESTful APIs', 'Backend Development'],
          proficiency: 'Advanced Level'
        },
        {
          category: 'Database Technologies',
          skills: ['SQL Databases (85%)', 'MySQL', 'NoSQL/Firebase (90%)', 'MongoDB', 'Database Design'],
          proficiency: 'Advanced Level'
        },
        {
          category: 'Tools & Technologies',
          skills: ['Git Version Control', 'Firebase', 'Agile/Scrum', 'UI/UX Design', 'Android Studio'],
          proficiency: 'Proficient'
        }
      ];

      skillCategories.forEach(category => {
        checkNewPage(25);
        
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 100, 200);
        doc.text(`${category.category} - ${category.proficiency}`, margin, yPosition);
        yPosition += 7;

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);
        
        category.skills.forEach(skill => {
          doc.text(`• ${skill}`, margin + 5, yPosition);
          yPosition += 4;
        });
        yPosition += 5;
      });

      // PAGE 3: WORK EXPERIENCE
      checkNewPage(50);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('PROFESSIONAL EXPERIENCE', margin, yPosition);
      yPosition += 12;

      // Current Position
      doc.setFontSize(13);
      doc.setFont('helvetica', 'bold');
      doc.text('Software Engineer | PT. Aero Systems Indonesia', margin, yPosition);
      yPosition += 6;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(0, 100, 200);
      doc.text('2021 - Present', margin, yPosition);
      yPosition += 8;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);
      const currentJobDesc = [
        '• Lead mobile application development using Flutter framework',
        '• Develop native Android applications using Kotlin and Java',
        '• Design and implement backend solutions with PHP Laravel',
        '• Manage database architecture for both SQL and NoSQL systems',
        '• Collaborate with cross-functional teams in Agile environment',
        '• Mentor junior developers and conduct code reviews',
        '• Optimize application performance and user experience'
      ];

      currentJobDesc.forEach(desc => {
        checkNewPage(6);
        doc.text(desc, margin, yPosition);
        yPosition += lineHeight;
      });
      yPosition += 10;

      // Previous Experience
      checkNewPage(30);
      doc.setFontSize(13);
      doc.setFont('helvetica', 'bold');
      doc.text('Mobile App Developer | Freelancer', margin, yPosition);
      yPosition += 6;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(0, 100, 200);
      doc.text('2020 - 2021', margin, yPosition);
      yPosition += 8;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);
      const freelanceDesc = [
        '• Developed custom mobile applications for various clients',
        '• Created delivery service applications with real-time tracking',
        '• Built enterprise solutions for sales monitoring systems', 
        '• Implemented secure payment integration systems',
        '• Delivered projects on time with high client satisfaction'
      ];

      freelanceDesc.forEach(desc => {
        checkNewPage(6);
        doc.text(desc, margin, yPosition);
        yPosition += lineHeight;
      });

      // PAGE 4: PROJECTS & ACHIEVEMENTS
      checkNewPage(50);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('KEY PROJECTS & ACHIEVEMENTS', margin, yPosition);
      yPosition += 12;

      const projects = [
        {
          title: 'Play Store Published Apps',
          tech: 'Flutter, Firebase, Laravel',
          description: 'Multiple mobile applications published on Google Play Store under "Nurramware" developer account. These apps showcase various functionalities and demonstrate proficiency in mobile development.',
          achievements: ['Published on Google Play Store', 'User-friendly interface design', 'Positive user feedback']
        },
        {
          title: 'Enterprise Delivery Management System',
          tech: 'Flutter, Laravel, MySQL, Real-time APIs',
          description: 'Comprehensive delivery service application with order management, real-time tracking, and payment integration.',
          achievements: ['Real-time order tracking', 'Secure payment gateway', 'Admin dashboard integration']
        },
        {
          title: 'Sales Agent Monitoring Application',
          tech: 'Flutter, Firebase, Geolocation APIs',
          description: 'Enterprise solution for monitoring field sales agent activities with GPS tracking and performance analytics.',
          achievements: ['Real-time location tracking', 'Performance analytics', 'Client satisfaction improvement']
        }
      ];

      projects.forEach((project, index) => {
        checkNewPage(35);
        
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.text(`${index + 1}. ${project.title}`, margin, yPosition);
        yPosition += 6;

        doc.setFontSize(10);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(0, 100, 200);
        doc.text(`Technologies: ${project.tech}`, margin, yPosition);
        yPosition += 6;

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);
        const descLines = doc.splitTextToSize(project.description, pageWidth - 2 * margin);
        doc.text(descLines, margin, yPosition);
        yPosition += descLines.length * 4 + 4;

        doc.setFont('helvetica', 'bold');
        doc.text('Key Achievements:', margin, yPosition);
        yPosition += 4;
        
        doc.setFont('helvetica', 'normal');
        project.achievements.forEach(achievement => {
          doc.text(`• ${achievement}`, margin + 5, yPosition);
          yPosition += 4;
        });
        yPosition += 8;
      });

      // PAGE 5: EDUCATION & CERTIFICATIONS
      checkNewPage(50);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('EDUCATION & CERTIFICATIONS', margin, yPosition);
      yPosition += 12;

      // Education Section
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 100, 200);
      doc.text('EDUCATION', margin, yPosition);
      yPosition += 8;

      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Bachelor of Informatics', margin, yPosition);
      yPosition += 5;

      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.text('Universitas Muhammadiyah Surakarta', margin, yPosition);
      yPosition += 4;
      
      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      doc.text('2015 - 2019', margin, yPosition);
      yPosition += 6;

      doc.setTextColor(0, 0, 0);
      const educationDesc = `Completed a bachelor's degree in Informatics with a focus on software development and computer science principles. The coursework included programming fundamentals, data structures, algorithms, database systems, and software engineering practices.`;
      const educationLines = doc.splitTextToSize(educationDesc, pageWidth - 2 * margin);
      doc.text(educationLines, margin, yPosition);
      yPosition += educationLines.length * 4 + 12;

      // Certifications Section
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 100, 200);
      doc.text('PROFESSIONAL CERTIFICATIONS', margin, yPosition);
      yPosition += 10;

      const certificates = [
        {
          title: 'Android Jetpack Compose: The Comprehensive Bootcamp',
          issuer: 'Udemy',
          date: '2023',
          link: 'https://www.udemy.com/certificate/UC-2c88588c-fbc9-41f7-9d98-92d367e03d7d/'
        },
        {
          title: 'Flutter & Dart - The Complete Guide',
          issuer: 'Udemy', 
          date: '2022',
          link: 'https://www.udemy.com/certificate/UC-e6bc0fa6-eec8-4553-8bf1-72f08e6ea98c/'
        },
        {
          title: 'Belajar Dasar Manajemen Proyek',
          issuer: 'Dicoding Indonesia',
          date: '2021',
          link: 'https://www.dicoding.com/certificates/81P28JJ1OPOY'
        }
      ];

      certificates.forEach((cert, index) => {
        checkNewPage(20);
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.text(`${index + 1}. ${cert.title}`, margin, yPosition);
        yPosition += 5;

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 100, 200);
        doc.text(`Issued by: ${cert.issuer} (${cert.date})`, margin + 5, yPosition);
        yPosition += 4;

        doc.setTextColor(80, 80, 80);
        doc.text(`Certificate URL: ${cert.link}`, margin + 5, yPosition);
        yPosition += 8;
      });

      // FINAL PAGE: ADDITIONAL INFORMATION
      yPosition += 10;
      checkNewPage(30);
      
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 100, 200);
      doc.text('ADDITIONAL INFORMATION', margin, yPosition);
      yPosition += 10;

      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);

      const additionalInfo = [
        '• Available for full-time positions and freelance projects',
        '• Strong communication skills in Indonesian and English',
        '• Experience working in Agile/Scrum environments',
        '• Passionate about continuous learning and technology innovation',
        '• Active contributor to open-source projects',
        '• Available for remote work and on-site collaboration'
      ];

      additionalInfo.forEach(info => {
        doc.text(info, margin, yPosition);
        yPosition += lineHeight;
      });

      // Footer on last page
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text('Portfolio: https://play.google.com/store/apps/developer?id=Nurramware', margin, pageHeight - 15);
      doc.text('Generated on: ' + new Date().toLocaleDateString(), margin, pageHeight - 10);

      doc.save('Febiana-Nur-Ramdani-Complete-Resume.pdf');
      
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
