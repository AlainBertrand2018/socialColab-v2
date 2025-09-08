
"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { platformNames } from "@/lib/niche-data";
import { allMauritianVillages } from "@/lib/location-data";
import { Trash } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function CreatorFormPage2() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "otherPlatforms",
  });

  return (
    <div className="space-y-4">
      {fields.map((item, index) => (
        <Card key={item.id} className="relative">
            <CardHeader>
                <h3 className="text-lg font-semibold">Platform #{index + 1}</h3>
                 <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => remove(index)}>
                    <Trash className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                    control={control}
                    name={`otherPlatforms.${index}.platform`}
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Platform</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a platform" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            {platformNames.map(platform => (
                                <SelectItem key={platform} value={platform}>{platform}</SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={control}
                    name={`otherPlatforms.${index}.handle`}
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Handle</FormLabel>
                        <FormControl>
                            <Input placeholder="@yourhandle" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                <h4 className="text-md font-semibold pt-2">Audience</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <FormField control={control} name={`otherPlatforms.${index}.followers`} render={({ field }) => (
                        <FormItem><FormLabel>Followers</FormLabel><FormControl><Input type="number" placeholder="e.g., 50000" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={control} name={`otherPlatforms.${index}.audienceAge`} render={({ field }) => (
                        <FormItem><FormLabel>Audience Age Group</FormLabel><FormControl><Input placeholder="e.g., 25-34" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={control} name={`otherPlatforms.${index}.audienceGender`} render={({ field }) => (
                        <FormItem><FormLabel>Audience Gender Split</FormLabel><FormControl><Input placeholder="e.g., 60% F, 40% M" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={control} name={`otherPlatforms.${index}.engagementRate`} render={({ field }) => (
                        <FormItem><FormLabel>Engagement Rate (%)</FormLabel><FormControl><Input type="number" step="0.1" placeholder="e.g., 3.5" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={control} name={`otherPlatforms.${index}.maxViews`} render={({ field }) => (
                        <FormItem><FormLabel>Max Views</FormLabel><FormControl><Input type="number" placeholder="e.g., 1200000" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField
                        control={control}
                        name={`otherPlatforms.${index}.topLocations`}
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Top Audience Locations</FormLabel>
                            <Select onValueChange={(value) => field.onChange([...(field.value || []), value])}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select locations" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {allMauritianVillages.map(village => (
                                        <SelectItem key={village} value={village}>{village}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </CardContent>
        </Card>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={() => append({ platform: '', handle: '@', followers: 0, audienceAge: '', audienceGender: '', engagementRate: 0, maxViews: 0, topLocations: [] })}
      >
        + Add another platform
      </Button>
    </div>
  );
}
