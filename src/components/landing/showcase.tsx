
"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { creators, CreatorProfile } from '@/lib/creator-data';
import { brands, BrandProfile } from '@/lib/brand-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Youtube, Instagram, Briefcase } from 'lucide-react';
import { TikTokIcon } from '@/components/icons/tiktok';
import Autoplay from "embla-carousel-autoplay"

const platformIcons: { [key: string]: React.ReactNode } = {
  Instagram: <Instagram className="h-4 w-4" />,
  TikTok: <TikTokIcon className="h-4 w-4" />,
  YouTube: <Youtube className="h-4 w-4" />,
};

const CreatorCard = ({ creator }: { creator: CreatorProfile }) => {
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

const BrandCard = ({ brand }: { brand: BrandProfile }) => {
  return (
    <Card className="overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-2 group">
      <Link href={`/brands/${brand.id}`} className="block">
        <div className="relative h-64 w-full bg-muted">
          <Image
            src={brand.logo}
            alt={`Logo of ${brand.name}`}
            data-ai-hint={brand.logoAiHint}
            fill
            className="object-contain object-center w-full h-full transition-transform duration-300 group-hover:scale-105 p-8"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
        </div>
      </Link>
      <CardContent className="p-4 bg-card">
         <h3 className="text-lg font-bold font-headline truncate group-hover:text-primary">{brand.name}</h3>
        <div className="flex items-center gap-2 text-muted-foreground mt-1">
          <Briefcase size={16} />
          <p className="text-sm font-semibold">{brand.industry}</p>
        </div>
      </CardContent>
    </Card>
  );
};


export function Showcase() {
  const [selectedNiche, setSelectedNiche] = React.useState('All');
  const niches = ['All', ...Array.from(new Set(creators.map(c => c.niche)))].slice(0, 4);
  const filteredCreators = selectedNiche === 'All' ? creators : creators.filter(c => c.niche === selectedNiche);

  return (
    <section id="showcase" className="py-24 sm:py-32 overflow-hidden">
        <div className="container text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Your Next Collaboration Awaits
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 text-xl text-muted-foreground">
                Connect with top-tier creators and innovative brands to build powerful partnerships.
            </p>
        </div>

        <Tabs defaultValue="creators" className="w-full">
            <div className="container">
                <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto mb-12">
                    <TabsTrigger value="creators">Meet Our Creators</TabsTrigger>
                    <TabsTrigger value="brands">Discover Top Brands</TabsTrigger>
                </TabsList>
            </div>

            <TabsContent value="creators">
                <div className="container">
                    <div className="flex justify-center flex-wrap gap-2 mb-12">
                        {niches.map(niche => (
                            <Button
                            key={niche}
                            variant={selectedNiche === niche ? 'default' : 'outline'}
                            onClick={() => setSelectedNiche(niche)}
                            className="capitalize"
                            >
                            {niche}
                            </Button>
                        ))}
                    </div>
                </div>

                <Carousel
                    opts={{ align: "start", loop: true }}
                    plugins={[ Autoplay({ delay: 3000 }) ]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                    {filteredCreators.map(creator => (
                        <CarouselItem key={creator.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 pl-4">
                            <CreatorCard creator={creator} />
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <div className="hidden lg:block">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </TabsContent>

            <TabsContent value="brands">
                 <Carousel
                    opts={{ align: "start", loop: true }}
                    plugins={[ Autoplay({ delay: 3500 }) ]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                    {brands.map(brand => (
                        <CarouselItem key={brand.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 pl-4">
                           <BrandCard brand={brand} />
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                     <div className="hidden lg:block">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </TabsContent>
        </Tabs>
    </section>
  );
}
