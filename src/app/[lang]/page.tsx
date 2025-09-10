
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

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero content={dictionary.hero} lang={lang} />
      <WhatWeAre content={dictionary.whatWeAre} />
      <Features content={dictionary.features} lang={lang} />
      <Showcase content={dictionary.showcase} />
      <Jobs content={dictionary.jobs} />
      <Pricing content={dictionary.pricing} lang={lang} />
      <Testimonials content={dictionary.testimonials} />
      <Cta content={dictionary.cta} lang={lang} />
    </>
  );
}
