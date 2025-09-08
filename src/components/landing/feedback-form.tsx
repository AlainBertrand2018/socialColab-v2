"use client";

import * as React from "react";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function FeedbackForm() {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Feedback submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input id="name" placeholder="Your Name" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="email" className="text-right">
          Email
        </Label>
        <Input id="email" type="email" placeholder="your@email.com" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="feedback" className="text-right">
          Feedback
        </Label>
        <Textarea id="feedback" placeholder="Your feedback..." className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right">Rating</Label>
        <div className="col-span-3 flex">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <button
                type="button"
                key={starValue}
                className="bg-transparent border-none cursor-pointer p-0"
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(rating)}
              >
                <Star
                  className={cn(
                    "w-6 h-6",
                    starValue <= (hover || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}