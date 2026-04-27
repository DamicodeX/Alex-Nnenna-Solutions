import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { EventItem } from "@/lib/data";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

type EventCardProps = {
  event: EventItem;
};

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="h-full border-border bg-card/90">
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <Badge variant="ghost">{event.category}</Badge>
          <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">
            {event.host}
          </p>
        </div>
        <CardTitle className="text-base">{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p className="flex items-center gap-2">
          <CalendarDays className="size-4" />
          {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="flex items-center gap-2">
          <Clock3 className="size-4" />
          {event.time}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="size-4" />
          {event.location}
        </p>
      </CardContent>
    </Card>
  );
};

export default EventCard;
