import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, CloudCog, CodeXml, BrainCircuit } from 'lucide-react';

const services = [
  {
    title: 'DevOps Automation',
    description: 'Building and optimizing CI/CD pipelines to accelerate development cycles and improve software quality.',
    icon: <Cpu className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Cloud Platform Consulting',
    description: 'Architecting and managing scalable, resilient, and cost-effective infrastructure on AWS, GCP, and Azure.',
    icon: <CloudCog className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Internal Developer Platform',
    description: 'Creating centralized, self-service platforms that empower developers and standardize best practices.',
    icon: <CodeXml className="h-10 w-10 text-primary" />,
  },
  {
    title: 'AI/ML DevOps (MLOps)',
    description: 'Implementing robust MLOps practices to streamline the machine learning lifecycle from experimentation to production.',
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Core Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">How I can help you achieve your technology goals.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  {service.icon}
                </div>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
