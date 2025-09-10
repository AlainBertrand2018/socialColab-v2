
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { CreatorProfile } from '@/lib/creator-data';

export function ProfileHeader({ creator }: { creator: CreatorProfile }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src="https://picsum.photos/1200/400"
          alt="Cover image"
          data-ai-hint="abstract background"
          fill
          className="object-cover"
        />
      </div>
      <div className="px-6 pb-6 relative">
        <div className="flex items-end -mt-20">
          <div className="relative">
            <Image
              src={creator.avatar}
              alt={`Avatar of ${creator.name}`}
              data-ai-hint={creator.avatarAiHint}
              width={160}
              height={160}
              className="rounded-full border-4 border-background bg-background aspect-square object-cover"
            />
          </div>
          <div className="ml-6 mb-4">
            <h1 className="text-3xl font-bold font-headline">{creator.name}</h1>
            <p className="text-muted-foreground">@{creator.socialPseudonym}</p>
          </div>
          <div className="ml-auto flex items-center gap-4 mb-4">
            <Button size="lg">Contact</Button>
            <Button size="lg" variant="outline">Follow</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
