import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { Users, ShieldCheck, Building2, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Users,
  ShieldCheck,
  Building2,
};

const CorePillarsSection = () => {
  return (
    <section id="core-pillars" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Expertise
          </Badge>
          <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Three Pillars of Strategic Impact
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Grounded in rigorous academic research and refined through years of
            institutional practice, our consulting services deliver measurable
            transformation.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.title}
                className="group/service h-full rounded-2xl border border-border bg-card shadow-sm hover:-translate-y-1.5 hover:bg-muted/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-border bg-background text-primary transition-all duration-300 group-hover/service:bg-primary group-hover/service:text-primary-foreground group-hover/service:border-primary">
                      {IconComponent && <IconComponent className="size-5 transition-transform duration-300 group-hover/service:scale-105" />}
                    </div>
                    <Badge variant="ghost" className="text-[0.6rem]">
                      0{index + 1}
                    </Badge>
                  </div>
                  <CardTitle className="text-base">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[0.55rem]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="link"
                    className="px-0 text-xs group-hover/service:translate-x-1 transition-transform"
                  >
                    <Link href="/services">
                      Learn More
                      <ArrowRight
                        data-icon="inline-end"
                        className="size-3"
                      />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CorePillarsSection;
