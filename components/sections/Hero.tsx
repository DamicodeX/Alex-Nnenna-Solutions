"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { heroContent, siteConfig } from "@/lib/data";

function TypewriterText({ strings }: { strings: string[] }) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (strings.length === 0) {
            return;
        }

        const currentText = strings[currentIndex];
        let timeoutId: number;

        if (!isDeleting && displayedText === currentText) {
            timeoutId = window.setTimeout(() => {
                setIsDeleting(true);
            }, 1200);
        } else if (isDeleting && displayedText === "") {
            timeoutId = window.setTimeout(() => {
                setIsDeleting(false);
                setCurrentIndex((previousIndex) => (previousIndex + 1) % strings.length);
            }, 250);
        } else {
            timeoutId = window.setTimeout(() => {
                setDisplayedText((previousText) =>
                    isDeleting
                        ? currentText.slice(0, Math.max(0, previousText.length - 1))
                        : currentText.slice(0, previousText.length + 1),
                );
            }, isDeleting ? 50 : 90);
        }

        return () => window.clearTimeout(timeoutId);
    }, [currentIndex, displayedText, isDeleting, strings]);

    return (
        <span className="inline-flex items-center gap-1">
            <span>{displayedText}</span>
            <span className="inline-block h-8 w-0.5 translate-y-0.5 bg-primary animate-pulse sm:h-10" aria-hidden="true" />
        </span>
    );
}

const Hero = () => {
    return (
        <section className="relative overflow-hidden border-b border-border">
            <motion.div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,var(--primary)/0.22,transparent_45%)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
            />
            <motion.div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_84%_0%,var(--ring)/0.2,transparent_35%)]"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            />

            <motion.div
                className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-18 text-center sm:px-6 lg:px-8 md:py-24"
                initial="hidden"
                animate="show"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.7,
                            ease: "easeOut",
                            staggerChildren: 0.12,
                        },
                    },
                }}
            >
                <motion.p
                    className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground sm:text-sm"
                    variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                >
                    {siteConfig.name}
                </motion.p>

                <motion.h1
                    className="mt-4 max-w-4xl font-(family-name:--font-heading) text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
                    variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                >
                    {heroContent.headlinePrefix}
                    <span className="mt-2 block text-primary">
                        <TypewriterText strings={heroContent.typewriterStrings} />
                    </span>
                </motion.h1>

                <motion.p
                    className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg"
                    variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                >
                    {heroContent.subheadline}
                </motion.p>

                <motion.div
                    className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center"
                    variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                >
                    <Button asChild size="lg">
                        <Link href="/contact">
                            {heroContent.primaryCTA}
                            <ArrowRight data-icon="inline-end" className="size-4" />
                        </Link>
                    </Button>
                    {/* <Button asChild variant="outline" size="lg">
                        <Link href="/about">Learn More</Link>
                    </Button> */}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;