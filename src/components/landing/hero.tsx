
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero({ content }: { content: any }) {
  return (
    <section className="relative w-full h-screen">
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full bg-background -z-20">
        <Image
          src="/images/SocialColab_01.webp"
          alt="Social collaboration background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>

      {/* Content Layer */}
      <div className="container h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold font-headline">
            {content.title}
        </h1>

        <p className="mt-6 text-xl text-slate-300 md:w-10/12 mx-auto">
          {content.subtitle}
        </p>

        <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-auto" size="lg" asChild>
            <Link href="/onboarding" target="_blank" rel="noopener noreferrer">{content.cta.getStarted}</Link>
          </Button>
          <Button variant="outline" className="w-full md:w-auto bg-transparent border-white hover:bg-accent hover:text-accent-foreground hover:border-accent" size="lg" asChild>
            <Link href="#what-we-are">
              {content.cta.learnMore}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
