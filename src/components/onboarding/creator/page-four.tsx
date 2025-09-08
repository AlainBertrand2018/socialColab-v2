
"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Trash } from "lucide-react";

export function CreatorFormPage4() {
  const { control, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "portfolio",
  });

  return (
    <div className="space-y-4">
       {fields.map((item, index) => (
        <Card key={item.id} className="relative">
            <CardHeader>
                <h3 className="text-lg font-semibold">Job Sample #{index + 1}</h3>
                {fields.length > 2 && (
                 <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => remove(index)}>
                    <Trash className="h-4 w-4" />
                </Button>
                )}
            </CardHeader>
            <CardContent className="space-y-4">
                 <FormField
                    control={control}
                    name={`portfolio.${index}.title`}
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Job Title *</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g., Summer Campaign for XYZ Brand" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={control}
                    name={`portfolio.${index}.description`}
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Job Description</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Describe the work you did..." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={control}
                    name={`portfolio.${index}.files`}
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>File Uploads (Video, Photo, Audio, PDF)</FormLabel>
                        <FormControl>
                            <Input type="file" multiple onChange={(e) => field.onChange(e.target.files)} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={() => append({ title: '', description: '', files: null })}
      >
        + Add Job
      </Button>

      {errors.portfolio && typeof errors.portfolio === 'object' && 'message' in errors.portfolio && (
        <p className="text-sm font-medium text-destructive">
          {errors.portfolio.message as string}
        </p>
      )}
    </div>
  );
}
