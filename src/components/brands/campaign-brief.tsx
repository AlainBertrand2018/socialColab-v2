import { Button } from "@/components/ui/button";

export function CampaignBrief() {
  return (
    <div>
      <h2 className="text-2xl font-bold font-headline mb-4">Current Campaign Brief</h2>
      <div className="space-y-6 text-sm text-muted-foreground">
        <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Campaign Goals</h3>
            <p>We are launching our new line of eco-friendly products and aim to increase brand awareness among environmentally conscious consumers aged 20-35. Our goal is to drive traffic to our new product page and generate authentic user content.</p>
        </div>
        <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Target Audience</h3>
            <p>Our target audience is primarily located in urban areas of Mauritius. They are tech-savvy, active on Instagram and TikTok, and value sustainability and local brands. They follow trends in fashion, wellness, and eco-living.</p>
        </div>
        <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">What We're Looking For</h3>
            <ul className="list-disc pl-5 space-y-1">
                <li>High-quality, engaging video content (Reels/TikToks) showcasing the product in a real-life setting.</li>
                <li>Authentic testimonials and reviews.</li>
                <li>Beautiful, well-lit photography for Instagram posts and stories.</li>
                <li>Creators who align with our brand values of sustainability and quality.</li>
            </ul>
        </div>
        <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Deliverables</h3>
            <ul className="list-disc pl-5 space-y-1">
                <li>2 Instagram Reels</li>
                <li>1 Instagram Post (carousel with 3-5 images)</li>
                <li>5 Instagram Stories with a link sticker</li>
                <li>1 TikTok video</li>
            </ul>
        </div>
        <div className="mt-6 flex gap-4">
            <Button>Submit Proposal</Button>
            <Button variant="outline">Ask a Question</Button>
        </div>
      </div>
    </div>
  );
}
