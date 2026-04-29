import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  details: string[];
  index: number;
}

const ServiceCard = ({
  title,
  description,
  icon,
  tags,
  details,
  index,
}: ServiceCardProps) => {
  return (
    <Card className="group/service h-full rounded-2xl border border-border bg-card shadow-sm hover:-translate-y-1.5 hover:bg-muted/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
      <CardHeader>
        <div className="flex items-center justify-between mb-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg border border-border bg-background text-primary transition-all duration-300 group-hover/service:bg-primary group-hover/service:text-primary-foreground group-hover/service:border-primary [&_svg]:transition-transform [&_svg]:duration-300 group-hover/service:[&_svg]:scale-105">
            {icon}
          </div>
          <Badge variant="ghost" className="text-[0.6rem] tabular-nums">
            0{index + 1}
          </Badge>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[0.55rem]">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Details list */}
        <ul className="space-y-3">
          {details.map((detail, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="block w-1 h-1 mt-2 bg-primary shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
