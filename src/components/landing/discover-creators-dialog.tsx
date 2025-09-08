import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { creators } from '@/lib/creator-data';
import { CreatorCard } from './creator-card';

export function DiscoverCreatorsDialog({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Discover All Creators</DialogTitle>
          <DialogDescription className="text-center">
            Browse our full community of vetted creators.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {creators.map(creator => (
                    <CreatorCard key={creator.id} creator={creator} />
                ))}
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
