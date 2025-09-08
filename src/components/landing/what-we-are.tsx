"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FeedbackForm } from './feedback-form';

export function WhatWeAre() {
  return (
    <section id="what-we-are" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What We Are</h2>
          <p className="mt-4 text-base text-muted-foreground font-headline font-light">
            Social Colab is your direct path to powerful, authentic collaborations. We're a zero-commission platform built to help local and regional brands connect with a vetted community of creators.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Unlike traditional platforms, we do not take a cut of your deals. Our mission is to empower you to build genuine partnerships, allowing your entire budget to go directly toward sparking impactful campaigns and measurable results. It's time to co-create, launch, and grow—without the middleman.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="mt-8">Give Us Your Feedback</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Give us your feedback</DialogTitle>
                <DialogDescription>
                  We'd love to hear your thoughts on our platform.
                </DialogDescription>
              </DialogHeader>
              <FeedbackForm />
            </DialogContent>
          </Dialog>
        </div>
        <Image
          src="/images/zero_comm_platform.webp"
          width={600}
          height={600}
          className="rounded-lg shadow-xl aspect-square object-cover"
          alt="Two people collaborating over a table with laptops"
        />
      </div>
    </section>
  );
}
