import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function WhatWeAre() {
  return (
    <section id="what-we-are" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What We Are</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Social Colab is your direct path to powerful, authentic collaborations. We're a zero-commission platform built to help local and regional brands connect with a vetted community of creators.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Unlike traditional platforms, we do not take a cut of your deals. Our mission is to empower you to build genuine partnerships, allowing your entire budget to go directly toward sparking impactful campaigns and measurable results. It's time to co-create, launch, and grow—without the middleman.
          </p>
          <Button size="lg" className="mt-8">Give Us Your Feedback</Button>
        </div>
        <Image
          src="/images/zero_comm_platform.webp"
          width={600}
          height={600}
          className="rounded-lg shadow-xl aspect-square object-cover"
          alt="Two people collaborating over a table with laptops"
        />
      </div>
    </section>
  );
}
