
"use client";

import { useState, useEffect } from 'react';
import { DiscoverJobsDialog } from "@/components/landing/discover-jobs-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { creators } from "@/lib/creator-data";
import { CreatorCard } from "@/components/landing/creator-card";
import { jobs, type Job } from '@/lib/job-data';
import { JobCard } from '@/components/landing/job-card';
import { Bot, BarChart, FileText, Briefcase, Calendar, MessageSquare, Settings } from 'lucide-react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TadeoDialog } from '@/components/tadeo/tadeo-dialog';


const toolkits = [
    { name: 'Analytics', icon: <BarChart />, href: '#', tooltip: "Take A Snapshot Of How Your Campaign Is Doing" },
    { name: 'Media Kit Builder', icon: <FileText />, href: '#', tooltip: "Organize Your Audiovisual Assets For Deployment" },
    { name: 'Campaign Manager', icon: <Briefcase />, href: '#', tooltip: "Organize Your Campaign as a Full Fledged Project" },
    { name: 'Content Calendar', icon: <Calendar />, href: '#', tooltip: "Schedule Your Posts At The Best Times" },
    { name: 'Collaboration Hub', icon: <MessageSquare />, href: '#', tooltip: "Everything You Need to Initialize, Engage and Deliver in Private Discussions" },
    { name: 'Account Settings', icon: <Settings />, href: '#', tooltip: "Manage your Profile" },
]

export default function ForCreatorsPage() {
    const [handle, setHandle] = useState('Creator');
    const [showcasedJobs, setShowcasedJobs] = useState<Job[]>([]);
    const showcasedCreators = creators.slice(0, 3);

    useEffect(() => {
        const randomCreator = creators[Math.floor(Math.random() * creators.length)];
        setHandle(randomCreator.socialPseudonym);

        const shuffledJobs = [...jobs].sort(() => 0.5 - Math.random());
        setShowcasedJobs(shuffledJobs.slice(0, 4));
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
                    <CardTitle>Available Toolkits</CardTitle>
                    <CardDescription>Leverage our AI-powered tools to grow your brand.</CardDescription>
                </CardHeader>
                <CardContent>
                    <TooltipProvider>
                        <div className="flex items-center justify-center text-center gap-4">
                            <TadeoDialog 
                                trigger={
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="p-4 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors flex flex-col items-center justify-center gap-2 aspect-square cursor-pointer w-24">
                                                <div className="h-8 w-8"><Bot /></div>
                                                <span className="text-xs font-semibold">Ask Tadeo</span>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Your AI Marketing Assistant</p>
                                        </TooltipContent>
                                    </Tooltip>
                                }
                            />
                            {toolkits.map(tool => (
                                <Tooltip key={tool.name}>
                                    <TooltipTrigger asChild>
                                        <Link href={tool.href}>
                                            <div className="p-4 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors flex flex-col items-center justify-center gap-2 aspect-square cursor-pointer w-24">
                                                <div className="h-8 w-8">{tool.icon}</div>
                                                <span className="text-xs font-semibold">{tool.name}</span>
                                            </div>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{tool.tooltip}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    </TooltipProvider>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Available Jobs</CardTitle>
                    <CardDescription>Here are some of the latest campaigns. Apply now!</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {showcasedJobs.map(job => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                    <div className="text-center">
                         <DiscoverJobsDialog
                            trigger={<Button size="lg">Discover All Jobs</Button>}
                        />
                    </div>
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
