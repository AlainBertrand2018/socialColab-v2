
import { brands } from '@/lib/brand-data';
import { notFound } from 'next/navigation';
import { ProfileHeader } from '@/components/brands/profile-header';
import { ProfileSidebar } from '@/components/brands/profile-sidebar';
import { CampaignBrief } from '@/components/brands/campaign-brief';
import { MainContent } from '@/components/creators/main-content';
import { PastCampaigns } from '@/components/brands/past-campaigns';
import { Separator } from '@/components/ui/separator';

export default async function BrandProfilePage({ params }: { params: Promise<{ id: string; lang: string }> }) {
  const { id } = await params;
  const brand = brands.find((b) => b.id.toString() === id);

  if (!brand) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProfileHeader brand={brand} />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ProfileSidebar brand={brand} />
          </div>
          <div className="lg:col-span-2">
            <MainContent>
                <CampaignBrief />
                <Separator className="my-8" />
                <PastCampaigns />
            </MainContent>
          </div>
        </div>
      </div>
    </div>
  );
}
