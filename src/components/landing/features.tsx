import Image from 'next/image';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

const features = [
  {
    image: 'https://picsum.photos/400/250',
    dataAiHint: 'influencer discovery',
    title: 'Influencer Discovery',
    description: 'Our AI-powered tool analyzes your campaign goals to suggest the most effective influencers for your brand.',
    alt: 'AI discovery concept'
  },
  {
    image: 'https://picsum.photos/400/251',
    dataAiHint: 'brand showcase',
    title: 'Brand Showcase',
    description: 'Create a stunning profile to showcase your brand, past collaborations, and what you stand for.',
    alt: 'Brand profile page'
  },
  {
    image: 'https://picsum.photos/400/252',
    dataAiHint: 'social feed',
    title: 'Personalized Feed',
    description: 'Follow your favorite brands and influencers to stay updated on their latest content and opportunities.',
    alt: 'Personalized social media feed'
  },
  {
    image: 'https://picsum.photos/400/253',
    dataAiHint: 'messaging app',
    title: 'Direct Messaging',
    description: 'Communicate seamlessly with potential partners through our secure and intuitive messaging system.',
    alt: 'Direct messaging interface'
  },
];

export function Features() {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">
          Everything You Need to <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Succeed</span>
        </h2>
        <p className="md:w-3/4 mx-auto mt-4 text-xl text-muted-foreground">
          Our platform is packed with features to help you launch successful influencer campaigns and build lasting partnerships.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ image, dataAiHint, title, description, alt }) => (
          <Card key={title} className="bg-card/60 backdrop-blur-sm transition-transform hover:-translate-y-2 overflow-hidden">
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
        ))}
      </div>
    </section>
  );
}
