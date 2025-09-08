import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Job } from "@/lib/job-data";
import { DollarSign, Tag } from "lucide-react";

export function JobCard({ job }: { job: Job }) {
    const budget = `${job.budget.min.toLocaleString()} - ${job.budget.max.toLocaleString()} ${job.budget.currency}`;
    return (
        <Card className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
                <Link href={`/brands/${job.brand.id}`}>
                    <Image
                        src={job.brand.logo}
                        alt={`${job.brand.name} logo`}
                        data-ai-hint={job.brand.logoAiHint}
                        width={64}
                        height={64}
                        className="rounded-lg border bg-background p-1 aspect-square object-contain"
                    />
                </Link>
                <div>
                    <CardTitle className="text-lg font-headline hover:text-primary">
                        <Link href={`/brands/${job.brand.id}`}>{job.title}</Link>
                    </CardTitle>
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
                <Button className="w-full">View Brief & Apply</Button>
            </CardFooter>
        </Card>
    );
}
