import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, CloudCog, CodeXml, BrainCircuit, Pencil, Users } from 'lucide-react';

const services = [
  {
    title: 'IT Consulting',
    description: 'Strategic guidance to align technology with your business goals, from architecture to execution.',
    icon: <Users className="h-10 w-10 text-accent" />,
  },
  {
    title: 'DevOps & Cloud Automation',
    description: 'Expert implementation of CI/CD, IaC, and SRE practices to accelerate your software delivery lifecycle.',
    icon: <Cpu className="h-10 w-10 text-accent" />,
  },
  {
    title: 'Cloud Application Development',
    description: 'Building scalable, resilient applications on AWS, Azure, and GCP, leveraging Kubernetes and modern architectures.',
    icon: <CloudCog className="h-10 w-10 text-accent" />,
  },
  {
    title: 'Platform Engineering',
    description: 'Creating Internal Developer Platforms (IDPs) that improve developer experience and streamline workflows.',
    icon: <CodeXml className="h-10 w-10 text-accent" />,
  },
  {
    title: 'Technical Writing & Blogging',
    description: 'Crafting clear, engaging, and SEO-optimized technical content that resonates with developers.',
    icon: <Pencil className="h-10 w-10 text-accent" />,
  },
  {
    title: 'Career Development & Training',
    description: 'Mentoring and training teams to build skills in cloud-native technologies and DevOps practices.',
    icon: <BrainCircuit className="h-10 w-10 text-accent" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What I Do</h2>
          <p className="mt-4 text-lg text-muted-foreground">Providing expert services to help your business thrive.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
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
