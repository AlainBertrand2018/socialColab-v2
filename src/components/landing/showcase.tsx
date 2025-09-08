
"use client";

import { useState } from 'react';
import { creators } from '@/lib/creator-data';
import { Button } from '@/components/ui/button';
import { DiscoverCreatorsDialog } from './discover-creators-dialog';
import { CreatorCard } from './creator-card';

const allNiches = ['All', ...Array.from(new Set(creators.map(c => c.niche.split(' & ')).flat()))];
const visibleNiches = allNiches.slice(0, 4);

export function Showcase() {
  const [selectedNiche, setSelectedNiche] = useState('All');
  
  const showcasedCreators = creators.slice(0, 6);

  const filteredCreators = selectedNiche === 'All'
    ? showcasedCreators
    : creators.filter(c => c.niche.includes(selectedNiche)).slice(0, 6);

  return (
    <section id="showcase" className="py-24 sm:py-32 overflow-hidden bg-primary text-primary-foreground">
        <div className="container text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Meet Our Vetted Creators
            </h2>
            <div className="md:w-3/4 mx-auto mt-4 text-xl text-primary-foreground/90">
                Discover talented individuals ready to bring your brand's story to life.
            </div>
            <div className="flex justify-center gap-2 mt-8 flex-wrap">
                {visibleNiches.map(niche => (
                    <Button 
                        key={niche} 
                        variant={selectedNiche === niche ? 'secondary' : 'outline'}
                        onClick={() => setSelectedNiche(niche)}
                        className={selectedNiche !== niche ? 'bg-primary/20 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary' : ''}
                    >
                        {niche}
                    </Button>
                ))}
            </div>
        </div>

        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCreators.map(creator => (
                    <CreatorCard key={creator.id} creator={creator} />
                ))}
            </div>

            <div className="text-center mt-16">
                <DiscoverCreatorsDialog
                    trigger={<Button size="lg" variant="secondary">Discover More Creators</Button>}
                />
            </div>
        </div>
    </section>
  );
}
