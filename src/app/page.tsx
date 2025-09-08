import { Hero } from '@/components/landing/hero';
import { WhatWeAre } from '@/components/landing/what-we-are';
import { Features } from '@/components/landing/features';
import { Showcase } from '@/components/landing/showcase';
import { Testimonials } from '@/components/landing/testimonials';
import { Cta } from '@/components/landing/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeAre />
      <Features />
      <Showcase />
      <Testimonials />
      <Cta />
    </>
  );
}
