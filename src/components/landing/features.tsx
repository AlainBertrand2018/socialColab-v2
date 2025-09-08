
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

const brandBenefits = [
  {
    image: '/images/brandreach.webp',
    dataAiHint: 'network connection',
    alt: 'Illustration of network connections',
    title: 'AI-Powered Discovery',
    description: 'Stop guessing. Our intelligent algorithm connects you with influencers whose audience perfectly matches your target demographic.',
  },
  {
    image: '/images/socialColab_from_Start.webp',
    dataAiHint: 'team collaboration',
    alt: 'Illustration of team collaboration',
    title: 'Seamless Campaign Management',
    description: 'From initial outreach to final payment, manage your entire campaign workflow in one place. Our integrated tools make collaboration effortless.',
  },
  {
    image: '/images/SocialColab_analytics.webp',
    dataAiHint: 'data analytics',
    alt: 'Dashboard showing analytics',
    title: 'Real-Time Analytics',
    description: 'Track your campaign performance with our intuitive dashboard. Measure ROI, engagement rates, and follower growth to optimize your strategy.',
  },
];

const creatorBenefits = [
  {
    image: '/images/socialColab_authentic.webp',
    dataAiHint: 'brand partnership',
    alt: 'Creator collaborating with a brand',
    title: 'Discover Authentic Brands',
    description: 'Connect with brands that align with your values and content. Our platform helps you find meaningful, long-term partnerships.',
  },
  {
    image: '/images/socialColab_secureDeals.webp',
    dataAiHint: 'personal profile',
    alt: 'Creator profile page',
    title: 'Showcase Your Portfolio',
    description: 'Create a stunning profile that acts as your digital media kit. Highlight your best work and audience demographics to attract your dream brands.',
  },
  {
    image: 'https://picsum.photos/400/255',
    dataAiHint: 'secure payment',
    alt: 'Illustration of a secure transaction',
    title: 'Streamlined & Secure Deals',
    description: 'Manage your proposals, contracts, and payments all in one place. Our secure system ensures you get paid on time, every time.',
  },
];

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


export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-secondary relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
            We Have Powerful AI-driven Toolkits for Everyone
            </h2>
            <div className="md:w-3/4 mx-auto mt-4 text-xl text-muted-foreground">
            Whether you're a brand looking to scale or a creator ready to shine, our platform provides the tools you need to succeed.
            </div>
        </div>

        <Tabs defaultValue="brands" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
            <TabsTrigger value="brands" className="font-headline">For Brands</TabsTrigger>
            <TabsTrigger value="creators" className="font-headline">For Creators</TabsTrigger>
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
            <Link href="/onboarding">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
