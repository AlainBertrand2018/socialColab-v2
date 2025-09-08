import Link from 'next/link';
import Image from 'next/image';
import { creators, CreatorProfile } from '@/lib/creator-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Youtube, Instagram } from 'lucide-react';
import { TikTokIcon } from '@/components/icons/tiktok';
import { DiscoverCreatorsDialog } from './discover-creators-dialog';

const platformIcons: { [key: string]: React.ReactNode } = {
  Instagram: <Instagram className="h-4 w-4" />,
  TikTok: <TikTokIcon className="h-4 w-4" />,
  YouTube: <Youtube className="h-4 w-4" />,
};

export const CreatorCard = ({ creator }: { creator: CreatorProfile }) => {
  const totalFollowers = creator.platforms.reduce((acc, p) => acc + p.followers, 0);

  return (
    <Card className="overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-2 group">
      <Link href={`/creators/${creator.id}`} className="block">
        <div className="relative h-64 w-full">
          <Image
            src={creator.avatar}
            alt={`Avatar of ${creator.name}`}
            data-ai-hint={creator.avatarAiHint}
            fill
            className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold font-headline">{creator.name}</h3>
            <p className="text-sm">{creator.niche}</p>
          </div>
        </div>
      </Link>
      <CardContent className="p-4 bg-card">
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <Users size={16} />
          <span className="text-sm font-semibold">{Intl.NumberFormat('en-US', { notation: 'compact' }).format(totalFollowers)} Followers</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="capitalize">{creator.niche.split(' & ')[0]}</Badge>
          {creator.platforms.map((p) => (
            <Badge key={p.name} variant="outline" className="flex items-center gap-1.5">
              {platformIcons[p.name]}
              {p.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};


export function Showcase() {
  const showcasedCreators = creators.slice(0, 6);

  return (
    <section id="showcase" className="py-24 sm:py-32 overflow-hidden bg-secondary">
        <div className="container text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Meet Our Vetted Creators
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 text-xl text-muted-foreground">
                Discover talented individuals ready to bring your brand's story to life.
            </p>
        </div>

        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {showcasedCreators.map(creator => (
                    <CreatorCard key={creator.id} creator={creator} />
                ))}
            </div>

            <div className="text-center mt-16">
                <DiscoverCreatorsDialog
                    trigger={<Button size="lg">Discover More Creators</Button>}
                />
            </div>
        </div>
    </section>
  );
}
