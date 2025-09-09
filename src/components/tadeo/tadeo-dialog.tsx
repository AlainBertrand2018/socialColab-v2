
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { TadeoChatbot } from './tadeo-chatbot';

export function TadeoDialog({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl h-[70vh] p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-2xl font-bold text-center">Ask Tadeo</DialogTitle>
          <DialogDescription className="text-center">
            Your AI assistant for social media marketing questions.
          </DialogDescription>
        </DialogHeader>
        <TadeoChatbot />
      </DialogContent>
    </Dialog>
  );
}
