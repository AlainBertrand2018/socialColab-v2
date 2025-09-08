import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
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
      <div className="container h-full flex items-center justify-center">
        <div className="text-center space-y-6">
          <main className="text-5xl md:text-6xl font-bold font-headline text-white">
            <h1 className="inline">
              <span className="text-white">
                Connect.
              </span>{' '}
              Collaborate.
            </h1>{' '}
            Create.
          </main>

          <p className="text-xl text-slate-300 md:w-10/12 mx-auto">
            CollabCentral is the revolutionary platform connecting brands with top-tier influencers. Discover, manage, and scale your campaigns with the power of AI.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-full md:w-auto" size="lg" asChild>
              <Link href="/onboarding">Get Started Free</Link>
            </Button>
            <Button variant="outline" className="w-full md:w-auto" size="lg" asChild>
              <Link href="#features">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
