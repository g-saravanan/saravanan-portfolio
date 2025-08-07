import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium">G. Saravanan</p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:saravanan@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
