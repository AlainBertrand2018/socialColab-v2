import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Job } from "@/lib/job-data";
import { DollarSign, Tag } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CampaignBrief } from "../brands/campaign-brief";


export function JobCard({ job }: { job: Job }) {
    const budget = `${job.budget.min.toLocaleString()} - ${job.budget.max.toLocaleString()} ${job.budget.currency}`;
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="flex flex-col cursor-pointer transition-transform hover:-translate-y-1">
                    <CardHeader className="flex-row items-center gap-4">
                        <Image
                            src={job.brand.logo}
                            alt={`${job.brand.name} logo`}
                            data-ai-hint={job.brand.logoAiHint}
                            width={64}
                            height={64}
                            className="rounded-lg border bg-background p-1 aspect-square object-contain"
                        />
                        <div>
                            <CardTitle className="text-lg font-headline group-hover:text-primary">{job.title}</CardTitle>
                            <p className="text-sm text-muted-foreground font-medium">by {job.brand.name}</p>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <Separator />
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Tag size={16} className="text-primary" />
                            <Badge variant="secondary" className="capitalize">{job.niche}</Badge>
                        </div>
                         <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <DollarSign size={16} className="text-primary" />
                            <p className="font-semibold text-foreground">{budget}</p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">View & Apply</Button>
                    </CardFooter>
                </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
                <CampaignBrief />
            </DialogContent>
        </Dialog>
    );
}
