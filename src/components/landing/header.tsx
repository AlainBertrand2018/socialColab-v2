
"use client";

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

const navLinks = [
  { name: 'Features', href: '/#features' },
  { name: 'Campaigns', href: '/#jobs' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Testimonials', href: '/#testimonials' },
];

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/images/socialColab_blu_1024.webp" alt="Social Colab Logo" width={24} height={24} className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block font-headline text-primary">Social Colab</span>
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
            <Button variant="ghost" asChild>
                <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
                <Link href="/onboarding">Get Started</Link>
            </Button>
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
                  <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setOpen(false)}>
                    <Image src="/images/socialColab_blu_1024.webp" alt="Social Colab Logo" width={24} height={24} className="h-6 w-6" />
                    <span className="font-bold font-headline text-primary">Social Colab</span>
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
                  <Button variant="ghost" asChild>
                     <Link href="/login">Log In</Link>
                  </Button>
                   <Button asChild onClick={() => setOpen(false)}>
                     <Link href="/onboarding">Get Started</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
