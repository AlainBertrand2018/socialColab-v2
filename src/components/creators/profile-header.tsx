import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { CreatorProfile } from '@/lib/creator-data';

export function ProfileHeader({ creator }: { creator: CreatorProfile }) {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-primary/10 to-accent/10 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
      </div>
      <div className="px-6 pb-6">
        <div className="flex items-end -mt-20">
          <Image
            src={creator.avatar}
            alt={`Avatar of ${creator.name}`}
            data-ai-hint={creator.avatarAiHint}
            width={160}
            height={160}
            className="rounded-full border-4 border-background bg-background aspect-square object-cover"
          />
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
