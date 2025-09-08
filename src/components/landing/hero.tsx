import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center">
      {/* Background Layer */}
      <Image
        src="/images/SocialColab_01.webp"
        alt="Social collaboration background"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Content Layer */}
      <div className="container text-center text-white">
        <main className="text-5xl md:text-6xl font-bold font-headline">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
              Connect.
            </span>{' '}
            Collaborate.
          </h1>{' '}
          Create.
        </main>
        <p className="text-xl text-slate-300 md:w-10/12 mx-auto lg:mx-0 mt-6">
          CollabCentral is the revolutionary platform connecting brands with top-tier influencers. Discover, manage, and scale your campaigns with the power of AI.
        </p>
        <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3" size="lg">Get Started Free</Button>
          <Button variant="outline" className="w-full md:w-1/3" size="lg">
            <Link href="#features">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
