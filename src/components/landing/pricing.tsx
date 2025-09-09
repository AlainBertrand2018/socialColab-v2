
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    name: "Free",
    price: "Free",
    features: [
      "Limited access to tool kits",
      "Limited collaboration opportunities",
      "Basic Profile",
      "Standard Support",
    ],
    buttonText: "Get Started",
    variant: "outline",
  },
  {
    name: "Standard",
    price: "Rs 2500",
    priceCreators: "Rs 1500",
    priceDescription: "per month for brands",
    priceCreatorsDescription: "per month for creators",
    features: [
      "Access to all tool kits (Rs 400 per use)",
      "Full collaboration opportunities",
      "Enhanced Profile",
      "Priority Support",
    ],
    buttonText: "Choose Standard",
    variant: "default",
    popular: true,
  },
  {
    name: "Pro",
    price: "Rs 24,000",
    priceCreators: "Rs 15,000",
    priceDescription: "per year for brands",
    priceCreatorsDescription: "per year for creators",
    features: [
      "Unlimited AI Toolkits",
      "Bespoke collaboration opportunities",
      "Featured Profile",
      "Dedicated Support",
    ],
    buttonText: "Go Pro",
    variant: "outline",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-secondary">
      <div className="container text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">
          Choose Your Plan
        </h2>
        <p className="md:w-3/4 mx-auto mt-4 text-lg text-muted-foreground font-headline font-light">
          Simple, transparent pricing. No hidden fees. Ever.
        </p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier) => (
          <Card key={tier.name} className={cn("flex flex-col", tier.popular && "border-primary shadow-lg")}>
            {tier.popular && (
              <div className="bg-primary text-primary-foreground text-center py-1 font-semibold text-sm rounded-t-lg">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
              <CardDescription>
                {tier.name === "Free" ? "Limited access" : "For growing businesses & creators"}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-6">
              <div>
                {tier.name === 'Standard' || tier.name === 'Pro' ? (
                    <>
                        <div className="mb-4">
                            <p className="text-3xl font-bold">{tier.price}</p>
                            <p className="text-sm text-muted-foreground">{tier.priceDescription}</p>
                        </div>
                        <div className="mb-4">
                             <p className="text-3xl font-bold">{tier.priceCreators}</p>
                             <p className="text-sm text-muted-foreground">{tier.priceCreatorsDescription}</p>
                        </div>
                    </>
                ) : (
                     <p className="text-4xl font-bold">{tier.price}</p>
                )}
              </div>
              <ul className="space-y-3 text-left">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={tier.variant as any}>
                <Link href="/onboarding">{tier.buttonText}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
