import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { aboutContent2 } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Alexnnenna Solutions LTD",
  description: "Company profile, mission, vision, and founder details.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      {/* <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <Badge variant="secondary" className="mb-4">
            About Us
          </Badge>
          <h1 className="font-(family-name:--font-heading) text-3xl sm:text-4xl font-bold tracking-tight text-foreground max-w-4xl mx-auto">
            {aboutContent2.company.tagline}
          </h1>
        </div>
      </section> */}

      {/* <LegacyPortalNotice
        message="Looking for day-to-day HR tasks? The new People Portal is now the primary destination for onboarding, policies, forms, and events."
        href="/"
        cta="Open People Portal"
      /> */}

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-10 text-center">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="group/service h-full rounded-2xl border border-border bg-card shadow-sm hover:-translate-y-1.5 hover:bg-muted/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <p className="text-xs tracking-widest uppercase font-semibold text-muted-foreground">
                    Mission
                  </p>
                  <CardDescription className="text-sm md:text-base leading-relaxed text-foreground">
                    {aboutContent2.company.mission}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="group/service h-full rounded-2xl border border-border bg-card shadow-sm hover:-translate-y-1.5 hover:bg-muted/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <p className="text-xs tracking-widest uppercase font-semibold text-muted-foreground">
                    Vision
                  </p>
                  <CardDescription className="text-sm md:text-base leading-relaxed text-foreground">
                    {aboutContent2.company.vision}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase font-semibold text-muted-foreground mb-5">
                Core Values
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {aboutContent2.company.coreValues.map((value, index) => (
                  <Card
                    key={value.title}
                    className="group/service h-full w-full max-w-sm rounded-2xl border border-border bg-card shadow-sm hover:-translate-y-1.5 hover:bg-muted/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
                  >
                    <CardHeader className="text-center items-center">
                      <div className="flex items-center gap-3 mb-2 justify-center">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-border bg-background text-primary transition-all duration-300 group-hover/service:bg-primary group-hover/service:text-primary-foreground group-hover/service:border-primary">
                          <span className="font-(family-name:--font-heading) text-sm font-bold">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-base uppercase tracking-wider">
                        {value.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 bg-muted/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="secondary" className="mb-4">
              Founder
            </Badge>
            <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Leadership Behind The Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute -inset-3 border border-primary/20" />
                <Image
                  src={aboutContent2.founder.image}
                  alt={`${aboutContent2.founder.name} — ${aboutContent2.founder.title}`}
                  width={400}
                  height={400}
                  quality={100}
                  sizes="(max-width: 768px) 80vw, 360px"
                  className="relative w-full max-w-90 mx-auto object-cover aspect-square"
                />
              </div>
            </div>

            <div className="md:col-span-3 space-y-6">
              <div>
                <h3 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-foreground">
                  {aboutContent2.founder.name}
                </h3>
                <p className="mt-2 text-xs tracking-widest uppercase font-semibold text-primary">
                  {aboutContent2.founder.title}
                </p>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground">
                {aboutContent2.founder.bio}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {aboutContent2.founder.academicPedigree}
              </p>

              <p className="font-(family-name:--font-heading) text-lg italic text-foreground">
                {aboutContent2.founder.signature}
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-border/70 pt-14">
            <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
              <div className="md:col-span-3 space-y-6 order-2 md:order-1">
                <div>
                  <h3 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-foreground">
                    {aboutContent2.coLeader.name}
                  </h3>
                  <p className="mt-2 text-xs tracking-widest uppercase font-semibold text-primary">
                    {aboutContent2.coLeader.title}
                  </p>
                </div>

                <p className="text-base leading-relaxed text-muted-foreground">
                  {aboutContent2.coLeader.bio}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {aboutContent2.coLeader.profile}
                </p>

                <p className="font-(family-name:--font-heading) text-lg italic text-foreground">
                  {aboutContent2.coLeader.signature}
                </p>
              </div>

              <div className="md:col-span-2 order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-3 border border-primary/20" />
                  <Image
                    src={aboutContent2.coLeader.image}
                    alt={`${aboutContent2.coLeader.name} — ${aboutContent2.coLeader.title}`}
                    width={400}
                    height={400}
                    quality={100}
                    sizes="(max-width: 768px) 80vw, 360px"
                    className="relative w-full max-w-90 mx-auto object-cover aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
