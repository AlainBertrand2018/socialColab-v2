
"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Lightbulb } from 'lucide-react';

export function BetaWelcomeDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenDialog = localStorage.getItem('hasSeenBetaDialog');
    if (!hasSeenDialog) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasSeenBetaDialog', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
            <div className="flex justify-center mb-4">
                <Lightbulb className="h-12 w-12 text-accent" />
            </div>
          <DialogTitle className="text-center text-2xl font-headline">Welcome to Social Colab Beta!</DialogTitle>
          <DialogDescription className="text-center text-base py-4 space-y-2">
            We're excited to have you here! Please note that our platform is currently in beta testing. We are actively working to improve the service and your feedback is invaluable to us.
            <br /><br />
            For testing purposes, the content you see is generated with mock data. We will be integrating real people and brands as they sign up.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
            <Button onClick={handleClose} size="lg">Welcome</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
