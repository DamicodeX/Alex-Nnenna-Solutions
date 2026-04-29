"use client";

import { Landmark, Laptop, ShieldCheck, Users } from "lucide-react";
import { motion } from "motion/react";
import { corePillars } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const iconMap = {
  Users,
  ShieldCheck,
  Landmark,
  Laptop,
} as const;

const CorePillars = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl space-y-2"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Core Pillars
          </p>
          <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Strategic capabilities that shape the work we deliver
          </h2>
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {corePillars.map((pillar) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <Card className="h-full border-border/70 bg-card/80 shadow-sm">
                <CardHeader className="space-y-4 border-b border-border/60 pb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle>{pillar.title}</CardTitle>
                    <CardDescription>{pillar.description}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="pt-6">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 inline-flex rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                    {pillar.cta}
                  </div>
                </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;