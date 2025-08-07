import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Cloud-Native Migration for E-commerce Giant',
    description: 'Led the strategic migration of a monolithic e-commerce platform to a fully cloud-native microservices architecture on AWS using Kubernetes, resulting in a 300% improvement in scalability and 99.99% uptime.',
    imageUrl: 'https://placehold.co/600x400.png',
    tech: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'ArgoCD'],
    link: '#',
    aiHint: 'cloud infrastructure'
  },
  {
    title: 'CI/CD Pipeline Optimization for FinTech Firm',
    description: 'Revamped a legacy CI/CD process, reducing build and deployment times from 45 minutes to under 10 minutes. Implemented automated security scanning and quality gates, decreasing critical vulnerabilities in production by 95%.',
    imageUrl: 'https://placehold.co/600x400.png',
    tech: ['Jenkins', 'GitLab CI', 'Python', 'SonarQube', 'Ansible'],
    link: '#',
    aiHint: 'server room'
  },
  {
    title: 'Internal Developer Platform for a SaaS Company',
    description: 'Designed and built an IDP from the ground up, providing developers with self-service capabilities for environment provisioning, deployment, and monitoring. This increased developer velocity by 50% and standardized best practices across all teams.',
    imageUrl: 'https://placehold.co/600x400.png',
    tech: ['GCP', 'Backstage.io', 'Kubernetes', 'Go', 'Prometheus'],
    link: '#',
    aiHint: 'developer platform'
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Impactful Projects</h2>
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
