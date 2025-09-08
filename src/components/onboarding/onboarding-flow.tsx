"use client";

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Briefcase, Lightbulb } from 'lucide-react';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';
import { BrandOnboardingForm } from './brand-form';
import { CreatorOnboardingForm } from './creator-form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function OnboardingFlow() {
  const [openCollapse, setOpenCollapse] = React.useState('');

  const handleSelection = (userType: 'creator' | 'brand') => {
    setOpenCollapse(current => current === userType ? '' : userType);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
        <Alert className="bg-accent/10 border-accent text-accent-foreground">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle className="font-bold text-foreground/90 font-headline">EXCLUSIVE FOUNDER's OFFER</AlertTitle>
            <AlertDescription>
            <p className="font-headline text-foreground/90">For a limited time, our first 100 registered users will get lifetime access for a special flat-fee of <strong>Rs 500/month</strong> as a thank you from us for being an early believer.</p>
            </AlertDescription>
        </Alert>

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
      
      <Collapsible open={openCollapse === 'creator'} className="overflow-hidden">
        <CollapsibleContent className="transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <CreatorOnboardingForm />
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openCollapse === 'brand'} className="overflow-hidden">
        <CollapsibleContent className="transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <BrandOnboardingForm />
        </CollapsibleContent>
      </Collapsible>

    </div>
  );
}
