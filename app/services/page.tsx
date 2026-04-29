import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import LegacyPortalNotice from "@/components/sections/LegacyPortalNotice";
import ServiceCard from "@/components/sections/ServiceCard";
import { services } from "@/lib/data";
import {
  Users,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Human Capacity Development, Conflict Resolution, and Institutional Governance consulting services by Dr. Alexander Attah.",
};

const iconMap: Record<string, React.ElementType> = {
  Users,
  ShieldCheck,
  Building2,
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Badge variant="secondary" className="mb-4">
            The Solutions
          </Badge>
          <h1 className="font-(family-name:--font-heading) text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Consulting Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Research-driven consulting designed to strengthen governance, resolve
            conflict, and build institutional capacity. Each service draws on a
            decade of academic scholarship and practical expertise.
          </p>
        </div>
      </section>

      {/* <LegacyPortalNotice
        message="This page remains available for historical context. For active employee workflows, use the HR portal forms, policies, and onboarding sections."
        href="/forms"
        cta="Go to Self-Service Forms"
      /> */}

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={
                    IconComponent ? (
                      <IconComponent className="size-5" />
                    ) : null
                  }
                  tags={service.tags}
                  details={service.details}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Approach
            </Badge>
            <h2 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-foreground">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-0 border border-border">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We conduct a thorough assessment of your institution's challenges, goals, and existing frameworks.",
              },
              {
                step: "02",
                title: "Research",
                description:
                  "Our team applies rigorous academic research methodologies to analyse findings and benchmark solutions.",
              },
              {
                step: "03",
                title: "Strategy",
                description:
                  "We develop tailored, evidence-based strategies with clear implementation roadmaps and KPIs.",
              },
              {
                step: "04",
                title: "Implementation",
                description:
                  "We partner with your team through execution, providing training, mediation, and ongoing advisory support.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className={`p-8 ${
                  index < 3 ? "md:border-r md:border-border" : ""
                } ${index > 0 ? "border-t md:border-t-0 border-border" : ""}`}
              >
                <span className="font-(family-name:--font-heading) text-3xl font-bold text-primary/30">
                  {item.step}
                </span>
                <h3 className="mt-4 font-semibold text-sm uppercase tracking-wider text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your Engagement
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
