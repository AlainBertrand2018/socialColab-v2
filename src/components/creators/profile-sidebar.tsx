import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { CreatorProfile } from '@/lib/creator-data';
import { AtSign, Users, MapPin, BarChart, Eye, DollarSign, Instagram, Youtube, Facebook } from 'lucide-react';
import { TikTokIcon } from '@/components/icons/tiktok';

const platformIcons = {
  Instagram: <Instagram className="h-5 w-5" />,
  TikTok: <TikTokIcon className="h-5 w-5" />,
  YouTube: <Youtube className="h-5 w-5" />,
  Facebook: <Facebook className="h-5 w-5" />,
};

const StatItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) => (
    <div className="flex items-start">
        <div className="text-muted-foreground mr-3 mt-1">{icon}</div>
        <div>
            <p className="font-semibold">{value}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
        </div>
    </div>
);


export function ProfileSidebar({ creator }: { creator: CreatorProfile }) {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">About {creator.name.split(' ')[0]}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{creator.description}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Platforms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {creator.platforms.map((platform) => (
            <div key={platform.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">{platformIcons[platform.name]}</span>
                <span className="font-semibold">{platform.name}</span>
              </div>
              <span className="text-sm font-medium">{Intl.NumberFormat('en-US', { notation: 'compact' }).format(platform.followers)}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Audience</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-y-6">
            <StatItem icon={<Users size={18} />} label="Gender" value={creator.audience.gender} />
            <StatItem icon={<AtSign size={18} />} label="Age" value={creator.audience.ageRange} />
            <StatItem icon={<MapPin size={18} />} label="Location" value={creator.audience.location} />
            <StatItem icon={<BarChart size={18} />} label="Reach" value={Intl.NumberFormat('en-US', { notation: 'compact' }).format(creator.audience.reach)} />
            <StatItem icon={<Eye size={18} />} label="Max Views" value={Intl.NumberFormat('en-US', { notation: 'compact' }).format(creator.audience.maxViews)} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Collaboration Fees</CardTitle>
        </CardHeader>
        <CardContent>
            <StatItem icon={<DollarSign size={18} />} label="Fee Range" value={`${creator.fees.min.toLocaleString()} - ${creator.fees.max.toLocaleString()} ${creator.fees.currency}`} />
        </CardContent>
      </Card>
    </div>
  );
}
