import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'Marketing Director, Bloom Co.',
    avatar: 'https://picsum.photos/id/237/100',
    dataAiHint: 'portrait professional',
    quote: "CollabCentral revolutionized our influencer strategy. The AI discovery tool is a game-changer and saved us countless hours.",
  },
  {
    name: 'Mike R.',
    title: 'Founder, TechGear',
    avatar: 'https://picsum.photos/id/238/100',
    dataAiHint: 'portrait man',
    quote: "As a startup, finding the right partners is crucial. This platform made it incredibly easy to connect with influencers who genuinely love our product.",
  },
  {
    name: 'Jessica T.',
    title: 'Content Creator',
    avatar: 'https://picsum.photos/id/239/100',
    dataAiHint: 'portrait woman',
    quote: "I love how easy it is to find brands that align with my values. CollabCentral has opened doors to partnerships I wouldn't have found otherwise.",
  },
  {
    name: 'David Chen',
    title: 'CEO, FitLife',
    avatar: 'https://picsum.photos/id/240/100',
    dataAiHint: 'portrait ceo',
    quote: "The campaign management tools are top-notch. It's the most streamlined and efficient process we've ever used for influencer marketing.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">
          Loved by Brands and <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Influencers</span>
        </h2>
        <p className="md:w-3/4 mx-auto mt-4 text-xl text-muted-foreground">
          See what our users have to say about their experience with CollabCentral.
        </p>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="relative">
        <CarouselContent>
          {testimonials.map(({ name, title, avatar, quote, dataAiHint }) => (
            <CarouselItem key={name} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="text-lg">"{quote}"</blockquote>
                </CardContent>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={avatar} alt={`Avatar of ${name}`} data-ai-hint={dataAiHint} />
                      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base font-medium font-headline">{name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{title}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </section>
  );
}
