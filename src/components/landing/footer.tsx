
import Link from 'next/link';
import { Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';

export function Footer({ content }: { content: any }) {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="col-span-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
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
                {content.product.links.map((link: any) => (
                    <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground">{link.name}</Link>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-3 font-headline">{content.company.title}</h4>
              <nav className="flex flex-col gap-2 text-sm">
                {content.company.links.map((link: any) => (
                    <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground">{link.name}</Link>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-3 font-headline">{content.legal.title}</h4>
              <nav className="flex flex-col gap-2 text-sm">
                {content.legal.links.map((link: any) => (
                    <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground">{link.name}</Link>
                ))}
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
