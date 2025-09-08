import Image from 'next/image';
import type { CreatorProfile } from '@/lib/creator-data';
import { Card } from '@/components/ui/card';

export function ProfilePortfolio({ portfolio }: { portfolio: CreatorProfile['portfolio'] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold font-headline mb-4">Recent Work</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {portfolio.map((item, index) => (
          <Card key={index} className="overflow-hidden group">
            <Image
              src={item.src}
              alt={item.alt}
              data-ai-hint={item.aiHint}
              width={400}
              height={400}
              className="aspect-square object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
