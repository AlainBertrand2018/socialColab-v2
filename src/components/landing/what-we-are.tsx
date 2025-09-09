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

export function WhatWeAre({ content }: { content: any }) {
  return (
    <section id="what-we-are" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{content.title}</h2>
          <p className="mt-4 text-base text-muted-foreground font-headline font-light">
            {content.p1}
          </p>
          <p className="mt-4 text-base text-muted-foreground font-headline font-light">
            {content.p2}
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="mt-8">{content.cta}</Button>
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
