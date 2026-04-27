import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import DirectoryPanel from "@/components/features/DirectoryPanel";

export const metadata: Metadata = {
  title: "Directory",
  description:
    "Search the employee directory with department filters and contact metadata.",
};

export default function DirectoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
          <Badge variant="secondary" className="mb-4">
            Employee Directory
          </Badge>
          <h1 className="font-(family-name:--font-heading) text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Find people across every team
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Search by name, role, or location and filter by department to reach
            teammates faster.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
        <DirectoryPanel />
      </section>
    </main>
  );
}
