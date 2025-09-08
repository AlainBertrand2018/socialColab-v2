
"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

import { CreatorFormPage1 } from "./creator/page-one";
import { CreatorFormPage2 } from "./creator/page-two";
import { CreatorFormPage3 } from "./creator/page-three";
import { CreatorFormPage4 } from "./creator/page-four";

const page1Schema = z.object({
  profilePicture: z.any().optional(),
  email: z.string().email("Please enter a valid email address."),
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  gender: z.enum(["male", "female", "other"], { required_error: "Please select a gender." }),
  dob: z.date({ required_error: "Please enter your date of birth." }),
  mobile: z.string().min(7, "Please enter a valid phone number."),
  location: z.string().optional(),
  primaryPlatform: z.string().min(2, "Please select your primary platform."),
  primaryPlatformHandle: z.string().min(2, "Please enter your handle.").refine(val => val.startsWith('@'), { message: "Handle must start with @" }),
  primaryFollowers: z.coerce.number().min(0),
  primaryAudienceAge: z.string().min(2, "Please provide an age range."),
  primaryAudienceGender: z.string().min(2, "Please provide a gender split."),
  primaryEngagementRate: z.coerce.number().min(0),
  primaryMaxViews: z.coerce.number().min(0),
  primaryTopLocations: z.array(z.string()).optional(),
});

const page2Schema = z.object({
  otherPlatforms: z.array(z.object({
    platform: z.string().min(2, "Please select a platform."),
    handle: z.string().min(2, "Please enter a handle.").refine(val => val.startsWith('@'), { message: "Handle must start with @" }),
    followers: z.coerce.number().min(0),
    audienceAge: z.string().min(2, "Please provide an age range."),
    audienceGender: z.string().min(2, "Please provide a gender split."),
    engagementRate: z.coerce.number().min(0),
    maxViews: z.coerce.number().min(0),
    topLocations: z.array(z.string()).optional(),
  })).optional(),
});

const page3Schema = z.object({
  primaryNiche: z.string({ required_error: "Please select your primary niche." }),
  mainActivity: z.string({ required_error: "Please select your main activity." }),
  pricing: z.object({
    productPlacement: z.coerce.number().optional(),
    promotionalVideo: z.coerce.number().optional(),
    sponsoredBlogPost: z.coerce.number().optional(),
    publicAppearance: z.coerce.number().optional(),
    sponsoredHowTos: z.coerce.number().optional(),
    ambassadorship: z.coerce.number().optional(),
  }).optional(),
});

const page4Schema = z.object({
  portfolio: z.array(z.object({
    title: z.string().min(2, "Job title is required."),
    description: z.string().min(10, "Description is too short."),
    files: z.any(),
  })).min(2, "At least two portfolio samples are required."),
});

const creatorFormSchema = page1Schema.merge(page2Schema).merge(page3Schema).merge(page4Schema);


export type CreatorFormValues = z.infer<typeof creatorFormSchema>;

const TOTAL_PAGES = 4;

const pageSchemas = [page1Schema, page2Schema, page3Schema, page4Schema];

export function CreatorOnboardingForm() {
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const form = useForm<CreatorFormValues>({
    resolver: zodResolver(creatorFormSchema),
    defaultValues: {
      email: "",
      fullName: "",
      mobile: "",
      primaryPlatform: "",
      primaryPlatformHandle: "@",
      primaryFollowers: 0,
      primaryAudienceAge: "",
      primaryAudienceGender: "",
      primaryEngagementRate: 0,
      primaryMaxViews: 0,
      otherPlatforms: [],
      pricing: {},
      portfolio: [
          { title: '', description: '', files: null },
          { title: '', description: '', files: null }
      ],
    },
    mode: "onChange",
  });

  const pageTitles = [
    "Personal & Primary Platform",
    "Other Platforms",
    "Specialty & Pricing",
    "Portfolio Uploads"
  ];
  
  const pageDescriptions = [
    "Tell us about yourself and your main social media account.",
    "Add your other social media accounts to build a complete profile.",
    "Define your expertise and set your collaboration rates.",
    "Showcase your best work to attract brands."
  ];

  const handleNext = async () => {
    const currentSchema = pageSchemas[currentPage - 1];
    const fieldsToValidate = Object.keys(currentSchema.shape);
    const isValid = await form.trigger(fieldsToValidate as any);

    if (isValid) {
      setCurrentPage((prev) => Math.min(prev + 1, TOTAL_PAGES));
    }
  };

  const handleBack = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  function onSubmit(data: CreatorFormValues) {
    console.log(data);
    toast({
      title: "Welcome aboard!",
      description: "Your creator profile has been created.",
    });
    form.reset();
  }

  const progress = (currentPage / TOTAL_PAGES) * 100;

  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-headline text-2xl">{pageTitles[currentPage - 1]}</DialogTitle>
        <DialogDescription>{pageDescriptions[currentPage - 1]}</DialogDescription>
      </DialogHeader>
      
      <Progress value={progress} className="my-4" />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="max-h-[60vh] overflow-y-auto p-1">
                {currentPage === 1 && <CreatorFormPage1 />}
                {currentPage === 2 && <CreatorFormPage2 />}
                {currentPage === 3 && <CreatorFormPage3 />}
                {currentPage === 4 && <CreatorFormPage4 />}
            </div>

          <DialogFooter className="!justify-between flex-row">
            <div>
            {currentPage > 1 && (
              <Button type="button" variant="outline" onClick={handleBack}>
                Back
              </Button>
            )}
            </div>

            <div>
            {currentPage < TOTAL_PAGES && (
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            )}
            {currentPage === TOTAL_PAGES && (
              <Button type="submit">
                Create Profile
              </Button>
            )}
            </div>
          </DialogFooter>
        </form>
      </FormProvider>
    </>
  );
}
