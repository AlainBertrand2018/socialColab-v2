
"use client";

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Briefcase } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { BrandOnboardingForm } from './brand-form';
import { CreatorOnboardingForm } from './creator-form';

export function OnboardingFlow() {

  return (
    <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center py-8">
            <h2 className="font-bold text-5xl font-headline text-foreground/90">EXCLUSIVE FOUNDER'S OFFER</h2>
            <p className="font-headline text-foreground/90 mt-2">For a limited time, our first 100 registered users will get lifetime access for a special flat-fee of <strong>Rs 500/month</strong> as a thank you from us for being an early believer.</p>
        </div>

      <Card className="text-center shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold font-headline">Join CollabCentral</CardTitle>
          <CardDescription className="text-lg">
            First, tell us who you are.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant='outline'
                        size="lg"
                        className="h-24 text-lg flex flex-col gap-2"
                    >
                        <Star className="h-8 w-8" />
                        <span>I'm a Creator</span>
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <CreatorOnboardingForm />
                </DialogContent>
            </Dialog>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant='outline'
                        size="lg"
                        className="h-24 text-lg flex flex-col gap-2"
                    >
                        <Briefcase className="h-8 w-8" />
                        <span>I'm a Brand</span>
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <BrandOnboardingForm />
                </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
