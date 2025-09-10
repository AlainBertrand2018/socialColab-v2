
"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Lightbulb } from 'lucide-react';
import { Locale } from '@/i18n.config';

export function BetaWelcomeDialog({ lang, content }: { lang: Locale, content: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogKey = `hasSeenBetaDialog-${lang}`;

  useEffect(() => {
    const hasSeenDialog = localStorage.getItem(dialogKey);
    if (!hasSeenDialog) {
      setIsOpen(true);
    }
  }, [dialogKey]);

  const handleClose = () => {
    localStorage.setItem(dialogKey, 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
            <div className="flex justify-center mb-4">
                <Lightbulb className="h-12 w-12 text-accent" />
            </div>
          <DialogTitle className="text-center text-2xl font-headline">{content.title}</DialogTitle>
          <DialogDescription 
            className="text-center text-base py-4 space-y-2"
            dangerouslySetInnerHTML={{ __html: content.description }}
          >
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
            <Button onClick={handleClose} size="lg">{content.buttonText}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
