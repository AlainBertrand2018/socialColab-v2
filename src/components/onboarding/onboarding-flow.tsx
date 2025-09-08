"use client";

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Briefcase } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { BrandOnboardingForm } from './brand-form';
import { CreatorOnboardingForm } from './creator-form';

export function OnboardingFlow() {
  const [openCollapse, setOpenCollapse] = React.useState('');

  const handleSelection = (userType: 'creator' | 'brand') => {
    setOpenCollapse(current => current === userType ? '' : userType);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="text-center shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold font-headline">Join CollabCentral</CardTitle>
          <CardDescription className="text-lg">
            First, tell us who you are.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              variant={openCollapse === 'creator' ? 'default' : 'outline'}
              size="lg"
              className="h-24 text-lg flex flex-col gap-2"
              onClick={() => handleSelection('creator')}
            >
              <Star className="h-8 w-8" />
              <span>I'm a Creator</span>
            </Button>
            <Button
              variant={openCollapse === 'brand' ? 'default' : 'outline'}
              size="lg"
              className="h-24 text-lg flex flex-col gap-2"
              onClick={() => handleSelection('brand')}
            >
              <Briefcase className="h-8 w-8" />
              <span>I'm a Brand</span>
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Collapsible open={openCollapse === 'creator'} className="mt-4">
        <CollapsibleContent>
            <CreatorOnboardingForm />
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openCollapse === 'brand'} className="mt-4">
        <CollapsibleContent>
            <BrandOnboardingForm />
        </CollapsibleContent>
      </Collapsible>

    </div>
  );
}
