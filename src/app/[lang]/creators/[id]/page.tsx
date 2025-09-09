import { creators } from '@/lib/creator-data';
import { notFound } from 'next/navigation';
import { ProfileHeader } from '@/components/creators/profile-header';
import { ProfileSidebar } from '@/components/creators/profile-sidebar';
import { ProfilePortfolio } from '@/components/creators/profile-portfolio';
import { MainContent } from '@/components/creators/main-content';

export default function CreatorProfilePage({ params }: { params: { id: string } }) {
  const creator = creators.find((c) => c.id.toString() === params.id);

  if (!creator) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProfileHeader creator={creator} />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ProfileSidebar creator={creator} />
          </div>
          <div className="lg:col-span-2">
            <MainContent>
                <ProfilePortfolio portfolio={creator.portfolio} />
            </MainContent>
          </div>
        </div>
      </div>
    </div>
  );
}
