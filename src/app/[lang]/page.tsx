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
      <WhatWeAre content={dictionary.whatWeAre} />
      <Features content={dictionary.features} />
      <Showcase content={dictionary.showcase} />
      <Jobs content={dictionary.jobs} />
      <Pricing content={dictionary.pricing} />
      <Testimonials content={dictionary.testimonials} />
      <Cta content={dictionary.cta} />
    </>
  );
}
