
"use client";

import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { platformNames } from "@/lib/niche-data";
import { allMauritianVillages } from "@/lib/location-data";
import { Slider } from "@/components/ui/slider";

export function CreatorFormPage1() {
  const { control, watch } = useFormContext();

  const primaryGenderValue = watch('primaryAudienceGender');

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="profilePicture"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Profile Picture / Avatar</FormLabel>
            <FormControl>
              <Input type="file" onChange={(e) => field.onChange(e.target.files)} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name *</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Anaelle Dubois" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="e.g., anaelle@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <FormField
          control={control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender *</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-4 pt-2"
                >
                  <FormItem className="flex items-center space-x-2">
                    <FormControl><RadioGroupItem value="male" /></FormControl>
                    <FormLabel className="font-normal">Male</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2">
                    <FormControl><RadioGroupItem value="female" /></FormControl>
                    <FormLabel className="font-normal">Female</FormLabel>
                  </FormItem>
                   <FormItem className="flex items-center space-x-2">
                    <FormControl><RadioGroupItem value="other" /></FormControl>
                    <FormLabel className="font-normal">Other</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of Birth *</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    captionLayout="dropdown-buttons"
                    fromYear={1950}
                    toYear={new Date().getFullYear()}
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile / WhatsApp *</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+230 5555 5555" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={control}
            name="location"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Location</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select your primary location" />
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

      <h3 className="text-lg font-semibold pt-4">Primary Social Network</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
                control={control}
                name="primaryPlatform"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Platform *</FormLabel>
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
                name="primaryPlatformHandle"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Handle *</FormLabel>
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
             <FormField
                control={control}
                name="primaryFollowers"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Followers</FormLabel>
                    <FormControl>
                        <Input type="number" placeholder="e.g., 50000" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
             <FormField
                control={control}
                name="primaryAudienceAge"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Audience Age Group</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., 25-34" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="primaryAudienceGender"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Audience Gender Split</FormLabel>
                        <FormControl>
                            <div>
                                <Slider
                                    defaultValue={[field.value]}
                                    onValueChange={(value) => field.onChange(value[0])}
                                    max={100}
                                    step={1}
                                    className="my-4"
                                />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>Female</span>
                                    <span>Male</span>
                                </div>
                                <div className="text-center text-sm font-medium">
                                    {primaryGenderValue}% Female / {100 - primaryGenderValue}% Male
                                </div>
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
             <FormField
                control={control}
                name="primaryEngagementRate"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Engagement Rate (%)</FormLabel>
                    <FormControl>
                        <Input type="number" step="0.1" placeholder="e.g., 3.5" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
             <FormField
                control={control}
                name="primaryMaxViews"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Max Views</FormLabel>
                    <FormControl>
                        <Input type="number" placeholder="e.g., 1200000" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="primaryTopLocations"
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
    </div>
  );
}
