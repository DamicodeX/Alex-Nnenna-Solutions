"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

interface Publication {
  title: string;
  journal: string;
  year: string;
  type: "peer-reviewed" | "conference" | "chapter";
  abstract: string;
}

interface PublicationAccordionProps {
  publications: Publication[];
}

const PublicationAccordion = ({ publications }: PublicationAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {publications.map((pub, index) => (
        <AccordionItem key={index} value={`publication-${index}`}>
          <AccordionTrigger className="text-left">
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="secondary" className="text-[0.55rem]">
                  {pub.year}
                </Badge>
                <Badge variant="ghost" className="text-[0.55rem]">
                  {pub.type}
                </Badge>
              </div>
              <span className="font-(family-name:--font-heading) text-sm font-semibold leading-snug">
                {pub.title}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <div className="space-y-3 pl-0">
              <div className="flex items-center gap-2 text-xs">
                <BookOpen className="size-3 text-primary" />
                <span className="font-medium">{pub.journal}</span>
              </div>
              <p className="text-sm leading-relaxed">{pub.abstract}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PublicationAccordion;
