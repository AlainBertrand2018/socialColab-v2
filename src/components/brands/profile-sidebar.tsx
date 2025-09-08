import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { BrandProfile } from '@/lib/brand-data';
import { DollarSign, Mail, User, Briefcase } from 'lucide-react';

const StatItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) => (
    <div className="flex items-start">
        <div className="text-muted-foreground mr-3 mt-1">{icon}</div>
        <div>
            <p className="font-semibold">{value}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
        </div>
    </div>
);

export function ProfileSidebar({ brand }: { brand: BrandProfile }) {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">About {brand.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {brand.name} is a leading company in the {brand.industry} sector in Mauritius, known for its commitment to quality and innovation. We are looking to partner with creative individuals to tell our story.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Campaign Budget</CardTitle>
        </CardHeader>
        <CardContent>
            <StatItem 
              icon={<DollarSign size={18} />} 
              label="Estimated Budget" 
              value={`${brand.campaignBudget.min.toLocaleString()} - ${brand.campaignBudget.max.toLocaleString()} ${brand.campaignBudget.currency}`} 
            />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-y-6">
            <StatItem icon={<User size={18} />} label="Contact Person" value={brand.contactName} />
            <StatItem icon={<Mail size={18} />} label="Contact Email" value={brand.contactEmail} />
            <StatItem icon={<Briefcase size={18} />} label="Industry" value={brand.industry} />
        </CardContent>
      </Card>
    </div>
  );
}
