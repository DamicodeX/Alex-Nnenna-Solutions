import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import EventCard from "@/components/features/EventCard";
import { eventItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming company events, training sessions, and all-hands gatherings.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
          <Badge variant="secondary" className="mb-4">
            Events Calendar
          </Badge>
          <h1 className="font-(family-name:--font-heading) text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Upcoming people and culture events
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Track key trainings, social activities, and company-wide sessions from one calendar.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {eventItems.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
}
