"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Briefcase, Lightbulb, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

const waitlistSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  userType: z.enum(["brand", "influencer"], {
    required_error: "Please select an option.",
  }),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export function WaitlistForm() {
  const { toast } = useToast();
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: WaitlistFormValues) {
    console.log(data);
    toast({
      title: "Success!",
      description: "You've been added to the waitlist.",
    });
    form.reset();
  }

  return (
    <div className="grid gap-6">
      <Alert className="bg-primary text-primary-foreground">
        <Lightbulb className="h-4 w-4" />
        <AlertTitle className="font-bold">LIMITED EXCLUSIVE FOUNDER's OFFER for our first 100 registrants</AlertTitle>
        <AlertDescription>
          <p>Join our waitlist and provide feedback to get a special flat-fee of <strong>Rs 500/month</strong>, for lifetime access as a thank you from us.</p>
        </AlertDescription>
      </Alert>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="userType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>I am a...</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 gap-4"
                  >
                    <FormItem>
                      <FormControl>
                        <RadioGroupItem value="brand" className="sr-only" />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          "flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer",
                          field.value === "brand" && "border-primary"
                        )}
                      >
                        <Briefcase className="mb-3 h-6 w-6" />
                        Brand
                      </FormLabel>
                    </FormItem>
                    <FormItem>
                      <FormControl>
                        <RadioGroupItem value="influencer" className="sr-only" />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          "flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer",
                          field.value === "influencer" && "border-primary"
                        )}
                      >
                        <Star className="mb-3 h-6 w-6" />
                        Influencer
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Join Waitlist
          </Button>
        </form>
      </Form>
    </div>
  );
}
