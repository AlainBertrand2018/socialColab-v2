import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold font-headline">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
              Connect.
            </span>{' '}
            Collaborate.
          </h1>{' '}
          Create.
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          CollabCentral is the revolutionary platform connecting brands with top-tier influencers. Discover, manage, and scale your campaigns with the power of AI.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started Free</Button>
          <Button variant="outline" className="w-full md:w-1/3">
            <Link href="#features">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
      <div className="z-10">
        <Image
          src="https://picsum.photos/1200/800"
          width={1200}
          height={800}
          className="rounded-lg shadow-2xl"
          data-ai-hint="dashboard analytics"
          alt="Product dashboard screenshot"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
