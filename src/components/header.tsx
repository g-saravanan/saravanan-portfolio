'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-auto flex items-center gap-2 font-bold text-lg">
          <Code2 className="h-6 w-6 text-accent" />
          <span className="hidden sm:inline-block">Saravanan Gnanaguru</span>
          <span className="inline-block sm:hidden">Saravanan G.</span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 ml-4">
           <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setMobileMenuOpen(false)}>
                    <Code2 className="h-6 w-6 text-accent" />
                    <span>Saravanan G.</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
