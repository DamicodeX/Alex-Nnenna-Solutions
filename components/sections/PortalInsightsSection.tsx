"use client";

import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { metricSnapshots, nextTownHall } from "@/lib/data";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
};

const getRemaining = (target: string): Remaining => {
  const now = Date.now();
  const delta = Math.max(new Date(target).getTime() - now, 0);

  return {
    days: Math.floor(delta / (1000 * 60 * 60 * 24)),
    hours: Math.floor((delta / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((delta / (1000 * 60)) % 60),
  };
};

const PortalInsightsSection = () => {
  const [remaining, setRemaining] = useState<Remaining>(() =>
    getRemaining(nextTownHall.startsAt)
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining(getRemaining(nextTownHall.startsAt));
    }, 60000);

    return () => window.clearInterval(timer);
  }, []);

  const countdownText = useMemo(
    () => `${remaining.days}d ${remaining.hours}h ${remaining.minutes}m`,
    [remaining.days, remaining.hours, remaining.minutes]
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
      <div className="mb-8">
        <Badge variant="secondary">Insights</Badge>
        <h2 className="mt-2 font-(family-name:--font-heading) text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Countdown and team snapshots
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        <Card className="border-border bg-card/90 lg:col-span-1">
          <CardHeader>
            <Badge variant="ghost">Countdown</Badge>
            <CardTitle className="text-base">{nextTownHall.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="font-(family-name:--font-heading) text-3xl font-semibold tracking-tight text-primary">
              {countdownText}
            </p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {nextTownHall.location}
            </p>
          </CardContent>
        </Card>

        {metricSnapshots.map((metric) => {
          const peak = Math.max(...metric.chartValues);

          return (
            <Card key={metric.label} className="border-border bg-card/90 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-sm">{metric.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-(family-name:--font-heading) text-2xl font-semibold text-foreground">
                  {metric.value}
                </p>
                <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
                  {metric.trend}
                </p>
                <div className="flex h-14 items-end gap-1" aria-hidden>
                  {metric.chartValues.map((value, index) => (
                    <span
                      key={`${metric.label}-${index}`}
                      className="w-full bg-primary/65"
                      style={{ height: `${Math.max((value / peak) * 100, 10)}%` }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default PortalInsightsSection;
