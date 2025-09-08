
import { DiscoverJobsDialog } from "@/components/landing/discover-jobs-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { creators } from "@/lib/creator-data";
import { CreatorCard } from "@/components/landing/creator-card";


export default function ForCreatorsPage() {
    const showcasedCreators = creators.slice(0, 3);
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
            <div className="bg-card border rounded-lg p-8">
                <h1 className="text-4xl font-bold font-headline text-foreground">Welcome, Creator!</h1>
                <p className="text-muted-foreground mt-2 text-lg">Your dashboard for finding brand collaborations and managing your profile.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Find Your Next Campaign</CardTitle>
                    <CardDescription>Browse active campaigns from our partner brands.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">Explore all the opportunities waiting for you on CollabCentral.</p>
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
