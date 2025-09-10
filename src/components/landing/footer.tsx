
import Link from 'next/link';
import { Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { Locale } from '@/i18n.config';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FeedbackForm } from './feedback-form';

export function Footer({ content, lang }: { content: any, lang: Locale }) {

  const renderLink = (link: any, index: number) => {
    if (link.name === 'Contact') {
      return (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <button className="text-muted-foreground hover:text-foreground text-left">{link.name}</button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
              <DialogDescription>
                We'd love to hear from you. Fill out the form below.
              </DialogDescription>
            </DialogHeader>
            <FeedbackForm />
          </DialogContent>
        </Dialog>
      );
    }
    
    const href = link.href.startsWith('#') || link.href === '/'
      ? `/${lang}${link.href}`
      : link.href.startsWith('/') 
        ? `/${lang}${link.href}`
        : link.href;


    return (
      <Link key={index} href={href} className="text-muted-foreground hover:text-foreground">
        {link.name}
      </Link>
    );
  };


  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="col-span-4 md:col-span-1">
            <Link href={`/${lang}`} className="flex items-center space-x-2 mb-4">
              <Image src="/images/socialColab_blu_1024.webp" alt="Social Colab Logo" width={24} height={24} className="h-6 w-6" />
              <span className="font-bold text-lg font-headline text-primary">Social Colab</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {content.tagline}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 col-span-4 md:col-span-3">
            <div>
              <h4 className="font-semibold mb-3 font-headline">{content.product.title}</h4>
              <nav className="flex flex-col gap-2 text-sm">
                {content.product.links.map(renderLink)}
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-3 font-headline">{content.company.title}</h4>
              <nav className="flex flex-col gap-2 text-sm">
                {content.company.links.map(renderLink)}
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-3 font-headline">{content.legal.title}</h4>
              <nav className="flex flex-col gap-2 text-sm">
                {content.legal.links.map(renderLink)}
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Alain BERTRAND. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://twitter.com/AlainBertrandmu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Twitter size={18} /></Link>
            <Link href="https://www.linkedin.com/in/alainbertrand/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Linkedin size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
