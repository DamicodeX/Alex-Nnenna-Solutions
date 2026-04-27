import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { spotlightCards } from "@/lib/data";

const PortalSpotlightSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 md:py-8">
      <div className="mb-8">
        <Badge variant="secondary">Spotlight</Badge>
        <h2 className="mt-2 font-(family-name:--font-heading) text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Priority initiatives from HR and leadership
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {spotlightCards.map((card) => (
          <Card key={card.title} className="h-full border-border bg-card/90">
            <CardHeader>
              <div className="mb-3 flex items-center justify-between gap-2">
                <Badge variant="ghost">{card.status}</Badge>
                <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                  {card.owner}
                </p>
              </div>
              <CardTitle className="text-base leading-snug">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{card.summary}</p>
              <Link
                href={card.href}
                className="mt-4 inline-block text-[0.65rem] font-semibold uppercase tracking-widest text-primary"
              >
                View details
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PortalSpotlightSection;
