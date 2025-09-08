"use client";

import * as React from 'react';
import Link from 'next/link';
import { Menu, Shapes } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Showcase', href: '#showcase' },
  { name: 'Testimonials', href: '#testimonials' },
];

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Shapes className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">CollabCentral</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="font-medium text-foreground/60 transition-colors hover:text-foreground/80">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden md:flex md:items-center md:gap-4">
            <Button variant="ghost">Log In</Button>
            <Button>Sign Up</Button>
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Shapes className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">CollabCentral</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-6 text-lg font-medium">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="text-foreground/60 transition-colors hover:text-foreground/80">
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                  <Button variant="ghost">Log In</Button>
                  <Button>Sign Up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
