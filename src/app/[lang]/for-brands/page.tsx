
"use client";

import { DiscoverCreatorsDialog } from "@/components/landing/discover-creators-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { jobs } from "@/lib/job-data";
import { JobCard } from "@/components/landing/job-card";


export default function ForBrandsPage() {
    const showcasedJobs = jobs.slice(0, 3);
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
            <div className="bg-card border rounded-lg p-8">
                <h1 className="text-4xl font-bold font-headline text-foreground">Welcome, Brand!</h1>
                <p className="text-muted-foreground mt-2 text-lg">This is your dashboard. Manage campaigns and discover amazing creators.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Discover Creators</CardTitle>
                    <CardDescription>Browse our community of vetted creators to find the perfect fit for your next campaign.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">You can browse the full list of creators available on our platform.</p>
                    <DiscoverCreatorsDialog
                        trigger={<Button size="lg">Discover All Creators</Button>}
                    />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Your Active Campaigns</CardTitle>
                     <CardDescription>Here's a quick look at your ongoing campaigns.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {showcasedJobs.map(job => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                </CardContent>
            </Card>

        </div>
      </div>
    </div>
  );
}
