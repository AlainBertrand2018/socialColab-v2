
import { Button } from '@/components/ui/button';
import { Locale } from '@/i18n.config';
import Link from 'next/link';

export function Cta({ content, lang }: { content: any, lang: Locale }) {
  return (
    <section id="cta" className="relative py-24 sm:py-32 bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-secondary"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="container text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">
          {content.title}
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          {content.subtitle}
        </p>
        <Button size="lg" className="mt-8" asChild>
            <Link href={`/${lang}/onboarding`}>{content.buttonText}</Link>
        </Button>
      </div>
    </section>
  );
}
