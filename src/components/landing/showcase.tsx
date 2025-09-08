import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const brandBenefits = [
  {
    image: 'https://picsum.photos/800/600',
    dataAiHint: 'network connection',
    alt: 'Illustration of network connections',
    title: 'AI-Powered Discovery',
    description: 'Stop guessing. Our intelligent algorithm connects you with influencers whose audience perfectly matches your target demographic. Filter by niche, engagement, location, and more to find your ideal partner in minutes.',
  },
  {
    image: 'https://picsum.photos/800/601',
    dataAiHint: 'team collaboration',
    alt: 'Illustration of team collaboration',
    title: 'Seamless Campaign Management',
    description: 'From initial outreach to final payment, manage your entire campaign workflow in one place. Our integrated tools make collaboration effortless.',
  },
  {
    image: 'https://picsum.photos/800/602',
    dataAiHint: 'data analytics',
    alt: 'Dashboard showing analytics',
    title: 'Real-Time Analytics',
    description: 'Track your campaign performance with our intuitive dashboard. Measure ROI, engagement rates, and follower growth to optimize your strategy.',
  },
];

const creatorBenefits = [
  {
    image: 'https://picsum.photos/800/603',
    dataAiHint: 'brand partnership',
    alt: 'Creator collaborating with a brand',
    title: 'Discover Authentic Brands',
    description: 'Connect with brands that align with your values and content. Our platform helps you find meaningful, long-term partnerships, not just one-off gigs.',
  },
  {
    image: 'https://picsum.photos/800/604',
    dataAiHint: 'personal profile',
    alt: 'Creator profile page',
    title: 'Showcase Your Portfolio',
    description: 'Create a stunning profile that acts as your digital media kit. Highlight your best work, audience demographics, and past collaborations to attract your dream brands.',
  },
  {
    image: 'https://picsum.photos/800/605',
    dataAiHint: 'secure payment',
    alt: 'Illustration of a secure transaction',
    title: 'Streamlined & Secure Deals',
    description: 'Manage your proposals, contracts, and payments all in one place. Our secure system ensures you get paid on time, every time, without any hassle.',
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="py-24 sm:py-32 bg-secondary">
      <div className="container">
        <Tabs defaultValue="brands" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
            <TabsTrigger value="brands">For Brands</TabsTrigger>
            <TabsTrigger value="creators">For Creators</TabsTrigger>
          </TabsList>
          <TabsContent value="brands">
            <div className="space-y-16 mt-12">
              {brandBenefits.map((benefit, index) => (
                <div key={benefit.title} className="grid lg:grid-cols-2 gap-12 items-center">
                  <Image
                    src={benefit.image}
                    width={800}
                    height={600}
                    className={`rounded-lg shadow-xl ${index % 2 !== 0 ? 'lg:order-last' : ''}`}
                    data-ai-hint={benefit.dataAiHint}
                    alt={benefit.alt}
                  />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-headline">{benefit.title}</h3>
                    <p className="mt-4 text-lg text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="creators">
            <div className="space-y-16 mt-12">
              {creatorBenefits.map((benefit, index) => (
                <div key={benefit.title} className="grid lg:grid-cols-2 gap-12 items-center">
                  <Image
                    src={benefit.image}
                    width={800}
                    height={600}
                    className={`rounded-lg shadow-xl ${index % 2 !== 0 ? 'lg:order-last' : ''}`}
                    data-ai-hint={benefit.dataAiHint}
                    alt={benefit.alt}
                  />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-headline">{benefit.title}</h3>
                    <p className="mt-4 text-lg text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="text-center mt-16">
          <Button size="lg">Join The Waitlist</Button>
        </div>
      </div>
    </section>
  );
}