
import { Button } from '@/components/ui/button';
import { jobs } from '@/lib/job-data';
import { JobCard } from './job-card';
import { DiscoverJobsDialog } from './discover-jobs-dialog';

export function Jobs() {
    const showcasedJobs = jobs.slice(0, 6);

    return (
        <section id="jobs" className="py-24 sm:py-32">
            <div className="container text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">
                    Active Campaigns
                </h2>
                <div className="md:w-3/4 mx-auto mt-4 text-lg text-muted-foreground font-headline font-light">
                    Find the perfect opportunity to collaborate with leading Mauritian brands.
                </div>
            </div>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {showcasedJobs.map(job => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
                 <div className="text-center mt-16">
                    <DiscoverJobsDialog
                        trigger={<Button size="lg">Discover More Jobs</Button>}
                    />
                </div>
            </div>
        </section>
    );
}
