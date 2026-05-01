import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { highlightedResources } from "@/lib/data";

const PortalHighlightsSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 md:pb-16">
      <div className="mb-8">
        <Badge variant="secondary">Highlighted Content</Badge>
        <h2 className="mt-2 font-(family-name:--font-heading) text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Featured guides and resources
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {highlightedResources.map((resource) => (
          <Card
            key={resource.title}
            className="group h-full border-border bg-[linear-gradient(140deg,var(--card),color-mix(in_oklch,var(--card),var(--primary)_6%))]"
          >
            <CardHeader>
              <Badge variant="ghost">{resource.type}</Badge>
              <CardTitle className="text-base leading-snug">{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{resource.description}</p>
              <Link
                href={resource.href}
                className="mt-4 inline-block text-[0.65rem] font-semibold uppercase tracking-widest text-primary transition group-hover:translate-x-0.5"
              >
                Explore resource
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PortalHighlightsSection;
