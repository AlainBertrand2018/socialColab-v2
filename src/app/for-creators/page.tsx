
"use client";

import { useState, useEffect } from 'react';
import { DiscoverJobsDialog } from "@/components/landing/discover-jobs-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { creators } from "@/lib/creator-data";
import { CreatorCard } from "@/components/landing/creator-card";
import { jobs, type Job } from '@/lib/job-data';
import { JobCard } from '@/components/landing/job-card';

export default function ForCreatorsPage() {
    const [handle, setHandle] = useState('Creator');
    const [showcasedJobs, setShowcasedJobs] = useState<Job[]>([]);
    const showcasedCreators = creators.slice(0, 3);

    useEffect(() => {
        const randomCreator = creators[Math.floor(Math.random() * creators.length)];
        setHandle(randomCreator.socialPseudonym);

        const shuffledJobs = [...jobs].sort(() => 0.5 - Math.random());
        setShowcasedJobs(shuffledJobs.slice(0, 3));
    }, []);

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
            <div className="bg-card border rounded-lg p-8">
                <h1 className="text-4xl font-bold font-headline text-foreground">Welcome, @{handle}!</h1>
                <p className="text-muted-foreground mt-2 text-lg">Your dashboard for finding brand collaborations and managing your profile.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Available Jobs</CardTitle>
                    <CardDescription>Here are some of the latest campaigns. Apply now!</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        {showcasedJobs.map(job => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                     <DiscoverJobsDialog
                        trigger={<Button size="lg">Discover All Jobs</Button>}
                    />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Creators You Might Know</CardTitle>
                     <CardDescription>Connect with other creators on the platform.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {showcasedCreators.map(creator => (
                            <CreatorCard key={creator.id} creator={creator} />
                        ))}
                    </div>
                </CardContent>
            </Card>

        </div>
      </div>
    </div>
  );
}
