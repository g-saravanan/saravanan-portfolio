'use client';

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const timelineData = [
  {
    role: 'Founder',
    company: 'CloudEngine Labs®',
    period: 'Jul 2023 - Present',
    description: 'Key Responsibilities: DevOps & Cloud Consulting, Infrastructure Automation, Platform Engineering setup, Technical Writing services.',
  },
  {
    role: 'Freelance Consultant & Writer',
    company: 'Self-Employed',
    period: 'Jun 2019 - Present',
    description: 'Key Responsibilities: Providing freelance services in DevOps, cloud architecture, and creating organic SEO-optimized technical content.',
  },
  {
    role: 'Principal Engineer & Architect',
    company: 'InfraCloud',
    period: 'Aug 2021 - May 2023',
    description: 'Key Responsibilities: Led DevOps initiatives specializing in Terraform, Ansible, Kubernetes, and multi-cloud environments (AWS, Azure, GCP).',
  },
  {
    role: 'DevOps Architect',
    company: 'Wipro Digital',
    period: 'Apr 2020 - Jul 2021',
    description: 'Key Responsibilities: DevOps evangelism, implementing IaC using Chef, Ansible & Terraform across multiple cloud platforms.',
  },
   {
    role: 'Tech Arch Delivery Associate Manager',
    company: 'Accenture',
    period: 'May 2015 - Mar 2019',
    description: 'Key Responsibilities: Cloud automation architect, specializing in Chef, AWS, Azure, Ruby and Shell scripting.',
  },
];

const ResumeSection = () => {
  const handleDownload = () => {
    // In a real app, this would trigger a PDF download.
    // For this prototype, we'll just log to the console.
    console.log('Downloading Resume...');
    alert('Resume download would be initiated here.');
  };

  return (
    <section id="resume" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience Timeline</h2>
          <p className="mt-4 text-lg text-muted-foreground">A summary of my professional journey.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-12 mb-8">
              <div className="absolute left-0 top-1.5 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L8.6 3.3a2 2 0 0 0-1.7-.9H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
              </div>
               <div className="p-4 rounded-lg">
                <p className="font-semibold text-lg">{item.role}</p>
                <p className="font-medium text-muted-foreground">{item.company} &middot; {item.period}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <Button size="lg" onClick={handleDownload} className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-5 w-5" />
                Download Resume (PDF)
            </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
