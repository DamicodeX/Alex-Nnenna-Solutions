import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { announcements } from "@/lib/data";
import { ArrowRight } from "lucide-react";

const PortalAnnouncementsSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
      <div className="mx-auto mb-7 flex max-w-3xl flex-col items-center text-center">
        <h1 className="text-2xl font-bold text-foreground">News and Announcements</h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Keep up with policy updates, culture stories, and learning opportunities.
        </p>
        <div className="mt-3 h-1 w-20 bg-primary/80" aria-hidden />
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {announcements.map((item) => (
          <Card
            key={item.title}
            className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border-border bg-card/95 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:-translate-y-2"
          >
            <div className="relative">
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              <Badge
                variant={item.priority === "high" ? "default" : "secondary"}
                className="absolute left-3 top-3 rounded-full border border-white/20 px-3 py-1 text-[0.65rem] uppercase tracking-wider"
              >
                {item.priority === "high" ? "High Priority" : "Normal Priority"}
              </Badge>
              <Badge className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                {item.category}
              </Badge>
            </div>

            <CardHeader className="pb-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
              <CardTitle className="text-base leading-snug">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="mt-auto pt-0">
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <Link
                href="/news"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary transition-transform duration-200 hover:bg-primary/20 active:-translate-y-0.5"
              >
                View News & Events
                {/* <span aria-hidden>-></span> */}
                <ArrowRight className="h-5 w-5"/>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PortalAnnouncementsSection;
