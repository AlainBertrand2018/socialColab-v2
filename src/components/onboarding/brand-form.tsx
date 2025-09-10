
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useRouter, usePathname } from "next/navigation";
import { Locale } from "@/i18n.config";

const brandFormSchema = z.object({
  brandName: z.string().min(2, "Brand name must be at least 2 characters."),
  industry: z.string().min(3, "Industry must be at least 3 characters."),
  contactName: z.string().min(2, "Contact name must be at least 2 characters."),
  contactEmail: z.string().email("Please enter a valid email address."),
});

type BrandFormValues = z.infer<typeof brandFormSchema>;

export function BrandOnboardingForm() {
    const router = useRouter();
    const pathname = usePathname();
    const lang = pathname.split('/')[1] as Locale;
    const { toast } = useToast();
    const form = useForm<BrandFormValues>({
        resolver: zodResolver(brandFormSchema),
        defaultValues: {
            brandName: "",
            industry: "",
            contactName: "",
            contactEmail: "",
        },
    });

    function onSubmit(data: BrandFormValues) {
        console.log(data);
        toast({
        title: "Welcome!",
        description: "Your brand profile has been created.",
        });
        router.push(`/${lang}/for-brands`);
    }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-headline text-2xl">Set Up Your Brand Profile</DialogTitle>
        <DialogDescription>Let's get your brand ready to connect with creators.</DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="brandName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Phoenix Beverages" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Food & Beverage" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Main Contact Person</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Mr. Bernard" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="e.g., contact@phoenix.mu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">Create Brand Profile</Button>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
}
