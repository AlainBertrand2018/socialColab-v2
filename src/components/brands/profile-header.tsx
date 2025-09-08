import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { BrandProfile } from '@/lib/brand-data';

export function ProfileHeader({ brand }: { brand: BrandProfile }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src="https://picsum.photos/1200/400?grayscale"
          alt="Cover image for brand"
          data-ai-hint="abstract texture"
          fill
          className="object-cover"
        />
      </div>
      <div className="px-6 pb-6 relative">
        <div className="flex items-end -mt-20">
          <div className="relative">
            <Image
              src={brand.logo}
              alt={`Logo of ${brand.name}`}
              data-ai-hint={brand.logoAiHint}
              width={160}
              height={160}
              className="rounded-full border-4 border-background bg-background p-2 aspect-square object-contain"
            />
          </div>
          <div className="ml-6 mb-4">
            <h1 className="text-3xl font-bold font-headline">{brand.name}</h1>
            <p className="text-muted-foreground">{brand.industry}</p>
          </div>
          <div className="ml-auto flex items-center gap-4 mb-4">
            <Button size="lg">Contact {brand.contactName}</Button>
            <Button size="lg" variant="outline">View Website</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
