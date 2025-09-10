
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Locale } from "@/i18n.config";

export function Pricing({ content, lang }: { content: any, lang: Locale }) {
  const pricingTiers = content.tiers.map((tier: any) => ({
    name: tier.name,
    price: tier.price,
    priceCreators: tier.priceCreators,
    priceDescription: tier.priceDescription,
    priceCreatorsDescription: tier.priceCreatorsDescription,
    features: tier.features,
    buttonText: tier.buttonText,
    variant: tier.name === "Standard" ? "default" : "outline",
    popular: tier.name === "Standard",
  }));

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-secondary">
      <div className="container text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">
          {content.title}
        </h2>
        <p className="md:w-3/4 mx-auto mt-4 text-lg text-muted-foreground font-headline font-light">
          {content.subtitle}
        </p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier: any) => (
          <Card key={tier.name} className={cn("flex flex-col", tier.popular && "border-primary shadow-lg")}>
            {tier.popular && (
              <div className="bg-primary text-primary-foreground text-center py-1 font-semibold text-sm rounded-t-lg">
                {tier.popularText || 'Most Popular'}
              </div>
            )}
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
              <CardDescription>
                {tier.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-6">
              <div>
                {tier.name === 'Standard' || tier.name === 'Pro' ? (
                    <>
                        <div className="mb-4">
                            <p className="text-3xl font-bold font-headline">{tier.price}</p>
                            <p className="text-sm text-muted-foreground">{tier.priceDescription}</p>
                        </div>
                        <div className="mb-4">
                             <p className="text-3xl font-bold font-headline">{tier.priceCreators}</p>
                             <p className="text-sm text-muted-foreground">{tier.priceCreatorsDescription}</p>
                        </div>
                    </>
                ) : (
                     <p className="text-4xl font-bold font-headline">{tier.price}</p>
                )}
              </div>
              <ul className="space-y-3 text-left">
                {tier.features.map((feature: string) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span className="text-muted-foreground font-headline font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={tier.variant as any}>
                <Link href={`/${lang}/onboarding`}>{tier.buttonText}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
