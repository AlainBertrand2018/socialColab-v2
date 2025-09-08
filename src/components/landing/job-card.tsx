import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Job } from "@/lib/job-data";
import { DollarSign, Tag } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CampaignBrief } from "../brands/campaign-brief";


export function JobCard({ job }: { job: Job }) {
    const budget = `${job.budget.min.toLocaleString()} - ${job.budget.max.toLocaleString()} ${job.budget.currency}`;
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="flex flex-col cursor-pointer transition-transform hover:-translate-y-1">
                    <CardHeader className="flex-row items-start gap-3">
                        <Image
                            src={job.brand.logo}
                            alt={`${job.brand.name} logo`}
                            data-ai-hint={job.brand.logoAiHint}
                            width={48}
                            height={48}
                            className="rounded-md border bg-background p-1 aspect-square object-contain"
                        />
                        <div className="flex-1">
                            <CardTitle className="text-base font-headline group-hover:text-primary leading-tight">{job.title}</CardTitle>
                            <p className="text-xs text-muted-foreground font-medium">by {job.brand.name}</p>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-3">
                        <Separator />
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Tag size={14} className="text-primary" />
                            <Badge variant="secondary" className="capitalize">{job.niche}</Badge>
                        </div>
                         <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <DollarSign size={14} className="text-primary" />
                            <p className="font-semibold text-foreground">{budget}</p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" size="sm">View & Apply</Button>
                    </CardFooter>
                </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
                <DialogHeader>
                    <DialogTitle className="sr-only">{job.title}</DialogTitle>
                </DialogHeader>
                <CampaignBrief />
            </DialogContent>
        </Dialog>
    );
}
