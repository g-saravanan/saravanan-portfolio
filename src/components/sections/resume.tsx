'use client';

import { Download, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const timelineData = [
  {
    role: 'Founder',
    company: 'CloudEngine Labs®',
    period: 'Jul 2023 - Present',
    description: 'Helping product startups with Cloud Technology Solutions, DevOps adoption, Infrastructure Automation, Platform Engineering, Technical Writing, and team development.',
  },
  {
    role: 'Self Employed',
    company: 'Freelance',
    period: 'Jun 2023 - Present',
    description: 'Providing services in Cloud Technology Consulting, DevOps, Infrastructure Automation, Platform Engineering, and Technical Writing.',
  },
  {
    role: 'Technical Content Writer',
    company: 'Freelance',
    period: 'Jun 2019 - Present',
    description: 'Contributing SEO-optimized technology blogs for product companies, focusing on how-to articles, practical use cases, and best practices for Cloud, DevOps, and SRE tools.',
  },
  {
    role: 'DevOps Architect (Microsoft Fabric)',
    company: 'Freelance',
    period: 'Sep 2024 - Present',
    description: 'Skills: Microsoft Azure, Power BI, Azure DevOps Services, Azure Resource Manager, Powershell.',
  },
  {
    role: 'Principal Engineer (DevOps)',
    company: 'InfraCloud Technologies',
    period: 'Aug 2022 - May 2023',
    description: 'Terraform | Ansible | Chef | AWS | Azure | GCP | Kubernetes | Docker | Go | Shell Scripting | API development | DevOps Consulting.',
  },
  {
    role: 'Architect',
    company: 'InfraCloud Technologies',
    period: 'Aug 2021 - Jul 2022',
    description: 'Chef | Terraform | Ansible | AWS | Azure | GCP | Kubernetes | Docker | Go | Shell Scripting | API development | DevOps Consulting.',
  },
  {
    role: 'DevOps Architect',
    company: 'Wipro Digital',
    period: 'Apr 2020 - Jul 2021',
    description: 'DevOps evangelist, implementing IaC using Chef, Ansible & Terraform across multiple cloud platforms (AWS, GCP, Azure).',
  },
   {
    role: 'Tech Arch Delivery Associate Manager',
    company: 'Accenture',
    period: 'May 2015 - Mar 2019',
    description: 'Cloud automation architect, specializing in Chef, AWS, Azure, Ruby and Shell scripting. C++ design and development and Team Mentor.',
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
                <Briefcase className="h-4 w-4" />
              </div>
               <div className="p-4 rounded-lg">
                <p className="font-semibold text-lg text-foreground">{item.role}</p>
                <p className="font-medium text-muted-foreground">{item.company} &middot; {item.period}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <Button size="lg" onClick={handleDownload} className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="mr-2 h-5 w-5" />
                Download Resume (PDF)
            </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
