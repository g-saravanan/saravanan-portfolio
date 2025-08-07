'use client';

import { useState, useRef, type RefObject } from 'react';
import { Briefcase, Download, Loader, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateResumeAction } from '@/app/actions';

const timelineData = [
  {
    role: 'Lead DevOps Engineer',
    company: 'Tech-Solutions Inc.',
    period: '2018 - Present',
    description: 'Architected and implemented a scalable CI/CD pipeline using Kubernetes, Jenkins, and ArgoCD, reducing deployment times by 70%. Led the migration of monolithic applications to a microservices architecture on AWS.',
  },
  {
    role: 'Senior Cloud Engineer',
    company: 'Cloudify Corp.',
    period: '2014 - 2018',
    description: 'Managed large-scale cloud infrastructure on GCP and Azure, focusing on cost optimization and security hardening. Automated infrastructure as code (IaC) using Terraform and Ansible.',
  },
  {
    role: 'DevOps Engineer',
    company: 'Innovate Startups',
    period: '2011 - 2014',
    description: 'Maintained and improved CI/CD pipelines for a suite of web applications. Gained foundational experience in cloud services and automation scripting.',
  },
];

async function downloadPdf(elementRef: RefObject<HTMLDivElement>, fileName: string) {
  const { default: jspdf } = await import('jspdf');
  const { default: html2canvas } = await import('html2canvas');
  const element = elementRef.current;
  if (!element) return;

  const canvas = await html2canvas(element, { scale: 2 });
  const data = canvas.toDataURL('image/png');

  const pdf = new jspdf('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const imgWidth = canvas.width;
  const imgHeight = canvas.height;
  const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
  const imgX = (pdfWidth - imgWidth * ratio) / 2;
  
  pdf.addImage(data, 'PNG', imgX, 10, imgWidth * ratio, imgHeight * ratio);
  pdf.save(fileName);
}


const ResumeSection = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [interests, setInterests] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tailoredResume, setTailoredResume] = useState('');
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!interests.trim()) {
      toast({ variant: 'destructive', title: 'Error', description: 'Please enter your interests.' });
      return;
    }
    setIsLoading(true);
    setTailoredResume('');
    const result = await generateResumeAction({ interests });
    setIsLoading(false);

    if (result.tailoredResume) {
      setTailoredResume(result.tailoredResume);
      toast({ title: 'Success', description: 'Resume tailored successfully!' });
    } else {
      toast({ variant: 'destructive', title: 'Error', description: result.error || 'Could not generate resume.' });
    }
  };
  
  const handleDownload = () => {
    if (!tailoredResume) {
      toast({ variant: 'destructive', title: 'Error', description: 'Please generate a resume first.' });
      return
    };
    downloadPdf(resumeRef, 'G-Saravanan-Resume.pdf');
  }

  return (
    <section id="resume" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Professional Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">An interactive timeline of my career and a downloadable, AI-tailored resume.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-12 flex items-center">
              <div className={`flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                <div className={`w-full ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <p className="font-semibold text-primary">{item.period}</p>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className="font-medium text-muted-foreground">{item.company}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="lg">
                <Download className="mr-2 h-5 w-5" />
                Tailor & Download Resume
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>Tailor Your Resume</DialogTitle>
                <DialogDescription>
                  Describe the role you're applying for or your key interests (e.g., "Senior DevOps role focusing on Kubernetes in FinTech") to get a personalized resume.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Textarea
                  placeholder="e.g., Senior DevOps role focusing on Kubernetes in FinTech"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  rows={3}
                />
                <Button onClick={handleGenerate} disabled={isLoading}>
                  {isLoading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                  Generate with AI
                </Button>
              </div>
              {tailoredResume && (
                <div className="mt-4 max-h-[300px] overflow-y-auto rounded-md border p-4">
                  <div ref={resumeRef} className="p-4 bg-white text-black font-sans text-sm">
                    <pre className="whitespace-pre-wrap font-sans">{tailoredResume}</pre>
                  </div>
                </div>
              )}
              <DialogFooter>
                <Button onClick={handleDownload} disabled={!tailoredResume}>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
