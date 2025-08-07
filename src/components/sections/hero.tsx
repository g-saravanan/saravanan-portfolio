import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
              G. Saravanan
            </h1>
            <p className="text-lg font-medium text-primary">
              Expert in DevOps Automation & Cloud Engineering
            </p>
            <p className="text-xl text-muted-foreground">
              Transforming development pipelines with scalable infrastructure, internal developer platforms, and AI-driven solutions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto h-64 w-64 animate-fade-in-up md:h-96 md:w-96">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"></div>
            <Image
              src="https://placehold.co/400x400.png"
              alt="G. Saravanan"
              width={400}
              height={400}
              priority
              className="relative z-10 mx-auto rounded-full border-8 border-background shadow-2xl"
              data-ai-hint="professional portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
