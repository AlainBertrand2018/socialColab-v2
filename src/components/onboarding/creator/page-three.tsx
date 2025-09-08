
"use client";

import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { creatorNiches, mainActivities } from "@/lib/niche-data";

export function CreatorFormPage3() {
  const { control } = useFormContext();

  return (
    <div className="space-y-4">
        <h3 className="text-lg font-semibold">Specialty</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
                control={control}
                name="primaryNiche"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Primary Niche *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your primary niche" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {creatorNiches.map(niche => (
                                <SelectItem key={niche} value={niche}>{niche}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="mainActivity"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Main Activity *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your main activity" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {mainActivities.map(activity => (
                                <SelectItem key={activity} value={activity}>{activity}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
            />
        </div>
        
        <h3 className="text-lg font-semibold pt-4">Price Range (MUR)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
                control={control}
                name="pricing.productPlacement"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Product Placement</FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="e.g., 5000" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="pricing.promotionalVideo"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Promotional Video</FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="e.g., 15000" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="pricing.sponsoredBlogPost"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Sponsored Blog Post</FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="e.g., 8000" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="pricing.publicAppearance"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Public Appearance</FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="e.g., 20000" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="pricing.sponsoredHowTos"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Sponsored How-tos</FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="e.g., 12000" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="pricing.ambassadorship"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Ambassadorship / Endorsements</FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="e.g., 50000" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    </div>
  );
}
