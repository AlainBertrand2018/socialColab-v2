import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowUpRight } from "lucide-react";

const pastCampaigns = [
  {
    title: "Summer '23 Beverage Launch",
    outcome: "Increased sales by 25% and gained 10k new followers.",
    engagement: "15.2% Engagement Rate",
    link: "#",
  },
  {
    title: "Eco-Friendly Packaging Initiative",
    outcome: "Generated over 500 pieces of user-generated content.",
    engagement: "12.8% Engagement Rate",
    link: "#",
  },
  {
    title: "MyTelecom App Download Drive",
    outcome: "Drove 50,000 app installs in the first month.",
    engagement: "9.5% Engagement Rate",
    link: "#",
  },
];

export function PastCampaigns() {
  return (
    <div>
      <h2 className="text-2xl font-bold font-headline mb-4">Past Campaigns</h2>
      <div className="space-y-4">
        {pastCampaigns.map((campaign, index) => (
          <Card key={index}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{campaign.title}</h3>
                <p className="text-sm text-muted-foreground flex items-center mt-1">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  {campaign.outcome}
                </p>
                 <p className="text-sm text-muted-foreground font-semibold mt-1">
                  {campaign.engagement}
                </p>
              </div>
              <a href={campaign.link} className="text-primary hover:underline flex items-center text-sm font-semibold">
                View Details <ArrowUpRight className="h-4 w-4 ml-1" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
