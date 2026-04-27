import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { ArrowRight } from "lucide-react";

const PortalWelcomeBanner = () => {
    return (
        <section className="relative overflow-hidden border-b border-border">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,var(--primary)/0.22,transparent_45%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_0%,var(--ring)/0.2,transparent_35%)]" />

            <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-18 text-center sm:px-6 lg:px-8 md:py-24">
                <h1 className="max-w-4xl font-(family-name:--font-heading) text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                    Welcome to the {siteConfig.shortName}
                </h1>
                <p className="mt-4 max-w-3xl font-(family-name:--font-heading) text-xl leading-snug text-foreground sm:text-2xl">
                    Your hub for people, policy, and workplace resources.
                </p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    The HR Portal provides quick access to benefits, policies, learning
                    programs, and support, Explore the sections below to find the
                    resources you need.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center">
                    <Button asChild size="lg">
                        <Link href="/onboarding">
                            Continue Onboarding
                            <ArrowRight data-icon="inline-end" className="size-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/policies-benefits">Review Policies</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PortalWelcomeBanner;
