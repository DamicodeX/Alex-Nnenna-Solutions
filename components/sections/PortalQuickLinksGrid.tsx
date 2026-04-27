import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { quickLinks } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const PortalQuickLinksGrid = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
            <div className="mb-8">
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                    <h1 className="text-2xl font-bold text-foreground">Quick Links</h1>
                    <div className="mt-3 h-1 w-14 bg-primary/80" aria-hidden />
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {quickLinks.map((item) => (
                    <Link
                        key={item.title}
                        href="#"
                        className="group block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    >
                        <Card className="h-full rounded-3xl border-border bg-card/85 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 group-active:translate-y-0 group-active:shadow-2xl group-active:shadow-primary/30">
                            <CardHeader>
                                <Badge variant="ghost" className="mb-2 text-[0.58rem]">
                                    {item.tag}
                                </Badge>
                                <CardTitle className="text-base leading-snug">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                                <p className="mt-5 inline-flex items-center gap-1 text-[0.65rem] font-semibold uppercase tracking-widest text-primary">
                                    Open
                                    <ArrowUpRight className="size-3" />
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default PortalQuickLinksGrid;
