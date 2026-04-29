"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { trustContent } from "@/lib/data";

const AffilatedInstitutions = () => {
  return (
    <section className="border-b border-border bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="max-w-xl space-y-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Affiliated Institutions
            </p>
            <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              {trustContent.heading}
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {trustContent.institutions.map((institution) => (
              <motion.div
                key={institution.name}
                className="flex items-center gap-4 rounded-2xl border border-border/70 bg-background px-4 py-3 shadow-sm"
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                whileHover={{ y: -3, scale: 1.01 }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted overflow-hidden">
                  <Image
                    src={institution.logo}
                    alt={institution.alt}
                    width={56}
                    height={56}
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {institution.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{institution.subtext}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AffilatedInstitutions;