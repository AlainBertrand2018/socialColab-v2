'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import dynamic from 'next/dynamic';
import React from 'react';

// Lazy-load the chatbot (client-only) to avoid any SSR/hydration edge cases in the dialog portal
const TadeoChatbot = dynamic(() => import('./tadeo-chatbot').then(m => m.TadeoChatbot), {
  ssr: false,
});

type TadeoDialogProps = {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
};

export function TadeoDialog({ trigger, title = 'Ask Tadeo', description = 'Your AI assistant for social media marketing questions.' }: TadeoDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl h-[70vh] p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-2xl font-bold text-center">{title}</DialogTitle>
          <DialogDescription className="text-center">{description}</DialogDescription>
        </DialogHeader>

        {/* Client-only chatbot lives inside dialog content */}
        <TadeoChatbot />
      </DialogContent>
    </Dialog>
  );
}
