import { Github, Linkedin, Mail, Code, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/saravanan-gnanaguru/' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/chefgs' },
  { name: 'Dev.to', icon: ExternalLink, url: 'https://dev.to/chefgs' },
  { name: 'Stack Overflow', icon: Code, url: 'https://stackoverflow.com/users/843986/saravanan-gnanaguru' },
  { name: 'Email', icon: Mail, url: 'mailto:saravanan@cloudenginelabs.io' },
];

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <div className="text-center sm:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Saravanan Gnanaguru. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
