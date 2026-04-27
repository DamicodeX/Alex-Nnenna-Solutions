import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";
import {
  complianceTrainingLinks,
  onboardingFaqs,
  onboardingChecklist,
  onboardingDocuments,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "New Employee Hub - Onboarding Resources & Checklist",
  description:
    "New employee hub with first-week checklist, onboarding documents, and compliance training links.",
};

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
          <Badge variant="secondary" className="mb-4">
            New Employee Hub
          </Badge>
          <h1 className="font-(family-name:--font-heading) text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Start strong in your first week
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We are thrilled to have you onboard. This page collects all the resources you need for
            your first weeks, including IT setup, HR orientation, and required training.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
        <div className="mb-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-foreground">Onboarding Essentials</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Complete your first-week actions, review required documents, and finish required learning.
            </p>
            <div className="mt-3 h-1 w-14 bg-primary/80" aria-hidden />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="h-full rounded-3xl border-border bg-card/85 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <Badge variant="ghost" className="mb-2 text-[0.58rem]">
                First Week Checklist
              </Badge>
              <CardTitle className="text-base leading-snug">Your day-by-day startup plan</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {onboardingChecklist.map((item) => (
                  <li key={item.id} className="rounded-2xl border border-border/80 bg-background/70 p-3">
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="mt-1 text-xs">
                      Due {item.due} • Owner: {item.owner} • Status: {item.status}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full rounded-3xl border-border bg-card/85 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <Badge variant="ghost" className="mb-2 text-[0.58rem]">
                Onboarding Documents
              </Badge>
              <CardTitle className="text-base leading-snug">Read and save these resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {onboardingDocuments.map((document) => (
                  <li key={document.title}>
                    <Link
                      href={document.href}
                      className="group flex items-center justify-between rounded-2xl border border-border/80 bg-background/70 p-3 transition-colors hover:border-primary/40"
                    >
                      <span>
                        <span className="block font-medium text-foreground">{document.title}</span>
                        <span className="text-xs text-muted-foreground">
                          {document.audience} • {document.fileType}
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full rounded-3xl border-border bg-card/85 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <Badge variant="ghost" className="mb-2 text-[0.58rem]">
                Mandatory Compliance Training
              </Badge>
              <CardTitle className="text-base leading-snug">Complete all required modules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {complianceTrainingLinks.map((training) => (
                  <li key={training.title}>
                    <Link
                      href={training.href}
                      className="group flex items-center justify-between rounded-2xl border border-border/80 bg-background/70 p-3 transition-colors hover:border-primary/40"
                    >
                      <span>
                        <span className="block font-medium text-foreground">{training.title}</span>
                        <span className="text-xs text-muted-foreground">Estimated time: {training.duration}</span>
                      </span>
                      <ArrowUpRight className="size-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-border bg-card/85 md:col-span-2">
            <CardHeader>
              <Badge variant="ghost" className="mb-2 text-[0.58rem]">
                New Hire FAQs
              </Badge>
              <CardTitle className="text-base leading-snug">Answers to common onboarding questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {onboardingFaqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

    </main>
  );
}
