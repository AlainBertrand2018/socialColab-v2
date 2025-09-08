
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const creatorFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  socialPseudonym: z.string().min(2, "Social handle must be at least 2 characters."),
  niche: z.string().min(3, "Niche must be at least 3 characters."),
  description: z.string().max(280, "Description can't exceed 280 characters.").optional(),
});

type CreatorFormValues = z.infer<typeof creatorFormSchema>;

export function CreatorOnboardingForm() {
    const { toast } = useToast();
    const form = useForm<CreatorFormValues>({
        resolver: zodResolver(creatorFormSchema),
        defaultValues: {
            name: "",
            socialPseudonym: "",
            niche: "",
            description: "",
        },
    });

    function onSubmit(data: CreatorFormValues) {
        console.log(data);
        toast({
        title: "Welcome aboard!",
        description: "Your creator profile has been created.",
        });
        form.reset();
    }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-headline text-2xl">Create Your Creator Profile</DialogTitle>
        <DialogDescription>Tell us about yourself. You can add more details later.</DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Anaelle Dubois" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="socialPseudonym"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Main Social Handle</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., @anaelledubois" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="niche"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Niche</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Sustainable Living & Fashion" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Bio</FormLabel>
                  <FormControl>
                    <Textarea placeholder="A little bit about you..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">Create Profile</Button>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
}
