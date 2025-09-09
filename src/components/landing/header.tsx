
"use client";

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { i18n, type Locale } from '@/i18n.config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Campaigns', href: '#jobs' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
];

function LanguageSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const currentLocale = pathName.split('/')[1] as Locale;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="text-sm font-bold">{currentLocale.toUpperCase()}</span>
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map(locale => (
          <DropdownMenuItem key={locale} asChild>
            <Link href={redirectedPathName(locale)}>{locale.toUpperCase()}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


export function Header({ navigation, auth }: { navigation: any, auth: any }) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/images/socialColab_blu_1024.webp" alt="Social Colab Logo" width={24} height={24} className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block font-headline text-primary">Social Colab</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm">
          {navigation.navLinks.map((link: any) => (
            <Link key={link.name} href={link.href} className="font-medium text-foreground/60 transition-colors hover:text-foreground/80">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden md:flex md:items-center md:gap-4">
            <LanguageSwitcher />
            <Button variant="ghost" asChild>
                <Link href="/login">{auth.login}</Link>
            </Button>
            <Button asChild>
                <Link href="/onboarding">{auth.getStarted}</Link>
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
                  {navigation.navLinks.map((link: any) => (
                    <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="text-foreground/60 transition-colors hover:text-foreground/80">
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                  <LanguageSwitcher />
                  <Button variant="ghost" asChild>
                     <Link href="/login">{auth.login}</Link>
                  </Button>
                   <Button asChild onClick={() => setOpen(false)}>
                     <Link href="/onboarding">{auth.getStarted}</Link>
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
