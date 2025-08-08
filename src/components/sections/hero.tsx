import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Code, ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/saravanan-gnanaguru/' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/chefgs' },
  { name: 'Dev.to', icon: ExternalLink, url: 'https://dev.to/chefgs' },
  { name: 'Stack Overflow', icon: Code, url: 'https://stackoverflow.com/users/843986/saravanan-gnanaguru' },
  { name: 'Email', icon: Mail, url: 'mailto:saravanan@cloudenginelabs.io' },
];

const socialProof = [
  "AWS Community Builder",
  "HashiCorp Ambassador",
  "Speaker",
  "Tech Blogger"
];

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-background">
       <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5" style={{ maskImage: 'linear-gradient(to_bottom, transparent, black, black, transparent)'}}></div>
      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 md:px-6 py-20 text-center md:text-left">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Architecting the Future of Cloud &amp; AI
            </h1>
            <p className="text-lg font-medium text-primary">
              Saravanan Gnanaguru: Founder, DevOps & Cloud Practitioner
            </p>
            <div className="flex justify-center md:justify-start flex-wrap gap-2">
              {socialProof.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="#projects">
                  See My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Book a Call</Link>
              </Button>
            </div>
             <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-muted-foreground hover:text-primary transition-colors">
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="relative mx-auto h-72 w-72 md:h-96 md:w-96">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
            <Card className="rounded-full">
              <Image
                src="/saravanan-gnanaguru.jpg"
                alt="Saravanan Gnanaguru"
                width={400}
                height={400}
                loading="lazy"
                className="relative z-10 mx-auto rounded-full border-4 border-card"
                data-ai-hint="professional portrait man"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
