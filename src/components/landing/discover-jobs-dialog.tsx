import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { jobs } from '@/lib/job-data';
import { JobCard } from './job-card';

export function DiscoverJobsDialog({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Discover All Jobs</DialogTitle>
          <DialogDescription className="text-center">
            Browse all active campaigns from our partner brands.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
