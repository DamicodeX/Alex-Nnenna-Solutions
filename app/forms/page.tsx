import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import FormCard from "@/components/features/FormCard";
import { portalForms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Forms",
  description:
    "Employee self-service forms for leave, expense, performance, and HR profile updates.",
};

export default function FormsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
          <Badge variant="secondary" className="mb-4">
            Self-Service Forms
          </Badge>
          <h1 className="font-(family-name:--font-heading) text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Submit requests without waiting in queue
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Access common forms and see expected turnaround times before you submit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {portalForms.map((form) => (
            <FormCard key={form.id} form={form} />
          ))}
        </div>
      </section>
    </main>
  );
}
