import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GalleryHorizontal, Lightbulb, MessageSquare, Rss } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb size={28} className="text-primary" />,
    title: 'Influencer Discovery',
    description: 'Our AI-powered tool analyzes your campaign goals to suggest the most effective influencers for your brand.',
  },
  {
    icon: <GalleryHorizontal size={28} className="text-primary" />,
    title: 'Brand Showcase',
    description: 'Create a stunning profile to showcase your brand, past collaborations, and what you stand for.',
  },
  {
    icon: <Rss size={28} className="text-primary" />,
    title: 'Personalized Feed',
    description: 'Follow your favorite brands and influencers to stay updated on their latest content and opportunities.',
  },
  {
    icon: <MessageSquare size={28} className="text-primary" />,
    title: 'Direct Messaging',
    description: 'Communicate seamlessly with potential partners through our secure and intuitive messaging system.',
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
        {features.map(({ icon, title, description }) => (
          <Card key={title} className="bg-card/60 backdrop-blur-sm transition-transform hover:-translate-y-2">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                {icon}
              </div>
              <CardTitle className="font-headline">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
