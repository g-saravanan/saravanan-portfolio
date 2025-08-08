import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Founder at CloudEngine Labs®',
    description: 'Helping product startups with Cloud Technology Solutions, DevOps adoption, Infrastructure Automation, Platform Engineering, and Technical Writing. Visit cloudenginelabs.io for more details.',
    imageUrl: 'https://placehold.co/600x400.png',
    tech: ['Cloud Consulting', 'DevOps', 'IaC', 'Platform Engineering', 'Technical Writing'],
    link: 'https://cloudenginelabs.io',
    aiHint: 'startup office'
  },
  {
    title: 'Freelance DevOps Architect & Content Writer',
    description: 'Providing freelance services in DevOps architecture for Microsoft Fabric and creating organic SEO-optimized technical content for product companies, focusing on cloud, DevOps, and SRE.',
    imageUrl: 'https://placehold.co/600x400.png',
    tech: ['Microsoft Azure', 'Power BI', 'Azure DevOps', 'Technical Writing', 'SEO'],
    link: 'https://dev.to/chefgs',
    aiHint: 'writing code'
  },
  {
    title: 'Principal Engineer & Architect at InfraCloud',
    description: 'Led DevOps initiatives as Principal Engineer and Architect, specializing in Terraform, Ansible, Chef, Kubernetes, and multi-cloud environments (AWS, Azure, GCP).',
    imageUrl: 'https://placehold.co/600x400.png',
    tech: ['Terraform', 'Ansible', 'Kubernetes', 'AWS', 'GCP', 'Azure'],
    link: '#',
    aiHint: 'cloud infrastructure'
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Impactful Projects & Ventures</h2>
          <p className="mt-4 text-lg text-muted-foreground">A selection of my work demonstrating real-world solutions and results.</p>
        </div>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.aiHint}
                    />
                  </div>
                  <div className="flex flex-col p-6">
                    <CardHeader>
                      <CardTitle className="text-2xl font-headline group-hover:text-primary transition-colors">
                        {project.title}
                        <ArrowUpRight className="inline-block h-5 w-5 ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
