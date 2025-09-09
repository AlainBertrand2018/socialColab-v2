import { Hero } from '@/components/landing/hero';
import { WhatWeAre } from '@/components/landing/what-we-are';
import { Features } from '@/components/landing/features';
import { Showcase } from '@/components/landing/showcase';
import { Jobs } from '@/components/landing/jobs';
import { Pricing } from '@/components/landing/pricing';
import { Testimonials } from '@/components/landing/testimonials';
import { Cta } from '@/components/landing/cta';
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/i18n.config';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero content={dictionary.hero} />
      <WhatWeAre />
      <Features />
      <Showcase />
      <Jobs />
      <Pricing />
      <Testimonials />
      <Cta />
    </>
  );
}
