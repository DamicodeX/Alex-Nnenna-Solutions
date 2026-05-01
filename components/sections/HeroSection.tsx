import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroContent, trustBar } from "@/lib/data";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--primary)/0.04,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,var(--primary)/0.03,transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid gap-12 md:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8 text-center mx-auto">

            <h1 className="font-(family-name:--font-heading) text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
              {heroContent.headline}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              {heroContent.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="group cursor-pointer bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-100 ease-out motion-safe:animate-[pulse_3s_ease-in-out_infinite] hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 hover:brightness-110"
              >
                <Link href="/contact">
                  {heroContent.primaryCTA}
                  <ArrowRight
                    data-icon="inline-end"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              </Button>
              {/* <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">{heroContent.secondaryCTA}</Link>
              </Button> */}
            </div>
          </div>

          {/* Right: Image */}
          {/* <div className="relative flex justify-center md:justify-end">
            <div className="relative"> */}
              {/* Decorative frame */}
              {/* <div className="absolute -inset-3 border border-primary/20" />
              <div className="absolute -inset-6 border border-primary/10" />
              <Image
                src="/alex image.jpg"
                alt="Dr. Alexander Attah — Governance and Human Capacity Consultant"
                width={460}
                height={540}
                className="relative object-cover w-full max-w-[460px] aspect-[4/5] grayscale-[20%]"
                priority
              />
            </div>
          </div> */}
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6 font-semibold">
            {trustBar.heading}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {trustBar.institutions.map((inst) => (
              <div
                key={inst.abbreviation}
                className="flex items-start gap-4 group"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-border bg-background text-sm font-bold font-(family-name:--font-heading) text-primary">
                  {inst.abbreviation}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {inst.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {inst.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
