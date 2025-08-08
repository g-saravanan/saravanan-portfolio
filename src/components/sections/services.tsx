import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, CloudCog, CodeXml, Pencil, Users, Briefcase, Phone, BookOpen, Laptop, Milestone, Wrench, AppWindow, Bot, CloudUpload, Orbit } from 'lucide-react';

const services = [
  {
    title: 'IT Consulting',
    description: 'Strategic guidance to align technology with your business goals.',
    icon: <Users className="h-10 w-10 text-accent" />,
  },
  {
    title: 'Cloud Application Development',
    description: 'Building scalable, resilient applications on AWS, Azure, and GCP.',
    icon: <CloudCog className="h-10 w-10 text-accent" />,
  },
  {
    title: 'Custom Software Development',
    description: 'Bespoke software solutions tailored to your specific business needs.',
    icon: <CodeXml className="h-10 w-10 text-accent" />,
  },
  {
    title: 'Mobile Application Development',
    description: 'Creating engaging and high-performance mobile apps.',
    icon: <AppWindow className="h-10 w-10 text-accent" />,
  },
  {
    title: 'Technical Writing & Blogging',
    description: 'Crafting clear, engaging, and SEO-optimized technical content.',
    icon: <Pencil className="h-10 w-10 text-accent" />,
  },
  {
    title: 'Career Development & Training',
    description: 'Mentoring and training teams to build skills in modern technologies.',
    icon: <Briefcase className="h-10 w-10 text-accent" />,
  },
  {
    title: 'AI Automation',
    description: 'Leveraging AI to automate and optimize your business processes.',
    icon: <Bot className="h-10 w-10 text-accent" />,
  },
  {
    title: 'GenAI Deployment',
    description: 'Deploying generative AI solutions to drive innovation and efficiency.',
    icon: <CloudUpload className="h-10 w-10 text-accent" />,
  },
  {
    title: 'MLOps Pipeline Deployment',
    description: 'Building and managing robust MLOps pipelines for production.',
    icon: <Orbit className="h-10 w-10 text-accent" />,
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
            <Card key={index} className="text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-card">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                  {service.icon}
                </div>
                <CardTitle className="text-card-foreground">{service.title}</CardTitle>
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
