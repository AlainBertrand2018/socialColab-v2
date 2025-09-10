
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { Locale } from '@/i18n.config';

const BenefitCard = ({ image, dataAiHint, title, description, alt }: { image: string; dataAiHint: string; title: string; description: string; alt: string }) => (
  <Card className="bg-card/60 backdrop-blur-sm transition-transform hover:-translate-y-2 overflow-hidden">
    <Image
      src={image}
      width={400}
      height={250}
      data-ai-hint={dataAiHint}
      alt={alt}
      className="w-full h-auto aspect-[16/10] object-cover"
    />
    <div className="p-6">
      <CardTitle className="font-headline mb-2">{title}</CardTitle>
      <CardContent className="p-0">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </div>
  </Card>
);


export function Features({ content, lang }: { content: any, lang: Locale }) {

    const brandBenefits = [
        {
          image: '/images/brandreach.webp',
          dataAiHint: 'network connection',
          alt: 'Illustration of network connections',
          title: content.benefits.brands[0].title,
          description: content.benefits.brands[0].description,
        },
        {
          image: '/images/socialColab_from_Start.webp',
          dataAiHint: 'team collaboration',
          alt: 'Illustration of team collaboration',
          title: content.benefits.brands[1].title,
          description: content.benefits.brands[1].description,
        },
        {
          image: '/images/SocialColab_analytics.webp',
          dataAiHint: 'data analytics',
          alt: 'Dashboard showing analytics',
          title: content.benefits.brands[2].title,
          description: content.benefits.brands[2].description,
        },
      ];
      
      const creatorBenefits = [
        {
          image: '/images/socialColab_authentic.webp',
          dataAiHint: 'brand partnership',
          alt: 'Creator collaborating with a brand',
          title: content.benefits.creators[0].title,
          description: content.benefits.creators[0].description,
        },
        {
          image: '/images/socialColab_portfolio.webp',
          dataAiHint: 'personal profile',
          alt: 'Creator profile page',
          title: content.benefits.creators[1].title,
          description: content.benefits.creators[1].description,
        },
        {
          image: '/images/socialColab_secureDeals.webp',
          dataAiHint: 'secure payment',
          alt: 'Illustration of a secure transaction',
          title: content.benefits.creators[2].title,
          description: content.benefits.creators[2].description,
        },
      ];

  return (
    <section id="features" className="py-24 sm:py-32 bg-secondary relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
            {content.title}
            </h2>
            <div className="md:w-3/4 mx-auto mt-4 text-lg text-muted-foreground font-headline font-light">
            {content.subtitle}
            </div>
        </div>

        <Tabs defaultValue="brands" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
            <TabsTrigger value="brands" className="font-headline">{content.tabs.brands}</TabsTrigger>
            <TabsTrigger value="creators" className="font-headline">{content.tabs.creators}</TabsTrigger>
          </TabsList>
          <TabsContent value="brands">
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {brandBenefits.map((benefit) => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="creators">
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {creatorBenefits.map((benefit) => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="text-center mt-16">
          <Button size="lg" asChild>
            <Link href={`/${lang}/onboarding`}>{content.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
