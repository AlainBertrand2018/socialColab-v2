import Link from 'next/link';
import { Shapes, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="col-span-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Shapes className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg font-headline">Social Colab</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting brands and influencers to create amazing content.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 col-span-4 md:col-span-3">
            <div>
              <h4 className="font-semibold mb-3 font-headline">Product</h4>
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="#features" className="text-muted-foreground hover:text-foreground">Features</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Pricing</Link>
                <Link href="#testimonials" className="text-muted-foreground hover:text-foreground">Testimonials</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-3 font-headline">Company</h4>
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-foreground">About Us</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-3 font-headline">Legal</h4>
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Social Colab. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter size={18} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Linkedin size={18} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Instagram size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
