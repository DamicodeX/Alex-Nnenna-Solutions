import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EventCard from "@/components/features/EventCard";
import { announcements, eventItems, newsItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Combined company news, announcements, and upcoming people and culture events.",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
          <Badge variant="secondary" className="mb-4">
            News & Events
          </Badge>
          <h1 className="font-(family-name:--font-heading) text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Workplace news, announcements, and events
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            One destination for updates from the home page announcements section, newsroom stories,
            and upcoming events.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
        <h2 className="mb-4 font-(family-name:--font-heading) text-2xl font-semibold text-foreground">
          Newsroom
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
        {newsItems.map((item) => (
          <Card key={item.id} className="border-border bg-card/90 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <Badge variant={item.featured ? "default" : "ghost"}>{item.tag}</Badge>
                <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                  {new Date(item.publishedAt).toLocaleDateString()}
                </p>
              </div>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.summary}</p>
            </CardContent>
          </Card>
        ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 md:pb-20">
        <h2 className="mb-4 font-(family-name:--font-heading) text-2xl font-semibold text-foreground">
          News and Announcements (Home Feed)
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {announcements.map((announcement) => (
            <Card key={announcement.title} className="overflow-hidden border-border bg-card/90">
              <div className="relative h-40 w-full">
                <Image
                  src={announcement.image}
                  alt={announcement.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <Badge variant={announcement.priority === "high" ? "default" : "secondary"}>
                    {announcement.category}
                  </Badge>
                  <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                    {new Date(announcement.date).toLocaleDateString()}
                  </p>
                </div>
                <CardTitle className="text-base">{announcement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{announcement.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 md:pb-20">
        <h2 className="mb-4 font-(family-name:--font-heading) text-2xl font-semibold text-foreground">
          Upcoming Events
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {eventItems.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
}
