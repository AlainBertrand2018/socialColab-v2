
"use client";

import Image from 'next/image';
import { type CreatorProfile } from '@/lib/creator-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Youtube, Instagram } from 'lucide-react';
import { TikTokIcon } from '@/components/icons/tiktok';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProfileHeader } from '../creators/profile-header';
import { ProfileSidebar } from '../creators/profile-sidebar';
import { MainContent } from '../creators/main-content';
import { ProfilePortfolio } from '../creators/profile-portfolio';

const platformIcons: { [key: string]: React.ReactNode } = {
  Instagram: <Instagram className="h-4 w-4" />,
  TikTok: <TikTokIcon className="h-4 w-4" />,
  YouTube: <Youtube className="h-4 w-4" />,
};

export const CreatorCard = ({ creator }: { creator: CreatorProfile }) => {
  const totalFollowers = creator.platforms.reduce((acc, p) => acc + p.followers, 0);

  return (
    <Dialog>
        <DialogTrigger asChild>
            <Card className="overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-2 group cursor-pointer">
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
                    <div className="text-sm">{creator.niche}</div>
                </div>
                </div>
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
        </DialogTrigger>
        <DialogContent className="max-w-[70vw] h-[80vh] p-0">
            <DialogHeader>
              <DialogTitle className="sr-only">{creator.name}'s Profile</DialogTitle>
            </DialogHeader>
            <div className="bg-background rounded-lg overflow-y-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <ProfileHeader creator={creator} />
                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <ProfileSidebar creator={creator} />
                    </div>
                    <div className="lg:col-span-2">
                        <MainContent>
                            <ProfilePortfolio portfolio={creator.portfolio} />
                        </MainContent>
                    </div>
                    </div>
                </div>
            </div>
        </DialogContent>
    </Dialog>
  );
};
