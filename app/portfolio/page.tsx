import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import LegacyPortalNotice from "@/components/sections/LegacyPortalNotice";
import PublicationAccordion from "@/components/sections/PublicationAccordion";
import { publications, speakingEngagements, portfolioContent } from "@/lib/data";
import { BookOpen, Mic, Award, MapPin } from "lucide-react";
 
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Academic publications, speaking engagements, and leadership roles of Dr. Alexander Attah.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Badge variant="secondary" className="mb-4">Academic &amp; Business</Badge>
          <h1 className="font-(family-name:--font-heading) text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Research Portfolio
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A curated collection of peer-reviewed publications, speaking engagements, and institutional leadership roles.
          </p>
        </div>
      </section>

      <LegacyPortalNotice
        message="This legacy research portfolio is preserved for reference. The main employee journey now starts in the People Portal home."
        href="/"
        cta="Return to Portal Home"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="size-4 text-primary" />
                  <h2 className="text-xs tracking-widest uppercase font-semibold text-muted-foreground">Publications</h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Peer-reviewed research in governance, conflict resolution, and human capacity development.
                </p>
                <div className="space-y-1">
                  <p className="text-2xl font-bold font-(family-name:--font-heading) text-foreground">{publications.length}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Published Papers</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <PublicationAccordion publications={publications} />
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Mic className="size-4 text-primary" />
              <Badge variant="secondary">Speaking</Badge>
            </div>
            <h2 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-foreground">
              Conference Presentations
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {speakingEngagements.map((engagement, index) => (
              <Card key={index} className="hover:bg-muted/20 transition-colors duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-[0.55rem]">{engagement.year}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      {engagement.location}
                    </div>
                  </div>
                  <CardTitle className="text-sm">{engagement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{engagement.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="size-4 text-primary" />
                <h2 className="text-xs tracking-widest uppercase font-semibold text-muted-foreground">Academic Leadership</h2>
              </div>
              <ul className="space-y-4">
                {portfolioContent.academicLeadership.map((role, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="block w-1.5 h-1.5 mt-1.5 bg-primary shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs tracking-widest uppercase font-semibold text-muted-foreground mb-6">Research Focus Areas</h2>
              <div className="space-y-6">
                {portfolioContent.researchPillars.map((pillar, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="font-semibold text-sm text-foreground">{pillar.area}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
