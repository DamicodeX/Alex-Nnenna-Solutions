import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Quote } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-20 md:py-28 border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* <Badge variant="secondary">Work With Us</Badge> */}

          <h2 className="font-(family-name:--font-heading) text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Ready to Transform Your Institution?
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you need strategic governance consulting, conflict
            resolution expertise, or human capacity development we bring a
            decade of research-backed insight to every engagement.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
