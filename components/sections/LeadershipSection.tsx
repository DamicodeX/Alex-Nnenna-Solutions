"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { aboutContent2 } from "@/lib/data";

const LeadershipSection = () => {
  const owners = [
    {
      name: aboutContent2.founder.name,
      title: aboutContent2.founder.title,
      image: aboutContent2.founder.image,
      label: "Founder",
      summary: aboutContent2.founder.bio,
    },
    {
      name: aboutContent2.coLeader.name,
      title: aboutContent2.coLeader.title,
      image: aboutContent2.coLeader.image,
      label: "Co-Leader",
      summary:  
        "As the wife of Dr. Alexander Attah and a strategic partner in the organization's growth journey, she brings strong values-driven influence to leadership conversations and supports the long-term mission of institutional impact.",
    },
  ];

  return (
    <section className="border-b border-border bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl space-y-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Owners of the Company
          </p>
          <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            The people leading Alexnnena Solutions
          </h2>
          <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Alexnnena Solutions is a partnership between Dr. Alexander Attah and Mrs. Nnnena Attah.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {owners.map((owner, index) => (
            <motion.article
              key={owner.name}
              className="overflow-hidden rounded-3xl border border-border/70 bg-background shadow-sm"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={owner.image}
                  alt={owner.name}
                  fill
                  className="object-cover object-top transition duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              </div>

              <div className="space-y-3 p-6">
                <div className="inline-flex rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                  {owner.label}
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {owner.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{owner.title}</p>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">
                  {owner.summary}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;